import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
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
import HomePage from "./pages/HomePage";
import { N_getWebsiteData } from "./utils/api_functions";
import { GET_WEBSITE_DATA } from "./features/WebData";
import Activation from "./pages/Activation";
import Restake from "./pages/Restake";
import Diposit_panel from "./pages/Diposit_panel";
import Withdrawal_panel from "./pages/Withdrawal_panel";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tree from "./pages/Tree";
import Wallet_transfer from "./pages/Wallet_transfer";
const Router = ({ props }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state?.user?.value);

	const navigate = useNavigate();
	useEffect(() => {
	  if (isLoggedIn) {
		console.log("iw::", isLoggedIn);
		navigate("../home", { replace: true });
	  }
	}, [isLoggedIn]);

  useEffect(() => {
    const soc = createSocketClient("kujgwvfq-a-ghosttown-z-1fhhup0p6");
    soc.on("cmc_updated", (res) => {
      dispatch(cmcPayload({ coins: res, cmcLoading: false }));
      dispatch(GET_CURRENCY_DATA({ cur_graph: { currency_coin: Date.now(), currency_price: 2 } }))
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
    N_getWebsiteData().then((res) => {
      if (res.status === 200) {
        dispatch(GET_WEBSITE_DATA({ webdata: res.data.params.website }));
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
        <Route exact path="/Security_Settings" element={<Account />} />
        <Route exact path="/Referral_Bonus" element={<ReferalBonus />} />
        <Route exact path="/Security_Settings" element={<Account />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/activation" element={<Activation />} />
        <Route exact path="/restake" element={<Restake />} />
        <Route exact path="/diposit_panel" element={<Diposit_panel/>} />
        <Route exact path="/withdrawal_panel" element={<Withdrawal_panel/>} />
        <Route exact path="/tree" element={<Tree/>} />
        <Route exact path="/wallet_transfer" element={<Wallet_transfer/>} />



        <Route exact path="/Security_Settings" element={<Account/>}/>
     <Route exact path="/Referral_Bonus" element={<ReferalBonus/>}/>
     <Route exact path="/" element={<HomePage/>}/>
      </Routes>
      {/* <Footer /> */}
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default Router;
