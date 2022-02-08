import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, nameFeedback }) => {
    return (
        <>
            {options.map(option => (
                <button type="button" key={option} onClick={nameFeedback}>{option}</button>
            ))}
        </>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedbacks: PropTypes.func,
    options: PropTypes.array
}

export default FeedbackOptions