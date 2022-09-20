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
    // if (isLoggedIn) {
    //   console.log("cmae in loguse::");
    //   navigate("../home", { replace: true });
    // }
  }, []);
  
  return (
    <>

    <section class="vh-100" style={{margin:"30px 0px"}}>
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
      <h2 style={{textAlign:"center"}}>Welcome to our Website</h2>
      <Link to="/">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </Link>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{margin:"0px"}}>
       
        <div className="container">
      <div className="login_area">
        <div className="row">
          <div className="col-lg-12">
            <h1>{t("login")}</h1>
            <div className="login_area_block" style={{padding:"25px 10px",background:"rgb(175 169 169)",borderRadius:"5px"}}>
              <ul className="nav nav-tabs" id="myTab" role="tablist" style={{margin:"0px 30px"}}>
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
                    style={{borderRadius:"5px 0px 0px 5px",padding:"15px"}}
                  >
                    {/* <img src="images/msg_icon.png" alt="not found" style={{margin:"auto"}} /> */}
                     Email
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
                    style={{borderRadius: "0px 5px 5px 0px",padding:"15px"}}
                  >
                    {/* <img src="images/phone_icon.png" alt="not found" style={{margin:"auto"}} />  */}
                    Phone
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
                      <Link to="/register" style={{color:"white"}}>Register?</Link>
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
                      <Link to="/register"  style={{color:"white"}}>Register?</Link>
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
       
      </div>
    </div>
  </div>
  
</section>
</>
  );
}
