import "./Todo.css";

const Todo = ({ todo, handleCheckoutOnClick, index }) => {
  const handleOnChange = (e) => {
    handleCheckoutOnClick(e.target.checked, index);
  };

  return (
    <div className="container">
      <input type="checkbox" onChange={handleOnChange} />
      <span>{todo}</span>
    </div>
  );
};

export default Todo;
