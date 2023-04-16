import { createContext, useCallback, useState, useEffect } from "react";
import fetchQuestions from "../api/api";

const QuestionsContext = createContext();

const Provider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [fetched, setFetched] = useState([]);
  const [loaded, setLoaded] = useState({});

  const fetchMoreQuestions = useCallback(async () => {
    const results = await fetchQuestions();
    const mapped = results.map((result) => {
      const answers = result.incorrect_answers.map((ia) => {
        return { isCorrect: false, answer: ia };
      });
      if (result.correct_answer)
        answers.push({ isCorrect: true, answer: result.correct_answer });
      return {
        category: result.category,
        difficulty: result.difficulty,
        question: result.question,
        answers: answers,
      };
    });
    console.log(mapped);
    setFetched(mapped);
  }, []);

  useEffect(() => {
    setLoaded(fetched[0]);
    setQuestions((existing) => [...existing, ...fetched]);
  }, [fetched]);

  const editQuestion = (index) => {
    if (questions[index]) {
      setLoaded(questions[index]);
    }
  };

  return (
    <QuestionsContext.Provider
      value={{ fetchMoreQuestions, questions, editQuestion, loaded }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContext;
export { Provider };
