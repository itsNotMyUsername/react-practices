import Grid from "@mui/material/Unstable_Grid2";
import "./App.css";
import { useEffect, useState } from "react";
import Item from "./Item/Item";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [result, setResult] = useState(0);
  const [tempValue1, setTempValue1] = useState("");
  const [tempValue2, setTempValue2] = useState("");
  const [action, setAction] = useState("");

  const handleEqualsOperation = () => {
    if (tempValue1 && tempValue2) {
      setResult(calculate(action));
      setTempValue1(result.toString());
      setTempValue2("");
      setAction("");
      setDisplayValue(tempValue1);
    }
  };

  const handleOpeartionAction = (e) => {
    setAction(e.target.innerText);
  };

  const handleActionClick = (action) => {
    switch (action) {
      case "AC":
        setResult(0);
        setTempValue1(0);
        setTempValue2(0);
        setAction("");
        break;
      case "+/-":
        // if (tempValue2 !== 0) {
        //   setTempValue2(tempValue2 * -1);
        // } else if (tempValue1 !== 0) {
        //   setTempValue1(tempValue1 * -1);
        // }
        break;
      case "%":
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    evaluateDisplayValue();
  }, [displayValue]);

  const calculate = (action) => {
    switch (action) {
      case "/":
        return Number(tempValue1) / Number(tempValue2);
      case "x":
        return Number(tempValue1) * Number(tempValue2);
      case "-":
        return Number(tempValue1) - Number(tempValue2);
      case "+":
        return Number(tempValue1) + Number(tempValue2);
      default:
        return 0;
    }
  };

  const evaluateDisplayValue = () => {
    if (tempValue1 !== "" && tempValue2 === "") {
      setDisplayValue(tempValue1);
    }
    if (tempValue2 !== "") {
      return setDisplayValue(tempValue2);
    }
    return setDisplayValue(result);
  };

  const handleClick = (e) => {
    if (tempValue1 === "") {
      setTempValue1(e.target.innerText);
    } else if (tempValue1 !== "" && tempValue2 === "" && action === "") {
      setTempValue1(tempValue1 + e.target.innerText);
    } else {
      setTempValue2(tempValue2 + e.target.innerText);
    }
  };

  return (
    <div className="container">
      <Grid container spacing={0} alignItems="center" justify="center">
        <Item value={displayValue} classes="result" size={12} />
        <Item value="AC" classes="grey" size={3} onClick={handleActionClick} />
        <Item value="+/-" classes="grey" size={3} onClick={handleActionClick} />
        <Item value="%" size={3} onClick={handleActionClick} classes="grey" />
        <Item
          value="/"
          size={3}
          onClick={handleOpeartionAction}
          classes="orange"
        />

        <Item value="7" size={3} onClick={handleClick} classes="light-grey" />
        <Item value="8" size={3} onClick={handleClick} classes="light-grey" />
        <Item value="9" size={3} onClick={handleClick} classes="light-grey" />
        <Item
          value="x"
          size={3}
          onClick={handleOpeartionAction}
          classes="orange"
        />

        <Item value="4" size={3} onClick={handleClick} classes="light-grey" />
        <Item value="5" size={3} onClick={handleClick} classes="light-grey" />
        <Item value="6" size={3} onClick={handleClick} classes="light-grey" />
        <Item
          value="+"
          size={3}
          onClick={handleOpeartionAction}
          classes="orange"
        />

        <Item value="1" size={3} onClick={handleClick} classes="light-grey" />
        <Item value="2" size={3} onClick={handleClick} classes="light-grey" />
        <Item value="3" size={3} onClick={handleClick} classes="light-grey" />
        <Item
          value="-"
          size={3}
          onClick={handleOpeartionAction}
          classes="orange"
        />

        <Item value="0" size={6} onClick={handleClick} classes="light-grey" />
        <Item value="." size={3} onClick={handleClick} classes="light-grey" />
        <Item
          value="="
          size={3}
          onClick={handleEqualsOperation}
          classes="orange"
        />
      </Grid>
    </div>
  );
}

export default App;
