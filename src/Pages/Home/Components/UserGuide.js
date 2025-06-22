//libraries
import React, { Fragment } from "react";
//components
import { Row, Col } from "react-bootstrap";
//css
import "./styles/UserGuide.css";
//import Arrow from "../../../assets/homePageIcons/Arrow.png";

function UserGuide(props) {
  return (
    <Fragment>
      <div className="userguide-container-wrap">
        <div className="ug-bg-image">
          <h1 className="ug-mainheader text-4xl">
            How It <strong style={{ color: "#fe0003" }}>Works ?</strong>
          </h1>
          <Row>
            <Col md={4} className="ug-col">
              <div id="num-1" className="ug-col-number-wrap">
                <div className="ug-col-number">01.</div>
              </div>
              <h3 className="ug-col-title">Search</h3>
              <p className="ug-col-short-desc">Choose your preferred car.</p>
            </Col>
            <Col md={4} className="ug-col">
              <div id="num-1" className="ug-col-number-wrap">
                <div className="ug-col-number">02.</div>
              </div>
              <h3 className="ug-col-title">Subscribe</h3>
              <p className="ug-col-short-desc">Sign up online in 3 minutes.</p>
            </Col>
            <Col md={4} className="ug-col">
              <div id="num-1" className="ug-col-number-wrap">
                <div className="ug-col-number">03.</div>
              </div>
              <h3 className="ug-col-title">Drive</h3>
              <p className="ug-col-short-desc">
                Doorstep delivery in 24 hours.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
}

export default UserGuide;
