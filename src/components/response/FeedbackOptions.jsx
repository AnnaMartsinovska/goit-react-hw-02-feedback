import { StyledButton } from './Response.styled';
import propTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <StyledButton onClick={() => onLeaveFeedback(options)}>Good</StyledButton>
      <StyledButton onClick={() => onLeaveFeedback(options)}>
        Neutral
      </StyledButton>
      <StyledButton onClick={() => onLeaveFeedback(options)}>Bad</StyledButton>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
