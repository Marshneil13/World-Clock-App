import React from "react";
import "./Difference.css";

function Difference({ time1, time2, date1, date2 }) {
  const t1 = time1.split(":");
  const t2 = time2.split(":");
  const d1 = parseInt(date1.split("-")[2]);
  const d2 = parseInt(date2.split("-")[2]);

  const hours1 = parseInt(t1[0]);
  const hours2 = parseInt(t2[0]);
  const minutes1 = parseInt(t1[1]);
  const minutes2 = parseInt(t2[1]);
  const seconds1 = parseInt(t1[2]);
  const seconds2 = parseInt(t2[2]);

  let count1 = 0;
  let count2 = 0;

  if (d1 > d2) {
    count1 = (d1 - d2) * 86400 + hours1 * 3600 + minutes1 * 60 + seconds1;
    count2 = hours2 * 3600 + minutes2 * 60 + seconds2;
  } else if (d2 > d1) {
    count2 = (d2 - d1) * 86400 + hours2 * 3600 + minutes2 * 60 + seconds2;
    count1 = hours1 * 3600 + minutes1 * 60 + seconds1;
  } else {
    count1 = hours1 * 3600 + minutes1 * 60 + seconds1;
    count2 = hours2 * 3600 + minutes2 * 60 + seconds2;
  }

  const difference = Math.max(count1, count2) - Math.min(count1, count2);
  const Hr = parseInt(difference / 3600);
  const Min = parseInt((difference % 3600) / 60);
  const Sec = (difference % 3600) % 60;

  console.log("HRS", Hr);
  console.log("MINS", Min);
  console.log("SECS", Sec);

  return (
    <div className="diffValue">
      <div className="hourDiffDiv">
        {Hr > 0 && (
          <div>
            <p className="hourDiffVal">{`${Hr} hrs`}</p>
          </div>
        )}
      </div>

      <div className="minDiffDiv">
        {Min > 0 && (
          <div>
            <p className="minDiffVal">{`${Min} mins`}</p>
          </div>
        )}
      </div>

      <div>
        {count1 - count2 === 0 && (
          <div>
            <p className="hourDiffVal">No time difference</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Difference;
