import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import numeral from "numeral";
function MarketDepth() {
  const { sellOrder, buyOrder } = useSelector(
    (state) => state?.exchange?.value
  );
  const [sellorderdata, Setsellorderdata] = useState([]);
  const [Buy_order_data, setBuy_order_data] = useState([]);
  const emptydata = ["--", "--", "--", 2, 4];
  const { coin } = useParams();
  const p = coin.split("-");
  const p1 = p[0];
  const p2 = p[1];
  const coina = p[0] + p[1];
  useEffect(() => {
    const sd = sellOrder
      ? Object.values(sellOrder).length > 0
        ? sellOrder[coina]
        : []
      : [];
    Setsellorderdata(sd);

    const buy_ord = buyOrder
      ? Object.values(buyOrder).length > 0
        ? buyOrder[coina]
        : []
      : [];
    setBuy_order_data(buy_ord);
  }, [coin, sellOrder]);
  // console.log(sellOrder);
  function round(x) {
    if (x) {
      return x.toFixed(4);
    }
    return 0;
  }
  function round2(x) {
    if (x) {
      return x.toFixed(8);
    }
    return 0;
  }

  return (
    <>
      <div className="col-lg-6 blue_back no_pad">
      <div style={{height: "200px",overflowY:"auto"}}>
        <table className="table coins_table no_pad ">
          <thead>
            <tr>
              <th scope="col" colSpan={2} className="red fs16">
                Order book
              </th>
              {/* <th scope="col">
                <a href="">
                  <img src="images/5.jpg" alt="not found" />
                </a>
                <a href="">
                  <img src="images/6.jpg" alt="not found" />
                </a>
                <a href="">
                  <img src="images/7.jpg" alt="not found" />
                </a>
              </th> */}
              <th scope="col">
                Decimal
                {/* Decimal <i className="fa fa-gear"></i> */}
              </th>
            </tr>
            <tr>
              <th
                scope="col"
                className="light_blue"
                style={{ textTransform: "uppercase" }}
              >
                {p2} <span className="lght_green">Price</span>
              </th>
              <th
                scope="col"
                className="light_blue"
                style={{ textTransform: "uppercase" }}
              >
                {p1} <span className="lght_green">Volume</span>
              </th>
              <th
                scope="col"
                className="light_blue"
                style={{ textTransform: "uppercase" }}
              >
                {p2} <span className="lght_green"> Total</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sellorderdata
              ? sellorderdata.map((item) => (
                  <>
                    <tr>
                      <th scope="row" className="red">
                        {item.raw_price}
                      </th>
                      <td>{numeral(item.volume).format("0.0a")}</td>
                      <td>{numeral(round2(Number(item.raw_price) * Number(item.volume))).format("0.0a")}</td>
                    </tr>
                  </>
                ))
              : emptydata?.map((item, i) => (
                  <tr key={i}>
                    <th scope="row" className="red">
                      --
                    </th>
                    <td>0</td>
                    <td>--</td>
                  </tr>
                ))}
          </tbody>
        </table>
        </div>
        <div>
        <table className="table coins_table no_pad ">
            <thead className="dark_grey pd_tb_10">
              <tr>
                <th scope="col" className="red fs16">
                  50991.61
                </th>
                <th scope="col">50991.61</th>
                <th scope="col" className="lght_green">
                  Spread: 0.001%
                </th>
              </tr>
            </thead>
            </table>
        </div>

        <div style={{height: "136px",overflowY:"auto"}}>
          <table className="table coins_table no_pad ">
            {/* <thead className="dark_grey pd_tb_10">
              <tr>
                <th scope="col" className="red fs16">
                  50991.61
                </th>
                <th scope="col">50991.61</th>
                <th scope="col" className="lght_green">
                  Spread: 0.001%
                </th>
              </tr>
            </thead> */}
            <tbody>
              {  Buy_order_data
                ? Buy_order_data.map((item, i) => (
                    <tr key={i}>
                      <th scope="row" className="lght_green">
                        {item.raw_price}
                      </th>
                      <td>{numeral(item.volume).format("0.0a")}</td>
                      <td>{numeral(round2(Number(item.raw_price) * Number(item.volume))).format("0.0a")}</td>
                    </tr>
                  ))
                : emptydata?.map((item, i) => (
                    <tr key={i}>
                      <th scope="row" className="lght_green">
                        --
                      </th>
                      <td>0</td>
                      <td>--</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MarketDepth;
