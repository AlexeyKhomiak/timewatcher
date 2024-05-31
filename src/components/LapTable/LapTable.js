import React from "react";
import LapRow from "./LapRow";

const LapTable = ({ laps, formatTime, updateComment, showHeaders }) => {
  return (
    <div className="stopwatch-table-container">
      <div className="stopwatch-table">
        {showHeaders && (
          <div className="timertime-head">
              <div>#</div>
              <div>Lap Time</div>
              <div>Total Time</div>
              <div>Comment</div>
          </div>
        )}
        <div className="timerline-body">
          {laps.map((lap, index) => (
            <LapRow
              key={index}
              index={index}
              lap={lap}
              previousLapTime={
                index < laps.length - 1 ? laps[index + 1].time : 0
              }
              formatTime={formatTime}
              updateComment={updateComment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LapTable;
