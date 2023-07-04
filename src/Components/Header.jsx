
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../image/MealsOnWheels1.png'
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
      <Navbar  className="navbar">
          <Navbar.Brand href="/"><img src={Logo} alt="Logo" height={"40px"}/></Navbar.Brand>
          <Nav className="me-auto navMenu">
            <Nav.Link href="Menu">Menu</Nav.Link>
            <Nav.Link href="About">About Us</Nav.Link>
            <Nav.Link href="Contact">Contact Us</Nav.Link>
          
          </Nav>
          <div className="navLogin">
            <a href='Login' className='text-decoration-none text-dark mx-3 fw-semibold'>Login</a>
            <Button variant="dark" className='navButton'>Get Started</Button>
          </div>    
      </Navbar>
    </>
  );
}

export default Header;