import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import picture from "../image/Aboutimg.jpg"
import Food from "../image/Aboutfood.jpg"

export default function About() {
  return (
    <>
      <div className="mx-5 my-5">
        <Row>
          <Col className="align-self-center ">
            <h1 className="fw-bolder mb-4">Healthy Food For Busy People</h1>
            <p className="pe-4">
              Snap was established on the principle that real food should be
              convenient and delicious, and we live for making healthy meals
              that people are excited to eat.
            </p>
          </Col>
          <Col className="text-center">
            <img src={picture} width={480} height={597} alt="" />
          </Col>
        </Row>
      </div>
      <div className="mx-5 my-5">
        <Row>
          <Col className="text-center " md={8}>
            <img src={Food} className="img-fluid" height={416} alt="" />
          </Col>
          <Col className="align-self-center px-5 text-start" md={4}>
            <h1 className="fw-bolder mb-4 ">
              Partner <br /> Expertise
            </h1>
            <ul className="list-unstyled">
              <li>
                {" "}
                <p className="fw-bold">Antonio Delmas</p>
                <p>Director of Culinary</p>
              </li>
              <li className="my-4">
                {" "}
                <p className="fw-bold">Sisi Nur</p>
                <p>Lead Manager Culinary</p>
              </li>
              <li>
                {" "}
                <p className="fw-bold">Aris Quainoli</p>
                <p>Nutrisionist</p>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div
        className="m-5 p-5 text-center"
        style={{ backgroundColor: "#fff4e6" }}
      >
        <Row>
          <h2 className="fw-bold my-3">We're mission driven</h2>
          <p>
            For over 10 years we’ve been focused on helping to make healthy easy
            for everyone.
          </p>
        </Row>
        <Row className="justify-content-between my-5 p-3 ">
          <Col className="px-5">
            <h4 className="fw-bold my-3">
              We’ve been giving back since day one
            </h4>
            <p>
              We have donated over 3 million meals to local charities since our
              inception in 2010.
            </p>
          </Col>
          <Col className="px-5">
            <h4 className="fw-bold my-3">Sustainability matters</h4>
            <p>
              Every bit of our packaging is recyclable; the bag, the liners, gel
              packs, meal containers and lids.
            </p>
          </Col>
        </Row>
        <Row className="px-5">
          <h4 className="fw-bold my-3">
            Let’s change the world, one meal at a time
          </h4>
          <p>
            We’re always on the lookout for new partnerships to <br /> help
            drive our mission.
          </p>
        </Row>
        <a href="Register">
          <button className="bg-dark rounded-5 text-light my-4 w-auto px-5 py-2">
            Partner With Us
          </button>
        </a>
      </div>
    </>
  );
}
