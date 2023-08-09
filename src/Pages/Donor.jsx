import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../image/fili.jpg";
import food from "../image/pancake.jpg";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

function Donor() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    member: "",
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleToggleEditMode = () => {
    if (isEditMode) {
      setIsEditMode(false);
    } else {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,

        name: document.getElementById("name").textContent,
        email: document.getElementById("email").textContent,
      }));
      setIsEditMode(true);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/update_donatur",
        userInfo
      );

      if (response.status === 200) {
        console.log("User information updated successfully:", response.data);
        setIsEditMode(false);
      } else {
        console.error("Failed to update user information:", response.data);
      }
    } catch (error) {
      console.error("Error occurred while updating user information:", error);
    }
  };

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      setUserInfo({
        memberId: userData.roleData.donaturId,
        name: userData.roleData.name,
        email: userData.email,
        username: userData.username || "",
        address: userData.roleData.address,
        phone: userData.roleData.phone,
        role: userData.role,
      });
    }
  }, []);

  return (
    <>
      <div className="userInfoContainer">
        <Container>
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                onClick={handleToggleEditMode}
                style={{
                  margin: "15px",
                  borderRadius: "20px",
                  padding: "10px 20px",
                }}
                variant="dark"
              >
                {isEditMode ? "View Profile" : "Edit Profile"}
              </Button>
            </Col>
            <Col lg={4} md={12} sm={12} className="userPic">
              <img
                src={pic}
                alt="Logo"
                height={"150px"}
                className="rounded-circle"
              />
            </Col>
            <Col lg={4} md={6} sm={12}>
              {isEditMode ? (
                <Form onSubmit={handleSubmit}>
                  <div className="userInfo">
                    <h5>Name</h5>
                    <Form.Control
                      type="text"
                      name="name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      style={{ outline: "none", background: "rgba(0,0,0,0.0)" }}
                    />
                  </div>
                  <div className="userInfo">
                    <h5>Email</h5>
                    <Form.Control
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      style={{ outline: "none", background: "rgba(0,0,0,0.0)" }}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="dark"
                    style={{ marginTop: "20px" }}
                  >
                    Update
                  </Button>
                </Form>
              ) : (
                <>
                  <div className="userInfo">
                    <h5>Name</h5>
                    <p id="name">{userInfo.name}</p>
                  </div>
                  <div className="userInfo">
                    <h5>Email</h5>
                    <p id="email">{userInfo.email}</p>
                  </div>
                </>
              )}
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="userInfo">
                <h5>Status</h5>
                <p>{userInfo.role}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="donorContainer">
        <Container className="contentTitle">
          <Row>
            <Col lg={2} md={2} sm={2}></Col>
            <Col lg={8} md={8} sm={2} style={{ justifyContent: "center" }}>
              <h1 style={{ fontSize: "52px", marginBottom: "50px" }}>
                Help Us provide food for other
              </h1>
              <PayPalScriptProvider
                options={{ clientId: "test" }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "100px",
                }}
              >
                <PayPalButtons style={{ layout: "horizontal" }} />
              </PayPalScriptProvider>
            </Col>
            <Col lg={2} md={2} sm={2}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Donor;
