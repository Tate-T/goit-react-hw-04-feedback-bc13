import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
    return (
        <>
            {/* {options.map(option => (
                <button type="button" name={option} key={option} onClick={clickFeedback}>{option}</button>
            ))} */}

            <button type="button" name={option} key={option} onClick={onLeaveFeedback} className={s.btns}>Good</button>
            <button type="button" name={option} key={option} onClick={onLeaveFeedback} className={s.btns}>Neutral</button>
            <button type="button" name={option} key={option} onClick={onLeaveFeedback} className={s.btns}>Bad</button>
        </>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    option: PropTypes.string
}

export default FeedbackOptions