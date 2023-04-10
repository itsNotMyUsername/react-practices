import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useEffect, useState } from "react";
import {
  createNewBook,
  listBooks,
  editBookByID,
  deleteBookByID,
} from "./api/api";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await listBooks();
      setBooks(resp);
    };
    fetchData();
  }, []);

  const createBook = async (title) => {
    const book = await createNewBook(title);

    setBooks([...books, book]);
  };

  const editBook = async (id, title) => {
    const updated = await editBookByID(id, title);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...updated };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBook = async (id) => {
    await deleteBookByID(id);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList
        books={books}
        deleteBookByID={deleteBook}
        editBookByID={editBook}
      />
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default App;
