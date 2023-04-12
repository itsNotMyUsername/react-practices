import { createContext, useCallback, useState, useEffect } from "react";
import fetchQuestions from "../api/api";

const QuestionsContext = createContext();

const Provider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [fetched, setFetched] = useState([]);
  const [loaded, setLoaded] = useState({});

  const fetchMoreQuestions = useCallback(async () => {
    const results = await fetchQuestions();
    setFetched(results);
  }, []);

  useEffect(() => {
    // console.log(fetched[0]);
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
