import React, { useEffect } from "react";
import Exchange from "./pages/Exchange";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";
import createSocketClient from "./socket/socket";
import ForgotPassword from "./pages/ForgotPassword";
import TransactionHistory from "./pages/TransactionHistory";
import Withdraw from "./pages/Withdraw";
import Deposit from "./pages/Deposit";
import {
  buy_Order,
  cmcPayload,
  order_History,
  sell_Order,
  GET_CURRENCY_DATA
} from "./features/Exchange";
import Account from "./pages/Account_section/Account";
import ReferalBonus from "./pages/Account_section/ReferalBonus";
import Home from "./pages/Home";
import { N_getWebsiteData } from "./utils/api_functions";
import { GET_WEBSITE_DATA } from "./features/WebData";
const Router = ({ props }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const soc = createSocketClient("kujgwvfq-a-ghosttown-z-1fhhup0p6");
    soc.on("cmc_updated", (res) => {
      dispatch(cmcPayload({ coins: res, cmcLoading: false }));
          dispatch(GET_CURRENCY_DATA({cur_graph:{currency_coin: Date.now(), currency_price: 2}}))
    });

    soc.on("order_history_updated", (res) => {
      dispatch(order_History({ orderHistory: res }));
    });

    soc.on("buy_order_updated", (res) => {
      dispatch(buy_Order({ buyOrder: res }));
    });

    soc.on("sell_order_updated", (res) => {
      dispatch(sell_Order({ sellOrder: res }));
    });
    N_getWebsiteData().then((res)=>{
        if (res.status === 200) {
        dispatch(GET_WEBSITE_DATA({webdata: res.data.params.website}));
        return res.data.params.website;
      }
      })
  }, []);
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
        <Route exact path="/forgot_password" element={<ForgotPassword />} />
        <Route exact path="/withdraw" element={<Withdraw />} />
        <Route exact path="/deposit" element={<Deposit />} />
       
        <Route
          exact
          path="/transationhistory"
          element={<TransactionHistory />}
        />
        <Route exact path="/Security_Settings" element={<Account/>}/>
     <Route exact path="/Referral_Bonus" element={<ReferalBonus/>}/>
     <Route exact path="/" element={<Home/>}/>
      </Routes>
      {/* <Footer /> */}
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default Router;
