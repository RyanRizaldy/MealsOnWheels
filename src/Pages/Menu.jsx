import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import food from "../image/pancake.jpg";
import food1 from "../image/Food1.png";
import food2 from "../image/Food2.png"

export default function Menu() {
  return (
    <>
      <div className="m-5">
        <h3 className="fw-normal">
          No Prep, No Cooking.<span className="fw-bolder">Just Enjoy.</span>{" "}
        </h3>
        <p className="fw-bolder mt-3 ourMenu">
          {" "}
          Our menu
        </p>
      </div>
      <div className="bg-body-tertiary container-fluid">
        <Container>
          <div class="d-flex justify-content-start text-decoration-none py-4 text-black">
            <a class="text-black" aria-current="page" href="/Meals">
              <Button
                variant="outline-dark"
                className="rounded-5 mx-2 px-4 py-2"
              >
                All Menu
              </Button>
            </a>
            <a class="text-black" href="#">
              <Button
                variant="outline-dark"
                className="rounded-5 mx-2 px-4 py-2"
              >
                Ready Meals
              </Button>
            </a>
            <a class="text-black" href="#">
              <Button
                variant="outline-dark"
                className="rounded-5 mx-2 px-4 py-2"
              >
                Frozen
              </Button>
            </a>
          </div>
        </Container>
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12} className="cardWrapper">
              <div className="card">
                <img src={food} alt="Logo" />
                <h6>
                  Lemon Poppy Seed Pancakes with Sausage and Berry 
                </h6>
                <div className=" mt-4 text-center">
                  <div>
                    <p className="my-2">580 Cal</p>
                    <Row>
                      <Col>49<br/>Carbs</Col>
                      <Col>
                        30g <br /> Fat
                      </Col>
                      <Col>30g <br/>Protein</Col>
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
                <h6>Salmon Burger with Harissa Carrots</h6>
                <div className=" mt-4 text-center">
                  <div>
                    <p className="my-2">580 Cal</p>
                    <Row>
                      <Col>49<br/>Carbs</Col>
                      <Col>
                        30g <br /> Fat
                      </Col>
                      <Col>30g <br/>Protein</Col>
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
                <img src={food2} alt="Logo" />
                <h6>Dill-Chimichurri Shrimp with Roasted Summer Vegetables</h6>
                <div className=" mt-4 text-center">
                  <div>
                    <p className="my-2">580 Cal</p>
                    <Row>
                      <Col>49<br/> Carbs</Col>
                      <Col>
                        30g <br /> Fat
                      </Col>
                      <Col>30g <br/>Protein</Col>
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
                <h6>
                  Lemon Poppy Seed Pancakes with Sausage and Berry 
                </h6>
                <div className=" mt-4 text-center">
                  <div>
                    <p className="my-2">580 Cal</p>
                    <Row>
                      <Col>49<br/> Carbs</Col>
                      <Col>
                        30g <br /> Fat
                      </Col>
                      <Col>30g <br/>Protein</Col>
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
                <h6>
                  Lemon Poppy Seed Pancakes with Sausage and Berry 
                </h6>
                <div className=" mt-4 text-center">
                  <div>
                    <p className="my-2">580 Cal</p>
                    <Row>
                      <Col>49<br/> Carbs</Col>
                      <Col>
                        30g <br /> Fat
                      </Col>
                      <Col>30g <br/>Protein</Col>
                    </Row>
                    <Button className="bg-dark rounded-4 mt-3 border-0 px-3">
                      + Add
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
