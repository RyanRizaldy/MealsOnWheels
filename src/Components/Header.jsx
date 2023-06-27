
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../image/MealsOnWheels1.png'

function Header() {
  return (
    <>
      <Navbar  className="navbar">
          <Navbar.Brand href="#home"><img src={Logo} alt="Logo" height={"40px"}/></Navbar.Brand>
          <Nav className="me-auto navMenu">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>     
      </Navbar>
    </>
  );
}

export default Header;