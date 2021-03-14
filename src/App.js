import React, { Component } from 'react';
import Section from './components/Section';
import PageTitle from './components/PageTitle';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = event => {
    const { name } = event.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() ? Math.round((this.state.good / this.countTotalFeedback()) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <PageTitle title="React. HomeWork-2.1. Feedback" />
        <Section title="Please leave your feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.countFeedback} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          ) : (
            <Notification message="No feedback given yet" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
