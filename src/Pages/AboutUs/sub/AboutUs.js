//libraries
import React, { Fragment } from "react";
//components
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import carImage from "../../../assets/images/aboutus.png";
import howitworksImage from "../../../assets/images/business2.png";
import Space from "../components/Space";
import ItemBoxes from "../components/ItemBoxes";

//css
import "../components/styles/aboutUs.css";

function AboutUs(props) {
  return (
    <Fragment>
      <Header />
      <SubHeader subtitle="Find out more about Sfleasing" />
      <Container className="image-container">
        <img src={carImage} alt="" className="car-image" />
      </Container>
      <Container className="paragraph-container">
        <div className="paragraph-div">
          <p className="paragraph">
            Since its establishment in Oct 1993 as a building maintenance
            specialist, SuccessForever has evolved and built a credible
            reputation as a Professional, Reliable and Committed service
            provider.
          </p>
          <p className="paragraph">
            Fueled by the drive for perfection, SuccessForever has grown into a
            group of companies over the years, establishing our presence across
            different industries and growing our operation capabilities at an
            admirable rate.
          </p>
          <p className="paragraph">
            Besides providing maintenance services, SuccessForever also provides
            other aviation ancillary services, such as, aircraft logistics
            support, catering, wheelchair handling services and aircraft
            interior cleaning services.
          </p>
        </div>
      </Container>

      <Space />
      <Container className="image-container">
        <img src={howitworksImage} alt="" className="car-image2" />
      </Container>
      <Container className="mini-container">
        <p className="para-text">
          How does it work? Simple. It’s a fully digital service. Subscribe
          online in 3 minutes and we’ll deliver the car to your doorstep within
          typically 24 hours.
          <br />
          <br />
          Sfleasing was founded here in Singapore by two automotive enthusiasts
          and veterans with over 25 years of industry experience from Grab, Uber
          and Hertz.
          <br />
          <br />
          Our goal is to enable everyone to get their ideal car and allow them
          to easily switch cars as their lifestyle changes over time. Just add
          fuel and enjoy your drive!
          <br />
          <br />
          <span className="" style={{ color: "#fe0003", fontSize: "23px" }}>
            Own an experience
          </span>
          not a car.
        </p>
      </Container>
      <Container className="header-container2">
        <h2 className="sub-header2">Find Your Ideal Sfleasing Auto Car</h2>
      </Container>
      <ItemBoxes />
    </Fragment>
  );
}

export default AboutUs;
