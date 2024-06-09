import React, { useState, useEffect } from "react";

const LapRow = ({ index, lap, previousLapTime, formatTime, updateComment }) => {
  const [comment, setComment] = useState(lap.comment);

  useEffect(() => {
    setComment(lap.comment);
  }, [lap.comment]);

  const handleCommentChange = (e) => {
    const newComment = e.target.value;
    setComment(newComment);
    updateComment(index, newComment);
  };

  const { hours, minutes, seconds, milliseconds } = formatTime(
    lap.time - previousLapTime
  );
  const {
    hours: totalHours,
    minutes: totalMinutes,
    seconds: totalSeconds,
    milliseconds: totalMilliseconds,
  } = formatTime(lap.time);

  return (
    <div className="timer-line">
      <div>{lap.lapNumber}</div>
      <div>
        {hours && `${hours}:`}
        {minutes}:{seconds}.
        <span className="milliseconds-lap">{milliseconds}</span>
      </div>
      <div>
        {totalHours && `${totalHours}:`}
        {totalMinutes}:{totalSeconds}.
        <span className="milliseconds-lap">{totalMilliseconds}</span>
      </div>
      <div>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add comment"
        />
      </div>
    </div>
  );
};

export default LapRow;
