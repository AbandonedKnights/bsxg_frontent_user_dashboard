import React, { useEffect,useState } from 'react'
import { N_getSupportedCurrency } from '../../utils/api_functions'
import Switch from "react-switch";
const Fees = () => {
    const [get_cstcoin, setcstCoin] =useState(0);
  const [set_enable, setEnable] = useState(0);
    useEffect(()=>{
N_getSupportedCurrency().then((res)=>{
    //console.log(res.data,"im fesss");
    res.data.map((item)=>{
        if (item.paired_with === "is_paired_vrx") {
            setcstCoin(item);
            console.log(get_cstcoin,"get_cstcoin");
          }
    })
})
    },[])
  return (
    <div
      class="modal fade"
      id="Fees"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="FeesLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="FeesdropLabel">
            Fees
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div
              className="col-12"
              style={{ marginTop: "-16px" }}
            >
              <div className="p-2 theme-color my-sidebox-shadow">
                <div className="main-profile-pro d-flex align-items-center bb-1 h-25">
                  <i className="fa fa-rupee-sign ml-2 mr-2 mt-2" />
                  <h5 className="px-2 font-weight-bold pt-3 text-success">
                   Fees
                  </h5>
                </div>
                <article>
                  <div className="col-md-10">
                    <div className="sanfont ">
                      <div className="bold mb-2 d-flex justify-content-between">
                      <h6 className='text-warning mt-1'>Pay trading fees with BTEX </h6> 
                      <h6><Switch
                      onChange={(e) => setEnable(set_enable ? 0 : 1)}
                      checked={set_enable}
                    /></h6>
                      </div>
                      <div className="text-secondary mb-2 d-flex">
                      <i className="fa fa-minus mt-1 text-success mr-3" aria-hidden="true"></i> <h6> Enable this option to pay trading fees with:</h6>
                      </div>
                      <ul className="text-secondary mb-2 d-flex justify-content-between align-items-center text-center"  >
                        <li className="ml-2 mr-2 ">
                          <i
                            className="fa fa-circle text-success mr-2"
                            aria-hidden="true"
                          ></i>{" "}
                          BTEX you buy from the exchange
                        </li>
                        <li className="ml-2 mr-2 ">
                          <i
                            className="fa fa-circle text-success mr-2"
                            aria-hidden="true"
                          ></i>{" "}
                         Unlocked BTEX balance reserved for trading fees
                        </li>
                       
                      </ul>
                      <div className="text-secondary ">
                        
                      Note: You'll get 50% discount if you pay fees via BTEX
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-warning"
              data-bs-dismiss="modal"
            >
             <i className="fa fa-xmark"></i>
            </button>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fees