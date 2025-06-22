//Libraries
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//CSS
import "./styles/VehicleFilter.css";
//API
import {
  BrandApi,
  BodyApi,
  FuelApi,
  VehiclesSearchApi,
} from "../../../Api/api";

function VehicleFilter() {
  const [brandTypes, setBrandTypes] = useState([]);
  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  let history = useHistory();
  let changeBrand = "";
  let changeBodyType = "";
  let changeFuelType = "";

  useEffect(() => {
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
  }, []);

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
        history.push({
          pathname: "/vehicles",
          state: { vehicles: sortedVehicleSearchData },
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  
  return (
    <div className="vehicleSearch-form">
      <h4 className="form-title">Find your car</h4>
      <div className="form-Vehiclecontainer">
        <p className="fieldtype-taxonomy">
          <label className="fieldtype-label">Brands:</label>

          <select
            className="car_dealer_field vehicletype"
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

        <p className="fieldtype-taxonomy">
          <label className="fieldtype-label">Body:</label>
          <select
            className="car_dealer_field vehicletype"
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

        <p className="fieldtype-taxonomy">
          <label className="fieldtype-label">Fuel:</label>
          <select
            className="car_dealer_field vehicletype"
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
          className="car-filter-submit"
          onClick={(e) => handleSearchSubmit(e)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default VehicleFilter;
