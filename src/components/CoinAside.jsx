import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  set_active_coin,
  set_active_coin_details,
  set_pc_price,
} from "../features/Exchange";
import { N_getSupportedCurrency } from "../utils/api_functions";

function CoinAside(props) {
  const navigate = useNavigate();
  // const { active_paired_currency } = useSelector(
  //   (state) => state?.exchange?.value
  // );

  const [searchitem, setsearchitem] = useState("");
  const { coins } = useSelector((state) => state?.exchange?.value);
  // const { user_id } = useSelector((state) => state?.user?.value.userInfo);
  const coins_data = Object.values(coins);
  const dispatch = useDispatch();
  const pairedCur = ["INR", "BTC", "USDT", "BTEX"];

  function round(x) {
    if (x) {
      return x.toFixed(6);
    }
    return 0;
  }
  useEffect(() => {
    let ddt = {};
    coins_data?.map((d, i) => {
      for (let i = 0; i < pairedCur.length; i++) {
        if (d.symbol === pairedCur[i]) {
          ddt[d.symbol === "BTEX" ? "INRX" : d.symbol] = d.current_price_inr;
        }
      }
    });
    dispatch(set_pc_price({ data: ddt }));
  }, [coins.length]);

  return (
    <>
      <div className="col-lg-2 col-md-12 blue_back border_1 no_pad">
        <div className="search_area">
          <input
            type="text"
            placeholder="search...."
            name=""
            onChange={(event) => {
              setsearchitem(event.target.value);
            }}
          />
          <a href="#">
            <i className="fa fa-search"></i>
          </a>
        </div>

        <div className="all_coins">
          <table className="table coins_table" id="myTable">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Coin</th>
                <th scope="col">Price($)</th>
                <th scope="col">Change</th>
              </tr>
            </thead>
            <tbody>
              {coins && coins.length > 0 ? (
                coins
                  .filter((item) => {
                    if (searchitem == "") {
                      return item;
                    } else if (
                      item?.symbol
                        .toLowerCase()
                        .includes(searchitem.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item, key) => (
                    <>
                      {item.symbol !== "INR" ? (
                        <tr
                          key={key}
                          onClick={() => {
                            dispatch(
                              set_active_coin({
                                coin: item.symbol.toUpperCase(),
                              })
                            );
                            dispatch(set_active_coin_details({ data: item }));
                            navigate(
                              `../exchange/${item?.symbol.toLowerCase()}-inr`,
                              { replace: true }
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <th scope="row">
                            {/* <img src="images/star.png" alt="not found" /> */}
                          </th>
                          <td>
                            <img
                              src={item?.icon}
                              alt="not found"
                              height="15px"
                            />{" "}
                            {item?.symbol}
                          </td>
                          <td>
                            {item?.current_price_inr
                              ? round(item.current_price_inr)
                              : ""}
                          </td>
                          <td>{item?.price_change_percentage_1h_inr}</td>
                        </tr>
                      ) : null}
                    </>
                  ))
              ) : (
                <tr>
                  <td colSpan={4} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "100px",
                      }}
                    >
                      <h5 className="text-secondary">Loading..</h5>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CoinAside;
