import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const WalletTab = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const [activetab, setActiveTab] = useState(pathname);
  return (
    <>
      <div className="wallet_blue">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-5">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activetab === '/fund'?'active':''}`}
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    onClick={() => {
                      navigate("../fund");
                    }}
                  >
                    Fund
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activetab ==='/deposit'?'active':''}`}
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => {
                        navigate("../deposit");
                      }}
                  >
                    Deposit
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activetab ==='/withdraw'?'active':''}`}
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                    onClick={() => {
                        navigate("../withdraw");
                      }} 
                  >
                    Withdrow
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activetab ==='/transationhistory'?'active':''}`}
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#transaction"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                    onClick={() => {
                        navigate("../transationhistory");
                      }} 
                  >
                    Transaction History
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletTab;
