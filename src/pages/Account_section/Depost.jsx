import React, { useEffect } from "react";
import { N_addBinficiary, N_getBank } from "../../utils/api_functions";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
const Depost = () => {
  const [loading, setLoading] = React.useState(true);
  const [accountNo, setAccountNo] = React.useState();
  const [reaccountNo, setReAccountNo] = React.useState();
  const [account_name, setAccountName] = React.useState();
  const [selectedBank, setSelectedBank] = React.useState();
  const [bankIFCS, setIFSC] = React.useState([]);
  const [banklist, setBank] = React.useState();
  const [accountType, setAccountType] = React.useState();
  const { userInfo } = useSelector((state) => state?.user?.value);
  const userid = userInfo.user_id;
  useEffect(() => {
    N_getBank(userid).then((res) => {
      if (res.data.status === 200) {
        setBank(res.data.params.bank);
        setLoading(false);
      }
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (accountNo !== reaccountNo) {
      toast.error("Account Number not matched!");
    } else {
      if (accountNo == "" && bankIFCS == "") {
        toast.error("Fill all field!");
      } else {
        setLoading(true);
        console.log(
          accountNo,
            reaccountNo,
            selectedBank,
            account_name,
            bankIFCS,
            accountType,
            userid,"im details"
        );
        N_addBinficiary(
          accountNo,
          reaccountNo,
          selectedBank,
          account_name,
          bankIFCS,
          accountType,
         userid
        ).then((d) => {
          console.log("AddBenificiery", d);
          if (d.data.status == 200) {
            window.location.reload();
           toast.success(d.data.message);
          } else {
            toast.error(d.data.message);
         }
         setLoading(false);
      });
      }
    }
  };
  return (
    <>
     
        <div
          className=""
          style={{
            backgroundColor: "#ffffff00",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgb(0 0 0 / 30%)",
            overflow: "hidden",
         
            position: "relative",
            padding:"10px",
            margin: "0px auto",
          }}
        >
          <div className="row">
            <div className="col-12 col-md-12 col-sm-12">
            <form
                className="signupform mdfthemetxt"
                method="post"
                id="loginForm"
                autoComplete="off"
                onSubmit={onSubmit}
              >
                <div>
                  <h6 className="text-success">Add your bank account details for IMPS Payments</h6>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1" className="text-success">ACCOUNT NUMBER <i className="text-danger">*</i></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Account no"
                    value={accountNo}
                    onChange={(e) =>
                      setAccountNo(
                        e.target.value
                          .replace(/[^0-9.]/g, "")
                          .replace(/(\..*?)\..*/g, "$1")
                      )
                    }
                  />
                  {/* <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1" className="text-success">RE-ACCOUNT NUMBER <i className="text-danger">*</i></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Re-Enter Account no"
                    value={reaccountNo}
                    onChange={(e) =>
                      setReAccountNo(
                        e.target.value
                          .replace(/[^0-9.]/g, "")
                          .replace(/(\..*?)\..*/g, "$1")
                      )
                    }
                  />
                  {/* <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1" className="text-success">Account Holder Name <i className="text-danger">*</i></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Account Name"
                    value={account_name}
                    onChange={(e) => setAccountName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1" className="text-success">BANK NAME <i className="text-danger">*</i></label>
                  <select
                    className="form-control text-dark"
                    onChange={(e) => setSelectedBank(e.target.value)}
                  >
                    <option selected>Please Select</option>
                    {banklist?.map((d) => (
                      <option className="text-dark">{d.bank_name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1" className="text-success">ACCOUNT TYPE <i className="text-danger">*</i></label>
                  <select
                    className="form-control text-dark"
                    onChange={(e) => setAccountType(e.target.value)}
                  >
                    <option selected className="text-dark">
                      Please Select
                    </option>
                    <option className="text-dark">Current</option>
                    <option className="text-dark">Saving</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1" className="text-success">BANK IFSC <i className="text-danger">*</i></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Bank IFSC"
                    value={bankIFCS}
                    onChange={(e) => setIFSC(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-outline-success mt-2">
                  {loading ? (
                    <i className="loading-icon fas fa-spinner fa-spin mr-2"></i>
                  ) : null}
                  <span id="reg">SUBMIT</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Depost;
