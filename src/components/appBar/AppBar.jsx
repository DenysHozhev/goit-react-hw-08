import { NavLink } from "react-router-dom";

export const AppBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/regoster">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </div>
  );
};

export default AppBar;
