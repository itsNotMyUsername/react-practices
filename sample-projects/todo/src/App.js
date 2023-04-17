import { Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import List from "./List";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todosCompleted, setTodosCompleted] = useState([]);
  const [renderedList, setRenderedList] = useState([]);

  const handleOnChange = (e) => {
    setInputText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, inputText]);
    setInputText("");
  };

  const handleCheckoutOnClick = (state, index) => {
    if (state) {
      setTodosCompleted([todos[index], ...todosCompleted]);
      setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
    }
  };

  useEffect(() => {
    setRenderedList([...todos]);
  }, [todos]);

  const handleOnClick = (value) => {
    switch (value) {
      case "all":
        setRenderedList([...todos, ...todosCompleted]);
        break;
      case "active":
        setRenderedList([...todos]);
        break;
      case "completed":
        setRenderedList([...todosCompleted]);
        break;
      default:
        console.log("a");
    }
  };

  return (
    <div className="container">
      <div className="index-box">
        <Stack direction="row" justifyContent="center">
          <Typography variant="h4" gutterBottom>
            Things To Do
          </Typography>
        </Stack>
        <form className="form" onSubmit={handleOnSubmit}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Add new"
            value={inputText}
            className="input"
            onChange={handleOnChange}
          />
          <List
            todos={renderedList}
            handleCheckoutOnClick={handleCheckoutOnClick}
          />
        </form>
      </div>
      <Footer count={todos.length} handleOnClick={handleOnClick} />
    </div>
  );
};

export default App;
