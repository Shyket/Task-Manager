import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

export const Timer = ({ props_time }) => {
  const [time, setTime] = useState(parseInt(props_time));
  const [isActive, setIsActive] = useState(false);

  const hour = Math.floor(time / 3600);
  const minute = Math.floor((time-hour*3600) / 60);
  const second = (time- hour*3600 - minute*60);

  const toogleActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      var interval = setInterval(() => {
        setTime(parseInt(time) + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time,isActive]);

  return (
    <>
      <p>
        <span>{hour}</span> :
        <span>{minute}</span> :
        <span>{second}</span>
      </p>
      <button
        className={`timer-button ${isActive ? "stop-button" : "start-button"} `}
        onClick={() => toogleActive()}
      >
          {isActive ? "Stop" : "Start"}
      </button>
    </>
  );
};
