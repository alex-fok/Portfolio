import React from 'react';
import ModalWrapper from '../components/ModalWrapper';
import AboutMe from '../components/AboutMe';
const Home = () => {
  return (
    <ModalWrapper title='About Me' >
      <AboutMe />
    </ModalWrapper>
  );
}

export default Home;
