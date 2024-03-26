import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../components/Cart"
import "../style/Navbar.css"

function Nav(props) {
  const navigate = useNavigate();

  const logoutUser = () => {
    // eslint-disable-next-line react/prop-types
    props.setToken(null);
    navigate("/");
  };


  // eslint-disable-next-line react/prop-types
  if (props.token) {
    return (
    <div className="navbar">
      <nav className="links">
  
        <NavLink to="/">Home</NavLink>| |
        <NavLink to="/contact">Contact</NavLink>| |
        <NavLink to="/items">Items</NavLink>| |
        <NavLink to="/additem">Add an Item</NavLink>| |
        <NavLink to="/account">Account</NavLink>| | 
        <a onClick={logoutUser}>Logout</a>| |
        <Cart />
      </nav>
    </div>
    );
  }
  return (
    <div className="navbar">
    <nav className="links">
      <NavLink to="/">Home</NavLink>| |
      <NavLink to="/items">Items</NavLink>| |
      <NavLink to="/register">Register</NavLink>| |
      <NavLink to="/login">Login</NavLink>| |
      <NavLink to="/contact">Contact</NavLink>| |
      <Cart />
   
    </nav>
    </div>
  );
}

export default Nav;
