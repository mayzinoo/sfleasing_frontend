/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Col, Row } from "react-bootstrap";
import "../style/MiddleContact.css";
import { FaPhoneAlt, FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function MiddleContact(props) {
  return (
    <div className="middlecontact-content" ref={props.reference}>
      <div className="container">
        <h1 className="middle-h1">Drop Us Your Question</h1>
        <div className="map-and-form">
          <Row>
            <Col md={6} className="map-col-css">
              <iframe
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=7 Toa Payoh Industrial Park, Singapore 319059&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </Col>
            <Col md={6}>
              <div className="head-icon-main">
                <div className="head-address-div">
                  <div
                    className="head-icon-address"
                    style={{ color: "#fe0003" }}
                  >
                    <FaAddressCard size={25} />
                  </div>
                  <p className="head-icon-p">
                    TOA PAYOH INDUSTRIAL PARK, 7 TOA PAYOH INDUSTRIAL PARK,
                    Postal 319059, #01-1259
                  </p>
                </div>

                <div className="head-phone-div">
                  <div className="head-icon-phone" style={{ color: "#fe0003" }}>
                    <FaPhoneAlt size={25} />
                  </div>
                  <p className="head-icon-p">+65-6752-2212</p>
                </div>

                <div className="head-email-div">
                  <div className="head-icon-email" style={{ color: "#fe0003" }}>
                    <MdEmail size={25} />
                  </div>
                  <p className="head-icon-p">admin@razorsolutions·com·sg</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MiddleContact;
