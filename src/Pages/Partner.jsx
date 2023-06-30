import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../image/rothy.png";
import food from "../image/pancake.jpg";
import { Button } from "react-bootstrap";

function Partner() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(255, 235, 214)" }}>
        <Container className="userInfoContainer">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <p style={{ textAlign: "right", margin: "15px" }}>Edit</p>
            </Col>
            <Col lg={4} md={12} sm={12} className="userPic">
              <img src={pic} alt="Logo" className="rounded-circle" height={"150px"} />
              <div>
                <h5>Brand Name</h5>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="userInfo">
                <h5>Email</h5>
                <p>example.test@gmail.com</p>
              </div>
              <div className="userInfo">
                <h5>Address</h5>
                <p>this is Partner address</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="userInfo">
                <h5>Status</h5>
                <p>Partner</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="contentTitle">
        <h2>Task</h2>
      </Container>

      <div className="contentWrapper">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12} className="cardWrapper">
              <div className="card">
                <h5 style={{ fontWeight: "bold", textAlign : 'center'}}>Meals Plan 1</h5>
                <h5 className="my-3">Member Name</h5>

                <h4 className="mt-3">
                 This will be address of the member
                </h4>
                <div className="reciveWrapper">
                  <div className="cardStatus">
                    <Button variant="dark" className="reciveButton">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </Col>            
            <Col lg={3} md={6} sm={12} className="cardWrapper">
              <div className="card">
                <h5 style={{ fontWeight: "bold", textAlign : 'center'}}>Meals Plan 1</h5>
                <h5 className="my-3">Member Name</h5>

                <h4 className="mt-3">
                 This will be address of the member
                </h4>
                <div className="reciveWrapper">
                  <div className="cardStatus">
                    <Button variant="dark" className="reciveButton">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </Col>            
            <Col lg={3} md={6} sm={12} className="cardWrapper">
              <div className="card">
                <h5 style={{ fontWeight: "bold", textAlign : 'center'}}>Meals Plan 1</h5>
                <h5 className="my-3">Member Name</h5>

                <h4 className="mt-3">
                 This will be address of the member
                </h4>
                <div className="reciveWrapper">
                  <div className="cardStatus">
                    <Button variant="dark" className="reciveButton">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </Col>            
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Partner;
