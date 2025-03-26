import React from 'react';
import { useState } from 'react';
import Feedback from '../Feedback/Feedback';

const Options = () => {
  const [counts, setcounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleClick = option => {
    setcounts({
      ...counts,
      [option]: counts[option] + 1,
    });
  };
  const totalFeedback = counts.good + counts.neutral + counts.bad;
  const handleClickReset = () => {
    setcounts({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <>
      <button onClick={() => handleClick('good')}>Good</button>
      <button onClick={() => handleClick('neutral')}>Neutral</button>
      <button onClick={() => handleClick('bad')}>Bad</button>
      {totalFeedback >= 1 && <button onClick={handleClickReset}>Reset</button>}
      <Feedback feedback={counts} totalFeedback={totalFeedback} />
    </>
  );
};

export default Options;
