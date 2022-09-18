import PropTypes from 'prop-types';
import { Statlist, StatItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad }) => {
    return (
        <Statlist>
            <StatItem>good:{good}</StatItem>
            <StatItem>neutral:{neutral}</StatItem>
            <StatItem>bad:{bad}</StatItem>
        </Statlist>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};