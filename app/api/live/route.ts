import { OpenAIStream, OpenAIStreamPayload } from "@/chains/openAIStream";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

export const config = {
  runtime: "edge",
};

export async function POST(req: Request): Promise<Response> {
  const { topic, question } = await req.json();

  const direction = `You are a knowledgeable teacher providing students with learning materials on the topic of ${topic} and user question.If user question is not related to the topic just ignore the question and provide basic knowledge of the topic. The length of the learning materials should be limited to 100 words, and should be as concise and comprehensive as possible. User question:`;

  const prompt = [
    { role: "system", content: direction },
    { role: "user", content: question },
  ];

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: prompt as any,
    temperature: 0.5,
    max_tokens: 500,
    stream: true,
  };

  const stream = await OpenAIStream(payload);
  return new Response(stream);
}
