//Library
import React, { Fragment } from "react";
//Component
import { Carousel, Container } from "react-bootstrap";
import VehicleFilter from "./VehicleFilter";
//Css
import "./styles/RevolutionSlider.css";

function RevolutionSlider(props) {
  return (
    <Fragment>
      <Carousel className="main-carousel" fade>
        <Carousel.Item interval={7500} className="first-carousel-item">
          <Container className="carousel-container">
            <div className="carousel-content-container">
              <h1 className="carousel-title">LEXUS GS230 F-SPORT</h1>
              <h4 className="carousel-Subtitle">CW-S8 MATTE BLACK MACHINED</h4>
              <p>
                Featuring an imposing Dark Atlas front grill, body colored front
                bumper, vent blades and door handles for a contemporary
                appearance, the Range Rover also has 19 inch Five Split-Spoke
                wheels as standard. The interior is upholstered with Grained
                Leather and features heated front seats and driver seat memory.
              </p>
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item interval={7500} className="second-carousel-item">
          <Container>
            <div className="carousel-content-container">
              <h1 className="carousel-title">PORCHE GF30 Z-SPORT</h1>
              <h4 className="carousel-Subtitle">CW-S8 MATTE BLACK MACHINED</h4>
              <p>
                Featuring an imposing Dark Atlas front grill, body colored front
                bumper, vent blades and door handles for a contemporary
                appearance, the Range Rover also has 19 inch Five Split-Spoke
                wheels as standard. The interior is upholstered with Grained
                Leather and features heated front seats and driver seat memory.
              </p>
            </div>
          </Container>
        </Carousel.Item>
      </Carousel>
      <VehicleFilter />
    </Fragment>
  );
}

export default RevolutionSlider;
