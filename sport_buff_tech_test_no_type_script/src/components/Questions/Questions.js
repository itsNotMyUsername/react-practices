import { Box, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import useQuestionsContext from "../../hooks/useQuestionsContext";

const Question = () => {
  const { questions, editQuestion, fetchMoreQuestions } = useQuestionsContext();

  const handleEditClick = (index) => {
    editQuestion(index);
  };

  const handleLoadMore = () => {
    fetchMoreQuestions();
  };

  const renderedQuestions = questions.map((question, index) => {
    return (
      <Box
        key={index}
        sx={{
          marginTop: 1,
          marginBottom: 1,
          borderRadius: 0.5,
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        }}
      >
        <Grid2 key={index} container display="flex" alignItems="center">
          <Grid2 xs={11} direction="column">
            <Grid2>Question {question.question}</Grid2>
            <Grid2>Category {question.category}</Grid2>
            <Grid2>Difficulty {question.difficulty}</Grid2>
          </Grid2>
          <Grid2 xs={1} spacing={2}>
            <Button
              variant="outlined"
              onClick={() => {
                handleEditClick(index);
              }}
              fullWidth
            >
              Edit
            </Button>
            <Button variant="outlined" fullWidth>
              Delete
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    );
  });

  return (
    <div>
      <Grid2 container direction="column" spacing={2}>
        <Grid2 container>
          <Grid2>Questions</Grid2>
          <Grid2>
            <Button variant="outlined" onClick={handleLoadMore}>
              Load more questions
            </Button>
          </Grid2>
        </Grid2>
        {renderedQuestions}
      </Grid2>
    </div>
  );
};

export default Question;
