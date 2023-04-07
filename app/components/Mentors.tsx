import { mentors } from "@/config/mentors";
import { Fragment } from "react";
import VideoHead from "./VideoHead";

export default function Mentors({
  handleSelect,
}: {
  handleSelect: (index: number) => void;
}) {
  return (
    <div className="artboard phone-1">
      <h1 className="text-center font-bold text-lg">Mentor Machines</h1>
      {mentors.map((mentor, index) => {
        return (
          <Fragment key={mentor.name}>
            <VideoHead loopUrl={mentor.loopUrl} />
            <button
              className={
                mentor.button_color === "info"
                  ? `btn btn-block btn-sm btn-info`
                  : mentor.button_color === "success"
                  ? `btn btn-block btn-sm btn-success`
                  : mentor.button_color === "warning"
                  ? `btn btn-block btn-sm btn-warning`
                  : `btn btn-block btn-sm`
              }
              onClick={() => handleSelect(index)}
            >
              {mentor.name}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
