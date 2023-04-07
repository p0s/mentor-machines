export async function POST(request: Request) {
  const { question, idle_url, azure_voice } = await request.json();

  try {
    //Ask a question
    const response = await fetch(
      "https://api.exh.ai/animations/v1/generate_lipsync",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.EX_HUMAN_TOKEN,
        },
        body: JSON.stringify({
          bot_name: "Santa",
          idle_url: idle_url,
          bot_response: question,
          azure_voice: azure_voice,
          azure_style: "friendly",
          animation_pipeline: "high_speed",
        }),
      }
    );

    // console.log("response", response);
    return response;
  } catch (error) {
    console.log("error", error);
  }
}
