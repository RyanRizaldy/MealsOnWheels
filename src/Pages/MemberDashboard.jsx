import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../image/fili.jpg";
import food from "../image/pancake.jpg";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import axios from "axios";

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

  const [orderList, setOrderList] = useState(null);
  const [userLog, setUserLog] = useState(null);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUserLog(user);

    // Extract the memberId from user data in sessionStorage
    const memberId = user?.roleData?.memberId;

    // Check if memberId exists before making the API call
    if (memberId) {
      showListOrder(memberId);
    }
  }, []);

  const showListOrder = (memberId) => {
    try {
      axios
        .get(`http://localhost:8080/api/order/list_order/${memberId}`)
        .then((response) => {
          setOrderList(response.data);
        });
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  const [selectedOption, setSelectedOption] = useState("task");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleDoneOrder = async (orderId) => {
    try {
      await axios
        .post(`http://localhost:8080/api/order/done_order/${orderId}`)
        .then((response) => {
          // Extract the memberId from user data in sessionStorage
          const user = JSON.parse(sessionStorage.getItem("user"));
          const memberId = user?.roleData?.memberId;

          // Check if memberId exists before making the API call
          if (memberId) {
            showListOrder(memberId);
          }
        });
      // Refresh the order list after successful processing
    } catch (error) {
      console.error("Error processing order:", error);
      // Handle error if needed
    }
  };

  let content;

  // if(!orderList)return null;

  if (selectedOption === "task") {
    content = (
      <>
        <div className="contentWrapper">
          <Container>
           
          </Container>
        </div>
      </>
    );
  } else if (selectedOption === "progress") {
    content = (
      <>
        <Container>
          <h4 className="my-3 text-start">Order</h4>
        </Container>

        <Container>
          <Table striped responsive className="border">
            <thead>
              <tr>
                <th>No</th>
                <th>Member Name</th>
                <th>Order No</th>
                <th>Partner</th>
                <th>Driver</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orderList &&
                orderList.map((value, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{value.member.name}</td>
                    <td>{value.orderId}</td>
                    <td>
                      {value.partnerName === null ? "-" : value.partnerName}
                    </td>
                    <td>{value.driver === null ? "-" : value.driver.name}</td>
                    <td className="">{value.status}</td>

                    {value.status !== "DONE" && (
                      <td className="">
                        <Button onClick={() => handleDoneOrder(value.orderId)}>
                          Is meal arrived ?
                        </Button>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
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
        <h2>Your Meal Progress</h2>
        <div class="d-flex justify-content-start text-decoration-none py-4 text-black">
          {/* <Button
            className={selectedOption === "task" ? "active" : ""}
            onClick={() => handleOptionChange("task")}
            variant="outline"
          >
            Your Meal
          </Button> */}
          <Button
            className={selectedOption === "progress" ? "active" : ""}
            onClick={() => handleOptionChange("progress")}
            variant="outline"
          >
            Progress
          </Button>
        </div>
      </Container>
      {content}
    </>
  );
}

export default Member;
