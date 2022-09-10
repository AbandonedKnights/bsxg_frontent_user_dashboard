import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  N_createBuyOffer,
  N_get_wallet,
  N_OrdersHistory,
  N_createSellOffer,
} from "../utils/api_functions";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  set_user_order_close,
  set_user_order_pending,
} from "../features/Exchange";
import { useDispatch } from "react-redux";
const BuyNSell = () => {
  const { isLoggedIn, userInfo } = useSelector((state) => state?.user?.value);
  const { coins, active_coin_details, active_paired_currency, active_coin } =
    useSelector((state) => state?.exchange?.value);
  // const { buymarket } = useSelector((state) => state?.coinDB?.value);
  const [wallet_details, setWalletDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total_inr, setTotalInr] = useState(0);
  const [amount, setAmount] = React.useState(0.00);
  const [samount, setsAmount] = React.useState(0.00);
  const [total, setTotal] = React.useState(0);
  const [SellTotal, setSellTotal] = React.useState(0);
  const [currencyPrice1, setcurrencyPrice1] = useState("");
  const [sellprice, setsellprice] = useState("");
  const [range, setRange] = useState(1);
  const [sellrange, setSellRange] = useState(1);
  const [atPrice, setATPrice] = React.useState(
    active_coin_details?.current_price_inr
  );
  let browser_currency_pair;
  let coins1 = coins;
  const userid = userInfo.user_id;
  const user_id = userInfo.user_id;
  const dispatch = useDispatch();

  const { coin } = useParams();
  if (coin) {
    browser_currency_pair = coin.split("-");
  }

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
        let total = 0;
        let final_data = Object.keys(d.data.params.wallets).map((res, i) => {
          let rate = getCoinRate(res, "INR");
          let inr_val =
            Math.round(rate * d.data.params.wallets[res]?.balance * 1000) /
            1000;
          total = total + parseFloat(inr_val);

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
            locked:
              Math.round(d.data.params.wallets[res]?.locked * 10000) / 10000 !==
              0
                ? Math.round(
                    Math.abs(
                      d.data.params.wallets[res]?.locked
                        ? d.data.params.wallets[res]?.locked
                        : 0
                    ) * 10000
                  ) / 10000
                : Math.round(d.data.params.wallets[res]?.locked * 100000000) /
                  100000000,
            address: d.data.params.wallets[res]?.wallet_address,
            balance:
              Math.round(d.data.params.wallets[res]?.balance * 10000) /
                10000 !==
              0
                ? Math.round(d.data.params.wallets[res]?.balance * 10000) /
                  10000
                : Math.round(d.data.params.wallets[res]?.balance * 100000000) /
                  100000000,
            avl_balance:
              Math.round(d.data.params.wallets[res]?.available * 10000) /
                10000 !==
              0
                ? Math.round(
                    (d.data.params.wallets[res]?.balance -
                      d.data.params.wallets[res]?.locked) *
                      10000
                  ) / 10000
                : Math.round(
                    (d.data.params.wallets[res]?.balance -
                      d.data.params.wallets[res]?.locked) *
                      100000000
                  ) / 100000000,
            inr_balance: inr_val,
          };
        });
        setWalletDetails(final_data);
        setTotalInr(total);
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
    getWallets();
  }, [active_paired_currency, coins]);

  useEffect(() => {
    setATPrice(active_coin_details.current_price_inr);
    if (wallet_details) {
      wallet_details.filter((item) => {
        if (item?.symbol === active_paired_currency) {
          setcurrencyPrice1(item.avl_balance);
        }
      });
    }
    if (wallet_details) {
      wallet_details.filter((item) => {
        if (item.symbol === active_coin) {
          setsellprice(item.avl_balance);
        }
      });
    }
  },[active_coin_details, currencyPrice1, active_paired_currency]);
  // this call inside useEffect [active_coin_details, currencyPrice1, active_paired_currency]
  useEffect(() => {
    setATPrice(active_coin_details.current_price_inr);
    if (wallet_details) {
      wallet_details.filter((item) => {
        if (item?.symbol === active_paired_currency) {
          setcurrencyPrice1(item.avl_balance);
        }
      });
    }
    if (wallet_details) {
      wallet_details.filter((item) => {
        if (item.symbol === active_coin) {
          setsellprice(item.avl_balance);
        }
      });
    }
  });
  function round(x) {
    if (x) {
      return x.toFixed(4);
    }
    return 0;
  }

  const getUserOrder = () => {
    N_OrdersHistory(user_id)
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            set_user_order_pending({pending_order:res.data.params.trade_history.pending})
          );
         
        } else {
          console.log("error to fetch open and close orders: ", res);
        }
      })
      .catch((e) => console.log(e));
  };

  const getUserOrderclose = () => {
    N_OrdersHistory(user_id)
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            set_user_order_close({close_order:res.data.params.trade_history.compleated})
          );
         
        } else {
          console.log("error to fetch open and close orders: ", res);
        }
      })
      .catch((e) => console.log(e));
  };


  //  Buy function start
  function buyCoin(atPrice, amount, c, cp) {
    N_createBuyOffer(atPrice, amount, c, cp, user_id).then((d) => {
     
      if (d.status === 200) {
        toast.success(d.data.message, "ddffb");
        getWallets();
        getUserOrder();
      } else if (d.status === 400) {
        toast.error(d.data.message);
        getWallets();
      }
    });
  }
  // Buy function close

  // sell section

  function sellCoin(atPrice, amount, c, cp) {
    N_createSellOffer(atPrice, amount, c, cp, user_id)
      .then((d) => {
        if (d.status === 200) {
          getWallets();
          getUserOrderclose()
          toast.success(d.data.message);
        } else if (d.status === 400) {
          getWallets();
          getUserOrderclose()
          toast.success(d.data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // sell section close

  return (
    <>
      <ul className="nav nav-tabs tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#Limit_Order"
            type="button"
            role="tab"
          >
            Limit Order
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#Market_Order"
            type="button"
            role="tab"
          >
            Market
          </button>
        </li>
      </ul>
      <div className="tab-content hgt_320" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="Limit_Order"
          role="tabpanel"
        >
          <div
            className="tab-pane fade show active"
            id="Limit_Order"
            role="tabpanel"
          >
            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-12  limit_order_area no_pad">
              <div className="limit_order_area_block">
                <div className="text-success">
                  Balance &nbsp;
                  <span className="text-info">
                    {active_paired_currency}{" "}
                    <span className="balance">{currencyPrice1 ? currencyPrice1:"0.0000000"}</span>
                  </span>
                </div>
                <div>
                  <label>Price</label>
                  <input
                    type="text"
                    value={atPrice}
                    onChange={(e) => {
                      setATPrice(
                        e.target.value
                          .replace(/[^0-9.]/g, "")
                          .replace(/(\..*?)\..*/g, "$1")
                      );
                      setTotal(
                        e.target.value
                          .replace(/[^0-9.]/g, "")
                          .replace(/(\..*?)\..*/g, "$1") * amount
                      );
                    }}
                  />
                </div>
                <div>
                  <label>Volume</label>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setTotal(e.target.value * atPrice);
                    }}
                  />
                </div>
                <div className="price-range-slider">
                  <input
                    type="range"
                    id="slider-range"
                    className="range-bar text-white"
                    value={range}
                    onChange={(e) => {
                      if (e.target.value >= 1) {
                        setRange(e.target.value);
                        const tamt = (currencyPrice1 * e.target.value) / 100;
                        setTotal(tamt);
                        setAmount(tamt / atPrice);
                      }
                    }}
                  />
                  <span id="demo" className="text-info mx-2">
                    {range}%
                  </span>
                  <p className="range-value">
                    <span>Total</span>
                    <span>
                      <input type="text" value={round(total)} readonly />
                    </span>
                    <span>{active_paired_currency}</span>

                    {/* <span>Hide</span> */}
                  </p>
                  {/* <div className="no_pad fee_area">
                    <strong>
                      <span>
                        Fee{" "}
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                      </span>
                      <span className="fees">500</span>
                    </strong>
                    <strong>
                      <span className="lght_green">Earn</span>
                      <span>0.05%</span>
                      <span>/</span>
                      <span>Pay</span>
                      <span className="red">0.02%</span>
                    </strong>
                  </div> */}
                </div>
                {isLoggedIn ? (
                  <div
                    className="btn btn-success login_register mb-2"
                    onClick={() => {
                      if (isLoggedIn) {
                        const c = coin.split("-");
                        buyCoin(atPrice, amount, c[0], c[1]);
                      } else {
                        toast.error("First login then perform buy/sell");
                      }
                    }}
                  >
                    Buy{" "}
                  </div>
                ) : (
                  <div className="login_register">
                    <a href="/login">Login</a> or{" "}
                    <a href="/register">Register</a> to trade
                  </div>
                )}
              </div>
            </div>

            {/* selling code */}
            <div className="col-lg-6 col-md-6 col-sm-6 col-sm-12 limit_order_area no_pad">
              <div className="limit_order_area_block">
                <div>
                  <label className="text-success">Balance</label>
                  <span className="text-info">
                    {active_coin}{" "}
                    <span className="balance">{sellprice ? sellprice :"0.000000"}</span>
                  </span>
                </div>
                <div>
                  <label>Price</label>
                  <input
                    type="text"
                    value={atPrice}
                    onChange={(e) => {
                      setATPrice(
                        e.target.value
                          .replace(/[^0-9.]/g, "")
                          .replace(/(\..*?)\..*/g, "$1")
                      );
                      setSellTotal(
                        e.target.value
                          .replace(/[^0-9.]/g, "")
                          .replace(/(\..*?)\..*/g, "$1") * samount
                      );
                    }}
                  />
                </div>
                <div>
                  <label>Volume</label>
                  <input
                    type="text"
                    value={samount}
                    onChange={(e) => {
                      setsAmount(e.target.value);
                      setSellTotal(e.target.value * atPrice);
                    }}
                  />
                </div>
                <div className="price-range-slider">
                  <input
                    type="range"
                    id="slider-range"
                    className="range-bar text-white"
                    value={sellrange}
                    onChange={(e) => {
                      if (e.target.value >= 1) {
                        setSellRange(e.target.value);
                        const tamt = (sellprice * e.target.value) / 100;
                        setSellTotal(tamt * atPrice);
                        setsAmount(tamt);
                      }
                    }}
                  />
                  <span id="demo" className="text-info mx-2">
                    {sellrange}%
                  </span>
                  <p className="range-value">
                    <span>Total</span>
                    <span>
                      <input type="text" value={round(SellTotal)} readonly />
                    </span>
                    {/* <span>0</span> */}
                    <span>{active_paired_currency}</span>
                  </p>
                  {/* <div className="no_pad fee_area">
                    <strong>
                      <span>
                        Fee{" "}
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                      </span>
                      <span className="fees">500</span>
                    </strong>
                    <strong>
                      <span className="lght_green">Earn</span>
                      <span>0.05%</span>
                      <span>/</span>
                      <span>Pay</span>
                      <span className="red">0.02%</span>
                    </strong>
                  </div> */}
                </div>

                {isLoggedIn ? (
                  <div
                    className="login_register btn btn-danger"
                    onClick={() => {
                      if (isLoggedIn) {
                        const c = coin.split("-");
                        sellCoin(atPrice, samount, c[0], c[1]);
                      } else {
                        toast.error("First login then perform buy/sell");
                      }
                    }}
                  >
                    Sell
                  </div>
                ) : (
                  <div className="login_register">
                    <a href="/login">Login</a> or{" "}
                    <a href="/register">Register</a> to trade
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="Market_Order" role="tabpanel">
          2
        </div>
        <div className="tab-pane fade" id="Trigger_Order_Two" role="tabpanel">
          3
        </div>
      </div>

      {/* selliing code */}
    </>
  );
};

export default BuyNSell;
