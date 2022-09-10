import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import WalletTab from "../components/WalletTab";
import {N_get_wallet} from "../utils/api_functions";

import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { add, mul, round, sub } from "../utils/Math";

const WalletFund = () => {
  const { coins, currency_prefix, user_fav_currency, active_paired_currency } =
    useSelector((state) => state?.exchange?.value);
  const { user_id } = useSelector((state) => state?.user?.value.userInfo);

  const userid = user_id;
  const [wallet_details, setWalletDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total_inr, setTotalInr] = useState(0);
  const [btexp, setBtexP] = useState("");
  const [usdtp, setUSDTP] = useState("");
  let coins1 = coins;
  function getCoinRate(coin) {
    let res = coins1.find((d) => d.symbol === coin.toUpperCase());
    //  console.log("inr price: ", res, coin);
    if (coin === "INR") {
      return 1;
    } else {
      return res?.current_price_inr ? res.current_price_inr : 0;
    }
  }
  function getWallets() {
    N_get_wallet(userid)
      .then((data) => {
        let d = data.data;
        if (d.status === 200) {
          let total = 0;
          let final_data = Object.keys(d.params.wallets).map((res, i) => {
            let wallet_type = d.params.wallets[res]?.symbol;
            let rate = getCoinRate(wallet_type, "INR");
            let inr_val =
              mul(rate , d.params.wallets[res]?.balance)
            total = add(total,inr_val);
            return {
              id: d.params.wallets[res]?.id,
              deposit_limit: d.params.wallets[res]?.deposit_limit
                ? d.params.wallets[res].deposit_limit
                : 0,
              icon: d.params.wallets[res]?.icon,
              symbol: wallet_type,
              name: d.params.wallets[res]?.name,
              status: d.params.wallets[res]?.status,
              withdral_fee: d.params.wallets[res]?.withdrawal_fee,
              locked:round(d.params.wallets[res]?.locked),
              address: d.params.wallets[res].wallet_address,
              balance:round(d.params.wallets[res]?.balance),
              avl_balance:sub(d.params.wallets[res]?.balance, d.params.wallets[res]?.locked),
              inr_balance: inr_val,
            };
          });
          setWalletDetails(final_data);
          setTotalInr(total);
          setTimeout(() => setLoading(false), 800);
        } else {
          console.log(d);
        }
      })
      .catch((e) => {
        console.log("er", e);
      });
  }
 
  useEffect(() => {
    getWallets();
  }, []);

  
  return (
    <div  className='accountbg'>
      <Toaster position="top-right" reverseOrder={false} />
      <WalletTab />
      <div className="container tablebackground">
        <div className="box-body">
          <div className="table-responsive mt-5">
            <table
              className="mdfthemetxt table table-border no-margin"
              style={{
                overflow: "hidden",
              }}
            >
              <thead>
                <tr className="bg-pale-dark tblecol">
                  <th>ASSETS</th>
                  <th style={{ textAlign: "center" }}>AVAILABLE BALANCE</th>
                  <th>LOCKED</th>
                  <th>TOTAL</th>
                  <th> {user_fav_currency}VALUE</th>
                 
                </tr>
              </thead>
              <tbody className="tblecol">
                {loading ? (
                  <tr className="tblecol">
                    <td colSpan={8}>
                      <div class="d-flex text-info justify-content-center">
                        <div class="spinner-border">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : wallet_details ? (
                  wallet_details.map((item, index) => (
                    <>
                      {index === 0
                        ? wallet_details.map((item, index) => (
                            <>
                              {item.symbol === "INR" ? (
                                <>
                                  <tr  key={index * 6} >
                                    <td>
                                      {item.icon ? (
                                        <img
                                          src={item.icon}
                                          alt={item.symbol}
                                          width="20"
                                          height="20"
                                        />
                                      ) : (
                                        ""
                                      )}{" "}
                                      {item.name} ({item.symbol})
                                    </td>
                                    <td  style={{ textAlign: "center" }}>
                                      {item.avl_balance}
                                    </td>
                                    <td>{item.locked}</td>
                                    <td>{item.balance.toFixed(4)}</td>
                                    <td>
                                      {currency_prefix[user_fav_currency]}{" "}
                                      {item.inr_balance}
                                    </td>
                                    
                                  </tr>
                               
                              
                                
                                </>
                              ) : null}
                            </>
                          ))
                        : null}
                      {item.symbol !== "INR" ? (
                        <>
                          <tr key={index * 3}>
                            <td>
                              {item.icon ? (
                                <img
                                  src={item.icon}
                                  alt={item.symbol}
                                  width="20"
                                  height="20"
                                />
                              ) : (
                                ""
                              )}{" "}
                              {item.name}
                              {item.symbol === "USDT"
                                ? "(" + item.symbol + ")" + " (TRC20)"
                                : item.symbol === "BUSD"
                                ? "(" + item.symbol + ")" + " (BEP20)"
                                : "(" + item.symbol + ")"}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {item.balance > 0
                                ? item.avl_balance.toFixed(4)
                                : item.balance}
                            </td>
                            <td>
                              {item.locked > 0
                                ? item.locked.toFixed(4)
                                : item.locked}
                            </td>
                            <td>
                              {item.avl_balance > 0
                                ? (
                                    Number(item.avl_balance) +
                                    Number(item.locked)
                                  ).toFixed(4)
                                : item.avl_balance}
                            </td>
                            <td>
                              {currency_prefix[user_fav_currency] + " "}
                              {user_fav_currency === "INR"
                                ? item.inr_balance
                                : item.inr_balance > 0
                                ? (
                                    item.inr_balance /
                                    Number(
                                      active_paired_currency[user_fav_currency]
                                    )
                                  ).toFixed(8)
                                : 0}
                            </td>
                        
                          </tr>
                    
                         
                        
                          
                        </>
                      ) : null}
                    </>
                  ))
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletFund;
