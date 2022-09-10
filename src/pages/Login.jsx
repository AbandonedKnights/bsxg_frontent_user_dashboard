import { useEffect} from "react";
import { useTranslation } from "react-i18next";
import "react-notifications/lib/notifications.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import EmailLogin from "./auth/EmailLogin";
import MobileLogin from "./auth/MobileLogin";

export default function Login(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state?.user?.value);

  useEffect(() => {
    if (isLoggedIn) {
      console.log("cmae in loguse::");
      navigate("../wallet", { replace: true });
    }
  }, []);
  
  return (
    <div className="container">
      <div className="login_area">
        <div className="row">
          <div className="col-lg-12">
            <h1>{t("login")}</h1>
            <div className="login_area_block col-6">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
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
                    <img src="images/msg_icon.png" alt="not found" /> Email
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
                    <img src="images/phone_icon.png" alt="not found" /> Phone
                  </button>
                </li>
              </ul>

              <div className="tab-content login_form" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  {/* email login start */}
                  <EmailLogin />
                  {/* email login end */}
                  <label for="exampleCheck1" classNameName="mt-2">
                    <span className="register-txt">
                      Do you have an account{" "}
                      <Link to="/register">Register?</Link>
                    </span>
                    <br />
                  </label>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  {/* mobile login start */}
                  <MobileLogin />
                  {/* mobile login end */}
                  <label for="exampleCheck1" classNameName="mt-2">
                    <span className="register-txt">
                      Do you have an account{" "}
                      <Link to="/register">Register?</Link>
                    </span>
                    <br />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
