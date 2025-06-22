import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
// css
import { Container, Row, Col } from "react-bootstrap";
import "@fortawesome/fontawesome-free";
import "../Components/styles/Vehicles.css";

import {
  VehicleApi,
  BrandApi,
  BodyApi,
  FuelApi,
  VehiclesSearchApi,
} from "../../../Api/api";

import { IoCarSportSharp } from "react-icons/io5";

// component
import TopBanner from "../../../Components/TopBanner";
import ViewGridLayout from "../Components/ViewGridLayout";
import Pagination from "../../../Components/Pagination";
import NavHeader from "../../../Components/NavHeader";

const Vehicles = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9); //Items in the pag

  const [vehicles, setVehicles] = useState([]);
  const [brandTypes, setBrandTypes] = useState([]);
  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);

  const location = useLocation();
  let changeBrand = "";
  let changeBodyType = "";
  let changeFuelType = "";
  let sortData = "";
  console.log("vehicle_data>> ", props.location.state);
  useEffect(() => {
    VehicleApi()
      .then((vehicleData) => {
        if (props.location.state !== null) {
          const vehicle_data = props.location.state.vehicles;
          console.log("vehicle_data>> ", vehicle_data);
          setVehicles(vehicle_data);
        } else {
          console.log("vehicleData>> ", vehicleData);
          const sortedVehicleData = vehicleData.sort((a, b) => b.id - a.id);
          setVehicles(sortedVehicleData);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });

    BrandApi()
      .then((brandType) => {
        setBrandTypes(brandType);
      })
      .catch((error) => {
        console.log("error", error);
      });

    BodyApi()
      .then((bodyType) => {
        setBodyTypes(bodyType);
      })
      .catch((error) => {
        console.log("error", error);
      });

    FuelApi()
      .then((fuelType) => {
        setFuelTypes(fuelType);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [location, props.location.state]);

  // Get current Vehicles
  const indexOfLastVehicles = currentPage * postsPerPage;
  const indexOfFirstVehicles = indexOfLastVehicles - postsPerPage;
  const currentVehicles = vehicles.slice(
    indexOfFirstVehicles,
    indexOfLastVehicles
  );

  const vehicledata = currentVehicles;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage(currentPage + 1);

  const prevPage = () => setCurrentPage(currentPage - 1);

  const onSelectOrder = (e) => {
    sortData = e.target.value;
    if (sortData === "price-1") {
      VehicleApi()
        .then((vehicleData) => {
          const sortedHeightLowPrice = vehicleData.sort(
            (a, b) => b.rental_price - a.rental_price
          );
          setVehicles(sortedHeightLowPrice);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else if (sortData === "price-0") {
      VehicleApi()
        .then((vehicleData) => {
          const sortedLowHeightPrice = vehicleData.sort(
            (a, b) => a.rental_price - b.rental_price
          );
          setVehicles(sortedLowHeightPrice);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      VehicleApi()
        .then((vehicleData) => {
          const sortedVehicleData = vehicleData.sort((a, b) => b.id - a.id);
          setVehicles(sortedVehicleData);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  const handleChangeBrand = (e) => {
    changeBrand = e.target.value;
  };

  const handleChangeBodyType = (e) => {
    changeBodyType = e.target.value;
  };

  const handleChangeFlueType = (e) => {
    changeFuelType = e.target.value;
  };

  const handleSearchSubmit = () => {
    VehiclesSearchApi({
      _data: {
        name: "",
        duration: "",
        brand: changeBrand,
        bodytype: changeBodyType,
        fueltype: changeFuelType,
      },
    })
      .then((vehicleSearchData) => {
        const sortedVehicleSearchData = vehicleSearchData.sort(
          (a, b) => b.id - a.id
        );
        setVehicles(sortedVehicleSearchData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Fragment>
      <TopBanner title="Vehicles" />
      <NavHeader pageName="Vehicles" />
      <section className="vehicle-body-content">
        <Container>
          <Row>
            <Col lg="9">
              <Row>
                <Col md="12">
                  <div className="vehicle-results">
                    <div className="drop-down-content">
                      <select className="drop-down" onChange={onSelectOrder}>
                        <option value="">Sort by newness</option>
                        <option value="price-1">
                          Sort by Price : High to Low
                        </option>
                        <option value="price-0">
                          Sort by Price : Low to High
                        </option>
                      </select>
                    </div>

                    <div className="vehicle-layout-btn">
                      <span style={{ color: "#222222" }}>
                        Your search returned {vehicles.length} results!
                      </span>
                    </div>
                    <div className="clear"></div>
                  </div>
                </Col>
              </Row>
              <ViewGridLayout currentPosts={vehicledata} />
              <Row>
                <Col>
                  <Pagination
                    showPerPage={false}
                    postsPerPage={postsPerPage}
                    totalPosts={vehicles.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    nextPage={nextPage}
                    prevPage={prevPage}
                  />
                </Col>
              </Row>
            </Col>
            <Col className="sidebar-column" md="3">
              <div className="sidebar">
                <div className="sidebar-content">
                  <div className="textwidget">
                    <h3 className="sidebar-title">
                      <IoCarSportSharp style={{ color: "#fe0003" }} />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <strong>VEHICLE SEARCH</strong>
                    </h3>
                    <p></p>
                    <div className="filter-form">
                      <p className="form-group">
                        <label>Brands:</label>
                        <br />
                        <select
                          className="sidebar-dropdown"
                          onChange={handleChangeBrand}
                        >
                          {brandTypes.map((brand, index) => {
                            return (
                              <option key={index} value={brand.brand_name}>
                                {brand.brand_name}
                              </option>
                            );
                          })}
                        </select>
                      </p>
                      <p className="form-group">
                        <label>Body:</label>
                        <br />
                        <select
                          className="sidebar-dropdown"
                          onChange={handleChangeBodyType}
                        >
                          {bodyTypes.map((body, index) => {
                            return (
                              <option key={index} value={body.id}>
                                {body.body_type}
                              </option>
                            );
                          })}
                        </select>
                      </p>
                      <p className="form-group">
                        <label>Fuel:</label>
                        <br />
                        <select
                          className="sidebar-dropdown"
                          onChange={handleChangeFlueType}
                        >
                          {fuelTypes.map((fuel, index) => {
                            return (
                              <option key={index} value={fuel.id}>
                                {fuel.fuel_type}
                              </option>
                            );
                          })}
                        </select>
                      </p>
                      <button
                        className="sidebar-submit"
                        onClick={(e) => handleSearchSubmit(e)}
                      >
                        SEARCH
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

const mapStateToProp = (state) => ({});

export default connect(mapStateToProp)(Vehicles);
