import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Checkbox from "@mui/material/Checkbox";
import useQuestionsContext from "../../hooks/useQuestionsContext";
import { useEffect, useState } from "react";

const Answers = ({ setCounter }) => {
  const { loaded } = useQuestionsContext();
  console.log({ loaded });
  const [checkedState, setCheckedState] = useState(() => {
    if (loaded && loaded.answers) {
      return loaded.answers.map((a) => {
        return a.isCorrect;
      });
    }
    return [];
  });
  console.log(checkedState);

  useEffect(() => {
    setCounter(checkedState.filter(Boolean).length);
  }, [checkedState, setCounter]);

  const handleChange = (index) => {
    const updated = checkedState.map((item, itemIndex) => {
      if (index === itemIndex) return !item;
      return item;
    });
    setCheckedState(updated);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={10} display="flex" justifyContent="left">
          Answers
        </Grid>
        <Grid xs={2} display="flex" justifyContent="left">
          IsCorrect
        </Grid>
      </Grid>
      {loaded &&
        loaded.answers &&
        loaded.answers.map((answer, index) => {
          return (
            <Grid key={index} container spacing={0}>
              <Grid xs={10}>
                <TextField variant="outlined" value={answer.answer} />
              </Grid>
              <Grid xs={2}>
                <Checkbox
                  checked={checkedState[index]}
                  onChange={() => handleChange(index)}
                />
              </Grid>
            </Grid>
          );
        })}
    </div>
  );
};

export default Answers;
