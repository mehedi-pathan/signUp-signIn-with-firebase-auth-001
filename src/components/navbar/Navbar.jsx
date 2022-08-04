import { NavLink } from "react-router-dom";
import "./navbar.scss";
import CompanyLogo from "../../assets/company_logo.png";
import HomePage from "../../pages/home/HomePage";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="company_logo" Link to={"/"} element={<HomePage />}>
        <img src={CompanyLogo} alt="" />
      </div>
      <ul className="navbar_nav"> {props.children} </ul>
    </nav>
  );
};

export default Navbar;
