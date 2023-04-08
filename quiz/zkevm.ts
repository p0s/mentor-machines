export const quiz = {
  quizTitle: "zkEVM Quiz",
  quizSynopsis:
    "Answer the questions below to test your knowledge of zkEVM. You will be given 10 minutes to complete the quiz. Good luck!",
  nrOfQuestions: "3",
  questions: [
    {
      question: "What is a zk-Rollup?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A decentralized exchange protocol",
        "A Layer 2 scaling solution for Ethereum",
        "A type of smart contract on the Ethereum network",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "A zk-Rollup is a Layer 2 scaling solution for Ethereum that allows for high scalability and low transaction fees by batching multiple transactions into a single proof that is submitted to the Ethereum network.",
      point: "30",
    },

    {
      question: "What are Zero-Knowledge Proofs?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A type of smart contract on the Ethereum network",
        "A cryptographic method that allows for the verification of a statement without revealing additional information",
        "A type of block on the Ethereum blockchain",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Zero-Knowledge Proofs are a cryptographic method that allows for the verification of a statement without revealing additional information.",
      point: "30",
    },

    {
      question: "What is the Ethereum Virtual Machine (EVM)?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A decentralized exchange protocol",
        "The runtime environment for smart contracts on the Ethereum network",
        "A type of zk-Rollup",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "The Ethereum Virtual Machine (EVM) is the runtime environment for smart contracts on the Ethereum network, which executes code written in Solidity and other programming languages.",
      point: "30",
    },

    {
      question: "What is Gas on the Ethereum network?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "The unit of measurement for the computational work required to execute a transaction or smart contract",
        "A type of cryptocurrency used on the Ethereum network",
        "A type of smart contract on the Ethereum network",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Gas is the unit of measurement for the computational work required to execute a transaction or smart contract on the Ethereum network.",
      point: "30",
    },

    {
      question: "What are zk-Rollups?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A type of Layer 1 scaling solution for the Ethereum blockchain",
        "A type of Layer 2 scaling solution for the Ethereum blockchain",
        "A smart contract that executes on the Ethereum main chain",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "zk-Rollups are a type of Layer 2 scaling solution that bundle multiple transactions together off-chain and submit a single cryptographic proof to the Ethereum main chain.",
      point: "30",
    },

    {
      question: "What is the role of zk-SNARKs in zk-Rollups?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To create the cryptographic proof that is submitted to the Ethereum main chain",
        "To execute the transactions in the zk-Rollup contract",
        "To generate the public parameters for the zk-Rollup contract",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "zk-SNARKs are used to create the cryptographic proof that is submitted to the Ethereum main chain in zk-Rollups.",
      point: "30",
    },

    {
      question: "What is a zk-SNARK?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A cryptographic proof system that enables the verification of a statement without revealing any of the underlying data or information",
        "A Layer 2 scaling solution for the Ethereum blockchain",
        "A smart contract that executes on the Ethereum main chain",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "A zk-SNARK is a type of proof system that enables the verification of a statement without revealing any of the underlying data or information.",
      point: "30",
    },

    {
      question: "What is the purpose of the trusted setup in zk-SNARKs?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To create the public parameters for the zk-SNARK circuit",
        "To execute the transactions in the zk-SNARK circuit",
        "To verify the cryptographic proof generated by the zk-SNARK circuit",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "The trusted setup is used to create the public parameters that are used in the zk-SNARK circuit.",
      point: "30",
    },

    {
      question:
        "What is the difference between a transparent and a confidential transaction?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A transparent transaction can be seen by anyone, while a confidential transaction can only be seen by the parties involved",
        "A transparent transaction is executed on the Ethereum main chain, while a confidential transaction is executed off-chain",
        "There is no difference between a transparent and a confidential transaction",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "In zk-Rollups, transactions are bundled off-chain and submitted to the Ethereum main chain as a single cryptographic proof. This enables confidential transactions, where the parties involved can see the transaction details, but the public cannot.",
      point: "30",
    },

    {
      question:
        "What is the gas cost of a transaction in a zk-Rollup compared to a transaction on the Ethereum main chain?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A transaction in a zk-Rollup is more expensive in gas than a transaction on the Ethereum main chain",
        "A transaction in a zk-Rollup is less expensive in gas than a transaction on the Ethereum main chain",
        "The gas cost is the same for transactions in a zk-Rollup and on the Ethereum main chain",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Transactions in a zk-Rollup are executed off-chain, which makes them significantly less expensive in gas compared to transactions on the Ethereum main chain.",
      point: "30",
    },

    {
      question:
        "What is the difference between a zk-Rollup and an Optimistic Rollup?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A zk-Rollup requires trust in the validity of the cryptographic proof, while an Optimistic Rollup requires trust in the operator to submit valid transactions",
        "A zk-Rollup executes transactions on the Ethereum main chain, while an Optimistic Rollup executes transactions off-chain",
        "There is no difference between a zk-Rollup and an Optimistic Rollup",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "In a zk-Rollup, the validity of transactions is ensured by a cryptographic proof, while in an Optimistic Rollup, the operator is responsible for ensuring the validity of transactions.",
      point: "30",
    },

    {
      question:
        "What is the main benefit of zk-rollups compared to other layer 2 scaling solutions?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Higher throughput", "Lower gas fees", "Better security"],
      correctAnswer: "3",
      messageForCorrectAnswer:
        "Correct! zk-rollups provide better security than other layer 2 scaling solutions.",
      messageForIncorrectAnswer:
        "Incorrect. The main benefit of zk-rollups is their better security compared to other layer 2 scaling solutions.",
      explanation:
        "zk-rollups provide better security than other layer 2 scaling solutions because the proofs generated by the system are cryptographically verified. This means that it is very difficult to cheat or manipulate the system. Additionally, zk-rollups do not rely on the honesty of validators, which reduces the risk of attacks.",
      point: "30",
    },

    {
      question:
        "What is the difference between a zk-rollup and a optimistic rollup?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "zk-rollups use zero knowledge proofs while optimistic rollups use fraud proofs",
        "zk-rollups are faster than optimistic rollups",
        "zk-rollups are more expensive than optimistic rollups",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer:
        "Correct! zk-rollups use zero knowledge proofs while optimistic rollups use fraud proofs.",
      messageForIncorrectAnswer:
        "Incorrect. The difference between zk-rollups and optimistic rollups is that zk-rollups use zero knowledge proofs while optimistic rollups use fraud proofs.",
      explanation:
        "The main difference between zk-rollups and optimistic rollups is the way in which they generate proofs. zk-rollups use zero knowledge proofs, which provide a higher level of security and privacy. Optimistic rollups use fraud proofs, which rely on the assumption that most validators will be honest.",
      point: "30",
    },

    {
      question: "What is a snark-friendly circuit?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A circuit that can be used in a zk-SNARK proof",
        "A circuit that is easy to understand",
        "A circuit that is optimized for performance",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer:
        "Correct! A snark-friendly circuit is a circuit that can be used in a zk-SNARK proof.",
      messageForIncorrectAnswer: "Incorrect. Please try again.",
      explanation:
        "A snark-friendly circuit is a circuit that can be used in a zk-SNARK proof. These circuits are designed to be small and efficient, and to have certain properties that make them easy to use in a proof.",
      point: "30",
    },

    {
      question:
        "What is the main advantage of using zk-Rollups over other Layer 2 scaling solutions?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "They are faster than other solutions",
        "They are more secure than other solutions",
        "They are more scalable than other solutions",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer:
        "Correct! The main advantage of zk-Rollups is that they are more scalable than other Layer 2 scaling solutions.",
      messageForIncorrectAnswer: "Incorrect. Please try again.",
      explanation:
        "The main advantage of zk-Rollups is that they are more scalable than other Layer 2 scaling solutions. This is because they allow for a large number of transactions to be processed off-chain and then rolled up into a single transaction on the main chain.",
      point: "30",
    },

    {
      question: "What is a recursive SNARK?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A SNARK that can prove the validity of another SNARK",
        "A SNARK that can prove the validity of a zk-Rollup",
        "A SNARK that can be used in a circuit",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer:
        "Correct! A recursive SNARK is a SNARK that can prove the validity of another SNARK.",
      messageForIncorrectAnswer: "Incorrect. Please try again.",
      explanation:
        "A recursive SNARK is a SNARK that can prove the validity of another SNARK. This allows for a proof of a proof, which can be useful in certain applications.",
      point: "30",
    },

    {
      question: "What is the main advantage of using zk-rollups?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Increased security",
        "Increased throughput",
        "Reduced gas fees",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer:
        "Correct! The main advantage of using zk-rollups is increased throughput.",
      messageForIncorrectAnswer:
        "Incorrect. The correct answer is B. The main advantage of using zk-rollups is increased throughput.",
      explanation:
        "By bundling multiple transactions into a single transaction, zk-rollups can greatly increase the throughput of the Ethereum network, allowing for more transactions to be processed per second.",
      point: "30",
    },

    {
      question: "What is a zk-SNARK?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A type of zero-knowledge proof",
        "A type of smart contract",
        "A type of consensus mechanism",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer:
        "Correct! A zk-SNARK is a type of zero-knowledge proof.",
      messageForIncorrectAnswer:
        "Incorrect. The correct answer is A. A zk-SNARK is a type of zero-knowledge proof.",
      explanation:
        "A zk-SNARK is a type of zero-knowledge proof that allows one party to prove to another that they know a solution to a problem, without revealing any information about the solution.",
      point: "30",
    },

    {
      question: "What is the purpose of a Merkle tree in a zk-rollup?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To store transaction data",
        "To create a hash of all transactions in the rollup",
        "To verify the validity of transactions",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer:
        "Correct! A Merkle tree is used to create a hash of all transactions in the rollup.",
      messageForIncorrectAnswer:
        "Incorrect. The correct answer is B. A Merkle tree is used to create a hash of all transactions in the rollup.",
      explanation:
        "A Merkle tree is a data structure used to efficiently create a hash of all transactions in the rollup. This hash is then used to prove the validity of the rollup to the Ethereum network.",
      point: "30",
    },
  ],
};
