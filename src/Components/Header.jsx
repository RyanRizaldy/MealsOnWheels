
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../image/MealsOnWheels1.png'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';


function Header() {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" height={"40px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Menu">Menu</Nav.Link>
              <Nav.Link href="About">About</Nav.Link>
              <Nav.Link href="Contact">Contact</Nav.Link>
            </Nav>

            <div className="navLogin">
              <a
                href="Login"
                className="text-decoration-none text-dark fw-semibold mx-3"
              >
                Login
              </a>
              <a href="Register">
                <Button variant="dark" className="navButton">
                  Get Started
                </Button>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;