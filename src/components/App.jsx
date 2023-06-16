import { useState } from 'react';
import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Notification } from './Notification/Notification.jsx'; 
import { Section } from './Section/Section.jsx'; 

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleLeaveFeedback = event => {
    const { name } = event.target;
    switch (name) {
     case 'good':
       setGood((state) => state + 1);
       break;
     case 'neutral':
       setNeutral((state) => state + 1);
       break;
     case 'bad':
       setBad((state) => state + 1);
       break;
       default:
        return undefined;;
    }};
  const feedbackNames = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

 

     return (
        <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackNames}
            onLeaveFeedback={handleLeaveFeedback} 
            />
            { countTotalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
            />
            ) : (
            <Notification message="There is no feedback"></Notification>
            )}
        </Section>
        </>
  );
}
