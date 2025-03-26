import React from 'react';
import Notification from '../Notification/Notification';

const Feedback = ({ feedback, totalFeedback }) => {
  // const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  {
    if (totalFeedback === 0) {
      return <Notification />;
    }
    return (
      <>
        <p>Good: {feedback.good} </p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {Math.round((feedback.good / totalFeedback) * 100)} %</p>
      </>
    );
  }
};

export default Feedback;
