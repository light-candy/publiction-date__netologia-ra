import React from 'react';
import { PrettyTime } from './DateTimePretty';
import PropTypes from 'prop-types';

export function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen>
            </iframe>
            <PrettyTime date={props.date} />
        </div>
    );
}
Video.propTypes = {
    url: PropTypes.string,
    date: PropTypes.string
};
