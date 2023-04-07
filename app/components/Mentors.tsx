import styles from "./App.module.scss";
import { ReactPlayer } from "./Learn";

export default function Mentors({
  handleSelect,
}: {
  handleSelect: (index: number) => void;
}) {
  return (
    <div className="artboard phone-1">
      <h1 className="text-center font-bold text-lg">Mentor Machines</h1>
      <div className={styles["head-video"]}>
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
      <button
        className="btn btn-block btn-sm btn-info"
        onClick={() => handleSelect(0)}
      >
        block
      </button>
      <div className={styles["head-video"]}>
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
      <button
        className="btn btn-block btn-sm btn-success"
        onClick={() => handleSelect(1)}
      >
        block
      </button>
      <div className={styles["head-video"]}>
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
      <button className="btn btn-block btn-sm" onClick={() => handleSelect(2)}>
        block
      </button>
    </div>
  );
}
