//Libraries
import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
//Components
import TopBanner from "../../../Components/TopBanner";
import NavHeader from "../../../Components/NavHeader";
import BottomBanner from "../../../Components/BottomBanner";

import DatePicker from "react-datepicker";
import Moment from "moment";
// import required css from library
import "react-datepicker/dist/react-datepicker.css";

//css
import { FaBullhorn } from "react-icons/fa";
import "../Components/styles/VehicleDetail.css";
//API
import {
  VehicleDetailApi,
  VehiclePhotosApi,
  VehicleColorsApi,
  VehicleFeaturesApi,
  VehiclePackageApi,
  BookingApi,
  BookingCheckApi,
  img_url,
} from "../../../Api/api";

import NoImageDetail from "../../../assets/images/no-image-detail.jpg";

import {
  BsCheck,
  BsFillExclamationTriangleFill,
  BsCalendar,
  BsClock,
  BsCreditCard,
} from "react-icons/bs";

function VehicleDetails(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: false },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 1 },
    { width: 1150, itemsToShow: 1 },
    { width: 1450, itemsToShow: 1 },
    { width: 1750, itemsToShow: 1 },
  ];

  const { id } = useParams();
  const vehicle_id = id;
  const [vehicledata, setVehicles] = useState([]);
  const [userDetails, setUserDetails] = useState({
    id: "",
    first_name: "",
    last_name: "",
  });
  const [vehiclePhoto, setVehiclePhoto] = useState([]);
  const [vehicleColor, setVehicleColor] = useState([]);
  const [vehicleFeature, setVehicleFeature] = useState([]);
  const [vehiclePackage, setVehiclePackage] = useState([]);
  const [key, setActiveTab] = useState("daily_leasing");

  const handleSelect = (key) => {
    setActiveTab(key);
  };

  useEffect(() => {
    setUserDetails(JSON.parse(props.GetUserApi));

    VehicleDetailApi({ _data: { vid: vehicle_id } })
      .then((vehicleDetailData) => {
        setVehicles(vehicleDetailData);
      })
      .catch((error) => {
        console.log("error", error);
      });

    VehiclePhotosApi({ _data: { vid: vehicle_id } })
      .then((vehiclePhotoData) => {
        setVehiclePhoto(vehiclePhotoData);
      })
      .catch((error) => {
        console.log("error", error);
      });

    VehicleColorsApi({ _data: { vid: vehicle_id } })
      .then((vehicleColorData) => {
        setVehicleColor(vehicleColorData);
      })
      .catch((error) => {
        console.log("error", error);
      });

    VehicleFeaturesApi({ _data: { vid: vehicle_id } })
      .then((vehicleFeatureData) => {
        setVehicleFeature(vehicleFeatureData);
      })
      .catch((error) => {
        console.log("error", error);
      });

    VehiclePackageApi({ _data: { vid: vehicle_id } })
      .then((vehiclePackageData) => {
        for (var i = 0; i < vehiclePackageData.length; i++) {
          if (vehiclePackageData[i].best_status === "") {
            const sortedVehiclePackageData = vehiclePackageData.sort(
              (a, b) => a.duraid - b.duraid
            );
            const last_pkgdata =
              sortedVehiclePackageData[sortedVehiclePackageData.length - 1];
            last_pkgdata.best = "true";
            setDuration(last_pkgdata.duraid);
            setPackagePrice(last_pkgdata.price);
          }
        }
        setVehiclePackage(vehiclePackageData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [id, props.GetUserApi, vehicle_id]);

  const [user_id, setUserID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [packagePrice, setPackagePrice] = useState("");
  const [color, setColor] = useState("");
  const [dailyColor, setDailyColor] = useState("");
  const [dailyColorIndex, setDailyColorIndex] = useState(10);
  const [monthlyColor, setMonthlyColor] = useState("");
  const [monthlyColorIndex, setMonthlyColorIndex] = useState(10);
  const [date, setDate] = useState(new Date());
  const [deliveryTime, setDeliveryTime] = useState("Morning");
  const [payment, setPayment] = useState("cash");
  const [deliveryPhNumber, setDeliveryPhNumber] = useState("");
  const [deliAddressLine1, setDeliAddressLine1] = useState("");
  const [deliAddressLine2, setDeliAddressLine2] = useState("");
  const [deliPostcode, setDeliPostcode] = useState("");
  const [deliRemark, setDeliRemark] = useState("");
  const [billingAddressLine1, setBillingAddressLine1] = useState("");
  const [billingAddressLine2, setBillingAddressLine2] = useState("");
  const [billingCountry, setBillingCountry] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingPhNumber, setBillingPhNumber] = useState("");
  const [billingPostcode, setBillingPostcode] = useState("");
  const [nextStepShow, setNextStepShow] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [dailyColorInputError, setDailyColorInputError] = useState(false);
  const [monthlyColorInputError, setMonthlyColorInputError] = useState(false);
  const [show, setShow] = useState(false);
  const [subscription_price, setSubscriptionPrice] = useState("");
  const [total_amt, setTotalAmt] = useState("");
  const [bid, setBookingId] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selling_price, setSellingPrice] = useState(new Date());
  const handleClose = () => setShow(false);

  const handleChangePackage = (id, duraid, price) => {
    setDuration(duraid);
    setPackagePrice(price);
    for (var i = 0; i < vehiclePackage.length; i++) {
      if (vehiclePackage[i].id === id) {
        vehiclePackage[i].best = "true";
      } else {
        vehiclePackage[i].best = "false";
      }
    }
  };

  const handleChangeDailyColor = (dailyColor, index) => {
    setDailyColor(dailyColor);
    setDailyColorIndex(index);
  };

  const handleChangeMonthColor = (monthlyColor, index) => {
    setMonthlyColor(monthlyColor);
    setMonthlyColorIndex(index);
  };

  let vehicleCoverPhoto;
  let dailyLeasingPrice;
  let sellingPrice;
  let price_status;
  for (var j = 0; j < vehicledata.length; j++) {
    vehicleCoverPhoto = vehicledata[j].photo;
    price_status = vehicledata[j].price_status;
    if (
      vehicledata[j].price_status === "leasing" &&
      vehicledata[j].rental_price !== ""
    ) {
      dailyLeasingPrice = vehicledata[j].rental_price;
    } else if (
      vehicledata[j].price_status === "selling" &&
      vehicledata[j].selling_price !== ""
    ) {
      sellingPrice = vehicledata[j].selling_price;
    }
  }

  let defaultPackagePrice;
  let defaultPackageDuration;
  for (var i = 0; i < vehiclePackage.length; i++) {
    if (vehiclePackage[i].best_status === "bestsaver") {
      defaultPackagePrice = vehiclePackage[i].price;
      defaultPackageDuration = vehiclePackage[i].duration;
    }
  }

  let delivery_date = Moment(date).format("YYYY-MM-DD");
  let start_date = Moment(startDate).format("YYYY-MM-DD");
  let end_date = Moment(endDate).format("YYYY-MM-DD");

  const handleDailyLeasing = () => {
    if (dailyColor) {
      setDailyColorInputError(false);
      if (userDetails != null) {
        setColor(dailyColor);
        setUserID(userDetails.id);
        setFirstName(userDetails.first_name);
        setLastName(userDetails.last_name);
        setPrice(dailyLeasingPrice);
        setDuration("");
        setSellingPrice("");
        setShow(true);
      } else {
        window.location.href = "/register";
      }
    } else {
      setDailyColorInputError(true);
    }
  };

  const handleMonthlyLeasing = () => {
    if (monthlyColor) {
      setMonthlyColorInputError(false);
      setInputError(false);
      if (userDetails != null) {
        setColor(monthlyColor);
        setUserID(userDetails.id);
        setFirstName(userDetails.first_name);
        setLastName(userDetails.last_name);
        setSellingPrice("");
        if (packagePrice !== "" && duration !== "") {
          setPrice(packagePrice);
          setDuration(duration);
        } else {
          setPrice(defaultPackagePrice);
          setDuration(defaultPackageDuration);
        }
        setShow(true);
      } else {
        window.location.href = "/register";
      }
    } else {
      setMonthlyColorInputError(true);
    }
  };

  const handleSelling = () => {
    if (userDetails != null) {
      setUserID(userDetails.id);
      setFirstName(userDetails.first_name);
      setLastName(userDetails.last_name);
      setSellingPrice(sellingPrice);
      setPrice("");
      setDuration("");
      setShow(true);
    } else {
      window.location.href = "/register";
    }
  };

  const handleNextStepShow = () => {
    if (
      payment &&
      deliveryPhNumber &&
      deliAddressLine1 &&
      deliPostcode &&
      billingPhNumber &&
      billingAddressLine1 &&
      billingPostcode
    ) {
      setInputError(false);
      return true;
    } else {
      setInputError(true);
      return false;
    }
  };

  const handleBookingRequest = (e) => {
    e.preventDefault();
    if (handleNextStepShow()) {
      BookingApi({
        _data: {
          user_id,
          vehicle_id,
          duration,
          price,
          selling_price,
          color,
          start_date,
          end_date,
          price_status,
          delivery_date,
          deliveryTime,
          payment,
          deliveryPhNumber,
          deliAddressLine1,
          deliAddressLine2,
          deliPostcode,
          deliRemark,
          billingAddressLine1,
          billingAddressLine2,
          billingPhNumber,
          billingPostcode,
          billingCountry,
          billingState,
        },
      })
        .then((bookingData) => {
          if (bookingData.status === 1) {
            setBookingId(bookingData.data.id);
            setSubscriptionPrice(bookingData.data.subscription_price);
            setTotalAmt(bookingData.data.total_amt);
            setNextStepShow(true);
            setShow(false);
          } else {
            setInputError(true);
            setNextStepShow(false);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  const handleBookingConfirm = (e) => {
    let check_status = "true";
    BookingCheckApi({ _data: { bid, check_status, vehicle_id } })
      .then((bookingRequestData) => {
        if (bookingRequestData.status === 1) {
          window.location.href = "/account/booking/";
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleBookingCancel = () => {
    let check_status = "false";
    BookingCheckApi({ _data: { bid, check_status, vehicle_id } })
      .then((bookingRequestData) => {
        if (bookingRequestData.status === 1) {
          setDate(new Date());
          setDeliveryTime("Morning");
          setPayment("cash");
          setDeliveryPhNumber("");
          setDeliAddressLine1("");
          setDeliAddressLine2("");
          setDeliPostcode("");
          setDeliRemark("");
          setBillingAddressLine1("");
          setBillingAddressLine2("");
          setBillingCountry("");
          setBillingState("");
          setBillingPhNumber("");
          setBillingPostcode("");
          setNextStepShow(false);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Fragment>
      <TopBanner title="Vehicle Details" />
      <NavHeader pageName="Vehicle Details" />
      <section className="body-content" style={{ margin: "50px 0px" }}>
        <Container>
          {vehiclePhoto.length > 0 ? (
            <Container>
              <Carousel
                breakPoints={breakPoints}
                style={{ marginBottom: "20px" }}
                pagination={false}
                enableAutoPlay
                autoPlaySpeed={4000}
              >
                {vehiclePhoto.map((photo, index) => {
                  return (
                    <div
                      className="item-1 vehicle-cs-carousel-item-wrap"
                      key={`carousel-${index}`}
                    >
                      {photo.photos === "" ? (
                        <img src={NoImageDetail} alt="" className="img-fluid" />
                      ) : (
                        <img
                          src={img_url + photo.photos}
                          alt=""
                          className="img-fluid"
                        />
                      )}
                    </div>
                  );
                })}
              </Carousel>
            </Container>
          ) : (
            <Container>
              <Carousel
                breakPoints={breakPoints}
                style={{ marginBottom: "20px" }}
                pagination={false}
                enableAutoPlay
                autoPlaySpeed={4000}
              >
                <div className="item-1 vehicle-cs-carousel-item-wrap">
                  <img
                    src={img_url + vehicleCoverPhoto}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Carousel>
            </Container>
          )}
          {vehicledata.map((vehicleData, index) => {
            return (
              <div key={index} style={{ marginTop: "35px" }}>
                {vehicleData.price_status === "leasing" ? (
                  <Row>
                    <Col md="8" className="vehicle-details-box">
                      <div style={{ margin: "10px 20px 20px 20px" }}>
                        <p
                          style={{
                            marginBottom: "18px",
                            fontSize: "25px",
                            fontWeight: "bold",
                          }}
                        >
                          {vehicleData.model_name}
                        </p>
                      </div>
                      <Tabs
                        defaultActiveKey={key}
                        onSelect={handleSelect}
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        style={{ justifyContent: "center" }}
                      >
                        <Tab eventKey="daily_leasing" title="Daily Leasing">
                          <div className="row row-css">
                            <div
                              className="col-sm-12 col-md-6 col-lg-6"
                              style={{ marginTop: "30px" }}
                            >
                              <label style={{ marginBottom: "14px" }}>
                                Start Date
                              </label>
                              <div>
                                <DatePicker
                                  selected={startDate}
                                  onChange={(startDate) =>
                                    setStartDate(startDate)
                                  }
                                />
                              </div>
                            </div>
                            <div
                              className="col-sm-12 col-md-6 col-lg-6"
                              style={{ marginTop: "30px" }}
                            >
                              <label style={{ marginBottom: "14px" }}>
                                End Date
                              </label>
                              <div>
                                <DatePicker
                                  selected={endDate}
                                  onChange={(endDate) => setEndDate(endDate)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="line"></div>
                          <div className="row row-css">
                            <div className="col-sm-12 col-md-6 col-lg-5">
                              <p
                                style={{
                                  textAlign: "left",
                                  marginBottom: "3px",
                                  marginTop: "6px",
                                }}
                              >
                                Your Subscriptions
                              </p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-7">
                              <p
                                style={{
                                  textAlign: "right",
                                  marginBottom: "3px",
                                }}
                              >
                                <span className="cs-item-price">
                                  {vehicleData.rental_price}
                                </span>
                                /day, NETT
                              </p>
                            </div>
                          </div>
                          <div className="line"></div>
                          <div className="row row-css">
                            <div className="col-sm-12 col-md-6 col-lg-5">
                              <p
                                style={{
                                  textAlign: "left",
                                  marginBottom: "3px",
                                  marginTop: "6px",
                                }}
                              >
                                Check Availability
                              </p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-7">
                              <div className="color-div">
                                <span className="color-text">Colors:</span>
                                {vehicleColor.map((dailyColor, index) => {
                                  return (
                                    <div key={index}>
                                      {dailyColorIndex === index ? (
                                        <div
                                          onClick={() =>
                                            handleChangeDailyColor(
                                              dailyColor,
                                              index
                                            )
                                          }
                                          className="color-box"
                                          style={{
                                            background: dailyColor,
                                            border: "1px solid #fe0003",
                                            cursor: "pointer",
                                          }}
                                        ></div>
                                      ) : (
                                        <div
                                          onClick={() =>
                                            handleChangeDailyColor(
                                              dailyColor,
                                              index
                                            )
                                          }
                                          className="color-box"
                                          style={{
                                            background: dailyColor,
                                            border: "1px solid #222222",
                                            cursor: "pointer",
                                          }}
                                        ></div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                              {dailyColorInputError && !dailyColor ? (
                                <span className="preEmpt-error-msg">
                                  Please Select Daily Vehicle Color !
                                </span>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                          <div className="line"></div>
                          {vehicleData.status === "0" ? (
                            <div
                              style={{ marginBottom: "22px" }}
                              className="btn-div"
                            >
                              <Button
                                onClick={handleDailyLeasing}
                                className="book-btn"
                              >
                                Booking Now
                              </Button>
                            </div>
                          ) : (
                            <div
                              style={{ marginBottom: "22px" }}
                              className="row-css"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <BsFillExclamationTriangleFill className="exclamation" />
                                <p className="exclamation-text">
                                  This car is not available.
                                </p>
                              </div>
                              <p
                                style={{
                                  textAlign: "center",
                                  fontSize: "18px",
                                }}
                              >
                                Available Dates on
                                <strong> {vehicleData.available_date} .</strong>
                              </p>
                            </div>
                          )}
                        </Tab>
                        <Tab eventKey="monthly_leasing" title="Monthly Leasing">
                          <div className="row" style={{ margin: "0px 10px" }}>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <p
                                style={{
                                  marginBottom: "3px",
                                  fontSize: ".875rem",
                                  color: "#868686",
                                }}
                              >
                                CHOOSE SUBSCRIPTION
                              </p>
                            </div>
                            <div
                              key={index}
                              className="row"
                              style={{ marginLeft: "2px", marginTop: "15px" }}
                            >
                              {vehiclePackage.map((vpackage, index) => {
                                return (
                                  <div
                                    id="price"
                                    className="col-sm-6 col-md-4 col-lg-3 choose-main-css"
                                    style={
                                      vpackage.best === "true"
                                        ? { borderColor: "#fe0003" }
                                        : { borderColor: " #222222" }
                                    }
                                    key={index}
                                    onClick={() =>
                                      handleChangePackage(
                                        vpackage.id,
                                        vpackage.duraid,
                                        vpackage.price
                                      )
                                    }
                                  >
                                    {vpackage.best_status === "bestsaver" && (
                                      <span className="sub-span">
                                        Best Saver
                                      </span>
                                    )}

                                    {vpackage.best === "true" ? (
                                      <div style={{ display: "flex" }}>
                                        <div style={{ marginLeft: "15px" }}>
                                          <p className="choose-sub-css">
                                            {vpackage.duration_name}
                                          </p>
                                          <p
                                            id="price-text"
                                            className="choose-sub1-css"
                                            style={
                                              vpackage.best === "true"
                                                ? { color: "#fe0003" }
                                                : { color: "#868686" }
                                            }
                                          >
                                            SGD {vpackage.price}/month
                                          </p>
                                        </div>
                                        <div
                                          style={{
                                            marginLeft: "7px",
                                          }}
                                        >
                                          <BsCheck className="check-css" />
                                        </div>
                                      </div>
                                    ) : (
                                      <div>
                                        <p className="choose-sub-css">
                                          {vpackage.duration_name}
                                        </p>
                                        <p
                                          id="price-text"
                                          className="choose-sub1-css"
                                          style={
                                            vpackage.best === "true"
                                              ? { color: "#fe0003" }
                                              : { color: " #868686" }
                                          }
                                        >
                                          SGD {vpackage.price}/month
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="line"></div>
                          <div className="row row-css">
                            <div className="col-sm-12 col-md-6 col-lg-5">
                              <p
                                style={{
                                  textAlign: "left",
                                  marginBottom: "3px",
                                  marginTop: "6px",
                                }}
                              >
                                Your Subscriptions
                              </p>
                            </div>
                            {packagePrice !== "" ? (
                              <div className="col-sm-12 col-md-6 col-lg-7">
                                <p
                                  style={{
                                    textAlign: "right",
                                    marginBottom: "3px",
                                  }}
                                >
                                  <span className="cs-item-price">
                                    {packagePrice}
                                  </span>
                                  /month, NETT
                                </p>
                              </div>
                            ) : (
                              <div className="col-sm-12 col-md-6 col-lg-7">
                                <p
                                  style={{
                                    textAlign: "right",
                                    marginBottom: "3px",
                                  }}
                                >
                                  <span className="cs-item-price">
                                    {defaultPackagePrice}
                                  </span>
                                  /month, NETT
                                </p>
                              </div>
                            )}
                          </div>
                          <div className="line"></div>
                          <div className="row row-css">
                            <div className="col-sm-12 col-md-6 col-lg-5">
                              <p
                                style={{
                                  textAlign: "left",
                                  marginBottom: "3px",
                                  marginTop: "6px",
                                }}
                              >
                                Check Availability
                              </p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-7">
                              <div className="color-div">
                                <span className="color-text">Colors:</span>
                                {vehicleColor.map((monthlyColor, index) => {
                                  return (
                                    <div key={index}>
                                      {monthlyColorIndex === index ? (
                                        <div
                                          onClick={() =>
                                            handleChangeMonthColor(
                                              monthlyColor,
                                              index
                                            )
                                          }
                                          className="color-box"
                                          style={{
                                            background: monthlyColor,
                                            border: "1px solid #fe0003",
                                            cursor: "pointer",
                                          }}
                                        ></div>
                                      ) : (
                                        <div
                                          onClick={() =>
                                            handleChangeMonthColor(
                                              monthlyColor,
                                              index
                                            )
                                          }
                                          className="color-box"
                                          style={{
                                            background: monthlyColor,
                                            border: "1px solid #222222",
                                            cursor: "pointer",
                                          }}
                                        ></div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                              {monthlyColorInputError && !monthlyColor ? (
                                <span className="preEmpt-error-msg">
                                  Please Select Monthly Vehicle Color !
                                </span>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                          <div className="line"></div>
                          {vehicleData.status === "0" ? (
                            <div
                              style={{ marginBottom: "22px" }}
                              className="btn-div"
                            >
                              <Button
                                onClick={handleMonthlyLeasing}
                                className="book-btn"
                              >
                                Booking Now
                              </Button>
                            </div>
                          ) : (
                            <div
                              style={{ marginBottom: "22px" }}
                              className="row-css"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <BsFillExclamationTriangleFill className="exclamation" />
                                <p className="exclamation-text">
                                  This car is not available.
                                </p>
                              </div>
                              <p
                                style={{
                                  textAlign: "center",
                                  fontSize: "18px",
                                }}
                              >
                                Available Dates on
                                <strong> {vehicleData.available_date} .</strong>
                              </p>
                            </div>
                          )}
                        </Tab>
                      </Tabs>
                    </Col>
                    <Col md="4">
                      <div>
                        <h3 className="car-pricing">
                          <span className="car-price">
                            {vehicleData.price_status === "leasing" &&
                              key === "daily_leasing" && (
                                <b> SGD {vehicleData.rental_price} </b>
                              )}
                            {vehicleData.price_status === "leasing" &&
                              key === "monthly_leasing" && (
                                <div>
                                  {packagePrice !== "" ? (
                                    <b> SGD {packagePrice} </b>
                                  ) : (
                                    <b> SGD {defaultPackagePrice} </b>
                                  )}
                                </div>
                              )}
                          </span>
                        </h3>
                        <div className="vehicle-details-box">
                          <h3 className="widget-title">
                            <span className="span-class">Specifications</span>
                          </h3>
                          <div className="car-specs">
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Registration date
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.year}
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Body
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.body_type}
                              </span>
                            </div>
                            <div className="clear"></div>
                          </div>

                          <div className="car-specs">
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Fuel
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.fuel_type}
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Transmission
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.transmission}
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Engine
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.engine_type} L
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Doors
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.door}
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Seats
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.seat_qty}
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Consumption
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.consumption}
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Features
                              </label>
                              {vehicleFeature.map((feature, index) => {
                                return (
                                  <span
                                    className="car-specs-div-span"
                                    key={index}
                                  >
                                    {feature}
                                  </span>
                                );
                              })}
                            </div>
                            <div className="clear"></div>
                          </div>
                          <div className="car-average-rating">
                            <div className="car-average-rating-0"></div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  <Row style={{ justifyContent: "center" }}>
                    <Col md="8">
                      <div>
                        <p className="car-pricing">
                          <span className="car-price">
                            {vehicleData.price_status === "selling" && (
                              <b> SGD {vehicleData.selling_price} </b>
                            )}
                          </span>
                        </p>
                        <div className="selling-vehicle-details-box">
                          <h3 className="widget-title">
                            <span className="span-class">Specifications</span>
                          </h3>
                          <div className="car-specs">
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Registration date
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.year}
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Body
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.body_type}
                              </span>
                            </div>
                            <div className="clear"></div>
                          </div>

                          <div className="car-specs">
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Fuel
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.fuel_type}
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Transmission
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.transmission}
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Engine
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.engine_type} L
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Doors
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.door}
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Seats
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.seat_qty}
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Consumption
                              </label>
                              <span className="car-specs-div-span">
                                {vehicleData.consumption}
                              </span>
                            </div>
                            <div className="car-specs-div">
                              <label className="car-specs-div-label">
                                Features
                              </label>
                              {vehicleFeature.map((feature, index) => {
                                return (
                                  <span
                                    className="car-specs-div-span"
                                    key={index}
                                  >
                                    {feature}
                                  </span>
                                );
                              })}
                            </div>
                            <div className="clear"></div>
                          </div>
                          <div className="car-average-rating">
                            <div className="car-average-rating-0"></div>
                          </div>
                          <div
                            style={{ marginTop: "25px" }}
                            className="btn-div"
                          >
                            <Button
                              onClick={handleSelling}
                              className="book-btn"
                            >
                              Booking Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                )}

                <Modal
                  show={show}
                  onHide={handleClose}
                  dialogClassName="modal-80w"
                  aria-labelledby="example-custom-modal-styling-title"
                  backdrop="static"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <div style={{ fontSize: "16px" }}>Step 1 of 2</div>
                      <div className="modal-title">
                        How Would You Like To Get Your Car?
                      </div>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="exampleForm.ControlInput4"
                        >
                          <div className="radio-div">
                            <Form.Check
                              type="radio"
                              id="custom-radio"
                              checked={true}
                              readOnly
                              label="I'd like it delivered"
                            />
                          </div>
                          <div style={{ marginTop: "30px" }}>
                            <label style={{ marginBottom: "14px" }}>
                              Delivery Date:
                            </label>
                            <div
                              style={{
                                display: "flex",
                                marginLeft: "24px",
                              }}
                            >
                              <BsCalendar className="calendar-css" />
                              <DatePicker
                                selected={date}
                                onChange={(date) => setDate(date)}
                              />
                            </div>
                          </div>
                          <div style={{ marginTop: "30px" }}>
                            <label style={{ marginBottom: "14px" }}>
                              Delivery Time:
                            </label>
                            <div
                              style={{
                                display: "flex",
                                marginLeft: "24px",
                              }}
                            >
                              <BsClock className="clock-css" />
                              <Form.Select
                                aria-label="Default select example"
                                value={deliveryTime}
                                onChange={(e) =>
                                  setDeliveryTime(e.target.value)
                                }
                              >
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Evening">Evening</option>
                              </Form.Select>
                            </div>
                          </div>
                          <div style={{ marginTop: "30px" }}>
                            <label style={{ marginBottom: "14px" }}>
                              Payment
                            </label>
                            <div
                              style={{
                                display: "flex",
                                marginLeft: "24px",
                              }}
                            >
                              <BsCreditCard className="creditcard-css" />
                              <Form.Select
                                aria-label="Default select example"
                                value={payment}
                                onChange={(e) => setPayment(e.target.value)}
                              >
                                <option value="cash">Cash</option>
                                <option value="bank">Bank</option>
                              </Form.Select>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                marginLeft: "57px",
                              }}
                            >
                              {inputError && !payment ? (
                                <span className="preEmpt-error-msg">
                                  Payment is required !
                                </span>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="exampleForm.ControlInput5"
                        >
                          <Form.Label style={{ marginBottom: "20px" }}>
                            Delivery Address:
                          </Form.Label>
                          <div style={{ marginBottom: "13px" }}>
                            <input
                              className="form-control md"
                              type="number"
                              placeholder="Delivery Phone Number"
                              value={deliveryPhNumber}
                              onChange={(e) =>
                                setDeliveryPhNumber(e.target.value)
                              }
                            />
                            {inputError && !deliveryPhNumber ? (
                              <span className="preEmpt-error-msg">
                                Phone Number is required !
                              </span>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div style={{ marginBottom: "13px" }}>
                            <input
                              className="form-control md"
                              type="text"
                              placeholder="Address 1"
                              value={deliAddressLine1}
                              onChange={(e) =>
                                setDeliAddressLine1(e.target.value)
                              }
                            />
                            {inputError && !deliAddressLine1 ? (
                              <span className="preEmpt-error-msg">
                                Address is required !
                              </span>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div style={{ marginBottom: "13px" }}>
                            <input
                              className="form-control md"
                              type="text"
                              placeholder="Address 2"
                              value={deliAddressLine2}
                              onChange={(e) =>
                                setDeliAddressLine2(e.target.value)
                              }
                            />
                          </div>
                          <div style={{ marginBottom: "13px" }}>
                            <input
                              className="form-control md"
                              type="number"
                              placeholder="Postcode"
                              value={deliPostcode}
                              onChange={(e) => setDeliPostcode(e.target.value)}
                            />
                            {inputError && !deliPostcode ? (
                              <span className="preEmpt-error-msg">
                                Postcode is required !
                              </span>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div>
                            <Form.Control
                              as="textarea"
                              rows="4"
                              placeholder="Delivery Remark"
                              value={deliRemark}
                              onChange={(e) => setDeliRemark(e.target.value)}
                            />
                          </div>
                        </Form.Group>
                      </Row>
                      <div className="line1"></div>
                      <Row>
                        <Form.Group
                          as={Col}
                          controlId="exampleForm.ControlInput3"
                        >
                          <Form.Label
                            style={{
                              marginBottom: "20px",
                              marginTop: "0.7rem",
                            }}
                          >
                            Billing:
                          </Form.Label>
                        </Form.Group>
                      </Row>
                      <Row style={{ marginLeft: "10px" }}>
                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="exampleForm.ControlInput4"
                        >
                          <div style={{ marginBottom: "15px" }}>
                            <input
                              className="form-control md"
                              type="text"
                              placeholder="Address 1"
                              value={billingAddressLine1}
                              onChange={(e) =>
                                setBillingAddressLine1(e.target.value)
                              }
                            />
                            {inputError && !billingAddressLine1 ? (
                              <span className="preEmpt-error-msg">
                                Address is required !
                              </span>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div style={{ marginBottom: "15px" }}>
                            <input
                              className="form-control md"
                              type="number"
                              placeholder="Billing Phone Number"
                              value={billingPhNumber}
                              onChange={(e) =>
                                setBillingPhNumber(e.target.value)
                              }
                            />
                            {inputError && !billingPhNumber ? (
                              <span className="preEmpt-error-msg">
                                Phone Number is required !
                              </span>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div style={{ marginBottom: "15px" }}>
                            <input
                              className="form-control md"
                              type="text"
                              placeholder="Country"
                              value={billingCountry}
                              onChange={(e) =>
                                setBillingCountry(e.target.value)
                              }
                            />
                          </div>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="exampleForm.ControlInput5"
                        >
                          <div style={{ marginBottom: "15px" }}>
                            <input
                              className="form-control md"
                              type="text"
                              placeholder="Address 2"
                              value={billingAddressLine2}
                              onChange={(e) =>
                                setBillingAddressLine2(e.target.value)
                              }
                            />
                          </div>
                          <div style={{ marginBottom: "15px" }}>
                            <input
                              className="form-control md"
                              type="number"
                              placeholder="Postcode"
                              value={billingPostcode}
                              onChange={(e) =>
                                setBillingPostcode(e.target.value)
                              }
                            />
                            {inputError && !billingPostcode ? (
                              <span className="preEmpt-error-msg">
                                Postcode is required !
                              </span>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div style={{ marginBottom: "15px" }}>
                            <input
                              className="form-control md"
                              type="text"
                              placeholder="State"
                              value={billingState}
                              onChange={(e) => setBillingState(e.target.value)}
                            />
                          </div>
                        </Form.Group>
                      </Row>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Row>
                      <Form.Group
                        as={Col}
                        controlId="exampleForm.ControlInput1"
                      >
                        {vehicleData.price_status === "leasing" &&
                          key === "daily_leasing" && (
                            <div>
                              <p
                                style={{
                                  textAlign: "left",
                                }}
                              >
                                <span className="cs-item-price">
                                  {vehicleData.rental_price}
                                </span>
                                /day
                              </p>
                            </div>
                          )}
                        {vehicleData.price_status === "leasing" &&
                          key === "monthly_leasing" && (
                            <div>
                              {packagePrice !== "" ? (
                                <div>
                                  <p
                                    style={{
                                      textAlign: "left",
                                    }}
                                  >
                                    <span className="cs-item-price">
                                      {packagePrice}
                                    </span>
                                    /month
                                  </p>
                                </div>
                              ) : (
                                <div>
                                  <p
                                    style={{
                                      textAlign: "left",
                                    }}
                                  >
                                    <span className="cs-item-price">
                                      {defaultPackagePrice}
                                    </span>
                                    /month
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        {vehicleData.price_status === "selling" && (
                          <div>
                            <p
                              style={{
                                textAlign: "left",
                              }}
                            >
                              <span className="cs-item-price">
                                {vehicleData.selling_price}
                              </span>
                            </p>
                          </div>
                        )}
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        controlId="exampleForm.ControlInput1"
                        className="fooder"
                      >
                        <Button
                          className="fooder-btn"
                          onClick={handleBookingRequest}
                        >
                          Booking Request
                        </Button>
                      </Form.Group>
                    </Row>
                  </Modal.Footer>
                </Modal>
                <Modal
                  show={nextStepShow}
                  onHide={handleBookingCancel}
                  dialogClassName="modal-80w"
                  aria-labelledby="example-custom-modal-styling-title"
                  backdrop="static"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <div style={{ fontSize: "16px" }}>Step 2 of 2</div>
                      <div className="modal-title">Payment Detail</div>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="modal-title">{vehicleData.model_name}</div>
                    <Row style={{ marginTop: "30px" }}>
                      <div>
                        <p
                          style={{
                            fontWeight: "700",
                            marginBottom: "5px",
                          }}
                        >
                          Subscriptin Details
                        </p>
                      </div>
                      <div className="row" style={{ display: "flex" }}>
                        <div className="col-md-6 col-lg-6">
                          <p style={{ marginBottom: "5px" }}>Vehicle Fee</p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                          <p
                            style={{
                              marginBottom: "5px",
                              textAlign: "right",
                            }}
                          >
                            SGD {subscription_price}
                          </p>
                        </div>
                      </div>
                      <div className="row" style={{ display: "flex" }}>
                        <div className="col-md-6 col-lg-6">
                          <p
                            style={{
                              fontWeight: "700",
                              marginBottom: "5px",
                            }}
                          >
                            Total Amount Chargeable
                          </p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                          <p
                            style={{
                              fontWeight: "700",
                              marginBottom: "5px",
                              textAlign: "right",
                            }}
                          >
                            SGD {total_amt}
                          </p>
                        </div>
                      </div>
                    </Row>
                    <div className="line2"></div>
                    <div
                      className="row"
                      style={{ display: "flex", marginLeft: " 20px" }}
                    >
                      <div className="col-md-6 col-lg-6">
                        <p style={{ marginBottom: "5px" }}>First Name</p>
                        <p
                          style={{
                            fontWeight: "bold",
                            marginBottom: "5px",
                          }}
                        >
                          {firstName}
                        </p>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <p
                          style={{
                            marginBottom: "5px",
                          }}
                        >
                          Last Name
                        </p>
                        <p
                          style={{
                            fontWeight: "bold",
                            marginBottom: "5px",
                          }}
                        >
                          {lastName}
                        </p>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div className="booking-fooder">
                      <p>
                        You won't be charged for the subscription until the
                        booking has been confirmed by Sfleasing Auto.
                      </p>
                    </div>
                    <Form.Group
                      as={Col}
                      controlId="exampleForm.ControlInput1"
                      className="booking-fooder"
                    >
                      <Button
                        onClick={handleBookingCancel}
                        className="fooder-btn"
                      >
                        Cancel Request
                      </Button>
                      <Button
                        onClick={handleBookingConfirm}
                        className="fooder-btn"
                      >
                        Confirm
                      </Button>
                    </Form.Group>
                  </Modal.Footer>
                </Modal>
                <div className="row" style={{ margin: "40px 10px" }}>
                  <div className="col-md-12 col-lg-12">
                    <h2
                      style={{
                        marginBottom: "18px",
                        fontSize: "32px",
                        fontWeight: "bold",
                      }}
                    >
                      {vehicleData.model_name}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: vehicleData.description,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </Container>
      </section>
      <BottomBanner
        logo={<FaBullhorn style={{ marginBottom: 10 }} />}
        text="Need A Hand To Find Your Car?"
      />
    </Fragment>
  );
}

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});

export default connect(mapStateToProp)(VehicleDetails);
