const NavItem = (props) => {
  return (
    <li className="nav_item">
      <a href="##" className="icon_btn">
        <img src={props.icon} alt="" className="icon_img" />
      </a>
    </li>
  );
};

export default NavItem;
