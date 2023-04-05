import BookShow from "./BookShow";

const BookList = ({ books, deleteBookByID, editBookByID }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        deleteBookByID={deleteBookByID}
        editBookByID={editBookByID}
      />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
