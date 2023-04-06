import { LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";

export const makeBasicQAChain = () => {
  // We can also construct an LLMChain from a ChatPromptTemplate and a chat model.
  const chat = new ChatOpenAI(
    {
      modelName: "gpt-3.5-turbo",
      temperature: 0.5,
      cache: false,
      concurrency: 5,
      //   verbose: true,
      streaming: false,
      //   callbackManager,
    },
    {
      basePath: process.env.BASE_PATH,
    }
  );
  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      "You are a knowledgeable teacher providing students with learning materials on the topic of {topic}. The length of the learning materials should be limited to 100 words, and should be as concise and comprehensive as possible."
    ),
    HumanMessagePromptTemplate.fromTemplate("{text}"),
  ]);

  return new LLMChain({
    prompt: chatPrompt,
    llm: chat,
  });
};
