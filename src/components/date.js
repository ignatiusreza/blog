import React from 'react';
import PropTypes from 'prop-types';

const months = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'Mei',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
};

const Date = ({ date }) => {
  const [year, month, day] = date.split('-');

  return (
    <div className="font-mono whitespace-no-wrap leading-none">
      <div className="inline-block align-middle font-bold text-3xl md:text-4xl">
        {day}
      </div>
      <div className="inline-block align-middle text-sm md:text-base rotate-90 -ml-1 -mt-1">
        {months[month]}
      </div>
      <div className="text-sm md:text-base ml-px">{year}</div>
    </div>
  );
};
Date.propTypes = {
  date: PropTypes.string,
};

export default Date;
