import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { N_sendOTPMobile,N_verifyOTPMobile } from "../utils/api_functions";

const MobileVerification = () => {
  const [otploader, setOtpLoader] = useState(false);
  const [isOtpSend, setOtpSend] = useState(false);
  const [mobile, setMobile] = useState();
  const [isVerified, setIsVerified] = useState(0);
  const [disable, setDisable] = useState(true);
  const [ctime, setctime] = useState("01:00");
  const [otp, setOTP] = useState();
  const [loading, setLoading] = useState(false);
  const [disableSend, setDisableSend] = React.useState(false);
  const {userInfo } = useSelector((state) => state?.user?.value);
  const userid = userInfo.user_id;

  const otpCountdown = () => {
    let duration = 60;
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
      <div className="signupform-control g_color">
        <label htmlFor="user_mobile" className="lableclass2">Mobile Number:</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="user_mobile"
            value={mobile}
            maxLength={10}
            onChange={(e) =>
              setMobile(
                e.target.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/(\..*?)\..*/g, "$1")
              )
            }
            placeholder="Enter your 10 digit mobile number"
          />
          <div className="input-group-append">
            {!isOtpSend ? (
              <button
                className="btn bg-transparent btn-outline-light text-info"
                type="button"
                disabled={disableSend}
                onClick={() => {
                  if (mobile?.length === 10) {
                    setOtpLoader(true);
                    N_sendOTPMobile(
                        userid,
                      mobile
                    ).then((d) => {
                      if (d.data.status == 200) {
                        toast.success(d.data.message);
                        setDisable(false);
                        setOtpSend(true);
                        otpCountdown();
                      } else {
                        toast.error(d.data.message);
                      }
                      setOtpLoader(false);
                    });
                  } else {
                    toast.error(
                      "Please Enter valid Mobile number"
                    );
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
                className="btn btn-outline-info btn-outline-light text-info"
              >
                {isOtpSend ? ctime : null}
              </button>
            )}
          </div>
        </div>

        {/* otp verication */}

        <div className="signupform-control mt-3">
                    <label htmlFor="user_otp " className="lableclass2">OTP</label>
                    <input
                      type="text"
                      
                      id="otp"
                      className="form-control"
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
                      required="required"
                      placeholder="Enter 6 digit otp"
                    />
                    
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={isVerified?'disabled':''}
                    onClick={() => {
                      if (!isNaN(otp) && otp?.length === 6) {
                        setLoading(true);
                        N_verifyOTPMobile(
                          userid,
                          otp
                        ).then((d) => {
                          setLoading(false);
                          if (d?.data?.status == 200) {
                              setIsVerified(1)
                              toast.success(d.data.message);
                          } else {
                            toast.error(d.data.message);
                          }
                        });
                      } else {
                        toast.error("invalid Otp !");
                      }
                    }}
                  >
                    {loading ? (
                      <i className="loading-icon fas fa-spinner fa-spin mr-2"></i>
                    ) : null}
                    <span id="reg">{isVerified?'Verified':'Verify OTP'}</span>
                  </button>
      </div>
    </>
  );
};

export default MobileVerification;
