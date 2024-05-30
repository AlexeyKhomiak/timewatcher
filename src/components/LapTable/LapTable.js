import React from "react";
import LapRow from "./LapRow";

const LapTable = ({ laps, formatTime, updateComment, showHeaders }) => {
  return (
    <div className="stopwatch-table-container">
      <table className="stopwatch-table">
        {showHeaders && (
          <thead>
            <tr>
              <th>#</th>
              <th>Lap Time</th>
              <th>Total Time</th>
              <th>Comment</th>
            </tr>
          </thead>
        )}
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

export default LapTable;
