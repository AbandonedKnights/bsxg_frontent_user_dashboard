import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../features/User";
import {WEB_THEME} from "../features/Exchange"
export default function MyNavbar(props) {
  const { isLoggedIn } = useSelector((state) => state?.user?.value);
  const { switch_theme } = useSelector((state) => state?.exchange?.value);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      console.log("iw::", isLoggedIn);
      navigate("../", { replace: true });
    }
  }, [isLoggedIn]);
  //console.log("navbar", isLoggedIn);
  const langs = {
    en: "English/USD",
    hi: "Hindi",
  };

  const [currentLang, setCurrentLang] = useState(langs.en);

  function toogleTheme(e) {
    if (e.target.checked==true) {
    
      dispatch(WEB_THEME({ switchtheme: "light" }));
      localStorage.removeItem("tradingview.current_theme.name")
      
    } else {
      dispatch(WEB_THEME({ switchtheme: "dark" }));
      localStorage.removeItem("tradingview.current_theme.name")
    }
    let html = document.getElementsByTagName("html")[0];
    console.log(html.dataset, "im calling");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark app-bg-dark"
    style={{padding: "0px !important"}}>
      <div className="container-fluid" style={{marginLeft: "60px",
    padding: "0px"}}>
        {/* <a className="navbar-brand" href="/">
          Navbar
        </a> */}
        <Link className="navbar-brand" to="/home">
          <img
            src="/images/logo.png"
            style={{ height: "70px" }}
            alt=" img not found"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 m-auto">
              <li class="nav-item">
                  <a class="nav-link " href="#home"><i className="fa fa-home" aria-hidden="true" style={{color:"#f59a09"}} > </i>   Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about-us"><i className="fa fa-area-chart"aria-hidden="true" style={{color:"#f59a09"}}> </i> Market</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#features"><i className="fa fa-graduation-cap"aria-hidden="true" style={{color:"#f59a09"}}> </i> Academy</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#roadmap"><i className="fa fa-th-list"aria-hidden="true" style={{color:"#f59a09"}}> </i>  Assets</a>
                </li>				
                <li class="nav-item">
                  <a class="nav-link" href="#contact"><i className="fa fa-user"aria-hidden="true" style={{color:"#f59a09"}}> </i> Account</a>
                </li>
                <li class="nav-item btn-login">
                  <button className="btn btn-danger mt-2"
                   onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem("exchange_inrx_userID");
                    dispatch(logout());
                  }}
                  ><i className="fa fa-user"aria-hidden="true" style={{color:"#f59a09"}}> </i> Logout</button>
                </li>
                {/* <li className="nav-item btn-login">
                  <NavLink to="/register" className="nav-link">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>{" "}
                    Register
                  </NavLink>
                </li> */}
                {/* <li className="nav-item btn-login">
                  <NavLink to="/login" className="nav-link">
                    <i className="fa fa-user" aria-hidden="true"></i>login
                  </NavLink>
                </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
