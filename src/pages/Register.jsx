import { t } from "i18next";
import { Link } from "react-router-dom";
import Navbar from "../components/HomeNavbar";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import EmailRegistration from "./auth/EmailRegistration";
// import MobileRegistration from "./auth/MobileRegistration";

export default function Register(props) {
  return (
    <>
      <section class="vh-100" style={{ margin: "30px 0px" }}>
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="/images/logo.png" style={{ height: "100px" }} />
              </div>
              <h2 style={{ textAlign: "center" }}>Welcome to our Website</h2>
              <Link to="/">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  class="img-fluid" alt="Sample image" />
              </Link>
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{ margin: "0px" }}>

              <div className="container">
                {/* {showSuccess && (
        <div class="row justify-content-center">
          <div className="col-md-6">
            <div className="card card-body border-0 text-center shadow-sm my-5">
              <h1 className="font-dongle fs-1 my-0 py-0">Congratulations</h1>
              <p className="font-comforta py-0 mb-3">
                Registration successful, enjoy your journey and keep trading.{" "}
                <Link to="/login" className="text-muted">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      */}

                {
                  <div className="login_area">
                    <div className="row">
                      <div className="col-lg-12">
                        <h1>{t("register")}</h1>
                        <div className="login_area_block" style={{
                          background: " rgb(175, 169, 169)",
                          borderRadius: "5px"
                        }}>
                          {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      <img src="images/msg_icon.png"   alt="not found" /> Email
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      <img src="images/phone_icon.png"   alt="not found"/> Phone
                    </button>
                  </li>
                </ul> */}

                          <div className="tab-content login_form" id="myTabContent">
                            {/* Email Registration */}
                            <div
                              className="tab-pane fade show active"
                              id="home"
                              role="tabpanel"
                              aria-labelledby="home-tab"
                            >
                              <EmailRegistration />
                            </div>

                            {/* Mobile Registration */}
                            {/* <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <MobileRegistration />
                  </div> */}
                            <label for="exampleCheck1" classNameName="mt-2">
                              <span className="register-txt">
                                Do you have an account{" "}
                                <Link to="/login" style={{ color: "white" }}>Login?</Link>
                              </span>
                              <br />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
