import PropTypes from 'prop-types';
import {StatisticsSection, StatisticsList, StatisticsBox, StatisticsLabel, StatisticsPercent} from './Statistics.styled';

export const Statistics = ({title, data}) => {
    return (
        <StatisticsSection>
            {title && <h2>{title}</h2>}
            <StatisticsList>
                {data.map(({label, percentage, id}) => {
                    return (
                        <StatisticsBox key={id} prop={label}>
                            <StatisticsLabel>{label}</StatisticsLabel>
                            <StatisticsPercent>{percentage}%</StatisticsPercent>
                        </StatisticsBox>
                    );
                })}
            </StatisticsList>
        </StatisticsSection>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
