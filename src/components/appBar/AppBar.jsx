import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Logout from "../logout/Logout";

export const AppBar = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.container}>
      <NavLink to="/">Home</NavLink>
      {!IsLoggedIn && (
        <>
          <NavLink to="/register">Registration</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
      {IsLoggedIn && (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          <Logout />
        </>
      )}
    </div>
  );
};

export default AppBar;
