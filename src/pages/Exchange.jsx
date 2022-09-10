import { useSelector,useDispatch } from "react-redux";

import { useEffect } from "react";
import CoinAside from "../components/CoinAside";
import TradeHistory from "../components/TradeHistory";
import { useNavigate, useParams } from "react-router-dom";
import BuyNSell from "./BuyNSell";
import MarketDepth from "./MarketDepth";
import OrdersTab from "./OrdersTab";
import VerticalNav from "./VerticalNav";
import CandleGraph from "./CandleGraph";
import {
  set_active_paired_currency,
} from "../features/Exchange";
export default function Exchange() {
  const { coin } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { coins, cmcLoading } = useSelector((state) => state?.exchange?.value);

  useEffect(() => {
    let browser_currency_pair;
    if (coin) {
      browser_currency_pair = coin.split("-");
    } else {
      navigate("../exchange/btc-inr", { replace: true });
    }
    let vll = Object.values(coins);
    let match = 1;
    if (vll.length) {
      if (browser_currency_pair[0] !== browser_currency_pair[1]) {
        vll.forEach((item) => {
          if (item.symbol === browser_currency_pair[0].toUpperCase()) {
            if (browser_currency_pair[1].toUpperCase() !== "INR") {
              vll.forEach((it) => {
                if (
                  it.symbol.toUpperCase() ===
                  browser_currency_pair[1].toUpperCase()
                ) {
                  match = 0;
                }
              });
            } else {
              match = 0;
            }
          }
        });
        if (match === 1) {
          navigate("../exchange/btc-inr", { replace: true });
        }
      } else {
        if (match === 1) {
          dispatch(set_active_paired_currency({ pcoin: "inr" }));
          navigate("../exchange/btc-inr", { replace: true });
        }

      }
    }
  }, [coins.length, cmcLoading]);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* <div className="col-lg-1 col-md-12 dark_blue no_pad">
          <VerticalNav />
        </div> */}
        <CoinAside />
        <div className="col-lg-10 col-md-12 blue_back border_1">
          <div className="row">
            <div className="col-lg-6 col-md-12 blue_back no_pad">
              <CandleGraph />
            </div>

            <div className="col-lg-6 col-md-12 blue_back bl_1">
              <div className="row">
                <MarketDepth />
                <TradeHistory />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 blue_back border_1 no_pad">
              <OrdersTab />
            </div>
            <div className="col-lg-6 blue_back border_1 no_pad">
              <BuyNSell />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
