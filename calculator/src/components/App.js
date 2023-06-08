import Grid from "@mui/material/Unstable_Grid2";
import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);
  const [tempValue1, setTempValue1] = useState(0);
  const [tempValue2, setTempValue2] = useState(0);
  const [action, setAction] = useState("");

  // console.log(result, tempValue1, action, tempValue2);

  const handleSpecialCaseClick = (value) => {
    switch (value) {
      case "AC":
        setResult(0);
        setTempValue1(0);
        setTempValue2(0);
        setAction("");
        break;
      case "=":
        setResult(calculate(action));
        setTempValue1(result);
        setTempValue2(0);
        break;
      case "+":
      case "-":
      case "x":
      case "/":
        if (tempValue1 !== 0) setAction(value);
        break;
      default:
        return;
    }
  };

  const calculate = (action) => {
    switch (action) {
      case "/":
        return tempValue1 / tempValue2;
      case "x":
        return tempValue1 * tempValue2;
      case "-":
        return tempValue1 - tempValue2;
      case "+":
        return tempValue1 + tempValue2;
      default:
        return 0;
    }
  };

  const handleClick = (e) => {
    const specialCases = ["AC", "+-", "%", "/", "x", "-", "+", "="];
    const value = e.target.innerText;
    console.log(value);
    console.log(typeof tempValue1);
    if (tempValue1 === 0) {
      setTempValue1(parseInt(value));
      setResult(tempValue1);
    } else {
      setTempValue2(parseInt(value));
    }

    if (specialCases.includes(value)) {
      handleSpecialCaseClick(value);
    }
  };

  return (
    <div className="container">
      <Grid container spacing={0} alignItems="center" justify="center">
        <Grid xs={12}>
          <div className="result">{result}</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="grey">AC</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="grey">+/-</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="grey">%</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="orange">/</div>
        </Grid>

        <Grid xs={3} onClick={handleClick}>
          <div className="light-grey">7</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="light-grey">8</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="light-grey">9</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="box orange">x</div>
        </Grid>

        <Grid xs={3} onClick={handleClick}>
          <div className="light-grey">4</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="light-grey">5</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="light-grey">6</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="orange">-</div>
        </Grid>

        <Grid xs={3} onClick={handleClick}>
          <div className="light-grey">1</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="light-grey">2</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="light-grey">3</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="orange">+</div>
        </Grid>

        <Grid xs={6} onClick={handleClick}>
          <div className="light-grey">0</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="light-grey">.</div>
        </Grid>
        <Grid xs={3} onClick={handleClick}>
          <div className="orange">=</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
