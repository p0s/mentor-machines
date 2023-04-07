import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import fetch from "node-fetch";

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

    // Create a single supabase client for interacting with your database
    const supabase = createClient(
      "https://fedufbbtgreynnntoyrl.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlZHVmYmJ0Z3JleW5ubnRveXJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1ODY4NTUsImV4cCI6MTk5NTE2Mjg1NX0.lnTefJFN6UYzbkx40Vzm_8Bnbhp9Sr2LDX-Uk2yzg_s"
    );

    let responseStream = new Response(response.body as any);
    let blob = await responseStream.blob();

    const { data, error } = await supabase.storage
      .from("videos")
      .upload("public/test.mp4", blob, {
        cacheControl: "3600",
        upsert: false,
      });

    // console.log("response", response);
    return NextResponse.json(data);
  } catch (error) {
    console.log("error", error);
  }
}
