import React, { useState } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const { name } = e.target;
    switch (name) {
      case "good": setGood(good + 1);
        break;
      case "neutral": setNeutral(neutral + 1);
        break;
      case "bad": setBad(bad + 1);
        break;

      default: return;
    }
  }

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positiveFeedback = (Math.round((good * 100) / total))
    return positiveFeedback
  }

  const total = countTotalFeedback();
  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={Object.keys({ good, neutral, bad })} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={"Statistics"}>
        {total ?
          (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
          ) :
          (<Notification message="No feedback given" />)
        }
      </Section>
    </>
  )
}

export default App;
