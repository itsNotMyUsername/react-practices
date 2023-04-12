import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Checkbox from "@mui/material/Checkbox";

import "./Editor.css";
import useQuestionsContext from "../../hooks/useQuestionsContext";

const Editor = () => {
  const { loaded } = useQuestionsContext();

  const renderedItems = () => {
    return loaded && !loaded.incorrect_answers ? (
      <></>
    ) : (
      <>
        <Grid container spacing={2}>
          <Grid xs={10} display="flex" justifyContent="left">
            Answers
          </Grid>
          <Grid xs={2} display="flex" justifyContent="left">
            IsCorrect
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid xs={10}>
            <TextField
              variant="outlined"
              value={loaded ? loaded.correct_answer : ""}
            />
          </Grid>
          <Grid xs={2}>
            <Checkbox checked={true} />
          </Grid>
        </Grid>
        {loaded &&
          loaded.incorrect_answers.map((answer, index) => {
            return (
              <Grid key={index} container spacing={0}>
                <Grid xs={10}>
                  <TextField variant="outlined" value={answer} />
                </Grid>
                <Grid xs={2}>
                  <Checkbox />
                </Grid>
              </Grid>
            );
          })}
      </>
    );
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
              value={loaded ? loaded.question : ""}
            />
          </Grid>
          {renderedItems()}
        </Grid>
      </form>
    </div>
  );
};

export default Editor;
