import BookShow from "./BookShow";

const BookList = ({ books }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} />;
  });

  return (
    <div>
      <p>Books List</p>
      {renderedBooks}
    </div>
  );
};

export default BookList;
