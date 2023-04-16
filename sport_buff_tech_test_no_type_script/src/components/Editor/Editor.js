import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import useQuestionsContext from "../../hooks/useQuestionsContext";
import "./Editor.css";
import Answers from "../Answers/Answers";
import { useCallback, useEffect, useState } from "react";

const Editor = () => {
  const { loaded } = useQuestionsContext();
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const setCounter = useCallback((count) => {
    console.log("increaseCounter");
    setCheckedCounter(count);
  }, []);

  useEffect(() => {
    console.log("useEffect", { checkedCounter });
    checkedCounter === 0 ? setDisabled(true) : setDisabled(false);
  }, [checkedCounter, setDisabled]);

  const renderedItems = () => {
    return loaded ? (
      <Answers checkedCounter={checkedCounter} setCounter={setCounter} />
    ) : null;
  };

  return (
    <div className="container">
      <form>
        <Grid container spacing={2} direction="column">
          <Grid container spacing={2}>
            Question
          </Grid>

          <Grid container spacing={2}>
            <TextField
              variant="outlined"
              value={loaded && loaded.question ? loaded.question : ""}
            />
          </Grid>
          {renderedItems()}
          <div>
            <Button variant="outlined" size="medium" disabled={disabled}>
              Save
            </Button>
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default Editor;
