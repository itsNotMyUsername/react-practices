import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log(title);
    const updatedBooks = [
      {
        id: Math.floor(Math.random() * 1000),
        title: title,
      },
      ...books,
    ];
    setBooks(updatedBooks);
  };

  const editBookByID = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookByID = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList
        books={books}
        deleteBookByID={deleteBookByID}
        editBookByID={editBookByID}
      />
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default App;
