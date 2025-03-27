import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import { useState } from 'react';

const App = () => {
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
      <Description />
      <Options
        handleClick={handleClick}
        totalFeedback={totalFeedback}
        handleClickReset={handleClickReset}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={counts} totalFeedback={totalFeedback} />
      )}
    </>
  );
};

export default App;
