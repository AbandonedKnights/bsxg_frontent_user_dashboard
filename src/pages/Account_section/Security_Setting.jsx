import React from "react";
import Activitylog from "./Activitylog";
import CardComponent from "./CardComponent";
// import privacyControl from "./PrivacyControl";
import Twofactor from "./Twofactor";
import { useSelector } from "react-redux";
const Security_Setting = () => {
  const { switch_theme } = useSelector((state) => state?.exchange?.value);
  return (
    <>
          <div
            class="card-header cardheader col-lg-8 m-auto mt-10"
            style={{
              // backgroundImage: "linear-gradient(to right bottom, rgb(3, 6, 13), rgb(20, 47, 111))",
              background:switch_theme == "dark" ? "#083946" : "linear-gradient(to bottom right, rgb(39 49 74), #18614b)",
              color: "#fff",
            }}
          >
            <h5 className="pl-2 pt-1 ">Security Setting</h5>
          </div>
<div className="container">
          <div className="row mt-2 mb-2 securty_card">
            <div className="col-lg-4 col-md-8 col-sm-12 mt-2">
              <CardComponent
                icon={"fas fa-tablet accicon mr-3"}
                titte={"Two Factor Authentication"}
                text={
                  " Users are required to use SMS verification during login, withdrawals, password modification and API management. The binding of SMS verification process can greatly enhance your account security. If you choose to bind both Google Authenticator and SMS Verification, during the verification process, our system will choose Google Authenticator as prioritized verification process."
                }
                button={"Go"}
                Twofa={1}
                id={"#staticBackdrop"}
              />
            </div>
            <div className="col-lg-4 col-md-8 col-sm-12 mt-2">
              <CardComponent
                titte={"Privacy Control"}
                icon={"fa fa-shield accicon"}
                text={
                  " Privacy rights can be interpreted as the right to have control over one's own ... personal information, users can connect with friends and share contents "
                }
                button={"Go"}
                Twofa={2}
                id={"#privacy"}
              />
            </div>
           <div className="col-lg-4 col-md-8 col-sm-12 mt-2">
          <CardComponent
            titte={"Fees"}
            icon={"accicon fa fa-rupee-sign"}
            text={
              "Customers who are loyal to your brand are also the most valuable to your business. In fact, studies show that customers who have an emotional connection to your brand tend to have a lifetime value that's higher than your average customer. These customers spend more with your business and should be rewarded for it"
            }
            id={"#Fees"}
            Twofa={6}
            pressmethod={""}
            button={"Go"}
          />
           </div>
           <div className="col-lg-4 col-md-8 col-sm-12 mt-2">
          <CardComponent
            titte={"Coupon Reward"}
            icon={"accicon fas fa-gift"}
            text={
              "Customers who are loyal to your brand are also the most valuable to your business. In fact, studies show that customers who have an emotional connection to your brand tend to have a lifetime value that's higher than your average customer. These customers spend more with your business and should be rewarded for it"
            }
            pressmethod={""}
            button={"Reward"}
          />
           </div>
           <div className="col-lg-4 col-md-8 col-sm-12 mt-2">
          <CardComponent
            titte={"Notification Preferences"}
            icon={"accicon fas fa-bell"}
            text={
              "Notification Preferences allow your users to make choices about the kind of push notifications they want to receive. Push notifications show up even when a user isn’t interacting with your app, so if the messages aren’t relevant your users will opt-out. Instead of turning off all notifications, users can choose ones they value."
            }
            pressmethod={""}
            button={"Check"}
          />
           </div>
           <div className="col-lg-4 col-md-8 col-sm-12 mt-2">
          <CardComponent
            titte={"Download Trading Report"}
            icon={"accicon fas fa-file"}
            text={"Click To Downlaod Your Trading Report  "}
            pressmethod={""}
            button={"Download"}
          />
           </div>
           <div className="col-lg-4 col-md-8 col-sm-12 mt-2">
          <CardComponent
            titte={"Unlock Programes"}
            icon={"accicon fas fa-lock"}
            text={"click to Unlock Programes   "}
            pressmethod={""}
            button={"Unlock"}
          />
           </div>
           </div>
           </div>
          {/* <div className="container-fluied">
            <div className="row mb-1">
              <Activitylog />

              <Activitylog />
            </div>
          </div> */}
      
      
    </>
  );
};

export default Security_Setting;