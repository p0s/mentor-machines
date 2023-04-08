export const quiz = {
  quizTitle: "Ethereum Layer 2 Quiz",
  quizSynopsis:
    "Answer the questions below to test your knowledge of Ethereum Layer 2 solutions. You will be given 10 minutes to complete the quiz. Good luck!",
  nrOfQuestions: "3",
  questions: [
    {
      question: "What is the primary purpose of Layer 2 solutions on Ethereum?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Enhancing privacy", "Improving scalability"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "The primary purpose of Layer 2 solutions on Ethereum is to improve scalability by offloading transactions and computations from the main Ethereum blockchain (Layer 1) to a secondary layer, thus reducing network congestion and increasing transaction throughput.",
      point: "20",
    },
    {
      question: "Which of the following is the main Layer 2 scaling solution on Ethereum's current roadmap?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Rollups", "Sharding"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Optimistic Rollups are a popular Layer 2 scaling solution for Ethereum that bundle multiple transactions into a single proof, which is then posted on the main Ethereum blockchain. Sharding, on the other hand, is a Layer 1 scaling solution.",
      point: "10",
    },
    {
      question: "What is the main advantage of using Layer 2 solutions?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Reduced transaction fees",
        "Increased privacy by default",
        "Both of the above",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "The main advantage of using Layer 2 solutions is reduced transaction fees, as they offload transactions and computations from the main Ethereum blockchain, thus minimizing network congestion and gas fees.",
      point: "30",
    },
    {
      question: "Which of the following Layer 2 solutions is NOT primarily focused on Ethereum?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: [
        "Scroll",
        "Optimism",
        "zkSync",
        "Lightning Network",
      ],
      correctAnswer: [4],
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "The Lightning Network is a Layer 2 solution primarily focused on the Bitcoin network, aiming to increase its scalability and speed. Polygon (MATIC), Optimism, and zkSync are Layer 2 solutions primarily focused on Ethereum.",
      point: "20",
    },
  ],
};