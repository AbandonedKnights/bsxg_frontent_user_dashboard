import React, { useState, useEffect } from "react";
import WalletTab from "../components/WalletTab";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import QRCode from "qrcode.react";
import toast, { Toaster } from "react-hot-toast";
import $ from "jquery";
import {
  N_get_wallet,
  N_ScreenShot,
  N_transectionHistory,
  N_crypto_withdraw,
} from "../utils/api_functions";
import { useNavigate } from "react-router-dom";
import { add, mul, round, sub } from "../utils/Math";
const Withdraw = () => {
  const { coins, currency_prefix, user_fav_currency, active_paired_currency } =
    useSelector((state) => state?.exchange?.value);
  const { user_id } = useSelector((state) => state?.user?.value.userInfo);
  const navigate = useNavigate();
  const userid = user_id;
  const [wallet_details, setWalletDetails] = useState([]);
  const [total_inr, setTotalInr] = useState(0);
  const [btexp, setBtexP] = useState("");
  const [usdtp, setUSDTP] = useState("");
  const [loading, setLoading] = useState(true);
  const [dropCurrency, SetdropCurrency] = useState("INR");
  const [selected_coin, setSelectedCoin] = useState("");
  const [withdraw_history, set_deposit_history] = useState("");
  const [volume, setVolume] = useState();
  const [withLoading, setWithLoading] = useState(false);
  const [to_address, setToAddress] = useState();
  const [ctime, setctime] = useState("02:00");
  const [remark, setRemark] = useState();
  const [wallettype, setwallettype] = useState("");
  const [famount, setFinalAmount] = useState(45);
  const [popup, showpopup] = useState(false);
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
    N_get_wallet(userid).then((d) => {
      if (d.status == 200) {
        //   console.log("coin rates: ", d.data.params.wallets);
        let total = 0;
        let final_data = Object.keys(d.data.params.wallets).map((res, i) => {
          let rate = getCoinRate(res, "INR");
          let inr_val = mul(rate, d.data.params.wallets[res]?.balance);
          total = add(total , inr_val);
          return {
            id: d.data.params.wallets[res]?.id,
            deposit_limit: d.data.params.wallets[res]?.deposit_limit
              ? d.data.params.wallets[res].deposit_limit
              : 0,
            icon: d.data.params.wallets[res]?.icon,
            symbol: d.data.params.wallets[res]?.symbol.toUpperCase(),
            name: d.data.params.wallets[res]?.name,
            status: d.data.params.wallets[res]?.status,
            withdral_fee: d.data.params.wallets[res]?.withdrawal_fee,
            locked: round(d.data.params.wallets[res]?.locked),
            address: d.data.params.wallets[res]?.wallet_address,
            balance:round(d.data.params.wallets[res]?.balance),
            avl_balance: sub(d.data.params.wallets[res]?.balance, d.data.params.wallets[res]?.locked),
            inr_balance: inr_val,
          };
        });
        setWalletDetails(final_data);
        setTotalInr(total);
        if (final_data) {
          final_data.filter((item) => {
            if (item.symbol === "INR") {
              setSelectedCoin(item);
            }
          });
        }
        setTimeout(() => setLoading(false), 800);
      } else {
        console.log(d);
      }
    });
  }

  useEffect(() => {
    getWallets();
  }, []);

  useEffect(() => {
    wallet_details.filter((item) => {
      if (item.symbol === dropCurrency) {
        setSelectedCoin(item);
      }
    });
  }, [dropCurrency]);
  useEffect(() => {
    N_transectionHistory(userid)
      .then((dt) => {
        console.log(dt);
        // if (status !== -5) setHistory(dt);
        if (dt.status === 200) {
          const data = dt?.data?.params?.result.filter(
            (item) => item.type == "deposit"
          );
          set_deposit_history(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const otpCountdown = () => {
    let duration = 60 * 5;
    // const display = document.getElementById("#timer");
    let timer = duration,
      minutes,
      seconds;
    const tint = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setctime(minutes + ":" + seconds);

      if (--timer < 0) {
        // timer = duration;
        clearInterval(tint);
      }
    }, 1000);
  };
  return (
    <div>
      <WalletTab />
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="tab-content wallet_tab" id="myTabContent">
              <div>
                <div class="wallet_top">
                  <a href="" class="lght_green">
                    Crypto
                  </a>
                  <a href="">Fiat</a>
                  <a href="">Internal Transfer</a>
                </div>
                <div class="row blockchain_area">
                  <div class="col-md-6 col-lg-7">
                    <select
                      className="form-select"
                      onChange={(e) => {
                        SetdropCurrency(e.target.value);
                      }}
                    >
                      <option value={"INR"}>INR</option>
                      {wallet_details.map((item) => (
                        <>
                          {item.symbol !== "INR" ? (
                            <option value={item.symbol}>
                              {item.name}
                              {item.symbol}
                            </option>
                          ) : null}
                        </>
                      ))}
                    </select>

                    <div class="select_blockchain">
                      <h3>Select Blockchain</h3>
                    </div>

                    <div className="al_total">
                      <div class="al_total">
                        {loading ? (
                          <tr>
                            <td colSpan={8}>
                              <div class="d-flex text-info justify-content-center">
                                <div class="spinner-border">
                                  <span class="visually-hidden">
                                    Loading...
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ) : selected_coin ? (
                          <>
                            <span>
                              <h3>Available </h3>
                              <label>{selected_coin.avl_balance}</label>
                            </span>
                            <span>
                              <h3>Locked</h3>
                              <label>{selected_coin.locked}</label>
                            </span>
                            <span>
                              <h3>Total </h3>
                              <label>{selected_coin.balance.toFixed(4)}</label>
                            </span>
                          </>
                        ) : null}
                      </div>
                    </div>
                    <div class="select_blockchain">
                      <h3 className=" text-success">
                        Transfer from your INRX Wallet to Another
                        <a href="" class="fr light_blue lght_green">
                          <span>
                            Available {selected_coin.symbol}:{" "}
                            {selected_coin.balance}
                          </span>
                        </a>
                      </h3>
                      <div class="four_input mb-4 withdrwal_address">
                        <div className="row">
                          <div className="col">
                          <label>Volume</label>
                          <input
                            type="text"
                            className="input_button"
                            value={selected_coin.volume}
                            maxLength={15}
                            onChange={(e) => {
                              setVolume(
                                e.target.value
                                  .replace(/[^0-9.]/g, "")
                                  .replace(/(\..*?)\..*/g, "$1")
                              );
                              setFinalAmount(
                                e.target.value
                                  .replace(/[^0-9.]/g, "")
                                  .replace(/(\..*?)\..*/g, "$1") -
                                  selected_coin.withdral_fee
                              );
                            }}
                      
                          />
                          </div>
                          <div className="col">
                          <label>Destination Address</label>
                          <input
                            type="text"
                            className="input_button"
                            maxLength={60}
                            onChange={(e) => setToAddress(e.target.value)}
                            
                          />
                          </div>
                          <div className="col">
                          <label> Remark</label>
                          <input
                            type="text"
                            className="input_button"
                            value={remark}
                            maxLength={60}
                            onChange={(e) => setRemark(e.target.value)}
                        
                          />
                          </div>
                          <div className="col">
                          <button
                          type="button"
                          className="btn btn-danger mt-3"
                          onClick={() => {
                            setWithLoading(true);

                            N_crypto_withdraw(
                              userid,
                              selected_coin.symbol,
                              selected_coin.address,
                              to_address,
                              volume,
                              remark
                            ).then((d) => {
                              setWithLoading(false);
                              if (d.status == 200) {
                                showpopup(true);
                                otpCountdown();
                                setwallettype(d.data.params.transection_id);

                                console.log("wr1: ", d);
                                toast.success(d.message);
                              } else {
                                toast.error(d.message);
                              }
                            });
                          }}
                        >
                          {withLoading ? (
                            <span className="loading-icon fas fa-spinner fa-spin mr-2"></span>
                          ) : (
                            "WITHDRAWAL"
                          )}
                        </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <h4>Fee:-- </h4>
                    <h4>You will get: 0.00000 </h4>
                    <h5 class="lght_green">Various Fees Standards </h5>

                    <div class="col-md-12 ">
                      <div class="submit_btn">
                        <a href="">Submit</a>
                      </div>
                    </div> */}

                    <p>
                      ● After finishing your deposit transaction(s), you may
                      enter the "deposit history" page to track the progress of
                      your deposit(s). History Record(s)
                    </p>
                    <p>
                      ● After finishing your deposit transaction(s), you may
                      enter the "deposit history" page to track the progress of
                      your deposit(s). History Record(s)
                    </p>
                  </div>
                  <div class="col-md-6 col-lg-5">
                    <div class="row">
                      <div class="col-md-12">
                        <h3 class="mt-2">
                          Withdraw History{" "}
                          <a href="" class="fr light_blue">
                            More
                          </a>
                        </h3>
                        <table class="table">
                          <thead class="table-light">
                            <tr className="text-center">
                              <th>Status</th>
                              <th>symbol</th>
                              <th>Amount</th>
                              <th>Date</th>
                            </tr>
                          </thead>

                          <tbody>
                            {withdraw_history.length > 0
                              ? withdraw_history.map((item) => (
                                  <>
                                    <tr className="text-center">
                                      <td>{item.status}</td>
                                      <td>{item.symbol}</td>
                                      <td>{item.amount}</td>
                                      <td>
                                        {new Date(
                                          item.created_at
                                        ).toLocaleString()}
                                      </td>
                                    </tr>
                                  </>
                                ))
                              : null}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
