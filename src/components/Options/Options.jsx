import React from 'react';
import { useState } from 'react';
import Feedback from '../Feedback/Feedback';
import s from './Options.module.css';
const Options = ({ updateFeedback, totalFeedback, handleClickReset }) => {
  return (
    <>
      <button className={s.button} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button className={s.button} onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button className={s.button} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback >= 1 && <button onClick={handleClickReset}>Reset</button>}
    </>
  );
};

export default Options;
