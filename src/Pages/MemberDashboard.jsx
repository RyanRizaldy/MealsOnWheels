import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import pic from "../image/fili.jpg";
import food from "../image/pancake.jpg";

function Member() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    memberId: null,
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      setUserInfo({
        memberId: userData.roleData.memberId,
        name: userData.roleData.name,
        email: userData.email,
        address: userData.roleData.address,
        phone: userData.roleData.phone,
      });
    }
  }, []);

  const handleToggleEditMode = () => {
    setIsEditMode(!isEditMode);
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
        "http://localhost:8080/api/user/update_member",
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
                  <div className="userInfo">
                    <h5>Address</h5>
                    <Form.Control
                      type="text"
                      name="address"
                      value={userInfo.address}
                      onChange={handleInputChange}
                      style={{ outline: "none", background: "rgba(0,0,0,0.0)" }}
                    />
                  </div>
                  <div className="userInfo">
                    <h5>Phone</h5>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={userInfo.phone}
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
                  <div className="userInfo">
                    <h5>Address</h5>
                    <p id="address">{userInfo.address}</p>
                  </div>
                  <div className="userInfo">
                    <h5>Phone</h5>
                    <p id="phone">{userInfo.phone}</p>
                  </div>
                  <Button
                    onClick={handleToggleEditMode}
                    variant="dark"
                    style={{ marginTop: "20px" }}
                  >
                    Edit Profile
                  </Button>
                </>
              )}
            </Col>
            <Col lg={4} md={6} sm={12}>
              {/* Other user status and meal plan content */}
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="contentTitle">
        <h2>Your Meal Schedule</h2>
      </Container>

      <div className="contentWrapper">
        <Container>{/* Meal schedule cards */}</Container>
      </div>
    </>
  );
}

export default Member;
