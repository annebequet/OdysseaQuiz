// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Title from 'src/components/Title';
import './styles.scss';

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
        src="https://vod-progressive.akamaized.net/exp=1595615976~acl=%2A%2F402718307.mp4%2A~hmac=4a73c1d219494115070c39aedee9fd5c42ff4450ce7ff826796914d489c09cf9/vimeo-prod-skyfire-std-us/01/2195/5/135977474/402718307.mp4?filename=Scuba+Diving+-+312.mp4"
        type="video/mp4"
        alt="Video by Caelan Kelley from Pixabay"
      />
    </video>
    <Header />
    <Title />
    <Footer />
  </div>
);

// == Export
export default App;
