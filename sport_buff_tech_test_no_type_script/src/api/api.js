import axios from "axios";

const fetchQuestions = async () => {
  const response = await axios.get(
    "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple&amount=2"
  );
  return response.data.results;
};

export default fetchQuestions;
