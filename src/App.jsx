import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import { useEffect, useState } from 'react';

const App = () => {
  const [counts, setcounts] = useState(() => {
    const SavedState = window.localStorage.getItem('CountState');
    console.log(SavedState);
    return SavedState !== null
      ? JSON.parse(SavedState)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    window.localStorage.setItem('CountState', JSON.stringify(counts));
  }, [counts]);

  const updateFeedback = option => {
    setcounts({
      ...counts,
      [option]: counts[option] + 1,
    });
  };
  const totalFeedback = counts.good + counts.neutral + counts.bad;
  const positiveFeedback = Math.round((counts.good / totalFeedback) * 100);
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
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleClickReset={handleClickReset}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={counts}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
};

export default App;
