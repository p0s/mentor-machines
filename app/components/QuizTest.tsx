import { quiz as ethereumQuiz } from "@/quiz/ethereum";
import { quiz as layer2Quiz } from "@/quiz/layer2";
import { quiz as zkevmQuiz } from "@/quiz/zkevm";
import Quiz from "react-quiz-component";

export type topicProps = "Ethereum" | "zkEVM" | "Layer2";

const quizList = {
  Ethereum: ethereumQuiz,
  zkEVM: zkevmQuiz,
  Layer2: layer2Quiz,
};

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
  topic,
  onQuestionSubmit,
  onComplete,
  reset,
}: {
  topic: topicProps;
  onQuestionSubmit: (response: any) => void;
  onComplete: () => void;
  reset: () => void;
}) {
  return (
    <Quiz
      quiz={quizList[topic]}
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
