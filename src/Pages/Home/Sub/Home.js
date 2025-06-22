//Libraries
import React, { Fragment } from "react";
import { connect } from "react-redux";
//Component
import RevolutionSlider from "../Components/RevolutionSlider";
import Services from "../Components/Services";
import ShowRoom from "../Components/ShowRoom";
import UserGuide from "../Components/UserGuide";
//CSS
import "../Components/styles/Home.css";

const Home = () => {
  return (
    <Fragment>
      <RevolutionSlider />
      <Services />
      <ShowRoom />
      <UserGuide />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Home);
