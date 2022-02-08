import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <div className={s.section}>
            {title && <h1>{title}</h1>}
            {children}
        </div >
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Section