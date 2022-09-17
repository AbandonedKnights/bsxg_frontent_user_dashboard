import React from 'react'
import MyNavbar from '../components/MyNavbar'

export default function Activation() {
  return (
   <>
   <MyNavbar/>
    <section class="nft__area pt-100 pb-25">
   <div class="container">
       <div class="row">
         <div class="col-xxl-12 col-xl-12 table-head-align d-none d-sm-block d-sm-none d-md-block">
             <div class="row" style={{marginLeft: "5px"}}>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{width: "max-content !important"}}>
               <div class="process__item active">
                  <a href="/activation">
                     <div class="process__icon">
                        <span><img src="/Images/buy_sell_icon/activation-panel-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p menu-title-p-active">Activation Panel</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{width: "max-content !important"}}>
               <div class="process__item">
                  <a href="/activation">
                     <div class="process__icon">
                        <span><img src="/Images/buy_sell_icon/activation-report-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p">Activation Report</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{width: "max-content !important"}}>
               <div class="process__item">
                  <a href="/restake">
                     <div class="process__icon">
                        <span><img src="/Images/buy_sell_icon/restake-panel-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p">Restake Panel</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{width: "max-content !important"}}>
               <div class="process__item">
                  <a href="/restake">
                     <div class="process__icon">
                        <span><img src="/Images/buy_sell_icon/restake-report-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p">Restake Report</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{width: "max-content !important"}}>
               <div class="process__item">
                  <a href="#">
                     <div class="process__icon">
                        <span><img src="/Images/buy_sell_icon/stake-profit-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p">Stake Profit Plans</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{width: "max-content !important"}}>
               <div class="process__item">
                  <a href="#">
                     <div class="process__icon">
                        <span><img src="/Images/buy_sell_icon/wallet-transfer-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p"> Wallet Transfer</p>
                  </div>
               </div>
            </div>
         </div>
         </div>
      </div>
      
      {/* <center>
         <div class="row d-lg-none d-sm-none" style={{marginLeft: "5px"}}>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content !important"}}>
               <div class="process__item active">
                  <a href="#">
                     <div class="process__icon">
                        <span><img src="/Images/buy_sell_icon/activation-panel-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p menu-title-p-active">Activation<br/>Panel</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content !important"}}>
               <div class="process__item">
                  <a href="https://sbgglobal.io/user/activation-reports">
                     <div class="process__icon">
                        <span><img src="https://sbgglobal.io/sbg-assets-dashboard/img/misc-icons/activation-report-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p">Activation<br/>Report</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content !important"}}>
               <div class="process__item">
                  <a href="https://sbgglobal.io/user/topup-panel">
                     <div class="process__icon">
                        <span><img src="https://sbgglobal.io/sbg-assets-dashboard/img/misc-icons/restake-panel-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p">Restake<br/>Panel</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content !important"}}>
               <div class="process__item">
                  <a href="https://sbgglobal.io/user/topup-panel-report">
                     <div class="process__icon">
                        <span><img src="https://sbgglobal.io/sbg-assets-dashboard/img/misc-icons/restake-report-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p">Restake<br/>Report</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content !important"}}>
               <div class="process__item">
                  <a href="https://sbgglobal.io/user/stake-plans">
                     <div class="process__icon">
                        <span><img src="https://sbgglobal.io/sbg-assets-dashboard/img/misc-icons/stake-profit-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p">Stake Profit<br/>Plans</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content !important"}}>
               <div class="process__item">
                  <a href="https://sbgglobal.io/user/transfer-wallet">
                     <div class="process__icon">
                        <span><img src="https://sbgglobal.io/sbg-assets-dashboard/img/misc-icons/wallet-transfer-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p">Wallet<br/>Transfer</p>
                  </div>
               </div>
            </div>
           
           
            
         </div>
      </center> */}
      <hr style={{color: "#282727 !important"}}/>
      
                <div class="alert blinking" style={{textAlign: "center",fontSize: "20px",fontWeight: "600"}}>
                    <strong class="blink" style={{color:"white"}}>How to Activate ID tutorial </strong>
                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#videoModal" id="videoModal">Play Video</button>
                </div>
                <div class="modal fade" id="video_modal" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content video_modal_content">
                      <div class="modal-header">
                          <h4 class="video_modal_header">BSXG ACTIVATION</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="close_video_modal"><span aria-hidden="true" class="video_close_btn">×</span></button>
                      </div>
                      <div class="modal-body">
                        <video controls="" id="video1" style={{width: "100%", height: "auto", margin:"0 auto", frameborder:"0"}}>
                          <source src="#" type="video/mp4"/>
                          Your browser doesn't support Video!!!.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
      <div class="row">
         <div class="col-xxl-12">
            <div class="tab-content nft__tab" id="nfvtabcontent">
               <div class="tab-pane fade show active" id="nav-trending" role="tabpanel" aria-labelledby="nav-trending-tab">
                  <div class="row">
                     <div class="col-xxl-12 col-lg-12">
                        <div class="profile__tab-content">
                           <div class="tab-content" id="profile-tabContent">
                              <div class="tab-pane fade show active" id="nav-information" role="tabpanel" aria-labelledby="nav-information-tab">
                                 <div class="profile__info">
                                    <h3 class="profile__info-title">Id Activation Panel</h3>
                                    <div class="profile__info-content">
                                       <form method="POST" action="#" accept-charset="UTF-8" id="activation-form"><input name="_token" type="hidden" value="v0QIzgBbqqQ2Ma12504kOJmBTD9JwA5pmFlxhTVn"/>
                                       <div class="row">
                                          <div class="col-xxl-6 col-md-6">
                                             <div class="profile__input-box">
                                                <h4>Refer Code</h4>
                                                <div class="profile__input">
                                                   <input onkeyup="getReferDetail('refer_code')" type="text" class="form-control" value="BSXG" name="refer_code" style={{backgroundColor: "white"}}/>
                                                   {/* <i class="fa fa-user" aria-hidden="true"></i> */}
                                                   <small class="text-danger refer_code"></small>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="col-xxl-6 col-md-6">
                                             <div class="profile__input-box">
                                                <h4>Refer Name</h4>
                                                <div class="profile__input">
                                                   <input type="text" name="receiver_name" class="form-control" id="receiver_name" disabled=""/>
                                                   {/* <i class="fa-light fa-users"></i> */}
                                                   <small class="text-warning id-status" style={{display: "none"}}>ID Status: <span class="font-weight-bold" id="activation_status"></span></small>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="col-xxl-6 col-md-6">
                                             <div class="profile__input-box">
                                                <h4>Plan Name</h4>
                                                <div class="profile__input">
                                                   <input type="text" name="plan_name" class="form-control" id="plan_name" disabled=""/>
                                                   {/* <i class="fa-light fa-globe"></i> */}
                                                </div>
                                             </div>
                                          </div>
                                          <div class="col-xxl-6 col-md-6">
                                             <div class="profile__input-box">
                                                <h4>Reward Wallet</h4>
                                                <div class="profile__input">
                                                   <input type="text" class="form-control" name="available_balances" id="available_balances" value="" disabled=""/>
                                                   {/* <i class="fa-light fa-database"></i> */}
                                                   <small class="text-danger available_balances"></small>
                                                </div>
                                             </div>
                                          </div>
                                              <div class="col-xxl-6 col-md-6">
                                                 <div class="profile__input-box">
                                                    <h4>Activation Wallet</h4>
                                                    <div class="profile__input">
                                                       <input type="text" class="form-control" name="available_income_balances" id="available_income_balances" value="" disabled=""/>
                                                       {/* <i class="fa-light fa-database"></i> */}
                                                       <small class="text-danger available_income_balances"></small>
                                                    </div>
                                                 </div>
                                              </div>
                                               <input type="hidden" name="plan_type_id" id="plan_type_id" value="2"/>
                                          <div class="col-xxl-6 col-md-6">
                                             <div class="profile__input-box">
                                                <h4>Choose wallet </h4>
                                                <div class="profile__input">
												<select class="form-control" name="wallet_type" required="">
													<option value="" disable="" hidden="" selected="">Select Wallet </option>
													<option value="1">Reward Wallet </option> 
													<option value="2">Activation Wallet</option>
												</select>
                                                <small class="text-danger wallet_type"></small>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="col-xxl-6 col-md-6">
                                             <div class="profile__input-box">
                                                <h4>Select Plan</h4>
                                                <div class="profile__input">
                                                   <select class="form-control" onchange="getAvailableBalances(this.value)" id="plan_detail_id" name="plan_id"><option value="0">Select</option><option value="2">Silver - BSXG 50</option><option value="3">Gold - BSXG 100</option><option value="9">Topaz - BSXG 200</option><option value="4">Platinum - BSXG 500</option><option value="5">Diamond - BSXG 1000</option><option value="6">Ruby - BSXG 2000</option><option value="10">Emerald - BSXG 3000</option><option value="7">Sapphire - BSXG 5000</option><option value="8">Dubai Tour - BSXG 10000</option></select>
                                                   <small class="text-danger "></small>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="col-xxl-6 col-md-6">
                                             <div class="profile__input-box">
                                                <h4>Remark</h4>
                                                <div class="profile__input">
                                                   <input type="text" class="form-control" name="remark" id="remark" value="" style={{backgroundColor: "white"}}/>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="col-xxl-12">
                                             <div class="profile__btn submit-btn"
                                               style={{margin: "35px",
                                               justifyContent: "center",
                                               display: "flex"}}
                                             >
                                                {/* <button type="button" onclick="submitForm()" class="tp-btn-3" id="submit_btn">Submit</button> */}
                                                <button type="button" 
                                                onclick="submitForm()"
                                                class="btn btn-primary">Submit</button>
                                             </div>
                                          </div>
                                       </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
   </>
  )
}
