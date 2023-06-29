
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../image/MealsOnWheels1.png'
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
      <Navbar  className="navbar">
          <Navbar.Brand href="#home"><img src={Logo} alt="Logo" height={"40px"}/></Navbar.Brand>
          <Nav className="me-auto navMenu">
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="#features">Stores</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>
          <div className="navLogin">
            <p>Login</p>
            <Button variant="dark" className='navButton'>Get Started</Button>
          </div>    
      </Navbar>
    </>
  );
}

export default Header;