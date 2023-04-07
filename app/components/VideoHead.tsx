import dynamic from "next/dynamic";
import styles from "./App.module.scss";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

type VideoHeadProps = {
  playing?: boolean;
  setPlaying?: (playing: boolean) => void;
  videoUrl?: string;
  loopUrl?: string;
};

export default function VideoHead({
  playing,
  setPlaying,
  videoUrl,
  loopUrl,
}: VideoHeadProps) {
  return (
    <div className={styles["head-video"]}>
      {playing && (
        <ReactPlayer
          className={`${styles["react-player"]} ${styles["front"]}`}
          playing={playing}
          onEnded={() => {
            setPlaying!(false);
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
        url={loopUrl ? loopUrl : "/videos/vitalik.mp4"}
        width="100%"
        height="100%"
      />
    </div>
  );
}
