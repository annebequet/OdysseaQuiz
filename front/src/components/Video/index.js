import React from 'react';
import PropTypes from 'prop-types';

import Ocean from 'src/assets/videos/ocean.mp4';
import './styles.scss';

const Video = () => (
    <video
      autoPlay
      loop
      muted
      style={{
        width: '100%',
        height: '100vh',
        left: '0',
        top: '0',
        objectFit: 'cover',
        zIndex: '-1',
      }}
    >
      <source
        src={Ocean}
        type="video/mp4"
      />
    </video>
);

export default Video;
