import { useContext } from "react";
import QuestionsContext from "../context/questions";

const useQuestionsContext = () => {
  return useContext(QuestionsContext);
};

export default useQuestionsContext;
