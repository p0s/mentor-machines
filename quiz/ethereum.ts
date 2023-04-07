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
      answers: ["Smart contracts", "Decentralized storage", "Mining"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Ethereum is a decentralized, open-source blockchain platform primarily designed for creating and deploying smart contracts and decentralized applications (dApps).",
      point: "30",
    },

    {
      question: "What is the native cryptocurrency of the Ethereum network?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Ether (ETH)", "Bitcoin (BTC)", "Ethereum Classic (ETC)"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Ether (ETH) is the native cryptocurrency of the Ethereum network, used for transaction fees, deploying smart contracts, and interacting with dApps on the platform.",
      point: "30",
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

    {
      question: "What is the maximum supply of Ethereum that will ever exist?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
      "50 million",
      "100 million",
      "There is no maximum supply"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "Ethereum has no hard cap on the total supply of ether, unlike Bitcoin.",
      point: "30"
    },

    {
      question: "Which consensus algorithm is currently used by Ethereum?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
      "Proof of Work",
      "Proof of Stake",
      "Delegated Proof of Stake"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "Ethereum is in the process of transitioning from Proof of Work to Proof of Stake.",
      point: "30"
    },

    {
      question: "What is the name of the programming language used to write smart contracts on Ethereum?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
      "Java",
      "Solidity",
      "Python"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "Solidity is the most popular programming language used for writing smart contracts on Ethereum.",
      point: "30"
    },

    {
      question: "What is the name of the upgrade that introduced the EIP-1559 fee market change?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
      "Berlin",
      "Constantinople",
      "London"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "The London hard fork included the EIP-1559 fee market change.",
      point: "30"
      },

    {
      question: "What is the name of the decentralized finance (DeFi) protocol that allows users to earn interest on their Ethereum holdings?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
      "Aave",
      "Uniswap",
      "Compound"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "Compound is a DeFi protocol that enables users to earn interest on their cryptocurrencies, including Ethereum.",
      point: "30"
    },

    {
      question: "What is the name of the upgrade that introduced the Beacon Chain and began the transition to Ethereum 2.0?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
      "Istanbul",
      "Berlin",
      "Medalla"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "The Medalla testnet launched in August 2020 and marked the beginning of Ethereum's transition to a Proof of Stake consensus mechanism.",
      point: "30"
    },

    {
      question: "What is the name of the popular Ethereum browser extension wallet that enables users to interact with decentralized applications (dApps)?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
      "Trezor",
      "Ledger",
      "MetaMask"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "MetaMask is a popular Ethereum wallet that allows users to interact with dApps directly from their web browser.",
      point: "30"
    },

    {
      question: "What is the name of the EIP that introduced the concept of the ERC-721 token standard for non-fungible tokens (NFTs)?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
      "EIP-20",
      "EIP-721",
      "EIP-1559"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "EIP-721 introduced the ERC-721 token standard, which is used for creating unique, non-fungible assets on the Ethereum network, such as CryptoKitties.",
      point: "30"
    },

    {
      question: "What is the name of the decentralized exchange (DEX) on Ethereum that allows for permissionless token swaps?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
      "Uniswap",
      "Binance",
      "Coinbase"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "Uniswap is a decentralized exchange on Ethereum that allows for permissionless token swaps, using an automated market maker (AMM) mechanism.",
      point: "30"
    },

    {
      question: "What is the name of the Ethereum improvement proposal (EIP) that aims to reduce the total supply of ether over time?",
      questionType: "text",
      answerSelectionType: "single",
      "answers": [
      "EIP-1559",
      "EIP-3368",
      "EIP-7777"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "EIP-1559 proposes a fee market change that burns a portion of the transaction fees, leading to a reduction in the total supply of ether over time.",
      point: "30"
    },

    {
      question: "What is the name of the Ethereum improvement proposal (EIP) that aims to increase the gas limit of Ethereum blocks?",
      questionType: "text",
      answerSelectionType: "single",
      "answers": [
      "EIP-2000",
      "EIP-2718",
      "EIP-1559"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "EIP-2718 proposes a new transaction type that would increase the gas limit of Ethereum blocks, enabling more complex smart contracts to be executed.",
      point: "30"
    },

    {
      question: "What is the name of the Ethereum test network that is often used for testing the deployment of smart contracts and dApps?",
      questionType: "text",
      answerSelectionType: "single",
      "answers": [
      "Ropsten",
      "Mainnet",
      "Kovan"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "Ropsten is a public Ethereum test network that is used for testing the deployment of smart contracts and dApps.",
      point: "30"
    },

    {
      question: "What is the name of the Ethereum improvement proposal (EIP) that aims to introduce a new transaction type for creating private transactions on Ethereum?",
      questionType: "text",
      answerSelectionType: "single",
      "answers": [
      "EIP-1024",
      "EIP-197",
      "EIP-1965"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "EIP-1965 proposes a new transaction type for creating private transactions on Ethereum, using zero-knowledge",
      point: "30"
    },

    {
      question: "What is the name of the Ethereum improvement proposal (EIP) that aims to introduce a new opcode to reduce gas costs for certain operations?",
      questionType: "text",
      answerSelectionType: "single",
      "answers": [
      "EIP-1283",
      "EIP-1234",
      "EIP-1559"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "EIP-1283 proposes to introduce a new opcode, which would allow for more efficient execution of certain smart contract operations, resulting in lower gas costs.",
      point: "30"
    },

    {
      question: "What is the name of the decentralized exchange (DEX) on Ethereum that is specifically designed for trading ERC-20 tokens?",
      questionType: "text",
      answerSelectionType: "single",
      "answers": [
      "Uniswap",
      "Kyber Network",
      "Bancor Network"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "Kyber Network is a decentralized exchange on Ethereum that is specifically designed for trading ERC-20 tokens.",
      point: "30"
    },

    {
      question: "What is the name of the Ethereum improvement proposal (EIP) that proposes to introduce a new precompile for verifying zk-SNARKs?",
      questionType: "text",
      answerSelectionType: "single",
      "answers": [
      "EIP-1108",
      "EIP-1724",
      "EIP-1977"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "EIP-1108 proposes to introduce a new precompile, which would allow for more efficient verification of zk-SNARKs, a technology used for privacy and scalability on Ethereum.",
      point: "30"
    },

  ],
};