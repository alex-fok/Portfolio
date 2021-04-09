import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const Navigator = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>Alex Fok</Navbar.Brand>
        <Nav className='mr-auto'>
        <Nav.Item>
          <Nav.Link><Link to='/'>About Me</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to='/more'>More</Link></Nav.Link>
        </Nav.Item>
        </Nav>
    </Navbar>
  );
}

export default Navigator;