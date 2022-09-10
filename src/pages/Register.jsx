import { t } from "i18next";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import EmailRegistration from "./auth/EmailRegistration";
// import MobileRegistration from "./auth/MobileRegistration";

export default function Register(props) {
  return (
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
              <div className="login_area_block">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
