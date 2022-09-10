import React, { useEffect } from "react";
import { N_getUserBankDetails } from "../../utils/api_functions";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Depost from "./Depost";
const Payment = () => {
const { isLoggedIn, userInfo } = useSelector((state) => state?.user?.value);
const [bankStatus, setBankStatus] = React.useState(-1);
const [bankDetails, setBankDetails] = React.useState("");
const [loading, setLoading] = React.useState(true);
 const userid = userInfo.user_id;
  //const userid =" 17d585b577d/u";
    useEffect(() => {
        N_getUserBankDetails(userid)
          .then((data) => {
            console.log(data);
            if(data.status == 200) {   
          setBankStatus(data.data.params.bank_details.status);
            if(data.data.params.bank_details.status == 1)
            setBankDetails(data.data.params.bank_details);
            console.log(data.data,"data.data");
            } else if(data.data.status ==400) {
                console.log(data.data.params.bank_details,"im data of dta");
           setBankStatus(data.data.params.bank_status);
            }
            setLoading(false);
          })
         
          
    }, []);
    console.log(bankDetails,"bankDetails");

  return (
    <>
      <div
        class="modal fade"
        id="payment"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="paymentLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="paymentLabel" >
                 <i className="fa fa-dollar text-success"></i> Payment 
              </h6>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
               <div className="container">  
               {/* {loading ? <Loader/> : null} */}
               { bankStatus == 1? (
                <>
                <div className="content-body ">
                  <div className="container-fluid">
                      <div className="row mt-2 mb-2">
                        <h5 className="col-md-12 page-title text-success">Your bank account details for IMPS payments</h5>
                      </div>
                 
                    <div className="row">
                      <div className="col-md-12">
                        <table className="table table-hover table-bordered mdfthemetxt">
                            <thead className="bg-success text-white">
                                <tr>
                                    <th className="tdCenter">Account Number</th>
                                    <th className="tdCenter">IFSC Code</th>
                                    <th className="tdCenter">Account Type</th>
                                    <th className="tdCenter">Status</th>
                                    {/* <th className="tdCenter">Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td className="tdCenter">{bankDetails.account_number}</td>
                                        <td className="tdCenter"> {bankDetails.ifsc} </td>
                                        <td className="tdCenter"> {bankDetails.account_type} </td>
                                        <td className="tdCenter text-success"> Active</td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>
                  </div>
                </div>
                </>
              ) : null}
               {!loading && bankStatus == -1 ? (
                <div className="h6 p-2 text-danger">
                  Your Bank details under Review for 72 Hours .{" "}
                </div>
              ) : null}
            {/* <Depost/>  */}
            {!loading && ((bankStatus == 0) || (bankStatus == 2) ) ? <Depost/> : null}
              
               </div>

            </div>
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
