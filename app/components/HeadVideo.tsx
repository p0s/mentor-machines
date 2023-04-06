"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "./HeadVideo.module.scss";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const EX_HUMAN_TOKEN =
  "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6Im1pa2tvLmlrb2xhQGdtYWlsLmNvbSJ9.q8d45E7TJ5gSwg45SKAsztXqxB3Hapz6l1rnnUU73-6RSJoCbqS4HQWL57HxXZM7rOmhAl1ULmkgmQcA0nFX2g";

const exHumanEndpoint = "https://api.exh.ai/animations/v1/generate_lipsync";

export default function HeadVideo() {
  const [question, setQuestion] = useState<string>("How are u?");
  const [videoUrl, setVideoUrl] = useState<string>(
    "https://ugc-idle.s3-us-west-2.amazonaws.com/415417c29c16d10016b9042a44cd3e09.mp4"
  );
  const [playing, setPlaying] = useState<boolean>(false);

  async function getVideo() {
    // videoRef.current?.pause();
    const response = await fetch(exHumanEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + EX_HUMAN_TOKEN,
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
    });

    const res = await response; // Needless since already awaited above

    if (res.body instanceof ReadableStream) {
      let responseStream = new Response(res.body);
      let blob = await responseStream.blob();
      let url = URL.createObjectURL(blob);
      setVideoUrl(url);
      setPlaying(true);
    } else {
      // Suggest showing a friendly error to the user. This would "quietly" fail.
      console.log("video url unknown");
    }
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    getVideo();
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["head-video"]}>
        {playing && (
          <ReactPlayer
            className={`${styles["react-player"]} ${styles["front"]}`}
            playing={playing}
            onEnded={() => {
              setPlaying(false);
            }}
            playsinline
            url={videoUrl}
            width="100%"
            height="100%"
          />
        )}
        <ReactPlayer
          className={styles["react-player"]}
          playing={true}
          loop
          playsinline
          url={
            "https://ugc-idle.s3-us-west-2.amazonaws.com/415417c29c16d10016b9042a44cd3e09.mp4"
          }
          width="100%"
          height="100%"
        />
      </div>
      <div>
        <input
          style={{ width: 300, height: 50 }}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div>
        <button style={{ width: 300, height: 50 }} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
