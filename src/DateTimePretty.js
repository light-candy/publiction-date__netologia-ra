import React from 'react';
import { DateTime } from './DateTime';
import PropTypes from 'prop-types';

export const DateTimePretty = (Component) => (props) => {

    const difference = new Date().getTime() - new Date(props.date).getTime();
    const hour = 3600 * 1000;
    const minute = 60 * 1000;

    if (difference > (24 * hour)) {
      const diffPretty = Math.round(difference /(24 * hour));
      return(<Component {...props} date={`${diffPretty} дней назад`} />);
    } else if (difference >= hour) {
      const diffPretty = Math.round(difference / hour);
      return(<Component {...props} date={`${diffPretty} часов назад`} />);
    } else if(difference < hour) {
      const diffPretty = Math.round(difference / minute);
      return(<Component {...props} date={`${diffPretty} минут назад`} />);
    }
};

export const PrettyTime = DateTimePretty(DateTime);

DateTimePretty.propTypes = {
    date: PropTypes.string
};
