import { quiz } from "@/quiz/ethereum";
import Quiz from "react-quiz-component";

const renderCustomResultPage = (obj: {
  reset: () => void;
  numberOfQuestions: number;
  numberOfCorrectAnswers: number;
  totalPoints: number;
}) => {
  //   console.log(obj);
  const { reset, numberOfQuestions, numberOfCorrectAnswers } = obj;
  const finalScore = (numberOfCorrectAnswers / numberOfQuestions) * 100;
  return (
    <div>
      You got {numberOfCorrectAnswers} out of {numberOfQuestions} questions!
      <br />
      You scored {finalScore.toFixed(0)} points!
      <br />
      {finalScore >= 90 && `You won a NFT prize!`}
      <br />
      <button className="btn btn-block" onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default function QuizTest({
  onQuestionSubmit,
  onComplete,
  reset,
}: {
  onQuestionSubmit: (response: any) => void;
  onComplete: () => void;
  reset: () => void;
}) {
  return (
    <Quiz
      quiz={quiz}
      shuffle={true}
      showDefaultResult={false}
      customResultPage={(props: any) =>
        renderCustomResultPage({ reset, ...props })
      }
      onQuestionSubmit={(response: any) => onQuestionSubmit(response)}
      onComplete={onComplete}
    />
  );
}
