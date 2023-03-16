import AnimalShow from "./AnimalShow";
import { useState } from "react";
function App() {
  const handleClick = () => {
    setCounter(counter + 1);
  };
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <AnimalShow count={counter} />
    </>
  );
}

export default App;
