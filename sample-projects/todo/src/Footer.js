const Footer = ({ count, handleOnClick }) => {
  const renderedText = () => {
    let text = "items";
    if (count === 1) {
      text = "item";
    }
    return count + " " + text + " left";
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ flexGrow: 0.5 }}>{renderedText()}</div>
      <button onClick={() => handleOnClick("all")}>All</button>
      <button onClick={() => handleOnClick("active")}>Active</button>
      <button onClick={() => handleOnClick("completed")}>Completed</button>
    </div>
  );
};

export default Footer;
