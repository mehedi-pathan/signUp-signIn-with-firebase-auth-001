import React from "react";
import google_play_icon from "../../assets/google_play_store_icon.png";
import apple_store_icon from "../../assets/apple_store_icon.png";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import "./SignIn.scss";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const SignIn = () => {
  const { user, logOut } = UserAuth();

  return (
    <div className="signIn_form">
      <div className="left_area">
        <h1 className="title_text">Simple Secure &#38; Reliable</h1>
        <p className="sub_text">
          Keep Conneceted with People throgh instant messanger and money
          transfer
        </p>
        <div className="appstore_button_wrapper">
          <div>
            <button className="btn apple_store_btn">
              <img src={apple_store_icon} alt="" />
              <span>App Store</span>
            </button>
          </div>
          <div>
            <button className="btn goolge_store_btn">
              <img src={google_play_icon} alt="" />
              <span>Play Store</span>
            </button>
          </div>
        </div>
      </div>
      <div className="right_area">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>

        <div className="box">
          <h2 className="title">Log In </h2>
          <form>
            <div className="from_group_input">
              <EmailRoundedIcon className="icon" />
              <input type="email" placeholder="Enter Your email" />
            </div>

            <div className="from_group_input">
              <KeyRoundedIcon className="icon" />
              <input type="password" placeholder="Enter Password" />
            </div>
          </form>
          <div className="logIn_bottom_text">
            <a href="##" className="forgot_btn">
              Forgot password ?
            </a>
            <button className="btn submit_button">Login</button>
            <hr />
            <div className="faq_text">
              <p className="muted">
                New user? <Link to="/signup">Sign up</Link>
              </p>
              <a href="##">Freequently Asked Question(FAQ)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
