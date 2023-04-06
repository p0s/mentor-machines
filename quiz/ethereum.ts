export const quiz = {
  quizTitle: "Ethereum Quiz",
  quizSynopsis:
    "Answer the questions below to test your knowledge of Ethereum. You will be given 10 minutes to complete the quiz. Good luck!",
  nrOfQuestions: "3",
  questions: [
    {
      question: "Ethereum is a platform primarily designed for which purpose?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Smart contracts", "Decentralized storage"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Ethereum is a decentralized, open-source blockchain platform primarily designed for creating and deploying smart contracts and decentralized applications (dApps).",
      point: "20",
    },
    {
      question: "What is the native cryptocurrency of the Ethereum network?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Ether (ETH)", "Bitcoin (BTC)"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Ether (ETH) is the native cryptocurrency of the Ethereum network, used for transaction fees, deploying smart contracts, and interacting with dApps on the platform.",
      point: "10",
    },
    {
      question: "Which consensus mechanism does Ethereum 2.0 employ?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Proof of Work (PoW)",
        "Proof of Stake (PoS)",
        "Delegated Proof of Stake (DPoS)",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Ethereum 2.0, also known as Eth2 or Serenity, employs the Proof of Stake (PoS) consensus mechanism, which enhances the network's scalability, security, and energy efficiency compared to the original Ethereum's Proof of Work (PoW) mechanism.",
      point: "30",
    },
    {
      question: "What are the benefits of using Ethereum?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: [
        "Enables the creation of decentralized applications (dApps)",
        "Supports the execution of smart contracts",
        "Allows for decentralized finance (DeFi) platforms",
        "Supports interoperability with other blockchain networks",
      ],
      correctAnswer: [1, 2, 3],
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Ethereum enables the creation of decentralized applications (dApps), supports the execution of smart contracts, and allows for decentralized finance (DeFi) platforms, among other features.",
      point: "20",
    },
  ],
};