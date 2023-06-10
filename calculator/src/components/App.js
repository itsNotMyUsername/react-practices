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
    }
  };

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

  const handleOpeartionAction = (e) => {
    if (tempValue1) {
      setAction(e.target.innerText);
    }
  };

  const handleClick = (e) => {
    if (displayValue === "0") {
      if (!tempValue1) {
        setTempValue1(e.target.innerText);
      } else {
        if (tempValue2) {
          setTempValue2(e.target.innerText);
        }
      }
    } else if (action) {
      if (tempValue2) {
        setTempValue2(tempValue2 + e.target.innerText);
      } else {
        setTempValue2(e.target.innerText);
      }
    } else if (tempValue1 && !tempValue2) {
      setTempValue1(tempValue1 + e.target.innerText);
    }
  };

  useEffect(() => {
    let updated = tempValue2 ? tempValue2 : tempValue1;
    if (!updated) updated = "0";
    setDisplayValue(updated);
  }, [tempValue1, tempValue2]);

  useEffect(() => {
    if (result) {
      setTempValue1(result.toString());
      setTempValue2("");
      setAction("");
      setDisplayValue(result.toString());
    }
  }, [result]);

  const handleActionClick = (e) => {
    switch (e.target.innerText) {
      case "AC":
        setResult(0);
        setTempValue1(0);
        setTempValue2(0);
        setAction("");
        break;
      case "+/-":
        debugger;
        if (tempValue1 && !tempValue2) {
          setTempValue1("-" + tempValue1);
        }
        if (tempValue2) {
          setTempValue2("-" + tempValue2);
        }
        break;
      case "%":
        if (tempValue1 && !tempValue2) {
          const tmp = Number(tempValue1 / 100);
          setTempValue1(tmp.toString());
        }
        if (tempValue2) {
          const tmp = Number(tempValue2 / 100);
          setTempValue2(tmp);
        }
        break;
      default:
        return;
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
