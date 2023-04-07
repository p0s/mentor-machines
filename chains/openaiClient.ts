export default async function createChatCompletion(
  topic: string,
  question: string
) {
  const direction = `You are a knowledgeable teacher providing students with learning materials on the topic of ${topic}. The length of the learning materials should be limited to 100 words, and should be as concise and comprehensive as possible.`;

  const prompt = [
    { role: "system", content: direction },
    { role: "user", content: question },
  ];

  const data = JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: prompt,
    max_tokens: 800,
  });

  const response = await fetch(`${process.env.BASE_PATH}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: data,
  });

  const completion = await response.json();

  console.log(completion);

  if (Object.prototype.hasOwnProperty.call(completion, "choices")) {
    return { text: completion.choices[0].message.content };
  } else if (Object.prototype.hasOwnProperty.call(completion, "error")) {
    return { text: completion.error.message };
  } else {
    return false;
  }
}
