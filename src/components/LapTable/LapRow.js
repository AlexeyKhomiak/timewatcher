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

  const { minutes, seconds, milliseconds } = formatTime(
    lap.time - previousLapTime
  );
  const {
    minutes: totalMinutes,
    seconds: totalSeconds,
    milliseconds: totalMilliseconds,
  } = formatTime(lap.time);

  return (
    <tr>
      <td>{lap.lapNumber}</td>
      <td>
        {minutes}:{seconds}.
        <span className="milliseconds-lap">{milliseconds}</span>
      </td>
      <td>
        {totalMinutes}:{totalSeconds}.
        <span className="milliseconds-lap">{totalMilliseconds}</span>
      </td>
      <td>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add comment"
        />
      </td>
    </tr>
  );
};

export default LapRow;
