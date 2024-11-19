import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavScrollExample({ title = 'Encoder Hu Mai', aboutName, modeLable, handelClickMode}) {
  return (
    <div >
    <Navbar expand="lg" className="bg-body-tertiary " >
      <Container fluid>
        <Navbar.Brand ><Link className='navbar nav-link' to="/">{title}</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link className='navbar nav-link' to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link className='navbar nav-link' to="/about">{aboutName}</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Check 
            onClick={handelClickMode}
              type="switch"
              id="custom-switch"
              label={modeLable}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

NavScrollExample.propTypes = {
  title: PropTypes.string, // No need to make title required as it has a default value
  aboutName: PropTypes.string
};

export default NavScrollExample;
