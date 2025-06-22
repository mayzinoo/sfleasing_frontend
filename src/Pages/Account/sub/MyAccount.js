//Libraries
import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
//Components
import Input from "../../../Components/Inputfield";
//CSS
import "../components/styles/MyAccount.css";
import { img_url } from "../../../Api/api";

function MyAccount(props) {
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    profile: "",
  });

  useEffect(() => {
    setUserDetails(JSON.parse(props.GetUserApi));
  }, [props.GetUserApi]);

  const userName = userDetails.first_name + " " + userDetails.last_name;

  //Profile
  const originalProfileImg =
    "https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg"; //from backend, current used image
  const [profileImg] = useState(originalProfileImg);

  return (
    <Fragment>
      <div className="main-content">
        <div className="MyAccount">
          <Container className="userInfo" fluid>
            <p className="sub-title">Personal Settings</p>
            <Container className="personal-setting-wrap" fluid>
              <Row>
                <Col md={4} className="profileLeft">
                  <div className="profileImg">
                    {userDetails.profile === "" ? (
                      <img
                        width={200}
                        height={200}
                        className="rounded-profile"
                        src={profileImg}
                        alt=""
                      />
                    ) : (
                      <img
                        width={200}
                        height={200}
                        className="rounded-profile"
                        src={img_url + userDetails.profile}
                        alt=""
                      />
                    )}
                  </div>
                </Col>
                <Col md={8}>
                  <Input
                    type="text"
                    header="User Name"
                    icon="fas fa-font"
                    value={userName}
                    disabled="disabled"
                  ></Input>
                  <Input
                    type="text"
                    header="User Email Address"
                    icon="fas fa-envelope"
                    value={userDetails.email}
                    disabled="disabled"
                  ></Input>
                  <Input
                    type="text"
                    header="User Phone Number"
                    icon="fas fa-phone"
                    value={userDetails.phone}
                    disabled="disabled"
                  ></Input>
                </Col>
              </Row>
              <Row className="editLink-row">
                <div className="editLinks">
                  <a href="/changepassword">Change Password</a>
                  <a href="/account/editprofile">Edit Profile</a>
                </div>
              </Row>
            </Container>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});

export default connect(mapStateToProp)(MyAccount);
