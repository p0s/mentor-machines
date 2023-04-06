"use client";
import { postData, postDataGetJSON } from "@/utils/fetchHelper";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./HeadVideo.module.scss";
import QuizTest, { topicProps } from "./QuizTest";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function HeadVideo() {
  const [topic, setTopic] = useState<topicProps>("zkEVM");
  const [question, setQuestion] = useState<string>(
    "I want to learn about zkEVM."
  );
  const [videoUrl, setVideoUrl] = useState<string>(
    "https://ugc-idle.s3-us-west-2.amazonaws.com/415417c29c16d10016b9042a44cd3e09.mp4"
  );
  const [playing, setPlaying] = useState<boolean>(false);

  const [material, setMaterial] = useState<string>("");

  const [quiz, setQuiz] = useState<boolean>(false);

  const [accessibility, setAccessibility] = useState<boolean>(false);

  async function getLearningMaterials() {
    const res = await postDataGetJSON("/api/topic", {
      topic: "zkEVM",
      question,
    });
    // console.log(res);
    setMaterial(res.text);
  }

  async function getVideo(line: string, callback?: any) {
    const res = await postData("/api/face", {
      question: line,
    }); // Needless since already awaited above

    if (res.body instanceof ReadableStream) {
      let responseStream = new Response(res.body);
      let blob = await responseStream.blob();
      let url = URL.createObjectURL(blob);
      setVideoUrl(url);
      setTimeout(() => {
        setPlaying(true);
      }, 0);
      if (callback) {
        callback();
      }
    } else {
      // Suggest showing a friendly error to the user. This would "quietly" fail.
      console.log("video url unknown");
    }
  }

  const handleSelect = (e: { target: { value: string } }) => {
    setTopic(e.target.value as topicProps);
    setQuestion(`I want to learn about ${e.target.value}.`);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    getVideo(
      `Okay, Let's talk about ${topic}. I'll give you a brief introduction.`,
      getLearningMaterials
    );
  };

  const handleStartQuiz = () => {
    getVideo(
      `Okay, Let's do a little quiz about ${topic}. Try your best!`,
      () => setQuiz(true)
    );
  };

  const encourage = (response: any) => {
    const { isCorrect } = response;
    getVideo(
      isCorrect
        ? `Good job! You're doing great. Keep it up!`
        : `Dont give up! You can do it!`
    );
  };

  const congradulations = () => {
    getVideo(
      `Congratulations! You've finished the quiz. You can learn more about ${topic} by clicking the links below.`
    );
  };

  const screenReader = (instruction: string) => {
    if (accessibility) {
      getVideo(instruction);
    }
  };

  const reset = () => {
    setQuiz(false);
    setMaterial("");
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
            playing
            muted
            loop
            playsinline
            url={"/videos/vitalik.mp4"}
            width="100%"
            height="100%"
          />
        </div>
        {!quiz && (
          <>
            <div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">
                    Pick a topice to learn about.
                  </span>
                </label>
                <select
                  value={topic}
                  onChange={handleSelect}
                  onFocus={() => {
                    screenReader(
                      `You're focusing on a dropbown list. You can choose a topic to learn about.`
                    );
                  }}
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
                onFocus={() => {
                  screenReader(
                    `You're focusing on then question input. Type something you want to learn.`
                  );
                }}
              />
            </div>
            <div>
              <button
                className="btn btn-block"
                onClick={handleSubmit}
                onFocus={() => {
                  screenReader(
                    `You're focusing on then submit button. Click to get the learning materials.`
                  );
                }}
              >
                Submit
              </button>
            </div>
          </>
        )}
        {!quiz && (
          <div>
            <ReactMarkdown>{material}</ReactMarkdown>
          </div>
        )}
        {material && (
          <div>
            {quiz ? (
              <QuizTest
                topic={topic}
                onQuestionSubmit={encourage}
                onComplete={congradulations}
                reset={reset}
              />
            ) : (
              <button className="btn btn-block" onClick={handleStartQuiz}>
                Quiz
              </button>
            )}
          </div>
        )}
        <div>
          {accessibility ? (
            <button
              onClick={() => setAccessibility(false)}
              className="btn btn-circle btn-sm"
            >
              <Icon icon="ion:accessibility" />
            </button>
          ) : (
            <button
              onClick={() => setAccessibility(true)}
              className="btn btn-circle btn-sm btn-outline"
            >
              <Icon icon="ion:accessibility" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
