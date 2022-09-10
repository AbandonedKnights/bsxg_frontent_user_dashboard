import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../features/User";

export default function Navigationbar (props) {
  const { isLoggedIn, userInfo } = useSelector((state) => state?.user?.value);
  const dispatch = useDispatch();
  console.log("navbar", isLoggedIn);
  return (
    <div className="nav_area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <ul>
              {/* <li>
                <a href="/register">
                  <i className="fa fa-user-plus" aria-hidden="true"></i> Register
                </a>
              </li>
              <li>
                <a href="/login">
                  <i className="fa fa-user" aria-hidden="true"></i> Login
                </a>
              </li> */}

              {isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/">{userInfo.email}</NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/logout"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(logout());
                      }}
                    >
                      <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/register">
                      <i className="fa fa-user-plus" aria-hidden="true"></i>{" "}
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">
                      <i className="fa fa-user" aria-hidden="true"></i> Login
                    </NavLink>
                  </li>
                </>
              )}
              <li>
                <a href="#">
                  <i className="fa fa-download" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  English/USD <i className="fa fa-sort-desc" aria-hidden="true"></i>
                </a>
              </li>

              {/* <li><div id="google_translate_element"></div></li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
