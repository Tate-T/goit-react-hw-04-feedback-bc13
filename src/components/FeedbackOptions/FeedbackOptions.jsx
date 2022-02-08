import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ option, clickFeedback }) => {
    return (
        <div className={s.feedbackBtns}>
            {/* {options.map(option => (
                <button type="button" name={option} key={option} onClick={clickFeedback}>{option}</button>
            ))} */}

            <button type="button" name={option} key={option} onClick={clickFeedback}>Good</button>
            <button type="button" name={option} key={option} onClick={clickFeedback}>Neutral</button>
            <button type="button" name={option} key={option} onClick={clickFeedback}>Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedbacks: PropTypes.func,
    options: PropTypes.array
}

export default FeedbackOptions