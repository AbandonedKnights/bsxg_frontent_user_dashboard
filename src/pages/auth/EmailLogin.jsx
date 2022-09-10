import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../features/User";
import { api_test } from "../../utils/api";
const EmailLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authenticator, setAuthenticator] = useState(0);
  const loginUser = async (data) => {
    if (authenticator == 2 || authenticator == 1) {
      setIsAuthenticating(true);
      api_test
        .post("/login", data)
        .then((res) => {
          if (res.status === 200) {
            dispatch(login({ isLoggedIn: true, userInfo: res.data.params }));
            localStorage.setItem(
              "exchange_inrx_userID",
              res.data.params.user_id
            );
            navigate("../wallet", { replace: true });
          } else {
            setIsAuthenticating(false);
          }
        })
        .catch((error) => {
          setIsAuthenticating(false);
          console.log(error?.response?.data?.message ?? error.message);
          toast.error(error?.response?.data?.message ?? error.message);
        });
    } else {
      setIsAuthenticating(true);
      api_test.post("/get-auth-google-new", data).then((res) => {
        let d = res.data;
        console.log(d.message ,"res.status vipin ");
        if (d.status == 200) {
        
          if (d.authenticator_status == 0) {
            api_test
              .post("/login", data)
              .then((res) => {
                if (res.status === 200) {
                  toast.success(d.message)
                  dispatch(
                    login({ isLoggedIn: true, userInfo: res.data.params })
                  );
                  localStorage.setItem(
                    "exchange_inrx_userID",
                    res.data.params.user_id
                  );
                  navigate("../wallet", { replace: true });
                } else{
                  setIsAuthenticating(false);
                }
              })
              .catch((error) => {
                setIsAuthenticating(false);
                console.log(error?.response?.data?.message ?? error.message);
                toast.error(error?.response?.data?.message ?? error.message);
              });
          } else {
            setAuthenticator(d.authenticator_status);
            setIsAuthenticating(false);
          }
        } else {
          toast.error(d.message);
          setIsAuthenticating(false);
        }
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(loginUser)}>
        <input
          type="email"
          className="login_input"
          placeholder="Email"
          name="email"
          {...register("email", {
            required: "Email  is required.",
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors?.email && (
          <div classNameName="app-text-danger">{errors?.email?.message}</div>
        )}
        {errors?.email?.type === "pattern" && (
          <div classNameName="app-text-danger">Enter valid email address.</div>
        )}
        {authenticator == 2 || authenticator == 1 ? (
          <input
            type="number"
            className="login_input"
            placeholder={authenticator == 2?'Enter Google Authenticator Code':'Enter Mobile Number OTP'}
            name="otp"
            {...register("otp", {
              required: "You must specify a OTP",
              minLength: {
                value: 6,
                message: "OTP must have at least 6 characters",
              },
            })}
          />
        ) : null}
        <input
          type="password"
          className="login_input"
          placeholder="Password"
          name="password"
          {...register("password", {
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
        />
        {errors?.password && (
          <div classNameName="app-text-danger">{errors?.password?.message}</div>
        )}

        <div className="form-group form-check terms_and_policy">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label " for="exampleCheck1">
            <span>Remember the username</span>{" "}
            <Link to="/forgot_password" className="forgot">Forgot Password?</Link>
            <br />
          </label>
        </div>

        <button type="submit" classNameName="btn-success">
          {isAuthenticating ? (
            <>
              <span
                className="spinner-grow spinner-grow-sm me-1"
                role="status"
                aria-hidden="true"
              ></span>
              Authenticating...
            </>
          ) : (
            <>Login</>
          )}
        </button>
      </form>
    </div>
  );
};

export default EmailLogin;