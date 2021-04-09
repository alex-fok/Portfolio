import { Fragment } from 'react';
import ModalWrapper from '../ModalWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './index.css';

const PortfolioContainer = () => {
  return (
    <Fragment>
      <ModalWrapper title='General Info'>
        <Container>
          <Row>
            <Col lg={2}><p><strong>Name:</strong></p></Col>
            <Col className='text-left'><p>Alexander Tsz Ming Fok</p></Col></Row>
          <Row>
            <Col lg={2}><p><strong>Email:</strong></p></Col>
            <Col className='text-left'><p>foktmalexander@gmail.com</p></Col></Row>
          <Row>
            <Col lg={2}><p><strong>Github:</strong></p></Col>
            <Col className='text-left'><p><a href='https://github.com/alex-fok/'>https://github.com/alex-fok/</a></p></Col>
          </Row>
          <Row>
            <Col lg={2}><p><strong>LinkedIn:</strong></p></Col>
            <Col className='text-left'><a href='https://www.linkedin.com/in/fokalexander428/'>https://www.linkedin.com/in/fokalexander428/</a></Col>
          </Row>
        </Container>
      </ModalWrapper>
      <ModalWrapper title='Resume'>
        <iframe title='resume' src='./pdf/resume.pdf' width='100%' height='500px'></iframe>
        <a href='./pdf/resume.pdf' download='resume.pdf'>Download</a>
      </ModalWrapper>
      <ModalWrapper title='Projects'>
        <p>Solar System Navigator</p>
        <Row>
          <Col lg={6}>
            <img 
              src='https://github.com/sloanlacey/Project-1/raw/main/assets/images/homepage.png'
              alt='solar-system-navigator'/>
          </Col>
          <Col lg={2}>
            <a
              className='align-self-center'
              href='https://sloanlacey.github.io/Project-1/'
            >Live URL</a>
          </Col>
          <Col lg={4}>
            <a
              className='align-self-center'
              href='https://github.com/sloanlacey/Project-1/'
            >Git Repository</a>
          </Col>
        </Row>
        <p className='pt-5'>Recipe Book</p>
        <Row>
          <Col lg={6}>
            <img
              alt='recipe-book'
              src='https://github.com/kurtp23/recipe-book/raw/main/assets/screenshot.png'/>
          </Col>
          <Col lg={2}>
            <a
              className='align-self-center'
              href='https://arcane-peak-55315.herokuapp.com/login/'
            >Live URL</a>
          </Col>
          <Col lg={4}>
            <a
              className= 'align-self-center'
              href='https://github.com/alex-fok/Weather-Dashboard/'
            >Github Repository</a>
          </Col>
        </Row>
      </ModalWrapper>
    </Fragment>
  )
}

export default PortfolioContainer;