import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteBookByID, editBookByID }) => {
  const [editMode, setEditMode] = useState(false);

  const handleOnClickDelete = (e) => {
    e.preventDefault();
    deleteBookByID(book.id);
  };

  const handleOnClickEdit = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (title) => {
    editBookByID(book.id, title);
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
