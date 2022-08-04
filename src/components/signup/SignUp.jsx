import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import "./SignUp.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import google_logo from "../../assets/G_logo.png";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { googleSignIn, createUser } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSingUp = async (e) => {
    e.preventDefault();
    setError("");
    navigate("/");
    try {
      await createUser(email, password);
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  return (
    <div className="signUp_form">
      <div className="left_area">
        <h1 className="title_text">Start turning your ideas into reality</h1>
        <p className="sub_text">
          <span>
            Create a free acocunt and get full access to all features for
            30-days.
          </span>
          <span>
            No credit card needed. Trusted by over 4,000 professionals
          </span>
        </p>
      </div>
      <div className="right_area">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>

        <div className="box">
          <h2 className="title">Create an account</h2>
          <form onSubmit={handleSingUp}>
            <div className="from_group_input">
              <BadgeRoundedIcon className="icon" />
              <input type="text" placeholder="Enter Your Full name" />
            </div>
            <div className="from_group_input">
              <EmailRoundedIcon className="icon" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Your email"
                required
              />
            </div>

            <div className="from_group_input">
              <KeyRoundedIcon className="icon" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
                required
              />
            </div>

            <div className="logIn_bottom_text">
              <div className="btn_set">
                <button type="submit" className="btn submit_button">
                  Sign up
                </button>
                <button
                  className="btn google_signup_btn"
                  onClick={handleGoogleSignIn}
                >
                  <img src={google_logo} alt="google icon" />
                  Sign up with google
                </button>
              </div>
              <hr />
              <div className="faq_text">
                <p className="muted">
                  already a user? <Link to="/">Log in</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
