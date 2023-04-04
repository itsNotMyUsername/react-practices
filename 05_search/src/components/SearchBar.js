import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ handleSubmit }) {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onSubmit}>
        <label>Enter search term</label>
        <input
          type="text"
          placeholder="Search"
          value={term}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
