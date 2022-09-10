import React,{useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { 
  N_setGoogleAuth, 
  N_get_settings,
  N_checkMobileStatus, 
  N_setGoogleAuthOTP
} from "../../utils/api_functions";
import MobileVerification from "../MobileVerification"
import toast from "react-hot-toast";
var QRCode = require("qrcode");
const Twofactor = ({ closeModal }) => {
  const { userInfo } = useSelector((state) => state?.user?.value);
  const userid = userInfo.user_id;
  const [url, setUrl] = useState();
  const [gotp, setGotp] =useState();
  const [userSecret, setUserSecret] = useState();
  const [authenticator, setAuthenticator] = useState(0);
  const [authM, setMAuthenticator] = useState(0);
   const generatSecret = () => {
     N_setGoogleAuth(
      userid
    ).then((data) => {
      let d = data.data;
      if(data.status == 200){
        QRCode.toDataURL(d.secret.otpauth_url, function (err, data_url) {
          setUrl(data_url);
          setUserSecret(d.secret.base32);
        });
      }
    });
  };

  useEffect(() => {
    N_get_settings(userid)
      .then((data) => {
        let d = data.data;
        if (d.status === 200) {
          setAuthenticator(d.params.authenticator_status);
        }
      })
      .catch((e) => {
        console.log(e);
      });

    N_checkMobileStatus(userid)
      .then((data) => {
        let d = data.data;
        if (d.status === 200 && d.params.is_mobile === 1) {
          setMAuthenticator(1);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const setAuthentication = (e, state, action) => {
    e.preventDefault();
    N_setGoogleAuthOTP(
      userid,
      state,
      gotp,
      action
    ).then((d) => {
      let data = d.data;
      if (data.status === 200) {
          toast.success(data.message);
          setTimeout(()=>{
            window.location.reload();
          }, 1000)
      } else {
        toast.error(data.message);
      }
    });
  };
  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <p class="modal-title text-dark " id="exampleModalLabel">
                <i className="fas fa-tablet"></i> Two Factor Authentication
              </p>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="contaier">
                <div className="row">
                  <div className="col-12">
                    <h6 class="modal-title lableclass2">
                      Choose your Authentication type
                    </h6>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="mt-4">
                  <ul
                    class="nav nav-tabs"
                    role="tablist"
                    style={{
                      borderBottom: "0",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <li>
                      <a class=" navto" data-bs-toggle="tab" href="#home"  onClick={(e) => {
                         generatSecret();
                      }}>
                        <input
                          class="form-check-input"
                          type="radio"
                          checked={authenticator == 2}
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label class="form-check-label text-success" for="inlineRadio1">
                        Authenticator App
                        </label>
                      </a>
                    </li>
                    <li class="nav-item ">
                      <a class=" navto" data-bs-toggle="tab" href="#menu1">
                        <input
                          class="form-check-input"
                          type="radio"
                          checked={authenticator == 1}
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label class="form-check-label text-success" for="inlineRadio2">
                        Mobile SMS
                        </label>
                      </a>
                    </li>
                    <li class="nav-item ">
                      <a class=" navto" data-bs-toggle="tab" href="#menu2">
                        <input
                          class="form-check-input"
                          type="radio"
                          checked={authenticator == 0}
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          value="option3"
                        />
                        <label class="form-check-label text-success" for="inlineRadio3">
                        None
                        </label>
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div id="home" class="container tab-pane ">
                      <br />
                      <form>
                      <div className="modal-header">
                        <h6>Google Authentication</h6>
                      </div>
                      <div className="mb-2">
                        <div className="form-group center">
                           <img src={url} />
                        </div>
                        <div className="form-group center">{userSecret}</div>
                      </div>
                        Enter OTP
                      <div className="form-group center">
                           <input type="number" onChange={(e)=>{setGotp(e.target.value)}} />
                        </div>
                      <div>
                        <button
                          type="submit"
                          className="btn btn-theme-color"
                          onClick={(e) => {
                            setAuthentication(e, 2, "g");
                          }}
                        >
                          <i
                            className="loading-icon fas fa-spinner fa-spin"
                            id="loader"
                            style={{ display: "none" }}
                          ></i>
                          Yes
                        </button>
                        <button
                          type="button"
                          className="btn btn-default"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                    </div>
                    <div id="menu1" class="container tab-pane fade">
                      <br />
                      <div>
                        <h6 className="text-warning"> {!authM?'Verify Your Mobile Number':'Are you sure Enable Mobile Authenticator?'}</h6>
                      </div>
                        {!authM?
                        <div className="modal-body">
                        <MobileVerification/>
                        </div>:null}
                  
                    <div>
                        <button
                          type="submit"
                          className="btn btn-theme-color"
                          onClick={(e) => {
                            setAuthentication(e, 1, "m");
                          }}
                        >
                          <i
                            className="loading-icon fas fa-spinner fa-spin"
                            id="loader"
                            style={{ display: "none" }}
                          ></i>
                          Yes
                        </button>
                        <button
                          type="button"
                          className="btn btn-default"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                    <div id="menu2" class="container tab-pane fade">
                      <br />
                      <div>
                        <h6 className="text-danger">Are you sure Disabled Authenticator?</h6>
                      </div>
                      <div className="d-flex justify-content-around">
                      <div>
                        <button
                          type="submit"
                          className="btn btn-theme-color"
                          onClick={(e) => {
                            setAuthentication(e, 0, "n");
                          }}
                        >
                          <i
                            className="loading-icon fas fa-spinner fa-spin"
                            id="loader"
                            style={{ display: "none" }}
                          ></i>
                          Yes
                        </button>
                        <button
                          type="button"
                          className="btn btn-default"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
              
              <button type="button" class="buttonc" data-bs-dismiss="modal">Back</button>
             

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Twofactor;