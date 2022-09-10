import { t } from "i18next";
import { createRef, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { NotificationManager } from "react-notifications";
import { Link } from "react-router-dom";
import { toast } from "wc-toast";
import api from "../utils/api";

export default function (props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    register: otpForm,
    handleSubmit: handleOTPFormSubmit,
    formState: { errors: otpFormErrors },
  } = useForm();

  const password = createRef(); //useRef({});
  password.current = watch("password", "");
  const [isAgreed, setIsAgreed] = useState(false);
  const [verifyOTP, setVerifyOTP] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [userID, setUserID] = useState("");
  const [isValidatingOTP, setIsValidatingOTP] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [isProgress, setIsProgress] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { t } = useTranslation();

  const registerUser = async (data) => {
    console.log(data);
    setIsRegistering(true);
    api
      .post("/register-user", data)
      .then((res) => {
        toast.success(res?.data?.message, { duration: 5000 });
        setVerifyOTP(true);
        setUserID(res?.data?.params?.user_id);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error?.response?.data?.message ?? error.message);
        toast.error(error?.response?.data?.message ?? error.message, {
          duration: 5000,
        });
      })
      .then(() => {
        setIsRegistering(false);
      });
  };

  const otpVerification = async (data) => {
    data.user_id = userID;
    console.log(data);
    setIsValidatingOTP(true);
    api
      .post("/varifie/email", data)
      .then((res) => {
        console.log(res.data);
        toast.success(res?.data?.message, { duration: 5000 });
        setShowSuccess(true);
        setVerifyOTP(false);
      })
      .catch((error) => {
        console.log(error?.response?.data?.message ?? error.message);
        toast.error(error?.response?.data?.message ?? error.message, {
          duration: 5000,
        });
      })
      .then(() => {
        setIsValidatingOTP(false);
      });
  };

  return (
    <div className="container">
      {showSuccess && (
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

      {verifyOTP && (
        <div className="row justify-content-center">
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
              <form onSubmit={handleOTPFormSubmit(otpVerification)}>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="otp_code"
                    placeholder="verification Code"
                    {...otpForm("otp", {
                      required: "Please provide verification code.",
                    })}
                  />
                  <label for="otp_code">Verification Code</label>
                </div>
                {otpFormErrors?.otp && (
                  <div className="app-text-danger mb-2">
                    {otpFormErrors?.otp?.message}
                  </div>
                )}
                <div clasName="d-grid gap-2">
                  <button className="btn btn-lg btn-primary mb-2" type="submit">
                    {isValidatingOTP ? (
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

              {/* <div className="d-flex justify-content-end">
                      <Link to="/login" className="text-muted">
                        <i className="fa fa-arrow-left"></i> Back to Login
                      </Link>
                    </div> */}
            </div>
          </div>
        </div>
      )}

      {!showSuccess && !verifyOTP && (
        <div className="login_area">
          <div className="row">
            <div className="col-lg-12">
              <h1>{t("register")}</h1>
              <div className="login_area_block">
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
                      <img src="images/msg_icon.png" /> Email
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
                      <img src="images/phone_icon.png" /> Phone
                    </button>
                  </li>
                </ul>

                <div className="tab-content login_form" id="myTabContent">
                  {/* Email Registration */}
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <form onSubmit={handleSubmit(registerUser)}>
                    <div className="mb-2">
                      <div className="d-flex justify-content-center align-items-center">
                        
                          <div className="form-floating flex-fill me-1">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="name@example.com"
                              {...register("email", {
                                required: "Email  is required.",
                                pattern:
                                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              })}
                            />
                            <label for="email">Email address</label>
                          </div>
                          <div className="align-self-center">
                            <button className="btn btn-primary" type="button">
                              Verify
                            </button>
                          </div>
                        </div>

                        {/* <input
                        type="email"
                        class="login_input"
                        placeholder="Email"
                        name="email"
                        {...register("email", {
                          required: "Email  is required.",
                          pattern:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                      /> */}
                        {errors?.email && (
                          <div className="app-text-danger">
                            {errors?.email?.message}
                          </div>
                        )}
                        {errors?.email?.type === "pattern" && (
                          <div className="app-text-danger">
                            Enter valid email address.
                          </div>
                        )}
                      </div>
                      {/* <input
                        type="text"
                        class="login_input"
                        placeholder="Email Verification Code*"
                        name="email_verification_code"
                        {...register("emailVerificationCode", {
                          required: "Verification code is required.",
                        })}
                      /> */}

                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email_verification_code"
                          placeholder="name@example.com"
                          {...register("emailVerificationCode", {
                            required: "Verification code is required.",
                          })}
                        />
                        <label for="email_verification_code">
                          Email Verification Code
                        </label>
                      </div>
                      {errors?.emailVerificationCode && (
                        <div className="app-text-danger">
                          {errors?.emailVerificationCode?.message}
                        </div>
                      )}
                      {/* <input
                        name="epassword"
                        type="password"
                        class="login_input"
                        placeholder="Password"
                        {...register("password", {
                          required: "You must specify a password",
                          minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters",
                          },
                        })}
                      /> */}

                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="password"
                          placeholder="password"
                          {...register("password", {
                            required: "You must specify a password",
                            minLength: {
                              value: 8,
                              message:
                                "Password must have at least 8 characters",
                            },
                          })}
                        />
                        <label for="password">Password</label>
                      </div>
                      {errors?.password && (
                        <div className="app-text-danger">
                          {errors?.password?.message}
                        </div>
                      )}
                      {/* <input
                        type="password"
                        class="login_input"
                        placeholder="Confirm Password"
                        name="confirm_password"
                        {...register("confirm_password", {
                          required: "Confirm password",
                          validate: (value) =>
                            value === password.current ||
                            "The passwords do not match",
                        })}
                      /> */}
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="confirm_password"
                          placeholder="password"
                          {...register("confirm_password", {
                            required: "Confirm password",
                            validate: (value) =>
                              value === password.current ||
                              "The passwords do not match",
                          })}
                        />
                        <label for="confirm_password">Confirm Password</label>
                      </div>
                      {errors?.confirm_password && (
                        <div className="app-text-danger">
                          {errors?.confirm_password?.message}
                        </div>
                      )}
                      {/* <input
                        type="text"
                        class="login_input"
                        placeholder="Reffer"
                        name="parent_ref_code"
                      /> */}

                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="parent_ref_code"
                          placeholder="password"
                          {...register("parent_ref_code")}
                        />
                        <label for="parent_ref_code">Reffer</label>
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
                  </div>
                  {/* Mobile Registration */}
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <form>
                      <input
                        type="phone"
                        className="login_input"
                        placeholder="Phone"
                        name="phone"
                      />

                      <input
                        type="text"
                        className="login_input"
                        placeholder="Phone Verification Code*"
                        name="phone_verification_code"
                      />

                      <input
                        type="password"
                        className="login_input"
                        placeholder="Password"
                        name="password"
                      />

                      <input
                        type="password"
                        className="login_input"
                        placeholder="Confirm Password"
                        name="confirm_password"
                      />

                      <input
                        type="text"
                        className="login_input"
                        placeholder="Reffer"
                        name="reffer"
                      />

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
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
