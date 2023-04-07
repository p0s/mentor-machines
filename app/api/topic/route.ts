// import { makeBasicQAChain } from "@/chains/basicQAChain";
import createChatCompletion from "@/chains/openaiClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { topic, question } = await request.json();
  // const qachain = makeBasicQAChain();

  try {
    //Ask a question
    // const response = await qachain.call({
    //   topic,
    //   text: question,
    // });
    const response = await createChatCompletion(topic, question);

    // console.log("response", response);
    return NextResponse.json(response);
  } catch (error) {
    console.log("error", error);
  }
}
