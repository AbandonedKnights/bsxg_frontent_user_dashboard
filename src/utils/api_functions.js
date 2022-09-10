import toast from "react-hot-toast";
import {
  api_test,
  api,
  order
}
from "../utils/api";


export function N_get_wallet(userid) {

  return api_test.post("get-wallets-new",

      {
        user_id: userid
      }
    )
    // .then((res) => res.JSON())
    .catch((e) => e);
}

export function N_createAddress(userid, symbol) {

  return api_test.post("create-wallets-user",

      {
        user_id: userid,
        symbol:symbol
      }
    )
    // .then((res) => res.JSON())
    .catch((e) => e);
}

export function N_crypto_withdraw_Otp_Email(userid, otp, wallettype) {
  return api_test.post(
      "varifie/email-Withdraw", {
        user_id: userid,
        otp: otp,
        transection_id: wallettype
      }
    )

    .catch((e) => e);
}
export function N_ScreenShot(event, file, price, userid, req_no) {
  event.preventDefault();
  const formControl = event.target.parentElement;
  const formData = new FormData();

  // The third parameter is required for server
  if (file && price && userid) {
    formControl.querySelector(".spinner-border").style.display = "block";
    formData.append("file", file, file.name);
    formData.append("price", price);
    formData.append("req_no", req_no);
    formData.append("user_id", userid);

    api
      .post("upload-screenshot", formData)
      .then((res) => {
        const data = res.data;
        if (res.status === 200 && data.status === 200) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
        formControl.querySelector(".spinner-border").style.display = "none";
      })
      .catch((e) => {
        toast.error("Something went Wrong!!");
      });
  } else {
    toast.error("Provide all Data");
  }
}


export function N_inr_withdraw(userid, volume, symbol, remark) {
  return api_test.post("banking/inr_withdrawal", {
      user_id: userid,
      volume: volume,
      symbol: symbol,
      remark: remark,

    })
  }

export function N_crypto_withdraw(
  userid,
  symbol,
  address,
  to_address,
  volume,
  remark
) {

  return api_test.post("get-withdraw", {


      user_id: userid,
      fromAddress: address,
      symbol: symbol,
      toAddress: to_address,
      volume: volume,
      remark: remark,

    })
  
    .catch((e) => e);
}
export function N_transectionHistory(userid) {
  return api_test.post("transection_history", {

      user_id: userid,

    })

    .catch((e) => e);
}
export function N_createBuyOffer(
  raw_price,
  volume,
  currency_type,
  compare_currency,
  user_id,
  type = ""
) {
  return order.post("buy-order1", {
      user_id: user_id,
      currency_type: currency_type,
      volume: volume,
      compare_currency: compare_currency,
      raw_price: raw_price,
      type: type,
    })

    .catch((e) => e);
}

export function N_createSellOffer(
  raw_price,
  volume,
  currency_type,
  compare_currency,
  user_id,
  type = ""
) {
  return order.post("sell-order1", {
    user_id: user_id,
    currency_type: currency_type,
    volume: volume,
    compare_currency: compare_currency,
    raw_price: raw_price,
    type: type,
  })
}

export function N_OrdersHistory(user_id) {
  return api_test.post("order-history", {
    user_id: user_id,
  })
}
export function N_panVerify(pan_no, user_id) {
  return api_test.post("kyc/verify-pan", {
    pan_no: pan_no,
    user_id: user_id
  });
}
export function N_checkKYCStatus(user_id) {
 return api_test.post("kyc/check-status", {
    user_id: user_id,
  })
}
export function N_sendAADHAROTPMobile(aadhar_no, user_id) {
  return api_test.post("kyc/validate-aadhar", {
    method: "POST",
      aadhar_no: aadhar_no,
      user_id:user_id
  })
}
export function N_verifyAADHAROTPMobile(client_id, mobile_no, otp, user_id) {
  return api_test.post("kyc/verify-adhar", {
   
      otp: otp,
      mobile_no:mobile_no,
      client_id:client_id,
      user_id:user_id
  })
}

export function N_sendOTPMobile(user_id, mobile_number) {
  return api_test.post("send-mobile-varification-otp", {
   
      user_id: user_id,
      mobile_no: mobile_number,
  })
}
export function N_verifyOTPMobile(user_id, otp) {
  return api_test.post("varifie/mobile", {
      user_id: user_id,
      otp: otp,
  })
}
export function N_setGoogleAuth(user_id) {
  return api_test.post("set-auth-google", {
      user_id: user_id
    
  })
}
export function N_setGoogleAuthOTP(user_id, state, otp, action) {
  return api_test.post("set-auth-google-otp", {
      user_id: user_id,
      status:state,
      otp:otp,
      action:action
    
  })
}
export function N_get_settings(user_id) {
  return api_test.post("get-auth-google-setting", {
      user_id: user_id
    
  })
}
export function N_checkMobileStatus(user_id) {
  return api_test.post("check_user_status", {
      user_id: user_id
    
  })
}
export function N_getUserBankDetails(user_id) {
  return api_test.post("banking/get-banking-status", {
     user_id: user_id,
  })
 
}
export function N_getSupportedCurrency(user_id) {
  return api_test.post("getpairedCurrency", {
    user_id: user_id 
  })
}
export function N_getBank(user_id) {
  return api_test.post("banking/get-bank", {
      user_id: user_id,
  })
}

export function N_addBinficiary(
  account_number,
  confirm_account_number,
  bank_name,
  name,
  ifsc_code,
  account_type,
  userid
) {
  return api_test.post("banking/set-banking-info", {
   
      bank_name: bank_name,
      name: name,
      account_type: account_type,
      account_number: account_number,
      confirm_account_number: confirm_account_number,
      ifsc_code: ifsc_code,
      user_id: userid,
  })
}
export function N_getUserProfile(userid) {
  return api_test.post("user/get-profile-info", {
      user_id:userid,
  })
}

export function N_getWebsiteData() {
  return api_test.get("get-website-data")
}

