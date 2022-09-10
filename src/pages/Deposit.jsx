import React, { useState, useEffect } from "react";
import WalletTab from "../components/WalletTab";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import QRCode from "qrcode.react";
import {
  N_createAddress,
  N_get_wallet,
  N_ScreenShot,
  N_transectionHistory,
} from "../utils/api_functions";
import { useNavigate } from "react-router-dom";
import { add, mul, round, sub } from "../utils/Math";
import { NotificationManager } from "react-notifications";
const Deposit = () => {
  const { coins, currency_prefix, user_fav_currency, active_paired_currency } =
    useSelector((state) => state?.exchange?.value);
  const { user_id } = useSelector((state) => state?.user?.value.userInfo);
  const navigate = useNavigate();
  // const userid = "17d585b577d/u";
  const userid = user_id ;
  const [wallet_details, setWalletDetails] = useState([]);
  const [total_inr, setTotalInr] = useState(0);
  const [btexp, setBtexP] = useState("");
  const [usdtp, setUSDTP] = useState("");
  const [loading, setLoading] = useState(true);
  const [dropCurrency, SetdropCurrency] = useState("INR");
  const [selected_coin, setSelectedCoin] = useState("");
  const [filedata, setFileData] = useState();
  const [price, setPrice] = useState("");
  const [copied, setCopied] = useState();
  const [deposit_history, set_deposit_history] = useState("");
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
      if (d.data.status == 200) {
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
  const uploadIMG = (input) => {
    if (input.target.files && input.target.files[0]) {
      setFileData(input.target.files[0]);
    }
  };

  useEffect(() => {
    N_transectionHistory(userid)
      .then((dt) => {
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
  //console.log(selected_coin, "selected_coin");
  return (
    <div  >
      <WalletTab />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content wallet_tab" id="myTabContent">
              <div
                className="tab-pane fade "
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              ></div>
              <div
                className="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="wallet_top">
                  <a href="" className="lght_green">
                    Crypto
                  </a>
                  <a href="">Fiat</a>
                </div>
                <div className="row blockchain_area">
                  <div className="col-md-6 col-lg-7 despost">
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

                    <div className="select_blockchain">
                      <h3>Select Blockchain</h3>
                      <div className="four_input mb-4">
                        <span>
                          <input type="text" />
                        </span>
                        <span>
                          <input type="text" />
                        </span>
                        <span>
                          <input type="text" />
                        </span>
                        <span>
                          <input type="text" />
                        </span>
                      </div>
                      <div className="four_input">
                        <span>
                          <input type="text" />
                        </span>
                        <span>
                          <input type="text" />
                        </span>
                        <span>
                          <input type="text" />
                        </span>
                        <span>
                          <input type="text" />
                        </span>
                      </div>
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

                    <h4>
                      {selected_coin.symbol} Deposit Address:{" "}
                      {selected_coin.address?selected_coin.symbol == 'INR'?'':
                        <CopyToClipboard
                        text={selected_coin.address}
                        onCopy={() => setCopied({ copied: true })}
                      >
                        {copied ? (
                          <span className="cop_btn text-success">
                            <span>{selected_coin.address}</span>
                            <span className="mx-1">Copied</span>
                          </span>
                        ) : (
                          <span className="cop_btn theme-color-text">
                            <span>
                              {selected_coin.address}
                              <span className="mx-1">
                                {" "}
                                <i
                                  className="fas fa-copy"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </span>
                          </span>
                        )}
                      </CopyToClipboard>
                      :
                         <button
                         type="button"
                         className="btn bg-info"
                         id="create"
                         onClick={()=>{
                           N_createAddress( userid,selected_coin.symbol)
                             .then((d)=>{
                              let data = d.data;
                               if(data.status == 200) {
                                 document.location.reload();
                               }
                             })
                         }}
                       >
                         <span className="text-white"> +Create </span>
                       </button>
                       }
                    </h4>
                    <h5 className="lght_green"> </h5>
                    <div className="copy_qr_code">
                      {/* <a href="">
                        <i className="fa fa-calculator" aria-hidden="true"></i>{" "}
                        Copy
                      </a> */}
                      {/* <a href="#">
                        <i className="fa fa-qrcode" aria-hidden="true"></i> QR
                        Code
                      </a> */}

                      <a
                        href="#"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa fa-qrcode" aria-hidden="true"></i> QR
                        Code
                      </a>
                      {selected_coin.symbol !== "INR" ? (
                              <>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Deposit{" "}
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                                {/* <div class="modal-body">
                                <p class="modal-title" id="exampleModalLabel">
                                  Scan This QR Code
                                </p>
                                <hr />
                                <div className="container">
                                  <div className="">
                                    <label htmlFor="coin_address">
                                      QRCODE :
                                    </label>{" "}
                                    <br />
                                    <QRCode value={selected_coin.address?selected_coin.address:''} />
                                  </div>
                                  <hr />
                                  <div className="signupform-control">
                                    <div className="text-danger">
                                      <i
                                        className="fas fa-warning"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Disclaimer
                                    </div>
                                    <hr className="h_r" />
                                    <label htmlFor="disclaimer">
                                      Please Deposit only {selected_coin.symbol}{" "}
                                      to this address. If you Deposit any other
                                      coins, It will be lost forever.
                                    </label>
                                  </div>
                                </div>
                              </div> */}
                                 <div class="modal-body">
                                <p class="modal-title" id="exampleModalLabel">
                                  Send to your Secure Address
                                </p>
                                <hr />
                                <div className="container">
                                  <div className="">
                                    <label htmlFor="coin_address">
                                      Destination Address :
                                    </label>{" "}
                                    <br />
                                    <CopyToClipboard
                                      text={selected_coin.address}
                                      onCopy={() => setCopied({ copied: true })}
                                    >
                                      {copied ? (
                                        <span className="cop_btn text-success">
                                          <span>{selected_coin.address}</span>
                                          <span className="mx-1">Copied</span>
                                        </span>
                                      ) : (
                                        <span className="cop_btn theme-color-text">
                                          <span>
                                            {selected_coin.address}
                                            <span className="mx-1">
                                              {" "}
                                              <i
                                                className="fas fa-copy"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                          </span>
                                        </span>
                                      )}
                                    </CopyToClipboard>
                                  </div>
                                  <hr />
                                    <QRCode value={selected_coin.address?selected_coin.address:''} />
                                  <div className="signupform-control">
                                    <div className="text-danger">
                                      <i
                                        className="fas fa-warning"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Disclaimer
                                    </div>
                                    <hr className="h_r" />
                                    <label htmlFor="disclaimer">
                                      Please Deposit only {selected_coin.symbol}{" "}
                                      to this address. If you Deposit any other
                                      coins, It will be lost forever.
                                    </label>
                                  </div>
                                </div>
                              </div>
                             
                            
                          </div>
                        </div>
                      </div>
                      </>
                    ) : null}  
                    </div>

                    <p className="">
                      ● IMPORTANT: Send only USDT to this deposit address.
                      Sending any other currency to this address may result in
                      the loss of your deposit.
                    </p>
                    <p>
                      ● Notice: Coins will be deposited immediately after 1
                      network confirmation.
                    </p>
                    <p>
                      ● After making a deposit, you can track it's progress on
                      the history page.
                    </p>
                    <p className="red">
                      ● IMPORTANT: We are not allowed to use smart contract
                      addresses for deposits, as the potential losses are
                      irreparable. More Details{" "}
                    </p>
                    <p>
                      ● After finishing your deposit transaction(s), you may
                      enter the "deposit history" page to track the progress of
                      your deposit(s). History Record(s)
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-5">
                    <h3 className="mt-2">
                      USDT Investment Products{" "}
                      <a href="" className="fr light_blue">
                        More
                      </a>
                    </h3>
                    <div className="row">
                      <div className="col-md-6 ">
                        <div className="usdt_box ">
                          <span className="light_blue">
                            <img src="images/usdt.png" alt="not found" /> USDT
                            90-Day Lockup
                          </span>
                          <span className="light_blue">
                            APY <strong className="lght_green">12%</strong>
                          </span>
                          <a href="">
                            Click to view{" "}
                            <i
                              className="fa fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="usdt_box ">
                          <span className="light_blue">
                            <img src="images/usdt.png" alt="not found" /> USDT
                            90-Day Lockup
                          </span>
                          <span className="light_blue">
                            APY <strong className="lght_green">12%</strong>
                          </span>
                          <a href="">
                            Click to view{" "}
                            <i
                              className="fa fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <h3 className="mt-2">
                          Deposits History{" "}
                          <a href="" className="fr light_blue">
                            More
                          </a>
                        </h3>
                        <table className="table">
                          <thead className="table-light">
                            <tr>
                              <th>Status</th>
                              <th>symbol</th>
                              <th>Amount</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {deposit_history.length > 0
                              ? deposit_history.map((item) => (
                                  <>
                                    <tr>
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
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="wallet_top">
                  <a href="" className="lght_green">
                    Crypto
                  </a>
                  <a href="">Fiat</a>
                  <a href="">Internal Transfer</a>
                </div>
                <div className="row blockchain_area">
                  <div className="col-md-6 col-lg-7">
                    <select className="form-select">
                      <option> USDT</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>

                    <div className="select_blockchain">
                      <h3>Select Blockchain</h3>
                    </div>

                    <div className="al_total">
                      <span>
                        <h3>Available </h3>
                        <label>0.00000000</label>
                      </span>
                      <span>
                        <h3>Locked</h3>
                        <label>0.00000000</label>
                      </span>
                      <span>
                        <h3>Total </h3>
                        <label>0.00000000</label>
                      </span>
                    </div>
                    <div className="select_blockchain">
                      <h3>
                        Withdrawl Address{" "}
                        <a href="" className="fr light_blue lght_green">
                          Address managment
                        </a>
                      </h3>
                      <div className="four_input mb-4 withdrwal_address">
                        <span>
                          <input type="text" className="text-feild" />
                        </span>
                        <span>
                          <input type="text" />
                        </span>
                      </div>
                    </div>

                    <h4>Fee:-- </h4>
                    <h4>You will get: 0.00000 </h4>
                    <h5 className="lght_green">Various Fees Standards </h5>

                    <div className="col-md-12 ">
                      <div className="submit_btn">
                        <a href="">Submit</a>
                      </div>
                    </div>

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
                  <div className="col-md-6 col-lg-5">
                    <div className="row">
                      <div className="col-md-12">
                        <h3 className="mt-2">
                          Withdraw History{" "}
                          <a href="" className="fr light_blue">
                            More
                          </a>
                        </h3>
                        <table className="table">
                          <thead className="table-light">
                            <tr>
                              <th>Status</th>
                              <th>Coin</th>
                              <th>Network</th>
                              <th>Amount</th>
                              <th>Date</th>
                            </tr>
                          </thead>
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

export default Deposit;
