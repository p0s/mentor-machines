import { quiz } from "@/quiz/react";
import Quiz from "react-quiz-component";

const renderCustomResultPage = (obj: {
  numberOfQuestions: number;
  numberOfCorrectAnswers: number;
  totalPoints: number;
}) => {
  //   console.log(obj);
  const { numberOfQuestions, numberOfCorrectAnswers } = obj;
  const finalScore = (numberOfCorrectAnswers / numberOfQuestions) * 100;
  return (
    <div>
      You got {numberOfCorrectAnswers} out of {numberOfQuestions} questions!
      <br />
      You scored {finalScore.toFixed(0)} points!
      <br />
      {finalScore >= 90 && `You won a NFT prize!`}
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
