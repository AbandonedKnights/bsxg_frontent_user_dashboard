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
import AccountTab from "./AccountTab";
import Kychead from "./Kycheader";
const Kyform = () => {
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
  
  return (
   <>
  <Kychead/>
     
        <div>
          <div class="Card">
            
            <div class="card-body">
             
            
             
              <div className="container-fluid kycform">
                <label htmlFor="" className="mt-2 text-success">
                  IDENTITY DOCUMENT
                </label>


                <div className="signupform-control mt-3">
                  <label className="lableclass">TYPE OF KYC</label>
                  <select
                    id="type_of_kyc"
                    name="type_of_kyc"
                    className="form-control selectclas"
                    data-role="select-dropdown"
                    onChange={(e) => {
                      setTypeofKyc(e.target.value);
                    }}
                  >
                    <option value="Individual">Individual</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                </div>
                <div id="verify_pan">
                  <div className="signupform-control g_color">
                    <label htmlFor="user_mobile" className="lableclass">
                      PAN Number:
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="pan_no"
                        name="pan_no"
                        value={pan_no}
                        maxLength={10}
                        minLength={10}
                        onChange={(e) => setPanNo(e.target.value)}
                        placeholder="Enter your PAN number"
                        style={{
                          border: "none",
                          borderBottom: "2px solid #3174ad",
                        }}
                      />
                      <div className="input-group-append">
                        {!ispanverify ? (
                          <button
                            className="btn bg-transparent btn-outline-light text-info"
                            type="button"
                            style={{ border: "none" }}
                            disabled={disableSend}
                            onClick={() => {
                              if (pan_no?.length === 10) {
                                isVerifyPan(true);
                                N_panVerify(pan_no, userid).then((d) => {
                                  isVerifyPan(false);
                                  if (d.status == 200) {
                                    toast.success(d.data.message);
                                    setPanVerify(true);
                                  } else {
                                    toast.error(d.data.message);
                                    setPanNo("");
                                    document.getElementById(
                                      "pan_id"
                                    ).style.display = "block";
                                  }
                                });
                              } else {
                                toast.error("Please Enter valid PAN number");
                              }
                            }}
                            id="button-addon2"
                          >
                            {isverifypan ? (
                              <span className="loading-icon fas fa-spinner fa-spin mr-2"></span>
                            ) : (
                              "Verify"
                            )}
                          </button>
                        ) : (
                          <button
                            type="button"
                            id="button-addon2"
                            disabled="disabled"
                            className="btn bg-transparent btn-outline-light text-success"
                          >
                            Verified
                          </button>
                        )}
                      </div>
                    </div>
                    <div
                      id="pan_id"
                      className="mt-2"
                      style={{ display: "none" }}
                    >
                      If Your Pan is Not Valid then{" "}
                      <Link to="/Security_Settings">Click here</Link> to fill Manual
                      Record
                      <p>
                        <b
                          style={{ fontSize: "15px" }}
                          className=" text-danger"
                        >
                          Note:
                        </b>
                        <strong style={{ fontSize: "12px", fontWeight: "500" }}>
                          &nbsp;&nbsp;&nbsp;If you fill kyc manually, then you
                          have to wait for 72 hours for KYC verification.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* aadhar verification */}

                <div id="verify_aadhar" className={ispanverify ? "" : "d-none"}>
                  <div className="signupform-control g_color">
                    <label htmlFor="user_aadhar" className="lableclass">
                      AADHAR Number:
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="user_aadhar"
                        name="user_aadhar"
                        value={aadhar_no}
                        maxLength={12}
                        minLength={12}
                        onChange={(e) =>
                          setAadharNo(
                            e.target.value
                              .replace(/[^0-9.]/g, "")
                              .replace(/(\..*?)\..*/g, "$1")
                          )
                        }
                        style={{
                          border: "none",
                          borderBottom: "2px solid #3174ad",
                        }}
                        placeholder="Enter your AADHAR number"
                      />
                      <div className="input-group-append">
                        {!isOtpSend ? (
                          <button
                            className="btn bg-transparent btn-outline-light text-info"
                            type="button"
                            disabled={disableSend}
                            onClick={() => {
                              if (aadhar_no?.length === 12) {
                                setOtpLoader(true);
                                N_sendAADHAROTPMobile(aadhar_no, userid).then(
                                  (d) => {
                                    console.log(d);
                                    if (d.data.status == 200) {
                                      toast.success(d.data.message);
                                      setClientId(d.data.result);
                                      setDisable(false);
                                      setOtpSend(true);
                                      otpCountdown();
                                    } else {
                                      toast.error(d.data.message);
                                      setAadharNo("");
                                      document.getElementById(
                                        "pan_id"
                                      ).style.display = "block";
                                    }
                                    setOtpLoader(false);
                                  }
                                );
                              } else {
                                toast.error("Please Enter valid AADHAR number");
                              }
                            }}
                            id="button-addon2"
                          >
                            {otploader ? (
                              <span className="loading-icon fas fa-spinner fa-spin mr-2"></span>
                            ) : (
                              "Send"
                            )}
                          </button>
                        ) : (
                          <button
                            type="button"
                            id="button-addon2"
                            disabled="disabled"
                            className="btn btn-outline-info btn-outline-light text-danger"
                          >
                            {isOtpSend ? ctime : null}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="signupform-control">
                    <label
                      htmlFor="user_mobile"
                      for="validationCustom05"
                      class="form-label lableclass"
                    >
                      MOBILE Number
                    </label>
                    <input
                      type="text"
                      name="user_mobile"
                      id="user_mobile validationCustom05"
                      className="form-control bg-white"
                      maxLength={10}
                      disabled={disable}
                      value={mobile}
                      onChange={(e) =>
                        setMobile(
                          e.target.value
                            .replace(/[^0-9.]/g, "")
                            .replace(/(\..*?)\..*/g, "$1")
                        )
                      }
                      required="required"
                      placeholder="Enter your mobile number"
                      style={{
                        border: "none",
                        borderBottom: "2px solid #3174ad",
                      }}
                    />
                    <small></small>
                  </div>
                  <div
                    className={`signupform-control g_color ${
                      aadharVerify ? "h" : "vis"
                    }`}
                  >
                    <label
                      htmlFor="user_otp"
                      for="validationCustom05"
                      class="form-label lableclass"
                    >
                      OTP
                    </label>
                    <input
                      type="text"
                      name="user_otp"
                      id="user_otp"
                      className="form-control bg-white"
                      maxLength={6}
                      disabled={disable}
                      value={otp}
                      onChange={(e) =>
                        setOTP(
                          e.target.value
                            .replace(/[^0-9.]/g, "")
                            .replace(/(\..*?)\..*/g, "$1")
                        )
                      }
                      style={{
                        border: "none",
                        borderBottom: "2px solid #3174ad",
                      }}
                      required="required"
                      placeholder="Enter 6 digit otp"
                    />

                    <small></small>
                  </div>
                  <button
                    type="button "
                    id="aadhar_otp"
                    className="reg_btn btn btn-outline-success mb-3 w-100"
                    onClick={() => {
                      if (
                        !isNaN(otp) &&
                        !isNaN(mobile) &&
                        otp?.length === 6 &&
                        mobile?.length === 10
                      ) {
                        setLoading(true);
                        N_verifyAADHAROTPMobile(
                          client_id,
                          mobile,
                          otp,
                          userid
                        ).then((d) => {
                          console.log(d);
                          setLoading(false);
                          if (d.data.status == 200) {
                            setdisplay(true)
                            console.log(d.data.result);
                            setPersnalData(d.data.result);
                            setAadharVerify(true);
                            document.getElementById(
                              "aadhar_otp"
                            ).style.display = "none";
                            toast.success(d.data.message);
                          } else {
                            toast.error(d.data.message);
                          }
                        });
                      } else {
                        toast.error("invalid input !");
                      }
                    }}
                  >
                    {loading ? (
                      <i className="loading-icon fas fa-spinner fa-spin mr-2"></i>
                    ) : null}
                    <span id="reg">Verify OTP</span>
                  </button>
                </div>
                <div id="personal_info" className={display? "":"d-none"}>
                  <div>
                    <label htmlFor="" className="mt-1 mb-3 text-success fs-6">
                      PERSONAL INFO
                    </label>
                  </div>
                  <div className="signupform-control">
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="user_fname" className="lableclass">
                          FIRST NAME *
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          readOnly
                          className="signupform-control personalinfoinput"
                          id="user_name"
                          value={personalData?.full_name}
                        />
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={`data:image/png;base64,${personalData?.profile_image}`}
                          height="150px"
                          width="200px"
                          id="aadhar_selfie"
                          name="aadhar_selfie"
                          alt="adhar pic"
                        />
                      </div>
                      <div className="col-lg-6">
                        <div className="signupform-control">
                          <label htmlFor="gender" className="lableclass">Gender *</label>
                          <input
                            type="text"
                            name="gender"
                            className="signupform-control personalinfoinput"
                            id="gender"
                            readOnly
                            value={
                              personalData?.gender == "M" ? "MALE" : "FEMALE"
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="signupform-control">
                          <label htmlFor="user_dob" className="lableclass">DATE OF BIRTH *</label>
                          <input
                            type="date"
                            name="user_dob"
                            id="user_dob"
                            readOnly
                            className="signupform-control personalinfoinput"
                            value={personalData?.dob}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="signupform-control">
                          <label htmlFor="user_address" className="lableclass">Address *</label>
                          <textarea
                            className="form-control personalinfoinput"
                            style={{
                              border: "2px solid #f0f0f0",
                              borderRadius: "4px",
                            }}
                            id="user_address"
                            name="user_address"
                            readOnly
                            rows="3"
                            value={
                              personalData?.address.house +
                              " " +
                              personalData?.address.vtc +
                              " " +
                              personalData?.address.po +
                              " " +
                              personalData?.address.landmark +
                              " " +
                              personalData?.address.loc
                            }
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="signupform-control">
                          <label htmlFor="country" className="lableclass">COUNTRY *</label>
                          <input
                            type="text"
                            name="country"
                            className="signupform-control personalinfoinput"
                            id="country"
                            readOnly
                            value={personalData?.address.country}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        {" "}
                        <div className="signupform-control">
                          <label htmlFor="state" className="lableclass">STATE *</label>
                          <input
                            type="text"
                            name="state"
                            className="signupform-control personalinfoinput"
                            id="state"
                            readOnly
                            value={personalData?.address.state}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="signupform-control">
                          <label htmlFor="country" className="lableclass">CITY *</label>
                          <input
                            type="text"
                            name="city"
                            className="signupform-control personalinfoinput"
                            id="city"
                            readOnly
                            value={personalData?.address.dist}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        {" "}
                        <div className="signupform-control">
                          <label htmlFor="user_pincode" className="lableclass">PINCODE *</label>
                          <input
                            type="text"
                            name="user_pincode"
                            className="signupform-control personalinfoinput"
                            id="user_pincode"
                            readOnly
                            value={personalData?.zip}
                          />
                        </div>
                      </div>
                      <button
                    type="button"
                    id="btn_submit"
                    className="reg_btn w-100"
                    onClick={() => {
                        navigate("../exchange/btc-inr", { replace: true });
                    }}
                  >
                    {loading ? (
                      <i className="loading-icon fas fa-spinner fa-spin mr-2"></i>
                    ) : null}
                    <span id="reg">SUBMIT</span>
                  </button>
                    </div>
                  </div>
                 
                </div>
                {/* aadhar verification */}
                
              </div>
              
            
           
            </div>
            <div class="modal-footer">
            <Link to="/Security_Settings">
              <button
                class="btn btn-warning text-white backbutton"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                <i className="fa-solid fa-chevron-left text-white"></i> Back
              </button>
              </Link>
            </div>
          </div>
        </div>
   </>
  )
}

export default Kyform