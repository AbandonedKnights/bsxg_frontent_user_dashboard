import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import {
  N_panVerify,
  N_checkKYCStatus,
  N_sendAADHAROTPMobile,
  N_verifyAADHAROTPMobile,
} from "../../utils/api_functions";

const Kyc = () => {
  const [type_of_kyc, setTypeofKyc] = useState("Individual");
  const [ispanverify, setPanVerify] = useState(false);
  const [isverifypan, isVerifyPan] = useState(false);
  const [disableSend, setDisableSend] = useState(false);
  const [otploader, setOtpLoader] = useState(false);
  const [client_id, setClientId] = useState();
  const [aadhar_no, setAadharNo] = useState();
  const [disable, setDisable] = useState(true);
  const [isOtpSend, setOtpSend] = useState(false);
  const [ctime, setctime] = useState("10:00");
  const [mobile, setMobile] = useState();
  const [pan_no, setPanNo] = useState();
  const [otp, setOTP] = useState();
  const [visibl, setVisiblity] = useState("h");
  const [display,setdisplay]=useState(false);
  const [personalData, setPersnalData] = useState();
  const [loading, setLoading] = useState(false);
  const [aadharVerify, setAadharVerify] = useState(false);
  const { isLoggedIn, userInfo } = useSelector((state) => state?.user?.value);
  const userid = userInfo.user_id;
  const navigate = useNavigate();

  useEffect(() => {
    N_checkKYCStatus(userid);
  }, []);

  const otpCountdown = () => {
    let duration = 600;
    // const display = document.getElementById("#timer");
    let timer = duration,
      minutes,
      seconds;
    const tint = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setctime(minutes + ":" + seconds);

      if (--timer < 0) {
        // timer = duration;
        clearInterval(tint);
        setOtpSend(false);
      }
    }, 1000);
  };
  console.log(visibl,"ispanverify");
  return (
    <>
      <div
        class="modal fade"
        id="Kyc"
        aria-hidden="true"
        aria-labelledby="KycLabel"
        tabindex="-1"
        data-bs-backdrop="static" 
      >
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="KycLabel">
              Please Complete Your KYC
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="container">
                <div className="signupform-control">
                  <label htmlFor="type_of_kyc">TYPE OF KYC</label>
                  <select
                    id="type_of_kyc"
                    name="type_of_kyc"
                    className="form-control"
                    data-role="select-dropdown"
                    onChange={(e) => {
                      setTypeofKyc(e.target.value);
                    }}
                  >
                    <option value="Individual">Individual</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                </div>
                <div className="signupform-control" id="kyc_btn">
                  <div className="feature_checklist">
                    <div className="feature_checklist_section partial">
                      <div className="feature_checklist_section_title">
                        WITHOUT KYC
                      </div>
                      <ul className="feature_checklist_section_list">
                        <li className="feature_checklist_section_item">
                          <svg
                            viewBox="0 0 48 48"
                            width="12"
                            height="12"
                            fill="#FFC800"
                          >
                            <path
                              d="m24 48c-13.254834 0-24-10.745166-24-24s10.745166-24 24-24 24 10.745166 24 24-10.745166 24-24 24zm12.5693021-33.5729524c-.5066705-.502545-1.3281286-.502545-1.8349005 0l-15.5444523 15.4164894-5.9750331-5.9257883c-.5066706-.502545-1.3281287-.5024947-1.8349006 0-.5067213.5024947-.5067213 1.3171825 0 1.8197275l6.8924834 6.8355767c.5065185.5024947 1.3285848.5021429 1.8349006 0l16.4619025-16.3262275c.5067213-.5024947.5066706-1.3172328 0-1.8197778z"
                              fill="#55bd6c"
                            ></path>
                          </svg>
                          <span className="feature_checklist_section_item_text">
                            Deposit
                          </span>
                        </li>
                        <li className="feature_checklist_section_item">
                          <svg
                            viewBox="0 0 48 48"
                            width="12"
                            height="12"
                            fill="#FFC800"
                          >
                            <path
                              d="m24 48c-13.254834 0-24-10.745166-24-24s10.745166-24 24-24 24 10.745166 24 24-10.745166 24-24 24zm12.5693021-33.5729524c-.5066705-.502545-1.3281286-.502545-1.8349005 0l-15.5444523 15.4164894-5.9750331-5.9257883c-.5066706-.502545-1.3281287-.5024947-1.8349006 0-.5067213.5024947-.5067213 1.3171825 0 1.8197275l6.8924834 6.8355767c.5065185.5024947 1.3285848.5021429 1.8349006 0l16.4619025-16.3262275c.5067213-.5024947.5066706-1.3172328 0-1.8197778z"
                              fill="#55bd6c"
                            ></path>
                          </svg>
                          <span className="feature_checklist_section_item_text">
                            Trade
                          </span>
                        </li>
                        <li className="feature_checklist_section_item">
                          <svg
                            viewBox="0 0 48 48"
                            width="12"
                            height="12"
                            fill="rgba(28, 27, 33, 0.24)"
                          >
                            <path d="m24 48c-13.254834 0-24-10.745166-24-24s10.745166-24 24-24 24 10.745166 24 24-10.745166 24-24 24zm2.5259167-23.5067083 9.039-9.039c.5615833-.5611042.5615833-1.4715209 0-2.032625-.5615834-.5615834-1.4710417-.5615834-2.032625 0l-9.039 9.039-9.0394792-9.039c-.5615833-.5615834-1.4710417-.5615834-2.032625 0-.5615833.5611041-.5615833 1.4715208 0 2.032625l9.0394792 9.039-9.0394792 9.039c-.5615833.5611041-.5615833 1.4715208 0 2.032625.2807917.2803125.6487917.4207083 1.0163125.4207083s.7355208-.1403958 1.0163125-.4211875l9.0394792-9.039 9.039 9.039c.2807916.2807917.6487916.4211875 1.0163125.4211875.3675208 0 .7355208-.1403958 1.0163125-.4211875.5615833-.5611042.5615833-1.4715208 0-2.032625z"></path>
                          </svg>
                          <span className="feature_checklist_section_item_text disabled">
                            Withdrawal
                          </span>
                        </li>
                        <li className="feature_checklist_section_item">
                          <svg
                            viewBox="0 0 48 48"
                            width="12"
                            height="12"
                            fill="rgba(28, 27, 33, 0.24)"
                          >
                            <path d="m24 48c-13.254834 0-24-10.745166-24-24s10.745166-24 24-24 24 10.745166 24 24-10.745166 24-24 24zm2.5259167-23.5067083 9.039-9.039c.5615833-.5611042.5615833-1.4715209 0-2.032625-.5615834-.5615834-1.4710417-.5615834-2.032625 0l-9.039 9.039-9.0394792-9.039c-.5615833-.5615834-1.4710417-.5615834-2.032625 0-.5615833.5611041-.5615833 1.4715208 0 2.032625l9.0394792 9.039-9.0394792 9.039c-.5615833.5611041-.5615833 1.4715208 0 2.032625.2807917.2803125.6487917.4207083 1.0163125.4207083s.7355208-.1403958 1.0163125-.4211875l9.0394792-9.039 9.039 9.039c.2807916.2807917.6487916.4211875 1.0163125.4211875.3675208 0 .7355208-.1403958 1.0163125-.4211875.5615833-.5611042.5615833-1.4715208 0-2.032625z"></path>
                          </svg>
                          <span className="feature_checklist_section_item_text disabled">
                            P2P
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="feature_checklist_section">
                      <div className="feature_checklist_section_title">
                        WITH KYC
                      </div>
                      <ul className="feature_checklist_section_list">
                        <li className="feature_checklist_section_item">
                          <svg
                            viewBox="0 0 48 48"
                            width="12"
                            height="12"
                            fill="#FFC800"
                          >
                            <path
                              d="m24 48c-13.254834 0-24-10.745166-24-24s10.745166-24 24-24 24 10.745166 24 24-10.745166 24-24 24zm12.5693021-33.5729524c-.5066705-.502545-1.3281286-.502545-1.8349005 0l-15.5444523 15.4164894-5.9750331-5.9257883c-.5066706-.502545-1.3281287-.5024947-1.8349006 0-.5067213.5024947-.5067213 1.3171825 0 1.8197275l6.8924834 6.8355767c.5065185.5024947 1.3285848.5021429 1.8349006 0l16.4619025-16.3262275c.5067213-.5024947.5066706-1.3172328 0-1.8197778z"
                              fill="#55bd6c"
                            ></path>
                          </svg>
                          <span className="feature_checklist_section_item_text">
                            Deposit
                          </span>
                        </li>
                        <li className="feature_checklist_section_item">
                          <svg
                            viewBox="0 0 48 48"
                            width="12"
                            height="12"
                            fill="#FFC800"
                          >
                            <path
                              d="m24 48c-13.254834 0-24-10.745166-24-24s10.745166-24 24-24 24 10.745166 24 24-10.745166 24-24 24zm12.5693021-33.5729524c-.5066705-.502545-1.3281286-.502545-1.8349005 0l-15.5444523 15.4164894-5.9750331-5.9257883c-.5066706-.502545-1.3281287-.5024947-1.8349006 0-.5067213.5024947-.5067213 1.3171825 0 1.8197275l6.8924834 6.8355767c.5065185.5024947 1.3285848.5021429 1.8349006 0l16.4619025-16.3262275c.5067213-.5024947.5066706-1.3172328 0-1.8197778z"
                              fill="#55bd6c"
                            ></path>
                          </svg>
                          <span className="feature_checklist_section_item_text">
                            Trade
                          </span>
                        </li>
                        <li className="feature_checklist_section_item">
                          <svg
                            viewBox="0 0 48 48"
                            width="12"
                            height="12"
                            fill="#FFC800"
                          >
                            <path
                              d="m24 48c-13.254834 0-24-10.745166-24-24s10.745166-24 24-24 24 10.745166 24 24-10.745166 24-24 24zm12.5693021-33.5729524c-.5066705-.502545-1.3281286-.502545-1.8349005 0l-15.5444523 15.4164894-5.9750331-5.9257883c-.5066706-.502545-1.3281287-.5024947-1.8349006 0-.5067213.5024947-.5067213 1.3171825 0 1.8197275l6.8924834 6.8355767c.5065185.5024947 1.3285848.5021429 1.8349006 0l16.4619025-16.3262275c.5067213-.5024947.5066706-1.3172328 0-1.8197778z"
                              fill="#55bd6c"
                            ></path>
                          </svg>
                          <span className="feature_checklist_section_item_text">
                            Withdrawal
                          </span>
                        </li>
                        <li className="feature_checklist_section_item">
                          <svg
                            viewBox="0 0 48 48"
                            width="12"
                            height="12"
                            fill="#FFC800"
                          >
                            <path
                              d="m24 48c-13.254834 0-24-10.745166-24-24s10.745166-24 24-24 24 10.745166 24 24-10.745166 24-24 24zm12.5693021-33.5729524c-.5066705-.502545-1.3281286-.502545-1.8349005 0l-15.5444523 15.4164894-5.9750331-5.9257883c-.5066706-.502545-1.3281287-.5024947-1.8349006 0-.5067213.5024947-.5067213 1.3171825 0 1.8197275l6.8924834 6.8355767c.5065185.5024947 1.3285848.5021429 1.8349006 0l16.4619025-16.3262275c.5067213-.5024947.5066706-1.3172328 0-1.8197778z"
                              fill="#55bd6c"
                            ></path>
                          </svg>
                          <span className="feature_checklist_section_item_text">
                            P2P
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="backbtn"
                    //   onClick={() => {
                    //     props.history.push("/exchange/btc-inr");
                    //   }}
                  >
                    SKIP FOR NOW
                  </button>
                  <Link to="/Kyc">
                  <button
                    type="button"
                    id="proceed_btn"
                    className="sendbtn"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    onClick={(e) => {
                      const kyc_btn = e.target.parentElement;
                      kyc_btn.className = "signupform-control h";
                      document.getElementById("verify_pan").style.display =
                        "block";
                    }}
                  >
                    COMPLETE KYC
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Kyc;
