import "./NavItem.css";

const NavItem = (props) => {
  return <li className="nav-item">{props.childern}</li>;
};
const NavItemDropDown = (props) => {
  return <li className="nav-item dropdown">{props.childern}</li>;
};

export default NavItem;
export { NavItemDropDown };
