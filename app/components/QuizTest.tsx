import { quiz } from "@/quiz/react";
import Quiz from "react-quiz-component";

const renderCustomResultPage = (obj: {
  numberOfQuestions: number;
  numberOfCorrectAnswers: number;
  totalPoints: number;
}) => {
  //   console.log(obj);
  const { numberOfQuestions, numberOfCorrectAnswers } = obj;
  return (
    <div>
      You got {numberOfCorrectAnswers} out of {numberOfQuestions} questions!
      <br />
      You scored{" "}
      {((numberOfCorrectAnswers / numberOfQuestions) * 100).toFixed(0)} points!
    </div>
  );
};

export default function QuizTest() {
  return (
    <Quiz
      quiz={quiz}
      shuffle={true}
      showDefaultResult={false}
      customResultPage={renderCustomResultPage}
    />
  );
}
