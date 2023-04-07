"use client";
import { encourageLines, inCorretLines } from "@/config/lines";
import { postData, postDataGetJSON } from "@/utils/fetchHelper";
import { getRandomLine } from "@/utils/getLines";
import { Icon } from "@iconify/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./App.module.scss";
import QuizTest, { topicProps } from "./QuizTest";
import Spinner from "./Spinner";
import VideoHead from "./VideoHead";

export const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

export default function Learn({ mentor }: { mentor: any }) {
  const [topic, setTopic] = useState<topicProps>("zkEVM");
  const [question, setQuestion] = useState<string>(
    "I want to learn about zkEVM."
  );
  const [videoUrl, setVideoUrl] = useState<string>(mentor.loopUrl);
  const [playing, setPlaying] = useState<boolean>(false);

  const [material, setMaterial] = useState<string>("");

  const [quiz, setQuiz] = useState<boolean>(false);

  const [accessibility, setAccessibility] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getLearningMaterials = async () => {
    setMaterial("");

    const response = await fetch("/api/live", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic,
        question,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setMaterial((prev) => prev + chunkValue);
    }
    setIsLoading(false);
  };

  // async function getLearningMaterials() {
  //   const res = await postDataGetJSON("/api/topic", {
  //     topic,
  //     question,
  //   });
  //   // console.log(res);
  //   setMaterial(res.text);
  //   setIsLoading(false);
  // }

  async function getVideo(line: string, callback?: any) {
    setIsLoading(true);
    const res = await postDataGetJSON("/api/video", {
      question: line,
      idle_url: mentor.loopUrl,
      azure_voice: mentor.azure_voice,
    }); // Needless since already awaited above
    // console.log(res);
    if (res) {
      setVideoUrl(res.publicUrl);
      setTimeout(() => {
        setPlaying(true);
      }, 0);
      if (callback) {
        callback();
      } else {
        setIsLoading(false);
      }
    }
  }

  // async function getVideo(line: string, callback?: any) {
  //   setIsLoading(true);
  //   const res = await postData("/api/face", {
  //     question: line,
  //     idle_url: mentor.loopUrl,
  //     azure_voice: mentor.azure_voice,
  //   }); // Needless since already awaited above

  //   if (res.body instanceof ReadableStream) {
  //     let responseStream = new Response(res.body);
  //     let blob = await responseStream.blob();
  //     let url = URL.createObjectURL(blob);
  //     setVideoUrl(url);
  //     setTimeout(() => {
  //       setPlaying(true);
  //     }, 0);
  //     if (callback) {
  //       callback();
  //     } else {
  //       setIsLoading(false);
  //     }
  //   } else {
  //     // Suggest showing a friendly error to the user. This would "quietly" fail.
  //     console.log("video service error.");
  //     setIsLoading(false);
  //   }
  // }

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
      () => {
        setQuiz(true);
        setIsLoading(false);
      }
    );
  };

  const encourage = (response: any) => {
    const { isCorrect } = response;
    getVideo(
      isCorrect ? getRandomLine(encourageLines) : getRandomLine(inCorretLines)
    );
  };

  const congradulations = () => {
    getVideo(
      `Great job! You've finished the quiz. You can learn more about ${topic} by clicking the links below.`
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
        <VideoHead
          playing={playing}
          setPlaying={setPlaying}
          videoUrl={videoUrl}
          loopUrl={mentor.loopUrl}
        />
        {!quiz && (
          <>
            <div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">
                    Pick a topic to learn about.
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
            <ReactMarkdown className="h-48 overflow-auto">
              {material}
            </ReactMarkdown>
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
        <div className="flex justify-between items-center">
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
          <ConnectWallet />
          {isLoading && <Spinner />}
        </div>
      </div>
    </div>
  );
}
