import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigator = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>Alex Fok</Navbar.Brand>
        <Nav className='mr-auto'>
        <Nav.Item>
          <Nav.Link href='/Portfolio/home'>About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/Portfolio/more'>More</Nav.Link>
        </Nav.Item>
        </Nav>
    </Navbar>
  );
}

export default Navigator;