import React from "react";
import { useState } from "react";
import Currency_preference from "./currency_preference";
import Fees from "./Fees";
import Kyc from "./Kyc";
import Payment from "./Payment";
import PrivacyControl from "./PrivacyControl";
import Twofactor from "./Twofactor";

const CardComponent = ({ titte, text, icon, button, Twofa, id }) => {
  const [showdrop, setshodrop] = useState(Twofa);
  return (
  
      <div class="card h-100 cardchild">
      <div class="card-body">
        <h5 class="card-title cardtext">
          {" "}
          <i className={icon || ""}></i>
          {titte || ""}
        </h5>
        <p class="card-text acctext small card-height">{text || ""}</p>

        <button
          className="btn btn-outline-success w-100"
          type="button"
          data-bs-toggle="modal"
          data-bs-target={id}
          // style={{
          //   backgroundColor: "#1074af",
          //   color: "#fff",
          //   border: " 1px solid",
          // }}
          onClick={() => {
            setshodrop(Twofa);
          }}
        >
          {button || ""}
        </button>

        {showdrop === 1 ? <Twofactor /> : null}
        {showdrop === 2 ? <PrivacyControl /> : null}
        {showdrop === 3 ? <Kyc /> : null}
        {showdrop === 4 ? <Payment /> : null}
        {showdrop === 5 ? <Currency_preference /> : null}
        {showdrop === 6 ? <Fees /> : null}
     
      </div>
    </div>
  
  );
};

export default CardComponent;