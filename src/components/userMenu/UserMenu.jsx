import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate, isLoggedIn]);
  const user = useSelector(selectUser);
  return (
    <div className={css.container}>
      <NavLink to="/contacts">Contacts</NavLink>
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={css.button}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
