import { checkUrlReturnsJson, getDataJSON } from "@/utils/fetchHelper";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  const { question, idle_url, azure_voice } = await request.json();

  try {
    const fileName =
      `${question}-${azure_voice}`
        .trim()
        .replace(/[^\w\s]|_/g, "")
        .replace(/\s/g, "") + ".mp4";
    // Create a single supabase client for interacting with your database
    const supabase = createClient(
      "https://vduqyasswizvyfkfagto.supabase.co",
      process.env.SUPABASE_KEY as string
    );
    // console.log(fileName);
    //Check if video already exists
    // publicUrl
    const { data: findVideoData } = supabase.storage
      .from("videos")
      .getPublicUrl(fileName);

    const isJSON = await checkUrlReturnsJson(findVideoData.publicUrl);

    if (!isJSON) {
      return NextResponse.json(findVideoData);
    } else {
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

      let responseStream = new Response(response.body as any);
      let blob = await responseStream.blob();

      await supabase.storage.from("videos").upload(fileName, blob, {
        cacheControl: "3600",
        upsert: false,
      });

      const { data } = supabase.storage.from("videos").getPublicUrl(fileName);

      // console.log("response", response);
      return NextResponse.json(data);
    }
  } catch (error) {
    console.log("error", error);
  }
}
