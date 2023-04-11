import { useCallback, createContext, useState } from "react";
import {
  createNewBook,
  listBooks,
  editBookByID,
  deleteBookByID,
} from "../api/api";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const resp = await listBooks();
    setBooks(resp);
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

  const valueToShare = {
    books,
    setBooks,
    createBook,
    editBook,
    deleteBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
