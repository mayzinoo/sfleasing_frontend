//Libraries
import React from "react";
import ReactHtmlParser from "react-html-parser";
//CSS
import "./styles/Gridcard.css";
import { Card } from "react-bootstrap";
import { FaTachometerAlt, FaRegRegistered, FaCar } from "react-icons/fa";

function Gridcard(props) {
  return (
    <Card className="item">
      <a href={props.href}>
        <div className="popular-item">
          <span className="catego-title">{props.titleStatus}</span>
        </div>
        <div
          className="vehicleImg"
          style={{ background: `url(${props.src})` }}
        ></div>
        <h4 className="vehicle-title">
          <p>{props.hrefValue}</p>
        </h4>
        <div className="vehicle-description">
          {ReactHtmlParser(props.pValue)}
        </div>
        <div className="vehicle-status">{props.pricingStatus}</div>
        <div className="row vehicle-specs">
          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ display: "flex" }}
          >
            <i>
              <FaRegRegistered style={{ paddingRight: 3, fontSize: 17 }} />
            </i>
            <div>{props.spanRegistration}</div>
          </div>

          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ display: "flex" }}
          >
            <i>
              <FaCar style={{ paddingRight: 3, fontSize: 17 }} />
            </i>
            <div>{props.spanDoor}</div>
          </div>

          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ display: "flex" }}
          >
            <i>
              <FaTachometerAlt style={{ paddingRight: 3, fontSize: 17 }} />
            </i>
            <div>{props.spanSeat}</div>
          </div>
        </div>
        <p className="vehicle-pricing">
          <span className="vehicle-price">SGD {props.spanPcdprice}</span>
        </p>
      </a>
    </Card>
  );
}

export default Gridcard;
