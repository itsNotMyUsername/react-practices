import { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onSubmit(title);
  };

  return (
    <form className="book-edit" onSubmit={handleEditSubmit}>
      <label>Title</label>
      <input className="input" onChange={handleOnChange} value={title} />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
