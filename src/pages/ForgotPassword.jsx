import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "wc-toast";
import ChangePasswordForm from "../components/ChangePasswordForm";
import {api_test} from "../utils/api";

export default function Forgetpassword (props) {
  const [isProgress, setIsProgress] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [otpVerificationInfo, setOTPVerificationInfo] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetPassword = (data) => {
    console.log(data);
    setIsProgress(true);
    api_test
      .post("/forget-password", data)
      .then((res) => {
        console.log(res.data);
        setEmailAddress(data.email);
        setShowOTPForm(true);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(
          error?.response?.data?.message ??
            error?.message ??
            "Something went wrong."
        );
      })
      .then(() => {
        setIsProgress(false);
      });
  };

  const verifyOTP = (data) => {
    console.log(data);
    setIsProgress(true);
    api_test
      .post("/varifie/forget-password", data)
      .then((res) => {
        console.log(res.data);
        toast.success(res?.data?.message);
        setOTPVerificationInfo(res.data);
        setShowResetForm(true);
        setShowOTPForm(false);
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message ??
            error?.message ??
            "Something went wrong."
        );
      })
      .then(() => {
        setIsProgress(false);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center my-2">
        {/* Change Password Form */}
        {showResetForm && (
          <div className="col-md-6">
            <ChangePasswordForm {...otpVerificationInfo}/>
          </div>
        )}

        {/* Verify OTP Form */}
        {showOTPForm && (
          <div className="col-md-6">
            <div className="card card-body border-0">
              <h1 className="font-dongle fs-1 my-0 py-0">
                Check your inbox for verification email.
              </h1>
              <p className="font-comforta mb-0">
                An OTP has been sent to your email{" "}
                <strong>{emailAddress}</strong>
              </p>
              <p className="font-comforta">
                Don't see it? check your spam folder.
              </p>
              <form onSubmit={handleSubmit(verifyOTP)}>
                <input
                  type="hidden"
                  name="uemail"
                  value={emailAddress}
                  {...register("uemail")}
                />
                <div class="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="verification Code"
                    {...register("otp", {
                      required: "Please provide verification code.",
                    })}
                  />
                  <label for="floatingInput">Verification Code</label>
                </div>
                {errors?.otp && (
                  <div className="app-text-danger mb-2">
                    {errors?.otp?.message}
                  </div>
                )}
                <div className="d-grid gap-2">
                  <button className="btn btn-lg btn-primary mb-2" type="submit">
                    {isProgress ? (
                      <>
                        <span
                          className="spinner-grow spinner-grow-sm me-1"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Validating...
                      </>
                    ) : (
                      "Verify OTP"
                    )}
                  </button>
                </div>
              </form>
              <div className="devider"></div>
              <div className="d-flex justify-content-end">
                <Link to="/login" className="text-muted">
                  <i className="fa fa-arrow-left"></i> Back to Login
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Validate Email Form */}
        {(!showResetForm && !showOTPForm) && (
          <div className="col-md-6">
            <div className="card card-body border-0">
              <h1 className="font-dongle fs-1 my-0 py-0">
                Forgot your password?
              </h1>
              <p className="font-comforta">
                Enter your email address we will you a verification code.
              </p>
              <form onSubmit={handleSubmit(resetPassword)}>
                <div className="form-floating mb-2">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    {...register("email", {
                      required: "Please provide registered email.",
                    })}
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                {errors?.email && (
                  <div className="app-text-danger mb-2">
                    {errors?.email?.message}
                  </div>
                )}
                <div className="d-grid gap-2">
                  <button className="btn btn-lg btn-primary mb-2" type="submit">
                    {isProgress ? (
                      <>
                        <span
                          className="spinner-grow spinner-grow-sm me-1"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending OTP...
                      </>
                    ) : (
                      "Reset Password"
                    )}
                  </button>
                </div>
              </form>
              <div className="devider"></div>
              <div className="d-flex justify-content-end">
                <Link to="/login" className="text-muted">
                  <i className="fa fa-arrow-left"></i> Back to Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
