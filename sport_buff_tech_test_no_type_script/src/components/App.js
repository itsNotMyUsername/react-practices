import "@fontsource/roboto/300.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Editor from "./Editor/Editor";
import Questions from "./Questions/Questions";
import { useEffect } from "react";
import useQuestionsContext from "../hooks/useQuestionsContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const App = () => {
  const { fetchMoreQuestions } = useQuestionsContext();

  useEffect(() => fetchMoreQuestions, [fetchMoreQuestions]);

  return (
    <div>
      <Grid container spacing={2} columns={16}>
        <Grid xs={8}>
          <Item>
            <Editor />
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <Questions />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
