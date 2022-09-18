import React from 'react'
import MyNavbar from '../components/MyNavbar'

export default function Diposit_panel() {
  return (
    <>
    <MyNavbar/>
 <section class="nft__area pt-100 pb-25">
   <div class="container">
      <div class="row">
         <div class="col-xxl-12 col-xl-12 table-head-align d-none d-sm-block d-sm-none d-md-block">
             <div class="row" style={{justifyContent: "space-around"}}>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{width: "max-content !important"}}>
               <div class="process__item active">
                  <a href="#">
                     <div class="process__icon">
                        <span><img src="/Images/buy_sell_icon/deposit-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p menu-title-p-active">Deposit Panel</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{width: "max-content !important"}}>
               <div class="process__item">
                  <a href="#">
                     <div class="process__icon">
                        <span><img src="/Images/buy_sell_icon/deposit-report.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p">Deposit Report</p>
                  </div>
               </div>
            </div>           
         </div>
         </div>
      </div>
      
      <center>
         <div class="row d-lg-none d-sm-none" style={{marginLeft: "5px"}}>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content !important"}}>
               <div class="process__item active">
                  <a href="#">
                     <div class="process__icon">
                        <span><img src="#" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p menu-title-p-active">Deposit<br/>Panel</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content !important"}}>
               <div class="process__item">
                  <a href="#">
                     <div class="process__icon">
                        <span><img src="#" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p">Deposit<br/>Report</p>
                  </div>
               </div>
            </div>
            
            
         </div>
      </center>
      <hr style={{color: "#282727 !important"}}/>
      
                <div class="alert blinking" style={{textAlign: "center",fontSize: '20px',fontWeight: "600"}}>
                    <strong class="blink" style={{color:"white"}}>How to Create Deposit tutorial </strong>
                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#videoModal" id="videoModal">Play Video</button>
                </div>
                <div class="modal fade" id="video_modal" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content video_modal_content">
                      <div class="modal-header">
                          <h4 class="video_modal_header">BSXG DEPOSIT</h4>
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
                     <div style={{background:"#eeecec",paddingTop: "4%"}}>
                        <center>
                        <span style={{display: "flex",
                            justifyContent: "center"}}>
                           <img src="/Images/coins/trx-coin.png"/>
                           <img src="/Images/coins/usdt-coin.png"/>
                           <img src="/Images/coins/bnb-coin.png"/>
                           <img src="/Images/coins/eth-coin.png"/><br/>
                           </span>
                           <h3 style={{color:"black"}}>BSXG Wallet Deposit</h3>
                          
                           <br/>
                           
                        </center>
                        
                        <div class="container" id="cset">
                           <form method="POST" action="#" accept-charset="UTF-8"/><input name="_token" type="hidden" value="v0QIzgBbqqQ2Ma12504kOJmBTD9JwA5pmFlxhTVn"/>
                           <div class="row" style={{paddingTop: "5%"}}>
                              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-2 col-lg-offset-3">
                                 
                                    <fieldset>
                                       <div class="row">
                                          <div class="col-md-4">
                                             <h5 class="deposit-h5-color" style={{color:"black"}}>Wallet Amount:0.000</h5>
                                          </div>
                                          <div class="col-md-4 box-m">
                                             <h5 style={{border: "5px soild black",textAlign:"center",border: "1px solid black", borderRadius:"10px", color:"black",padding:"5px"}}>Reward Balance:- BSXG 0</h5>
                                          </div>
                                          <div class="col-md-4 box-m">
                                             <h5 style={{border: "5px soild black",textAlign:"center",border: "1px solid black", borderRadius:"10px", color:"black",padding:"5px"}}>Activation Balance:- BSXG 0</h5>
                                          </div>
                                       </div>
                                                                              <hr/>
                                       <div class="row" style={{justifyContent: "space-around"}}>
                                          <div class="col-md-6"
                                          style={{background:" #0c1939",
                                                padding: "10px",
                                                borderRadius: "5px"}}>
                                             <div class="form-group">
                                                <label class="col-md-3 control-label" for="selectbasic" style={{color: "white"}}>Select Coin</label>
                                                <div class="col-md-12">
                                                   <select class="form-control" name="coin_name">
                                                      <option disabled="" selected="">Select BSXG Coin</option>
                                                      <option value="BNB">BNB</option>
                                                      <option value="TRX">TRON</option>
                                                      <option value="ETH">ETH</option>
                                                      <option value="USDT.TRC20">USDT</option>
																										   
												   </select>
                                                   <small class="text-danger "></small>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="col-md-6" id="amount"
                                          style={{background:" #0c1939",
                                                padding: "10px",
                                                borderRadius: "5px"}}>
                                             <div class="form-group">
                                                <label class="col-md-12 control-label" for="selectbasic" style={{color: "white"}}>Amount BSXG</label>
                                                <div class="col-md-12">
												                                                                                    <input type="number" id="tentacles"    name="amount" value="" class="form-control" min="50" autocomplete="off"/>
																									<small class="text-danger "></small>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <br/>
                                       <h5><span style={{color:"red"}}>Note :</span> <strong class="deposit-h5-color" style={{color:"black"}}>On final transaction please send amount including network fee.</strong></h5>
                                       <div class="frame">
                                          <center>
                                             <div class="image">
                                                <img src="/Images/buy_sell_icon/deposit-bottom.png" style={{width: "25%"}}/><br/>
                                                <span>
                                                <button type="button" onclick="submitForm()" class="custom-btn btn-12" id="deposit_btn"
                                                style={{margin:"20px"}}>Add coin
                                                </button>
                                                </span>
                                             </div>
                                          </center>
                                       </div>
                                    </fieldset>
                              </div>
                           </div>
                           
                        </div>
                        <br/>
                        <center>
                       
                           <h1 style={{color:"black"}}>Upcoming BSXG Wallet</h1>
                           
                        </center>
                        <br/>
                        <center style={{display: "flex",
                       justifyContent: "center"}}>
                        <img src="/Images/coins/bnb-coin.png" style={{ height: "63px", width: "63px" }} />
                        <img src="/Images/coins/btc-coin.png" style={{ height: "63px", width: "63px" }} />
                       <img src="/Images/coins/eth-coin.png"style={{ height: "63px", width: "63px" }}  />
                    </center>
                        <br/><br/>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </div>

    <div class="modal fade pop-up-modal" id="info-msg-modal" tabindex="-1" style={{display: "none"}} aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0" style={{background: "#000 !important"}}>
                
                <div class="modal-body">
                    <h2 style={{color:"#ffbd49",fontWeight: "600", textAlign: "center"}}>Deposit Info</h2>
                    <hr/>
                    <div style={{color:"#fff"}}>
                        <ul style={{fontSize: "18px",lineHeight: "30px",padding: "5px", textAlign:"justify"}}>
                            <li style={{display: "flex"}}>
                              <div class="icon" style={{marginRight: "10px"}}><i class="fa fa-info-circle li-color-blink blink"></i></div>
                              You should transfer amount to given address within 2 hrs, else it will not be reflected in your account.
                           </li>
                           <li style={{display: "flex"}}>
                              <div class="icon" style={{marginRight: "10px"}}><i class="fa fa-info-circle li-color-blink blink"></i></div>
                              Our payment address is dynamic, it changes everytime when user create a deposit. Please send funds to the latest address shown while creating a deposit.
                           </li>
                           <li style={{display: "flex"}}>
                              <div class="icon" style={{marginRight: "10px"}}><i class="fa fa-info-circle li-color-blink blink"></i></div>
                              Please send exact amount displayed while creating deposit + network fee  while creating a transfer from your network platform in TRX/USDT.
                           </li>
                          <li style={{display: "flex"}}>
                              <div class="icon" style={{marginRight: "10px"}}><i class="fa fa-info-circle li-color-blink blink"></i></div>
                              Funds sent to a different address or on different coin structures cannot be recovered, Please check twice before making deposit.
                           </li>
                        </ul>
                     </div>
                </div>
                <div class="mb-3" style={{textAlign: "center"}}>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close" id="close-info-modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade pop-up-modal" id="info-msg-modal2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg px-5">
            <div class="modal-content border-0" style={{width: "90% !important", background: "#000 !important"}}>
                <div class="modal-header border-0 p-1">
                    <h5 class="modal-title text-white" id="exampleModalLabel"></h5>
                </div>
                <div class="modal-body p-0 mb-3">
                    <h2 class="glow" style={{color: "red", textAlign: "center", width: "100%"}}>Notice</h2>
                    <hr/>
                    <p style={{color: "#fff", textAlign: "center", fontSize: "20px"}}>Due to Merchant Server Maintanance, Deposit will be resumed within 2 Hrs.  </p>
                    <h4 style={{textAlign: "center", color:"#fff"}}>Inconvenience caused is deeply regretted, Please bare with us.</h4>
                </div>
                <div class="mb-3" style={{textAlign: "center"}}>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close" id="close-info-modal2">Close</button>
                </div>
            </div>
        </div>
    </div>
    
   </div>
</section>
    </>
  )
}
