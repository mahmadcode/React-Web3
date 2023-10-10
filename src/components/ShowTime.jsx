import React, { memo, useEffect, useState } from "react";

const ShowTime = memo(() => {
  const [currentTime, setCurrentTime] = useState(null);
  const [renders, setRenders] = useState(0);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    setRenders(renders + 1);
  }, [clicks]);

  const handleTime = () => {
    const clickCount = clicks + 1;
    setClicks(clickCount);
    setCurrentTime(new Date().toLocaleTimeString());
    console.log("Button Clicks");
  };

  return (
    <>
      <button onClick={handleTime}>Show current time</button>
      {currentTime && <p>{currentTime}</p>}
      <p>Renders Counts {renders}</p>
    </>
  );
});

export default ShowTime;
