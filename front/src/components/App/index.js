// == Import npm
import React from 'react';

// == Import
import Counter from 'src/containers/Counter';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
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
        src="https://vod-progressive.akamaized.net/exp=1595599730~acl=%2A%2F1233006834.mp4%2A~hmac=2cef48f5b9833f10c8f24013ca8ef0db854432820e9c5789a247ab20aba605e2/vimeo-prod-skyfire-std-us/01/3642/12/318214648/1233006834.mp4?filename=Ocean+Turtle+-+797.mp4"
        type="video/mp4"
      />
    </video>
    <img src={reactLogo} alt="react logo" />
    <h1>ODYSSEA QUIZ</h1>
    <Counter />
  </div>
);

// == Export
export default App;
