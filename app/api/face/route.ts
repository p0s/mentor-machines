export async function POST(request: Request) {
  const { question } = await request.json();

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
          idle_url:
            "https://ugc-idle.s3-us-west-2.amazonaws.com/415417c29c16d10016b9042a44cd3e09.mp4",
          bot_response: question,
          azure_voice: "en-US-ChristopherNeural",
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
