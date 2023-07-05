import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../image/MealsOnWheels1.png'

function Footer(){
return (
  <div className="footer">
    <Container className="footerContainer">
      <Row>
        <Col md={5} lg={5} sm={12} className="footerLogoContainer">
          <img src={Logo} alt="Logo" className="footerLogo" />
        </Col>
        <Col md={7} lg={7} sm={12}>
          <Row>
            <Col md={4} lg={4} sm={12} className="footerLink">
              <h4>Eat</h4>
              <ul>
                <li>
                  <a href="Menu">Menu</a>
                </li>
                <li>
                  <a href="#">Location</a>
                </li>
                <li>
                  <a href="#">Download Our App</a>
                </li>
              </ul>
            </Col>
            <Col md={4} lg={4} sm={12} className="footerLink">
              <h4>About</h4>
              <ul>
                <li>
                  <a href="Register">Become Patner</a>
                </li>
                <li>
                  <a href="Donation">Donation</a>
                </li>
                <li>
                  <a href="#">FAQ's</a>
                </li>
              </ul>
            </Col>
            <Col md={4} lg={4} sm={12} className="footerLink">
              <h4>Follow</h4>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr></hr>
      <div className="copyright">
        <p>© 2023 Meals On Wheels</p>
        <div>
          <a href="Terms" className=" text-decoration-none text-light">
            <p>Term and Condition</p>
          </a>
        </div>
      </div>
    </Container>
  </div>
);
}
export default Footer;