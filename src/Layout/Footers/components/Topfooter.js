import React from "react";
import "../styles/Topfooter.css";

import { Row, Col } from "react-bootstrap";

function Topfooter() {
  return (
    <div className="top-footer">
      <div className="container">
        <div className="row">
          <Row>
            <Col md={4} className="footermenu">
              <aside className="contact-info-widget">
                <h3 className="bottom-widget-title">Contact Info</h3>
                <div className="contact-info-content">
                  <p className="footer-ci-col-desc">
                    {" "}
                    <span>
                      <i
                        className="fas fa-building"
                        style={{ marginRight: "10px" }}
                      />
                      SF LEASING PTE. LTD.
                    </span>
                    <span>
                      <i
                        className="fas fa-map-marked"
                        style={{ marginRight: "10px" }}
                      />
                      TOA PAYOH INDUSTRIAL PARK,
                      <br /> 7 TOA PAYOH INDUSTRIAL PARK,
                      <br /> Postal 319059, #01-1259
                    </span>
                    <span>
                      <i
                        className="fas fa-phone"
                        style={{ marginRight: "10px" }}
                      />
                      +65-6752-2212
                    </span>
                    <span>
                      <i
                        className="fas fa-envelope"
                        style={{ marginRight: "10px" }}
                      />
                     admin@razorsolutions·com·sg
                    </span>
                  </p>
                </div>
              </aside>
            </Col>
            <Col md={4} className="footermenu">
              <aside className="company-widget">
                <h3 className="bottom-widget-title">Our Company</h3>
                <div className="company-content">
                  <p>
                    <a href="/aboutus">About Us</a>
                  </p>
                  <p>
                    <a href="/contact">Contact Us</a>
                  </p>
                  <p>
                    <a href="/service">Our Service</a>
                  </p>
                </div>
              </aside>
            </Col>
            <Col md={4} className="footermenu">
              <aside className="openHour-widget">
                <h3 className="bottom-widget-title">Open Hours</h3>
                <div className="openHour-content">
                  <p>
                    <span style={{ color: "#e4e4e4" }}>
                      <strong>Sales Department</strong>
                    </span>
                  </p>
                  <p>
                    Mon-Sat : 8:00am - 5:00pm
                    <br />
                    Sunday is closed
                  </p>

                  <p>
                    <span style={{ color: "#e4e4e4" }}>
                      <strong>Service Department</strong>
                    </span>
                  </p>
                  <p>
                    Mon-Sat : 8:00am - 5:00pm
                    <br />
                    Sunday is closed
                  </p>
                </div>
              </aside>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Topfooter;
