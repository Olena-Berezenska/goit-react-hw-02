import React from 'react';
import { useState } from 'react';
import Feedback from '../Feedback/Feedback';

const Options = ({ handleClick, totalFeedback, handleClickReset }) => {
  return (
    <>
      <button onClick={() => handleClick('good')}>Good</button>
      <button onClick={() => handleClick('neutral')}>Neutral</button>
      <button onClick={() => handleClick('bad')}>Bad</button>
      {totalFeedback >= 1 && <button onClick={handleClickReset}>Reset</button>}
    </>
  );
};

export default Options;
