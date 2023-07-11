
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../image/MealsOnWheels1.png'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';


function Header() {
  const [userLog,setUserLog] = useState(null)
  useEffect(()=>{
    setUserLog(JSON.parse(sessionStorage.getItem("user")))
  },[])
  const handleLogout = ()=>{
    sessionStorage.clear()
    window.location.href="/"
  }
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

              {userLog && userLog.role === "member" && (
                 <Nav.Link href="Member">Dashboard</Nav.Link>
              )}
               {userLog && userLog.role === "driver" && (
                 <Nav.Link href="Driver">Dashboard</Nav.Link>
              )} {userLog && userLog.role === "partner" && (
                <Nav.Link href="Partner">Dashboard</Nav.Link>
             )} {userLog && userLog.role === "donor" && (
              <Nav.Link href="Donor">Dashboard</Nav.Link>
           )}
            {userLog && userLog.role === "volunteer" && (
                 <Nav.Link href="Volunteer">Dashboard</Nav.Link>
              )}
               {userLog && userLog.role === "admin" && (
                 <Nav.Link href="Admin">Dashboard</Nav.Link>
              )}
              
            </Nav>
                  
            <div className="navLogin">
            {!userLog &&   (
              <>
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
              </>
              )}
              {userLog &&   (
              <>
               <Button
                onClick={handleLogout} variant="dark" 
                className="text-decoration-none  fw-semibold mx-3" >
                Log Out
              </Button>
              </>
              )}
             
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;