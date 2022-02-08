import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(option => (
                <button type="button" name={option} key={option} onClick={onLeaveFeedback} className={s.btns}>{option}</button>
            ))}

            {/* <button type="button" name='good' key={option} onClick={onLeaveFeedback} className={s.btns}>Good</button>
            <button type="button" name='neutral' key={option} onClick={onLeaveFeedback} className={s.btns}>Neutral</button>
            <button type="button" name='bad' key={option} onClick={onLeaveFeedback} className={s.btns}>Bad</button> */}
        </>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.array
}

export default FeedbackOptions