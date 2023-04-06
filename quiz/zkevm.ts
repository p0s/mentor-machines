export const quiz = {
  quizTitle: "zkEVM Quiz",
  quizSynopsis:
    "Answer the questions below to test your knowledge of zkEVM. You will be given 10 minutes to complete the quiz. Good luck!",
  nrOfQuestions: "3",
  questions: [
    {
      question: "What does zkEVM stand for?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Zero-Knowledge Ethereum Virtual Machine", "Zero-Knowledge Electronic Verification Model"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "zkEVM stands for Zero-Knowledge Ethereum Virtual Machine. It's an innovative technology that combines the Ethereum Virtual Machine (EVM) with zero-knowledge proof systems to enable private, scalable, and efficient smart contract execution on Ethereum.",
      point: "20",
    },
    {
      question: "zkEVM is primarily focused on improving which aspect of Ethereum?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Scalability", "Privacy"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "zkEVM is primarily focused on improving the privacy of Ethereum by enabling private, scalable, and efficient smart contract execution using zero-knowledge proof systems.",
      point: "10",
    },
    {
      question: "Which of the following technologies does zkEVM leverage?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Zero-Knowledge Proofs",
        "Sharding",
        "Both of the above",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "zkEVM leverages Zero-Knowledge Proofs, a cryptographic technique that enables one party to prove the validity of a statement without revealing any information about the statement itself, apart from the fact that it's true.",
      point: "30",
    },
    {
      question: "What are the potential benefits of zkEVM?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: [
        "Improved privacy for smart contract execution",
        "Reduced gas costs for transactions",
        "Increased transaction throughput",
        "Enhanced interoperability between blockchains",
      ],
      correctAnswer: [1, 2, 3],
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "zkEVM can potentially provide improved privacy for smart contract execution, reduced gas costs for transactions, and increased transaction throughput by leveraging zero-knowledge proof systems.",
      point: "20",
    },
  ],
};