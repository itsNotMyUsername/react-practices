import axios from "axios";

const listBooks = async () => {
  const response = await axios.get(`http://localhost:3001/books`);
  return response.data;
};

const createNewBook = async (title) => {
  const response = await axios.post(`http://localhost:3001/books/`, {
    title: title,
  });
  return response.data;
};

const editBookByID = async (id, title) => {
  const response = await axios.put(`http://localhost:3001/books/${id}`, {
    title,
  });
  return response.data;
};

const deleteBookByID = async (id) => {
  await axios.delete(`http://localhost:3001/books/${id}`);
};

export { createNewBook, listBooks, editBookByID, deleteBookByID };
