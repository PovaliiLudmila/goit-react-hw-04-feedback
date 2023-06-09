import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedback_container}> 
    {options.map(option => (
    <button
      key={option}
      type="button"
      name={option}
      onClick={() => onLeaveFeedback(option)}
      className={css.feedback_btn}
    >
        {option}
    </button>
  ))}
  </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}