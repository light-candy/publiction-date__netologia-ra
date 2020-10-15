import React from 'react';
import { Video } from './Video';
import PropTypes from 'prop-types';

export function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

VideoList.propTypes = {
    list: PropTypes.array
};
