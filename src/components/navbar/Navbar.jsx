import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import CompanyLogo from "../../assets/company_logo.png";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <div className="company_logo">
          <img src={CompanyLogo} alt="" />
        </div>
      </Link>

      <div className="btn_wraper">
        <Link to={"/signup"}>
          <button className="btn_links btn_primary">Registration</button>
        </Link>
        <Link to={"/signin"}>
          <button className="btn_links btn_primary">Log in</button>
        </Link>
      </div>

      <ul className="navbar_nav"> {props.children} </ul>
    </nav>
  );
};

export default Navbar;
