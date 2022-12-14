import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { N_getUserProfile } from "../../utils/api_functions";
const Kychead = () => {
  const navigate = useNavigate();
  const [activetab, setActiveTab] = useState("Security_Settings");
  const { userInfo } = useSelector((state) => state?.user?.value);
  const [profile, setProfile] = React.useState({});
  const userid = userInfo.user_id;
  useEffect(() => {
    N_getUserProfile(userid).then((res)=>{
      setProfile(res.data.params.profile_info);
    })

  }, [userid]);

  return (
    <div
      className="wallet_blue"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #03060d, #142f6f)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="">
              <h4 className="text-white fw-light fst-italic pt-5">
                Hi,{profile.email}
              </h4>
              <span className="text-white useridclass">UID:{userid}</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="mt-5">
              <input
                type="text"
                class="form-control refinput"
                aria-label="Dollar amount (with dot and two decimal places)"
                value={userid}
              />
              <span class="loginInfo_btnCopy">
                <i class="fa fa-copy"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activetab === "Security Settings" ? "active" : ""
                  }`}
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  onClick={() => {
                    setActiveTab("Security_Settings");
                    navigate("../Security_Settings");
                  }}
                >
             <h5>  Please Complete Your KYC and Start Trading</h5>
                </button>
              </li>
             
              {/* <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activetab ==='Address Management'?'active':''}`}
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
                onClick={() => {
                    setActiveTab("Address Management");
                    navigate("../Address Management");
                  }} 
              >
               Address Management
              </button>
            </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kychead;
