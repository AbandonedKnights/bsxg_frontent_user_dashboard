// import { t } from "i18next";
import { createRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
//import { toast } from "wc-toast";
import {api_test} from "../../utils/api";
export default function MobileRegistration(props) {
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
  const [isRegistering, setIsRegistering] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [userOTP, setUserOTP] = useState("");
  // const { t } = useTranslation();

  const resetForm = () => {
    document.forms["mobileRegistrationForm"].reset();
    setIsAgreed(false);
    setIsSendingOTP(false);
    setIsOTPSent(false);
    setIsOTPVerified();
    setIsRegistering(false);
    setMobileNumber("");
    setUserOTP("");
  };

  const registerUser = async (data) => {
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
      toast.error("Please verify your mobile number first.", {
        duration: 5000,
        id: "VerifyMobileFirst",
      });
    }
  };

  const sendMobileVerificationCode = async () => {
    if (mobileNumber.length > 0) {
      setIsSendingOTP(true);
      let emailVerificationToast = toast.loading(
        "Sending mobile verification code."
      );
      api_test
        .post("send_mobile_verificaton_code", { mobile: mobileNumber })
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
      toast.error("Please enter mobile number.", { duration: 5000 });
    }
  };

  const verifyUserOTP = async () => {
    if (userOTP.length > 0) {
      setIsSendingOTP(true);
      let otpVerificationToast = toast.loading("Verifying verification code.");
      api_test
        .post("/verify_otp", { mobile: mobileNumber, otp: userOTP })
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

  return (
    <form name="mobileRegistrationForm" onSubmit={handleSubmit(registerUser)}>
      <div className="mb-2">
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
                isOTPVerified === true
                  ? "form-control is-valid"
                  : isOTPVerified === false
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="mobile_verification_code"
              placeholder="Verification Code"
              {...register("mobileVerificationCode", {
                required: "Verification code is required.",
              })}
              onChange={(e) => {
                setUserOTP(e.target.value);
              }}
            />
            <label for="mobile_verification_code">
              Mobile Verification Code
            </label>
          </div>
          
        </div>
        {!isOTPVerified && (
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
                className="text-success fw-bold py-1"
                onClick={(e) => {
                  e.preventDefault();
                  sendMobileVerificationCode();
                }}
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

      <div className="mb-2">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="parent_ref_code"
            placeholder="password"
            {...register("parent_ref_code")}
          />
          <label for="parent_ref_code">Reffer</label>
        </div>
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
        <label className="form-check-label" for="exampleCheck1">
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
