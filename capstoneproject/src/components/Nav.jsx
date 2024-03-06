import { NavLink, useNavigate } from "react-router-dom";

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
      <nav>
        <NavLink to="/">Home</NavLink>
         <a onClick={logoutUser}>Logout</a>
      </nav>
    );
  }
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}

export default Nav;