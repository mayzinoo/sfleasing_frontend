//Libraries
import React, { Fragment } from "react";
//Components
import { Container, Row, Col } from "react-bootstrap";
//Css
import "./styles/ShowRoom.css";
import { MdOutlineSettingsAccessibility, MdAccessTime } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";

function ShowRoom() {
  return (
    <Fragment>
      <Container className="ShowRoom-container">
        <Row>
          <Col md={12} style={{ paddingLeft: "none" }}>
            <Row>
              <div className="showroom-description">
                <h2 className="showroomTitle">Welcome to SF Leasing</h2>
                <p className="showroomParagraph">
                  Since its establishment in Oct 1993 as a building maintenance
                  specialist, SuccessForever has evolved and built a credible
                  reputation as a Professional, Reliable and Committed service
                  provider.
                </p>
                <br />
                <p className="showroomParagraph">
                  Fueled by the drive for perfection, SuccessForever has grown
                  into a group of companies over the years, establishing our
                  presence across different industries and growing our operation
                  capabilities at an admirable rate.
                </p>
                <br />
                <p className="showroomParagraph">
                  Besides providing maintenance services, SuccessForever also
                  provides other aviation ancillary services, such as, aircraft
                  logistics support, catering, wheelchair handling services and
                  aircraft interior cleaning services.
                </p>
              </div>
            </Row>
            <Row>
              <Col md={4} style={{ paddingBottom: "60px" }}>
                <span className="showroom-logos">
                  <MdOutlineSettingsAccessibility />
                </span>
                <h3 className="showroom-h3">HIGHLY-TRAINED STAFF</h3>
                <p className="showroom-p">
                  Support is always our highest priority. With support members
                  spread across the world, we provide all around support.
                </p>
              </Col>
              <Col md={4} style={{ paddingBottom: "60px" }}>
                <span className="showroom-logos">
                  <MdAccessTime />
                </span>
                <h3 className="showroom-h3">FAST & EFFECTIVE SERVICE</h3>
                <p className="showroom-p">
                  Default is 6 months Update & Support. Furthermore, you can
                  extend support to 12 months.
                </p>
              </Col>
              <Col md={4} style={{ paddingBottom: "60px" }}>
                <span className="showroom-logos">
                  <GiRotaryPhone />
                </span>
                <h3 className="showroom-h3">SUPPORT 24/7</h3>
                <p className="showroom-p">
                  Customers can get help and find answers to questions as soon
                  as they come up—24/7 and in real-time. Companies often offer
                  24/7 support through chatbots.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ShowRoom;
