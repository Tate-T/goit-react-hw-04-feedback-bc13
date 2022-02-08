import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    options: []
  }

  nameFeedback = () => {

  }

  // countTotalFeedback = () = > {

  // }

  // countPositiveFeedbackPercentage = () => {

  // }

  render() {
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions options={this.state.options} countTotalFeedback={this.countTotalFeedback} />
          <Statistics title={"Statistics"} good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positivePercentage={this.state.positivePercentage} />
        </Section>
      </>
    )
  }
}

export default App;
