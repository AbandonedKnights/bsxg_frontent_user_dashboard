import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import WalletFund from "./WalletFund";

export default function Wallet(props) {
  const { isLoggedIn } = useSelector((state) => state?.user?.value);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      console.log("iw::", isLoggedIn);
      navigate("../", { replace: true });
    }
  }, [isLoggedIn]);

  return (
    <>
   {/* <WalletTab/> */}
   <WalletFund/>

    
    </>
  );
}
