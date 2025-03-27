import React from 'react';
import { useState } from 'react';
import Feedback from '../Feedback/Feedback';
import s from './Options.module.css';
const Options = ({ handleClick, totalFeedback, handleClickReset }) => {
  return (
    <>
      <button className={s.button} onClick={() => handleClick('good')}>
        Good
      </button>
      <button className={s.button} onClick={() => handleClick('neutral')}>
        Neutral
      </button>
      <button className={s.button} onClick={() => handleClick('bad')}>
        Bad
      </button>
      {totalFeedback >= 1 && <button onClick={handleClickReset}>Reset</button>}
    </>
  );
};

export default Options;
