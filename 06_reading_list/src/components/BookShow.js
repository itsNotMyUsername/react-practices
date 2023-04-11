import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";
import BookEdit from "./BookEdit";

const BookShow = ({ book }) => {
  const [editMode, setEditMode] = useState(false);
  const { editBook, deleteBook } = useBooksContext();

  const handleOnClickDelete = (e) => {
    e.preventDefault();
    deleteBook(book.id);
  };

  const handleOnClickEdit = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (title) => {
    editBook(book.id, title);
    setEditMode(false);
  };

  let content = <h3>{book.title}</h3>;
  if (editMode) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="random" />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleOnClickEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleOnClickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
