import React from 'react';
import PropTypes from 'prop-types';

import Ocean from 'src/assets/videos/ocean.mp4';
import './styles.scss';

const Video = ({ location }) => {
  console.log('ma localisation : ', location);
  const videoPosition = location === '/' ? 'relative' : 'fixed';

  return (
    <video
      autoPlay
      loop
      muted
      style={{
        position: videoPosition,
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
};

Video.propTypes = {
  location: PropTypes.string,
};

Video.defaultProps = {
  location: undefined,
};

export default Video;
