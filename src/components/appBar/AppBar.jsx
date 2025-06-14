import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { UserMenu } from "../userMenu/UserMenu";
import Navigation from "../navigation/Navigation";
import AuthNav from "./authNav/AuthNav";

export const AppBar = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.container}>
      <NavLink to="/">Home</NavLink>
      {IsLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
