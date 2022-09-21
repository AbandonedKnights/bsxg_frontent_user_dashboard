// import { t } from "i18next";
import { useEffect } from "react";
import { createRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
//import { toast } from "wc-toast";
import {api_test} from "../../utils/api";
export default function EmailRegistration(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = createRef(); //useRef({});
  password.current = watch("password", "");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isOTPVerified, setIsOTPVerified] = useState();
  const [isSendingMOTP, setIsSendingMOTP] = useState(false);
  const [isOTPMSent, setIsOTPMSent] = useState(false);
  const [isOTPMVerified, setIsOTPMVerified] = useState();
  const [isRegistering, setIsRegistering] = useState(false);
  const [reffaralid, setRffaralId] = useState("");
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userOTP, setUserOTP] = useState("");
  const [userMOTP, setUserMOTP] = useState("");
  const { reffer } = useParams();
  const [value, setValue] = useState()
  // const { t } = useTranslation();
  console.log("reffer", reffer);


  useEffect(()=>{
    api_test
    .post("getRefferalInfo", {
      reffer:reffer
    })
    .then((res) => {
      let data =res.data; 
      if(data.status == 200){
        setRffaralId(data.profile_data.user)
        setName(data.profile_data.name)
      }
      
    })
    .catch((error) => {
      console.log("user", error);
    })
  }, [reffer])

  const resetForm = () => {
    (document.forms['registrationForm']).reset();
    setIsAgreed(false);
    setIsSendingOTP(false);
    setIsOTPSent(false);
    setIsOTPVerified();
    setIsSendingMOTP(false);
    setIsOTPMSent(false);
    setIsOTPMVerified();
    setIsRegistering(false);
    setEmailAddress("");
    setUserOTP("");
    setUserMOTP("");
    setRffaralId("");
    setValue("");
    setName("")
  }

  // const registerUser = async (data) => {
  //   data.mobile_number = value;
  //   if (isOTPVerified && isOTPMVerified) {
  //     setIsRegistering(true);
  //     let registrationToast = toast.loading("Registration in progress...");
  //     api_test
  //       .post("/register_new_user", data)
  //       .then((res) => {
  //         toast.success(res?.data?.message, {
  //           duration: 5000,
  //           id: registrationToast,
  //         });
  //         resetForm();
  //       })
  //       .catch((error) => {
  //         toast.error(error?.response?.data?.message ?? error.message, {
  //           duration: 5000,
  //           id: registrationToast,
  //         });
  //       })
  //       .then(() => {
  //         setIsRegistering(false);
  //       });
  //   } else {
  //     toast.error("Please verify your email first.", {
  //       duration: 5000,
  //       id: "VerifyEmail & mobile First",
  //     });
  //   }
  // };

  const registerUser = async (data) => {
    data.mobile_number = value;
    if (isOTPVerified) {
      setIsRegistering(true);
      let registrationToast = toast.loading("Registration in progress...");
      api_test
        .post("/register_new_user", data)
        .then((res) => {
          toast.success(res?.data?.message, {
            duration: 5000,
            id: registrationToast,
          });
          resetForm();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message ?? error.message, {
            duration: 5000,
            id: registrationToast,
          });
        })
        .then(() => {
          setIsRegistering(false);
        });
    } else {
      toast.error("Please verify your email first.", {
        duration: 5000,
        id: "VerifyEmail",
      });
    }
  };

  const sendEmailVerificationCode = async () => {
    if (emailAddress.length > 0) {
      setIsSendingOTP(true);
      let emailVerificationToast = toast.loading(
        "Sending email verification code."
      );
      api_test
        .post("send_email_verification_code", {
          email: emailAddress,
        })
        .then((res) => {
          setIsOTPSent(true);
          toast.success(res?.data?.message, {
            duration: 5000,
            id: emailVerificationToast,
          });
        })
        .catch((error) => {
          toast.error(
            error?.response?.data?.message ??
              error?.message ??
              "Sometjing went wrong.",
            { duration: 5000, id: emailVerificationToast }
          );
        })
        .then(() => {
          setIsSendingOTP(false);
        });
    } else {
      toast.error("Please enter email address.", { duration: 5000 });
    }
  };

  const verifyUserOTP = async () => {
    if (userOTP.length > 0) {
      setIsSendingOTP(true);
      let otpVerificationToast = toast.loading("Verifying verification code.");
      api_test
        .post("/verify_otp", { email: emailAddress, otp: userOTP })
        .then((res) => {
          setIsOTPVerified(true);
          toast.success(res?.data?.message, {
            duration: 5000,
            id: otpVerificationToast,
          });
        })
        .catch((error) => {
          setIsOTPVerified(false);
          toast.error(error?.response?.data?.message ?? error.message, {
            duration: 5000,
            id: otpVerificationToast,
          });
        })
        .then(() => {
          setIsSendingOTP(false);
        });
    } else {
      toast.error("Please enter verification code.", {
        duration: 5000,
        id: "verificationFailed",
      });
    }
  };
  const sendMobileVerificationCode = async () => {
    if (mobileNumber.length > 0) {
      setIsSendingMOTP(true);
      let mobileVerificationToast = toast.loading(
        "Sending mobile verification code."
      );
      api_test
        .post("send_mobile_verificaton_code", { mobile: mobileNumber })
        .then((res) => {
          setIsOTPMSent(true);
          toast.success(res?.data?.message, {
            duration: 5000,
            id: mobileVerificationToast,
          });
        })
        .catch((error) => {
          toast.error(
            error?.response?.data?.message ??
              error?.message ??
              "Sometjing went wrong.",
            { duration: 5000, id: mobileVerificationToast }
          );
        })
        .then(() => {
          setIsSendingMOTP(false);
        });
    } else {
      toast.error("Please enter mobile number.", { duration: 5000 });
    }
  };

  const verifyMobileUserOTP = async () => {
    if (userMOTP.length > 0) {
      setIsSendingMOTP(true);
      let otpMVerificationToast = toast.loading("Verifying verification code.");
      api_test
        .post("/verify_otp", { mobile: mobileNumber, otp: userMOTP })
        .then((res) => {
          setIsOTPMVerified(true);
          toast.success(res?.data?.message, {
            duration: 5000,
            id: otpMVerificationToast,
          });
        })
        .catch((error) => {
          setIsOTPMVerified(false);
          toast.error(error?.response?.data?.message ?? error.message, {
            duration: 5000,
            id: otpMVerificationToast,
          });
        })
        .then(() => {
          setIsSendingMOTP(false);
        });
    } else {
      toast.error("Please enter verification code.", {
        duration: 5000,
        id: "verificationFailed",
      });
    }
  };

  return (
    <form name="registrationForm" onSubmit={handleSubmit(registerUser)}>
       <div className="app-text-danger" style={{fontSize:'18px'}}>
            {name}
          </div>
          
      <div className="mb-2">
        <div className="form-floating">
          <input
            value={reffaralid}
            type="text"
            className="form-control"
            id="parent_ref_code"
            placeholder="enater refrral code"
            {...register("parent_ref_code", {
              required: "You must specify a name",
              minLength: {
                value: 3,
                message: "name must have at least 3 characters",
              },
            })}
            onChange={(e) => {
              setRffaralId(e.target.value);
            }}
          />
          <label for="parent_ref_code">Referral</label>
        </div>
      </div>

      <div className="mb-2">
        <div className="d-flex justify-content-center align-items-center">
          <div className="form-floating flex-fill">
            <input
              type="email"
              className="form-control form-control-sm"
              id="email"
              placeholder="name@example.com"
              {...register("email", {
                required: "Email  is required.",
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
            />
            <label for="email">Email address</label>
          </div>
        </div>

        {errors?.email && (
          <div className="app-text-danger">{errors?.email?.message}</div>
        )}
        {errors?.email?.type === "pattern" && (
          <div className="app-text-danger">Enter valid email address.</div>
        )}
      </div>
      <div className="mb-2">
        <div className="d-flex justify-content-center align-items-center">
          <div className="form-floating flex-fill">
            <input
              type="text"
              className={
                isOTPVerified === true
                  ? "form-control is-valid"
                  : isOTPVerified === false
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="email_verification_code"
              placeholder="name@example.com"
              {...register("emailVerificationCode", {
                required: "Verification code is required.",
              })}
              onChange={(e) => {
                setUserOTP(e.target.value);
              }}
            />
            <label for="email_verification_code">Email Verification Code</label>
          </div>
          {/* {!isOTPVerified && (
            <div className="align-self-center ms-1">
              <button
                className="btn btn-primary"
                type="button"
                onClick={(e) => {
                  isOTPSent ? verifyUserOTP() : sendEmailVerificationCode();
                }}
              >
                {isSendingOTP ? (
                  <>
                    <span
                      class="spinner-grow spinner-grow-sm me-1"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </>
                ) : isOTPSent ? (
                  "Verify"
                ) : (
                  <><i class="fi fi-rr-paper-plane"></i> Send</>
                )}
              </button>
            </div>
          )} */}
        </div>
        {!isOTPVerified && (
          <div className="d-flex justify-content-between">
            <div>
              {errors?.emailVerificationCode && (
                <div className="app-text-danger">
                  {errors?.emailVerificationCode?.message}
                </div>
              )}
            </div>
            <div>
              <Link
                to="#"
                className="text-light fw-bold py-1"
                onClick={(e) => {
                  e.preventDefault();
                  sendEmailVerificationCode();
                }}
                disabled={isSendingOTP}
              >
                {isOTPSent ? "Resend OTP" : "Send OTP"}
              </Link>
              {isOTPSent && (
                <Link
                  to="#"
                  className="text-success fw-bold py-1 ms-2"
                  onClick={(e) => {
                    e.preventDefault();
                    verifyUserOTP();
                  }}
                >
                  Verify OTP
                </Link>
              )}
            </div>
          </div>
        )}

        {/* {errors?.emailVerificationCode && (
          <div className="app-text-danger">
            {errors?.emailVerificationCode?.message}
          </div>
        )} */}
      </div>
      <div className="mb-2">
        <PhoneInput
        className="form-control form-control-sm"
        international
        country="US"
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}/>
      </div>
      {/* <div className="mb-2">
        <div className="d-flex justify-content-center align-items-center">
          <div className="form-floating flex-fill">
            <input
              type="text"
              className="form-control form-control-sm"
              id="mobile_number"
              placeholder="Mobile Number"
              {...register("mobile_number", {
                required: "Mobile number is required.",
              })}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
            <label for="mobile_number">Mobile Number</label>
          </div>
        </div>

        {errors?.mobile_number && (
          <div className="app-text-danger">{errors?.mobile_number?.message}</div>
        )}
      </div>
      <div className="mb-2">
        <div className="d-flex justify-content-center align-items-center">
          <div className="form-floating flex-fill">
            <input
              type="text"
              className={
                isOTPMVerified === true
                  ? "form-control is-valid"
                  : isOTPMVerified === false
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="mobile_verification_code"
              placeholder="Verification Code"
              {...register("mobileVerificationCode", {
                required: "Verification code is required.",
              })}
              onChange={(e) => {
                setUserMOTP(e.target.value);
              }}
            />
            <label for="mobile_verification_code">
              Mobile Verification Code
            </label>
          </div>
          
        </div>
        {!isOTPMVerified && (
          <div className="d-flex justify-content-between">
            <div>
              {errors?.mobileVerificationCode && (
                <div className="app-text-danger">
                  {errors?.mobileVerificationCode?.message}
                </div>
              )}
            </div>
            <div>
              <Link
                to="#"
                className="text-light fw-bold py-1"
                onClick={(e) => {
                  e.preventDefault();
                  sendMobileVerificationCode();
                }}
              >
                {isOTPMSent ? "Resend OTP" : "Send OTP"}
              </Link>
              {isOTPMSent && (
                <Link
                  to="#"
                  className="text-success fw-bold py-1 ms-2"
                  onClick={(e) => {
                    e.preventDefault();
                    verifyMobileUserOTP();
                  }}
                >
                  Verify OTP
                </Link>
              )}
            </div>
          </div>
        )}
      </div> */}
      <div className="mb-2">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
            {...register("name", {
              required: "You must specify a name",
              minLength: {
                value: 3,
                message: "name must have at least 3 characters",
              },
            })}
          />
          <label for="name">Name</label>
        </div>
        {errors?.name && (
          <div className="app-text-danger">{errors?.name?.message}</div>
        )}
      </div>
      <div className="mb-2">
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          <label for="password">Password</label>
        </div>
        {errors?.password && (
          <div className="app-text-danger">{errors?.password?.message}</div>
        )}
      </div>
      <div className="mb-2">
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="confirm_password"
            placeholder="password"
            {...register("confirm_password", {
              required: "Confirm password",
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          <label for="confirm_password">Confirm Password</label>
        </div>
        {errors?.confirm_password && (
          <div className="app-text-danger">
            {errors?.confirm_password?.message}
          </div>
        )}
      </div>
      <div className="form-group form-check terms_and_policy">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={(e) => {
            setIsAgreed(e.target.checked);
          }}
          checked={isAgreed}
        />
        <label className="form-check-label" for="exampleCheck1" style={{color:"white"}}>
          I Agree The <a href="">Terms and policy</a>
          <br />
          <span>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing,
          </span>{" "}
          <a href="">Read More</a>
        </label>
      </div>

      <button
        type="submit"
        style={{borderRadius:"5px",background:"#6e7887"}}
        className={isAgreed ? "btn-success" : ""}
        disabled={!isAgreed}
      >
        {isRegistering ? (
          <>
            <span
              className="spinner-grow spinner-grow-sm me-1"
              role="status"
              aria-hidden="true"
            ></span>
            Registering...
          </>
        ) : (
          <>Register</>
        )}
      </button>
    </form>
  );
}