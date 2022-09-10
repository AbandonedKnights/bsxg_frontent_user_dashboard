import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { N_OrdersHistory } from "../utils/api_functions";
import {
  set_user_order_close,
  set_user_order_pending,
} from "../features/Exchange";
import { useDispatch } from "react-redux";

function OrdersTab() {
  const { isLoggedIn, userInfo } = useSelector((state) => state?.user?.value);
  const { user_order_pending, user_order_close } = useSelector(
    (state) => state?.exchange?.value
  );
  const user_id = userInfo.user_id;
  const [pendingOrder, setpendingOrder] = useState([]);
  const [closeOrder, setcloseOrder] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    N_OrdersHistory(user_id).then((res) => {
      if (res.status === 200) {
        dispatch(
          set_user_order_close({
            close_order: res.data.params.trade_history.compleated,
          })
        );
        dispatch(
          set_user_order_pending({
            pending_order: res.data.params.trade_history.pending,
          })
        );
      } else {
        console.log("error to fetch open and close orders: ", res);
      }
    });
  }, []);

  useEffect(() => {
    setpendingOrder(user_order_pending);
  }, [user_order_pending, user_order_close]);
  // useEffect(() => {
  //   setpendingOrder(
  //     user_order_pending.sort(
  //       (a, b) => Number(b.timestamp) - Number(a.timestamp)
  //     )
  //   );
  //   setcloseOrder(
  //     user_order_close.sort((a, b) => Number(b.timestamp) - Number(a.timestamp))
  //   );
  // }, []);

  return (
    <>
      <ul className="nav nav-tabs tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#Open_Order"
            type="button"
            role="tab"
          >
            Open Order
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#Trigger_Order"
            type="button"
            role="tab"
          >
            Trigger Order
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="order-tab"
            data-bs-toggle="tab"
            data-bs-target="#Order_History"
            type="button"
            role="tab"
          >
            24H Order History
          </button>
        </li>
      </ul>
      <div className="tab-content hgt_300" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="Open_Order"
          role="tabpanel"
        >
          <div className="open_order_area">
            <a href="" className="active">
              Ordinary
            </a>
            <a href="" className="">
              Trigger Order
            </a>
            <a href="" className="">
              Hide Order Pair
            </a>
          </div>

          {/* open orders */}
          {isLoggedIn ? (
            <div className="" style={{ height: "234px", overflowY: "auto" }}>
              <table className="table coins_table no_pad">
                <thead className="bb1">
                  <tr>
                    <th scope="col" className="light_blue">
                      Date
                    </th>
                    <th scope="col" className="light_blue">
                      Type
                    </th>
                    <th scope="col" className="light_blue">
                      Pair
                    </th>
                    <th scope="col" className="light_blue">
                      Price
                    </th>
                    <th scope="col" className="light_blue">
                      Volume
                    </th>
                    <th scope="col" className="light_blue">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoggedIn ? (
                    user_order_pending.map((item) => (
                      <tr  style={{borderLeft: "2px solid red"}}>
                        <th>
                          {new Date(
                            Number(item.timestamp)
                          ).toLocaleDateString()}
                        </th>
                        <th className="text-uppercase text-danger">{item.currency_type}</th>
                        <th className="text-uppercase text-danger">{item.compare_currency}</th>
                        <th>{item.raw_price}</th>
                        <th>{item.volume}</th>
                        <th>{item.total_executed}</th>
                      </tr>
                    ))
                  ) : (
                    <div className="login_register">
                      <a href="/login">Login</a> or{" "}
                      <a href="/register">Register</a> to check
                    </div>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="login_register">
              <a href="/login">Login</a> or <a href="/register">Register</a> to
              check
            </div>
          )}
        </div>
        {/* end open order */}
        <div className="tab-pane fade" id="Trigger_Order" role="tabpanel">
          <div className="">
            <table className="table coins_table no_pad mt0 "></table>
            {/* close_order */}
            {isLoggedIn ? (
              <div className="" style={{ height: "285px", overflowY: "auto" }}>
                <table className="table coins_table no_pad">
                  <thead className="bb1">
                    <tr>
                      <th scope="col" className="light_blue">
                        Date
                      </th>
                      <th scope="col" className="light_blue">
                        Type
                      </th>
                      <th scope="col" className="light_blue">
                        Pair
                      </th>
                      <th scope="col" className="light_blue">
                        Price
                      </th>
                      <th scope="col" className="light_blue">
                        Volume
                      </th>
                      <th scope="col" className="light_blue">
                        Executed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoggedIn ? (
                      user_order_close.map((item) => (
                        <tr  style={{borderLeft: "2px solid green"}}>
                          <th>
                            {new Date(
                              Number(item.timestamp)
                            ).toLocaleDateString()}
                          </th>
                          <th className="text-uppercase text-success">{item.currency_type}</th>
                          <th className="text-uppercase text-success">{item.compare_currency}</th>
                          <th>{item.raw_price}</th>
                          <th>{item.volume}</th>
                          <th>{item.total_executed}</th>
                        </tr>
                      ))
                    ) : (
                      <div className="login_register">
                        <a href="/login">Login</a> or{" "}
                        <a href="/register">Register</a> to check
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="login_register">
                <a href="/login">Login</a> or <a href="/register">Register</a>{" "}
                to check
              </div>
            )}
          </div>
        </div>
        <div className="tab-pane fade" id="Order_History" role="tabpanel">
          3
        </div>
      </div>
    </>
  );
}

export default OrdersTab;
