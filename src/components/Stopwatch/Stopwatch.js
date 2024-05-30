import React, { useState, useEffect } from "react";
import LapTable from "../LapTable/LapTable";
import formatTime from "../../utils/formatTime";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [showHeaders, setShowHeaders] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    setShowHeaders(false);
  };

  const handleLap = () => {
    setLaps([{ lapNumber: laps.length + 1, time, comment: "" }, ...laps]);
    setShowHeaders(true);
  };

  const updateComment = (index, comment) => {
    setLaps((prevLaps) => {
      const newLaps = [...prevLaps];
      newLaps[index] = {
        ...newLaps[index],
        comment,
      };
      return newLaps;
    });
  };

  // const formatTime = (time) => {
  //   const getMilliseconds = `0${Math.floor((time % 1000) / 10)}`.slice(-2);
  //   const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
  //   const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
  //   const getHours = `0${Math.floor(time / 3600000)}`.slice(-2);
  //   return {
  //     hours: time < 3600000 ? null : getHours,
  //     minutes: getMinutes,
  //     seconds: getSeconds,
  //     milliseconds: getMilliseconds,
  //   };
  // };

  const { hours, minutes, seconds, milliseconds } = formatTime(time);

  return (
    <div className="stopwatch">
      <h1>TimeWatcher</h1>
      <div className="stopwatch-time">
        {hours && `${hours}:`}
        {minutes}:{seconds}.<span className="milliseconds">{milliseconds}</span>
      </div>
      <div className="stopwatch-buttons">
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLap}>Lap</button>
      </div>
      <LapTable
        laps={laps}
        formatTime={formatTime}
        updateComment={updateComment}
        showHeaders={showHeaders}
      />
    </div>
  );
};

export default Stopwatch;
