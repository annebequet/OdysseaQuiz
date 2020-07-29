import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Video = () => (
    <video
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        objectFit: 'cover',
        zIndex: '-1',
      }}
    >
      <source
        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rytughwRxj1s1gmp3/videoblocks-underwater-landscape-of-coral-reef-amazing-underwater-marine-life-world-scuba-diving-and-snorkeling_baj3ircnz__d3d6d16680620376fe9c58e37c21cfb7__P360.mp4"
        type="video/mp4"
      />
    </video>
);

export default Video;
