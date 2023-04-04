import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log(title);
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 100), title: title },
    ];
    setBooks(updatedBooks);
  };

  // const editBook = () => {};

  // const deleteBook = () => {};

  return (
    <div>
      <BookList books={books} />
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default App;
