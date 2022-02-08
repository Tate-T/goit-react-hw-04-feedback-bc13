import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ option, clickFeedback }) => {
    return (
        <>
            {/* {options.map(option => (
                <button type="button" name={option} key={option} onClick={clickFeedback}>{option}</button>
            ))} */}

            <button type="button" name={option} key={option} onClick={clickFeedback} className={s.btns}>Good</button>
            <button type="button" name={option} key={option} onClick={clickFeedback} className={s.btns}>Neutral</button>
            <button type="button" name={option} key={option} onClick={clickFeedback} className={s.btns}>Bad</button>
        </>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedbacks: PropTypes.func,
    options: PropTypes.array
}

export default FeedbackOptions