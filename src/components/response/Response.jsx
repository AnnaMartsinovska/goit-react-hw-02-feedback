import React from 'react';
import {
  StyledHeader,
  StyledButton,
  StyledTitle,
  StyledList,
  StyledWrap,
} from './Response.styled';

export class Response extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prev => ({ good: prev.good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prev => ({ neutral: prev.neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prev => ({ bad: prev.bad + 1 }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total !== 0) {
      const feedback = Math.ceil(Number((this.state.good / total) * 100));
      return feedback;
    }
    return 0;
  };

  render() {
    return (
      <StyledWrap>
        <StyledHeader>Please leave feedback</StyledHeader>
        <StyledButton onClick={this.handleGood}>Good</StyledButton>
        <StyledButton onClick={this.handleNeutral}>Neutral</StyledButton>
        <StyledButton onClick={this.handleBad}>Bad</StyledButton>
        <StyledTitle>Statistics</StyledTitle>
        <StyledList>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
          <li>Total:{this.countTotalFeedback()}</li>
          <li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li>
        </StyledList>
      </StyledWrap>
    );
  }
}
