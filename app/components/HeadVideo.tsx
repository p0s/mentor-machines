"use client";
import { postData, postDataGetJSON } from "@/utils/fetchHelper";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./HeadVideo.module.scss";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function HeadVideo() {
  const [topic, setTopic] = useState<string>("zkEVM");
  const [question, setQuestion] = useState<string>(
    "I want to learn about zkEVM."
  );
  const [videoUrl, setVideoUrl] = useState<string>(
    "https://ugc-idle.s3-us-west-2.amazonaws.com/415417c29c16d10016b9042a44cd3e09.mp4"
  );
  const [playing, setPlaying] = useState<boolean>(false);

  const [material, setMaterial] = useState<string>("");

  async function getLearningMaterials() {
    const res = await postDataGetJSON("/api/topic", {
      topic: "zkEVM",
      question,
    });
    // console.log(res);
    setMaterial(res.text);
  }

  async function getVideo() {
    const res = await postData("/api/face", {
      question: `Okay, Let's talk about ${topic}. I'll give you a brief introduction.`,
    }); // Needless since already awaited above

    if (res.body instanceof ReadableStream) {
      let responseStream = new Response(res.body);
      let blob = await responseStream.blob();
      let url = URL.createObjectURL(blob);
      setVideoUrl(url);
      setTimeout(() => {
        setPlaying(true);
      }, 0);
      getLearningMaterials();
    } else {
      // Suggest showing a friendly error to the user. This would "quietly" fail.
      console.log("video url unknown");
    }
  }

  const handleSelect = (e: { target: { value: string } }) => {
    setTopic(e.target.value);
    setQuestion(`I want to learn about ${e.target.value}.`);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    getVideo();
  };

  return (
    <div className="artboard phone-1">
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
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Pick a topice to learn about.</span>
            </label>
            <select
              value={topic}
              onChange={handleSelect}
              className="select select-bordered"
            >
              <option value="Ethereum">Ethereum</option>
              <option value="zkEVM">zkEVM</option>
              <option value="Layer2">Layer2</option>
            </select>
          </div>
        </div>
        <div>
          <input
            className="input input-bordered w-full max-w-xs"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-block" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div>
          <ReactMarkdown>{material}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
