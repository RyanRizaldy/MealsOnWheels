import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import food from "../image/pancake.jpg";
import food1 from "../image/Food1.png";
import food2 from "../image/Food2.png";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Menu() {
  const [selectedOption, setSelectedOption] = useState("all");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const [menus, setMenus] = useState([]);
  const [userLog, setUserLog] = useState(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/partner/list_menu"
        );
        console.log(response.data);
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
    setUserLog(JSON.parse(sessionStorage.getItem("user")));
  }, []);

  const [order, setOrder] = useState(null);

  const handleOrder = async (menuId) => {
    console.log(userLog.roleData.memberId, menuId);
    const order = {
      menuId: parseInt(menuId),
      memberId: userLog.roleData.memberId,
    };
    try {
      const response = await axios
        .post("http://localhost:8080/api/order/new_order", order)
        .then((response) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order success",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  let content;

  if (selectedOption === "all") {
    content = (
      <>
        {menus.map((menu) => (
          <Col lg={3} md={6} sm={12} className="cardWrapper">
            <div key={menu.menuId}>
              <div className="card">
                <img
                  src={`data:${menu.picture.fileType};base64,${menu.picture.image}`}
                  alt="Menu"
                />
                <h6>{menu.name}</h6>

                <div className=" mt-4 text-center">
                  <div>
                    <Row>
                      <Col>
                        {menu.carb}
                        <br />
                        Carbs
                      </Col>
                      <Col>
                        {menu.fat}
                        <br /> Fat
                      </Col>
                      <Col>
                        {menu.protein} <br />
                        Protein
                      </Col>
                    </Row>
                    <Button
                      className="bg-dark rounded-4 mt-3 border-0 px-3"
                      onClick={() => handleOrder(menu.menuId)}
                    >
                      + Add
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </>
    );
  } else if (selectedOption === "plan1") {
    content = (
      <>
        <Col lg={3} md={6} sm={12} className="cardWrapper">
          <div className="card">
            <img src={food} alt="Logo" />
            <h6>Lemon Poppy Seed Pancakes with Sausage and Berry</h6>
            <div className=" mt-4 text-center">
              <div>
                <p className="my-2">580 Cal</p>
                <Row>
                  <Col>
                    49
                    <br />
                    Carbs
                  </Col>
                  <Col>
                    30g <br /> Fat
                  </Col>
                  <Col>
                    30g <br />
                    Protein
                  </Col>
                </Row>
                <Button className="bg-dark rounded-4 mt-3 border-0 px-3">
                  + Add
                </Button>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={3} md={6} sm={12} className="cardWrapper">
          <div className="card">
            <img src={food1} alt="Logo" />
            <h6>Salmon Burger with Harissa Carrots and mayo souce</h6>
            <div className=" mt-4 text-center">
              <div>
                <p className="my-2">580 Cal</p>
                <Row>
                  <Col>
                    49
                    <br />
                    Carbs
                  </Col>
                  <Col>
                    30g <br /> Fat
                  </Col>
                  <Col>
                    30g <br />
                    Protein
                  </Col>
                </Row>
                <Button className="bg-dark rounded-4 mt-3 border-0 px-3">
                  + Add
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </>
    );
  } else if (selectedOption === "plan2") {
    content = (
      <>
        <Col lg={3} md={6} sm={12} className="cardWrapper">
          <div className="card">
            <img src={food2} alt="Logo" />
            <h6>Dill-Chimichurri Shrimp with Roasted Summer Vegetables</h6>
            <div className=" mt-4 text-center">
              <div>
                <p className="my-2">580 Cal</p>
                <Row>
                  <Col>
                    49
                    <br /> Carbs
                  </Col>
                  <Col>
                    30g <br /> Fat
                  </Col>
                  <Col>
                    30g <br />
                    Protein
                  </Col>
                </Row>
                <Button className="bg-dark rounded-4 mt-3 border-0 px-3">
                  + Add
                </Button>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={3} md={6} sm={12} className="cardWrapper">
          <div className="card">
            <img src={food} alt="Logo" />
            <h6>Lemon Poppy Seed Pancakes with Sausage and Berry</h6>
            <div className=" mt-4 text-center">
              <div>
                <p className="my-2">580 Cal</p>
                <Row>
                  <Col>
                    49
                    <br /> Carbs
                  </Col>
                  <Col>
                    30g <br /> Fat
                  </Col>
                  <Col>
                    30g <br />
                    Protein
                  </Col>
                </Row>
                <Button className="bg-dark rounded-4 mt-3 border-0 px-3">
                  + Add
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </>
    );
  } else if (selectedOption === "plan3") {
    content = (
      <>
        <Col lg={3} md={6} sm={12} className="cardWrapper">
          <div className="card">
            <img src={food} alt="Logo" />
            <h6>Lemon Poppy Seed Pancakes with Sausage and Berry</h6>
            <div className=" mt-4 text-center">
              <div>
                <p className="my-2">580 Cal</p>
                <Row>
                  <Col>
                    49
                    <br /> Carbs
                  </Col>
                  <Col>
                    30g <br /> Fat
                  </Col>
                  <Col>
                    30g <br />
                    Protein
                  </Col>
                </Row>
                <Button className="bg-dark rounded-4 mt-3 border-0 px-3">
                  + Add
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </>
    );
  }

  return (
    <>
      <div className="m-5">
        <h3 className="fw-normal">
          No Prep, No Cooking.<span className="fw-bolder">Just Enjoy.</span>{" "}
        </h3>
        <p className="fw-bolder ourMenu mt-3"> Our menu</p>
      </div>
      <div className="bg-body-tertiary container-fluid">
        <Container>
          <div class="d-flex justify-content-start text-decoration-none py-4 text-black">
            <Button
              className={selectedOption === "all" ? "active" : ""}
              onClick={() => handleOptionChange("all")}
              variant="outline"
            >
              all Meal
            </Button>
          </div>
        </Container>
        <Container>
          <Row>{content}</Row>
        </Container>
      </div>
    </>
  );
}
