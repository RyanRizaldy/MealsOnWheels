import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Pic from "../image/rothy.png";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import OrderList from "../Components/OrderList";
import DeliveryV from "../Components/DeliveryV";
import axios from "axios";

function Volunteer() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userDat, setUserDat] = useState();

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
        member: userDat.roleData.volunteerId,
        name: document.getElementById("name").textContent,
        email: document.getElementById("email").textContent,
        address: document.getElementById("address").textContent,
        phone: document.getElementById("phone").textContent,
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
        "http://localhost:8080/api/user/update_driver",
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
        memberId: userData.roleData.memberId,
        name: userData.roleData.name,
        email: userData.email,
        address: userData.roleData.address,
        phone: userData.roleData.phone,
      });
    }
  }, []);

  useEffect(() => {
    if (userInfo.member) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/user/${userInfo.member}`
          );
          console.log(response.data);
          setUserDat(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [userInfo.member]);

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
                src={Pic}
                alt="Logo"
                height={"150px"}
                className="rounded-circle"
              />
            </Col>
            <Col lg={4} md={6} sm={12}>
              {isEditMode ? (
                <Form onSubmit={handleSubmit}>
                  <div className="userInfo">
                    <h5>Names</h5>
                    <Form.Control
                      type="text"
                      name="name"
                      value={userDat.name}
                      onChange={handleInputChange}
                      style={{
                        outline: "none",
                        background: "rgba(0,0,0,0.0)",
                      }}
                    />
                  </div>
                  <div className="userInfo">
                    <h5>Email</h5>
                    <Form.Control
                      type="email"
                      name="email"
                      value={userDat.email}
                      onChange={handleInputChange}
                      style={{
                        outline: "none",
                        background: "rgba(0,0,0,0.0)",
                      }}
                    />
                  </div>
                  <div className="userInfo">
                    <h5>Address</h5>
                    <Form.Control
                      type="text"
                      name="address"
                      value={userInfo.address}
                      onChange={handleInputChange}
                      style={{
                        outline: "none",
                        background: "rgba(0,0,0,0.0)",
                      }}
                    />
                  </div>
                  <div className="userInfo">
                    <h5>Phone</h5>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={userInfo.phone}
                      onChange={handleInputChange}
                      style={{
                        outline: "none",
                        background: "rgba(0,0,0,0.0)",
                      }}
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
                    <p id="name">
                      {userDat && userDat.roleData && userDat.roleData.name}
                    </p>
                  </div>
                  <div className="userInfo">
                    <h5>Email</h5>
                    <p id="email">{userDat && userDat.email}</p>
                  </div>
                  <div className="userInfo">
                    <h5>Address</h5>
                    <p id="address">
                      {userDat && userDat.roleData && userDat.roleData.address}
                    </p>
                  </div>
                  <div className="userInfo">
                    <h5>Phone</h5>
                    <p id="phone">
                      {userDat && userDat.roleData && userDat.roleData.phone}
                    </p>
                  </div>
                  <div className="userInfo">
                    <h5>Status</h5>
                    <p>{userDat && userDat.role}</p>
                  </div>
                </>
              )}
            </Col>
            <Col lg={4} md={6} sm={12}></Col>
          </Row>
        </Container>
      </div>

      <Container className="contentTitle">
        <h2>Help Us Prepare Meals For the Member</h2>
      </Container>

      <div className="" style={{ marginButton: "px" }}>
        <Container>
          <OrderList />
        </Container>
      </div>
      <Container className="contentTitle">
        <h2>Help Us Deliver Meals For the Member</h2>
      </Container>

      <div className="">
        <Container>
          <DeliveryV />
        </Container>
      </div>
    </>
  );
}
export default Volunteer;
