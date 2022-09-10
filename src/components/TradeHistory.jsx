import React from "react";
import { useSelector } from "react-redux";
import numeral from "numeral";

function TradeHistory() {
  const { orderHistory, active_coin, active_paired_currency } = useSelector(
    (state) => state?.exchange?.value
  );
  // const isSell;
  return (
    <>
      <div className="col-lg-6 blue_back bl_1 no_pad">
        <h3 className="head_pad">Trade History</h3>
        <div className="trade_history">
          <table className="table coins_table no_pad mt0 ">
            <thead>
              <tr>
                <th scope="col" className="light_blue">
                  Price
                </th>
                <th scope="col" className="light_blue">
                  Volume
                </th>
                <th scope="col" className="light_blue">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {orderHistory && Object.values(orderHistory).length > 0 ? (
                orderHistory[
                  active_coin.toLowerCase() +
                    active_paired_currency.toLowerCase()
                ] ? (
                  orderHistory[
                    active_coin.toLowerCase() +
                      active_paired_currency.toLowerCase()
                  ].map((item,index) => {

                    return (
                    // { index === 9?false:parseFloat(item.raw_price)>=parseFloat(orderHistory)?false:true}
                      <tr>
                        <th scope="row" className="red">
                          {/* <i
                            className={`fas ${
                              isSell ? "fa-arrow-down" : "fa-arrow-up"
                            }`}
                          ></i> */}
                          {item.raw_price}
                        </th>
                        <td>{numeral(item.volume).format("0.0a")}</td>
                        <td>
                          {new Date(item.timestamp)
                            .toLocaleString()
                            .slice(0, 8)}
                        </td>
                      </tr>
                    );
                  })
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
                        <h5
                          className="text-secondary"
                          style={{ fontSize: "12px" }}
                        >
                          No history found!
                        </h5>
                      </div>
                    </td>
                  </tr>
                )
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
                      <h5 className="text-secondary">No history found!</h5>
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

export default TradeHistory;
