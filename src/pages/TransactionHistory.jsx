import React,{useState,useEffect} from 'react';
import WalletTab from '../components/WalletTab';
import { useSelector } from "react-redux";

import {
  N_transectionHistory
} from "../utils/api_functions";
const TransactionHistory = () => {
  const { user_id } = useSelector((state) => state?.user?.value.userInfo);
  const [history, setHistory] = useState("");
  const [loading, setLoading] = useState(true);

  const userid = user_id;
  useEffect(() => {
    N_transectionHistory(userid)
      .then((dt) => {
        // if (status !== -5) setHistory(dt);
        if (dt.status === 200) {
          setHistory(dt.data.params.result);
        }
      })
      .catch((e) => {
        console.log(e);
      });
      
  }, []);
  
  
  
  return <div>
        <WalletTab/>
<div className="coinsfather-theme-color box container" style={{marginTop:"80px",marginBottom:"30px",border:"1px solid"}}>
  <div className="box-header with-border">
    <h4 className="box-title theme-color-text">Transaction History</h4>
  </div>
      <div className="box-body px-15 pt-0 pb-10">
          <div className="">
          <table className="table table-border no-margin mdfthemetxt ">
                <thead>
                  <tr className="bg-pale-dark">
                    <th>ASSET</th>
                    <th>TYPE</th>
                    <th>VOLUME</th>
                    <th>STATUS</th>
                    <th>TIME</th>
                  </tr>
                </thead>
                {history ? (
                  <tbody>
                   { history ? (
                      history.map((d, index) => (
                        <tr key={index * 5}>
                          <td>{d.symbol}</td>
                          <td>{d.type}</td>
                          <td>{d.amount}</td>
                          <td>
                            {d.status == 1
                              ? "Success"
                              : d.status == -2
                              ? "Cancel"
                              : "Pending"}
                          </td>
                          <td>{new Date(d.createdAt).toLocaleString()}</td>
                        </tr>
                      ))
                    ) : null}
                  </tbody>
                ) : null}
              </table>
          </div>
      </div>
      </div>
  </div>;
};

export default TransactionHistory;
