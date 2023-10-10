import React, { memo } from "react";

const ArrayPair = memo(() => {
  let numbers = [1, 2, 3, 5, 6, 7];
  const target = 9;

  const newPairs = [];
  const uniqueNumbers = new Set();

  for (const num of numbers) {
    const final = target - num;

    if (uniqueNumbers.has(final)) {
      newPairs.push([num, final]);
      uniqueNumbers.delete(final);
    }
    uniqueNumbers.add(num);
  }

  console.log(newPairs);

  return <></>;
});

export default ArrayPair;
