import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const Translate = () => {
  const languages = [
    {
      label: "French",
      value: "fr",
    },
    {
      label: "Spanish",
      value: "es",
    },
    {
      label: "Russian",
      value: "ru",
    },
  ];

  const [language, setLanguage] = useState(languages[0]);
  //   const [translated, setTranslated] = useState("");
  const [term, setTerm] = useState("hello");
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    if (!debouncedTerm) return;
    console.log("CHANGED");
  }, [debouncedTerm]);

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Enter Text</label>
        <div className="ui input">
          <input
            value={term}
            type="text"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <Dropdown
          options={languages}
          selected={language}
          onSelectedChange={setLanguage}
          label="Select a language"
        />
      </div>
      <div>
        Output:
        {/* {translated} */}
      </div>
    </div>
  );
};

export default Translate;
