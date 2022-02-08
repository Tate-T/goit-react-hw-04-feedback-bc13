import s from './Statistics.module.css';

const Statistics = (options) => {
    return (
        <ul className={s.statisticsList}>
            <li>Good: {options.good}</li>
            <li>Neutral: {options.neutral}</li>
            <li>Bad: {options.bad}</li>
        </ul>
    )

}

export default Statistics