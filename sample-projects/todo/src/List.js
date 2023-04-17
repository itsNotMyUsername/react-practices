import Todo from "./Todo";

const List = ({ todos, handleCheckoutOnClick }) => {
  const renderedTodos = todos.map((todo, index) => {
    return (
      <Todo
        key={index + todo}
        todo={todo}
        handleCheckoutOnClick={handleCheckoutOnClick}
        index={index}
      />
    );
  });

  return <div>{renderedTodos}</div>;
};

export default List;
