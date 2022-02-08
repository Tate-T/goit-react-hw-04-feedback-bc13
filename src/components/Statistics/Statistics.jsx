import s from './Statistics.module.css';

const Statistics = (title, props) => {
    return (
        <ul className={s.statisticsList}>
            <li>Good:</li>
            <li>Neutral:</li>
            <li>Bad:</li>
        </ul>
    )

}

export default Statistics