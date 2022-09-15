import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../features/User";
import {WEB_THEME} from "../features/Exchange"
export default function MyNavbar(props) {
  const { isLoggedIn } = useSelector((state) => state?.user?.value);
  const { switch_theme } = useSelector((state) => state?.exchange?.value);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
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
    <nav className="navbar navbar-expand-lg navbar-dark app-bg-dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">
          Navbar
        </a> */}
        <Link className="navbar-brand" to="/">
          <img
            src="/images/BSXG.png"
            style={{ height: "60px" ,width:"150px" }}
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
            {isLoggedIn ? (
              <>
               {/* <li className="">
                <NavLink to="/exchange/btc-inr" className="nav-link">
                    Exchange
                  </NavLink>
                </li> */}

                <li className="nav-item">
                  <Link className="nav-link" to="/wallet">
                    Wallet
                  </Link>
                  {/*  <ul
                    className="dropdown-menu dropdown-menu-end dropdown-menu-dark"
                    aria-labelledby="walletDropdown"
                  >
                    <li>
                      <NavLink to="/fund" className="dropdown-item">
                        My Fund
                      </NavLink>
                    </li>
                    <li>
                      <Link to="/deposit" className="dropdown-item">
                        Deposit
                      </Link>
                    </li>
                    <li>
                      <Link to="/withdraw" className="dropdown-item">
                        Withdraw
                      </Link>
                    </li>
                    <li>
                      <Link to="/transationhistory" className="dropdown-item">
                        Transaction History
                      </Link>
                    </li>
                  </ul> */}
                </li>
               
                {/* <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Orders
                  </NavLink>
                </li> */}

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/Security_Settings"
                    id="accountDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end dropdown-menu-dark"
                    aria-labelledby="accountDropdown"
                  >
                    <li>
                      <NavLink
                        to="/Security_Settings"
                        className="dropdown-item"
                      >
                        Security Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Referral_Bonus" className="dropdown-item">
                        Referral Bonus
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/" className="dropdown-item">
                        Address Management
                      </NavLink>
                    </li> */}

                    <li>
                      <NavLink
                        to="/"
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault();
                          localStorage.removeItem("exchange_inrx_userID");
                          dispatch(logout());
                        }}
                      >
                        Log Out
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/*  {<li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/logout"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(logout());
                    }}
                  >
                    <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
                  </NavLink>}
                </li> */}
              </>
            ) : (
              <>
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
                <li className="nav-item btn-login">
                  <NavLink to="/register" className="nav-link">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>{" "}
                    Register
                  </NavLink>
                </li>
                <li className="nav-item btn-login">
                  <NavLink to="/login" className="nav-link">
                    <i className="fa fa-user" aria-hidden="true"></i>login
                  </NavLink>
                </li>
                {/* <div class="header__menu-wrapper d-flex align-items-center">
                           <div class="main-menu">
                              <nav id="mobile-menu"> */}
                                 {/* <ul>
                                    <li>
                                       <a href="https://sbgglobal.io/user/dashboard" style="color: white;"><i class="fa fa-home" aria-hidden="true" style="color:#f59a09;padding-right: 0.5rem;font-size: 20px;"></i> Home</a>
                                    </li>
                                    <li>
                                       <a href="https://sbgglobal.io/user/market/total" style="color: white;"><i class="fa fa-area-chart" aria-hidden="true" style="color:#f59a09;padding-right: 0.5rem;font-size: 20px;"></i> Market</a>
                                    </li>
                                    <li>
                                       <a href="https://sbgglobal.io/user/academy" style="color: white;"><i class="fa fa-graduation-cap" style="color:#f59a09;padding-right: 0.5rem;font-size: 20px;"></i> Academy</a>
                                    </li>
                                    <li>
                                       <a href="https://sbgglobal.io/user/assets/all" style="color: white;"><i class="fa fa-th-list" style="color:#f59a09;padding-right: 0.5rem;font-size: 20px;"></i> Assets</a>
                                    </li>
                                    <li>
                                       <a href="https://sbgglobal.io/user/account/index" style="color: white;"><i class="fa fa-user" style="color:#f59a09;padding-right: 0.5rem;font-size: 20px;"></i> Account</a>
                                    </li>
                                 </ul> */}
                              {/* </nav>
                           </div>
                        </div> */}
              </>
            )}

            {/* <li className="nav-item  dropdown">
              <NavLink
                to="/dw"
                className="nav-link"
                id="qrDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-download" aria-hidden="true"></i>
                 {t("download")}
              </NavLink>
              <div
                className="dropdown-menu qrDropdownArea dropdown-menu-end dropdown-menu-dark"
                aria-labelledby="qrDropdown"
              >
                <img
                  src="images/exchange.png"
                  alt="not found"
                  width={110}
                  className="m-0"
                />
              </div>
            </li> */}
            {/* <li>
              <div className="">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                  onClick={(e) => {
                    toogleTheme(e);
                  }}
                />
                <label htmlFor="checkbox" className="labeltog">
                  <i className="fas fa-moon"></i>
                  <i className="fas fa-sun"></i>
                  <div className="ball"></div>
                </label>
              </div>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {currentLang}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end dropdown-menu-dark"
                aria-labelledby="navbarDropdown"
              >
                {Object.entries(langs).map(([lng, lang]) => (
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        i18n.changeLanguage(lng);
                        setCurrentLang(langs[lng]);
                      }}
                    >
                      {lang}
                    </a>
                  </li>
                ))}
              </ul>
            </li> */}
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
