import React, { memo, useState } from "react";

const LongString = memo(() => {
  const [string, setString] = useState("");

  const getCharacters = () => {
    let maxCount = 0;
    let currentCount = 1;
    let maxChars = [];

    for (let i = 1; i < string.length; i++) {
      if (string[i] === string[i - 1]) {
        currentCount++;
      } else {
        currentCount = 1;
      }

      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxChars = [string[i]];
      } else if (currentCount === maxCount) {
        maxChars.push(string[i]);
      }
    }

    if (maxCount > 1) {
      const resultText = maxChars.join(",") + ": " + maxCount;
      console.log(resultText);
    } else {
      console.log("No consecutive characters found.");
    }
  };

  return (
    <div className="string-container">
      <input
        type="text"
        placeholder="Enter your string"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <p>Open console for output</p>
      <button onClick={getCharacters}>Get Characters</button>
    </div>
  );
});

export default LongString;
