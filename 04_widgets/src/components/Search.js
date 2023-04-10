import React, { useEffect, useState } from "react";
import wiki from "../api/wikipedia";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debaouncedTerm, setDebaouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (term) {
        setDebaouncedTerm(term);
      }
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await wiki.get("", {
        params: { srsearch: debaouncedTerm },
      });
      setResults(data.query.search);
    };
    search();
  }, [debaouncedTerm]);

  const mappedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search Term</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{mappedResults}</div>
    </div>
  );
};

export default Search;
