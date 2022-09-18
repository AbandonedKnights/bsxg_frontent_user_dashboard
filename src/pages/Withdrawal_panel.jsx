import React from 'react'
import MyNavbar from '../components/MyNavbar'

export default function Withdrawal_panel() {
  return (
    <>
    <MyNavbar/>
      <section>

        <div class="row">
          <div class="col-xxl-12 col-xl-12 table-head-align d-none d-sm-block d-sm-none d-md-block">
            <div class="row" style={{ marginLeft: "5px",justifyContent:" center" }}>
              <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{ width: "max-content !important" }}>
                <div class="process__item active">
                  <a href="#">
                    <div class="process__icon">
                      <span><img src="/images/buy_sell_icon/withdrawal-inside.png" alt="" class="icon-size" /></span>
                    </div>
                  </a>
                  <div class="process__content">
                    <p class="icon-name menu-title-p menu-title-p-active">Withdrawal Panel</p>
                  </div>
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{ width: "max-content !important" }}>
                <div class="process__item">
                  <a href="#">
                    <div class="process__icon">
                      <span><img src="/images/buy_sell_icon/withdrawal-report-inside.png" alt="" class="icon-size" /></span>
                    </div>
                  </a>
                  <div class="process__content">
                    <p class="icon-name menu-title-p">Withdrawal Report</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <center>
          <div class="row d-lg-none d-sm-none" style={{ marginLeft: "5px" }}>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: "max-content !important" }}>
              <div class="process__item active">
                <a href="#">
                  <div class="process__icon">
                    <span><img src="#" alt="" class="icon-size" /></span>
                  </div>
                </a>
                <div class="process__content">
                  <p class="icon-name menu-title-p menu-title-p-active">Withdrawal<br />Panel</p>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: "max-content !important" }}>
              <div class="process__item">
                <a href="#">
                  <div class="process__icon">
                    <span><img src="#" alt="" class="icon-size" /></span>
                  </div>
                </a>
                <div class="process__content">
                  <p class="icon-name menu-title-p">Withdrawal<br />Report</p>
                </div>
              </div>
            </div>


          </div>
        </center>
        {/* <hr style={{color: "#282727 !important"}}> */}
        <div class="row">
          <div class="col-xxl-12">
            <div class="tab-content nft__tab" id="nfvtabcontent">
              <div class="tab-pane fade show active" id="nav-trending" role="tabpanel" aria-labelledby="nav-trending-tab">
                <div class="row">
                  <div style={{  paddingTop: "4%" }}>
                    <center>
                    <span style={{display: "flex",
                       justifyContent: "center"}}>
                      <img src="/images/coins/trx-coin.png" />
                      <img src="/images/coins/usdt-coin.png" />
                      <img src="/images/coins/bnb-coin.png" /><br />
                      </span>
                      <h3>BSXG Wallet Withdrawal</h3>

                      <div class="alert blinking" style={{ textAlign: "center", fontSize: "20px", fontWeight: "600",color:"white" }}>
                        <strong class="blink" >How to withdrawal tutorial </strong>
                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#videoModal" id="videoModal">Play Video</button>
                      </div>
                      <div class="modal fade" id="video_modal" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content video_modal_content">
                            <div class="modal-header">
                              <h4 class="video_modal_header">SBG WITHDRAWAL</h4>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="close_video_modal"><span aria-hidden="true" class="video_close_btn">×</span></button>
                            </div>
                            <div class="modal-body">
                              <video controls="" id="video1" style={{ width: "100%", height: "auto", margin: "0 auto", frameborder: "0" }}>
                                <source src="#" type="video/mp4" />
                                Your browser doesn't support Video!!!.
                              </video>
                            </div>
                          </div>
                        </div>
                      </div>


                    </center>
                    <div class="container">
                      <fieldset>
                        <div class="row">
                          <div class="col-md-1" style={{ width: "6.0%" }}></div>
                          <div class="col-md-5 benificary-form">
                            <form method="POST" action="#" accept-charset="UTF-8" id="benificary-form"><input name="_token" type="hidden" value="v0QIzgBbqqQ2Ma12504kOJmBTD9JwA5pmFlxhTVn" />
                              <div class="form-group" style={{background:"rgb(21 58 68)",
                                 padding: "10px",
                                 borderRadius: "5px"}}>
                                <label class="col-md-12 control-label" for="selectbasic" style={{ color: "white" }}>Add New BSXG Wallet Address</label>
                                <input type="hidden" name="otp" class="otp1main" value="null" />
                                <div class="col-md-12">
                                  <select id="selectbasic" name="coin_code" class="form-control">
                                    <option class="form-control" value="" disable="" selected="" hidden="">Select coin </option>
                                    <option value="3">Tron (TRC20) </option>
                                  </select>
                                  <small class="text-danger coin_code"></small>
                                </div>
                              </div>
                              <br />
                              <div class="form-group" style={{background:"rgb(21 58 68)",
                                 padding: "10px",
                                 borderRadius: "5px"}}>
                                <label class="col-md-12 control-label" for="selectbasic" style={{ color: "white" }}>Receiver's Wallet Address</label>
                                <div class="col-md-12">
                                  <input type="text" name="receivers_wallet_address" class="form-control" />
                                  <small class="text-danger receivers_wallet_address"></small>
                                </div>
                              </div>
                              <br />
                              <div class="form-group" style={{background:"rgb(21 58 68)",
                                 padding: "10px",
                                 borderRadius: "5px"}}>
                                <label class="col-md-6 control-label" for="selectbasic" style={{ color: "white" }}>Select OTP Mode</label>
                                <div class="col-md-12">
                                  <select class="form-control" name="otp_mode">
                                    <option value="" disable="" selected="" hidden="">Select OTP Mode </option>
                                    <option value="mobile">Mobile</option>
                                    <option value="email">Email</option>
                                  </select>
                                  <small class="text-danger otp_mode"></small>
                                </div>
                              </div>
                              <center>
                                <button class="custom-btn btn-12" type="button" onclick="sendOtpBenificary()" id="address_btn"><span>SEND OTP</span></button>
                              </center>
                              <input type="hidden" name="sender_id" value="" />
                            </form>
                          </div>
                          <div class="col-md-1" style={{ width: "6.0%" }}></div>
                          <div class="col-md-5 benificary-otp-form" style={{ display: "none" }}>
                            <div class="card" style={{ border: "blanchedalmond" }}>
                              <div class="card-body" style={{ background: "linear-gradient(45deg, #1f2732 , #1e2530)" }}>
                                <label class="label-control" style={{ color: "white" }}>Enter your 6 digit OTP</label>
                                <form method="post" action="" id="benificary-otp-form">
                                  <input type="hidden" name="_token" value="v0QIzgBbqqQ2Ma12504kOJmBTD9JwA5pmFlxhTVn" />
                                  <div class="form-group" >
                                    <input type="hidden" class="form-control" name="mobile" id="mobile_num1" value="" />
                                  </div>
                                  <input type="text" class="form-control" id="otpBox1" name="otpBox1" value="" placeholder="Enter OTP" />
                                  <small class="text-danger"></small>
                                  <center><small class="text-danger codeBoxError" style={{ fontSize: "16px !important" }}></small></center>
                                  <div class="col-md-12 mb-4 resend-otp-timer">
                                    <div class="form-group otp-timer text-center">
                                      <p class="text-center bg-danger p-1" style={{ borderRadius: "20px" }}>Resend OTP? Wait: <span class="timer"></span> seconds</p>
                                    </div>
                                  </div>
                                  <div class="registration-form-account send-otp-btn">
                                    <p class="registration-form-account-para-tag">Didn't get OTP? <input type="button" value="Resend OTP" class="btn btn-success registration-form-signin-button resend-otp-btn" onclick="sendOtpBenificary()" /></p>
                                  </div>
                                  <button class="custom-btn btn-12" type="button" onclick="verifyBenificaryOtp()" id="address_btn_otp"><span>Submit</span><span>Submit</span></button>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-5 crypto-otp-form" style={{ display: "none" }}>
                            <div class="card" style={{ border: "blanchedalmond" }}>
                              <div class="card-body" style={{ background: "linear-gradient(45deg, #1f2732 , #1e2530)" }}>
                                <label class="label-control" style={{ color: "white" }}>Enter your Withdrawal 6 digit OTP</label>
                                <form method="post" action="" id="crypto-otp-form">
                                  <input type="hidden" name="_token" value="v0QIzgBbqqQ2Ma12504kOJmBTD9JwA5pmFlxhTVn" />
                                  <div class="form-group">
                                    <input type="hidden" class="form-control" name="mobile" id="mobile_num" value="" />
                                  </div>
                                  <input type="text" class="form-control" id="otpBox2" name="otpBox2" value="" placeholder="Enter OTP" />
                                  <small class="text-danger"></small>
                                  <center><small class="text-danger codeBoxError" style={{ fontSize: "16px !important" }}></small></center>
                                  <div class="col-md-12 mb-4 resend-otp-timer">
                                    <div class="form-group otp-timer text-center">
                                      <p class="text-center bg-danger p-1" style={{ borderRadius: "20px" }}>Resend OTP? Wait: <span class="timer"></span> seconds</p>
                                    </div>
                                  </div>
                                  <div class="registration-form-account send-otp-btn">
                                    <p class="registration-form-account-para-tag">Didn't get OTP? <input type="button" value="Resend OTP" class="btn btn-success registration-form-signin-button resend-otp-btn" onclick="sendOtpCrypto()" /></p>
                                  </div>
                                  <button class="custom-btn btn-12" type="button" onclick="verifyCryptoOtp()" id="transfer_btn_otp"><span>Submit</span><span>Submit</span></button>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-5 crypto-form">
                            <form method="POST" action="#" accept-charset="UTF-8" id="transfer-form" ><input name="_token" type="hidden" value="v0QIzgBbqqQ2Ma12504kOJmBTD9JwA5pmFlxhTVn" />
                            <div class="form-group"style={{background:"rgb(21 58 68)",
                                 padding: "10px",
                                 borderRadius: "5px"}}>
                              <label class="col-md-12 control-label" for="selectbasic" style={{ color: "white" }}>Choose BSXG Wallet Address</label>
                              <input type="hidden" name="otp" class="otp2main" value="null" />
                              <div class="col-md-12">
                                <select id="selectbasic" class="form-control" name="beneficiary">
                                  <option value="" disable="" hidden="" selected="">Select Receiver's Address </option>
                                </select>
                                <small class="text-danger beneficiary"></small>
                              </div>
                            </div>
                            <br />
                            <div class="form-group"style={{background:"rgb(21 58 68)",
                                 padding: "10px",
                                 borderRadius: "5px"}}>
                              <label class="col-md-12 control-label" for="selectbasic" style={{ color: "white" }}>Available Balance: SBG 0</label>
                              <div class="col-md-12">
                                <input type="number" name="amount"  class="form-control" min="50" placeholder="Amount" />
                                <small class="text-danger amount"></small>
                              </div>
                            </div>
                            <br />
                            <div class="form-group" style={{background:"rgb(21 58 68)",
                                 padding: "10px",
                                 borderRadius: "5px"}}>
                              <label class="col-md-6 control-label" for="selectbasic" style={{ color: "white" }}>Select OTP Mode</label>
                              <div class="col-md-12">
                                <select class="form-control" name="otp_mode">
                                  <option value="" disable="" selected="" hidden="">Select OTP Mode </option>
                                  <option value="mobile">Mobile</option>
                                  <option value="email">Email</option>
                                </select>
                                <small class="text-danger otp_mode"></small>
                              </div>
                            </div>
                            <center>
                              <button class="custom-btn btn-12" type="button" onclick="sendOtpCrypto()" id="transfer_btn"><span>SEND OTP</span></button>
                            </center>
                            <input type="hidden" name="sender_id" value="" />
                          </form>
                          
                        </div>


                        <br />

                        <div class="frame">
                        </div>
                        </div>
                      </fieldset>
                     

                    </div>

                    <br />
                    <center>
                      <h1>Upcoming BSXG Wallet</h1>
                    </center>
                    <br />
                    <center style={{display: "flex",
                       justifyContent: "center"}}>
                      <img src="/images/coins/mmit_c.png" style={{ height: "63px", width: "63px" }} />
                      <img src="/images/coins/bnb-coin.png" style={{ height: "63px", width: "63px" }} />
                      <img src="/images/coins/btc-coin.png" style={{ height: "63px", width: "63px" }} />
                      <img src="/images/coins/cx1.png"style={{ height: "63px", width: "63px" }}  />
                      <img src="/images/coins/cx2.png"style={{ height: "63px", width: "63px" }}  />
                      <img src="/images/coins/cx3.png"style={{ height: "63px", width: "63px" }}  />
                      <img src="/images/coins/cx4.png"style={{ height: "63px", width: "63px" }}  />
                      <img src="/images/coins/cx5.png"style={{ height: "63px", width: "63px" }}  />
                      <img src="/images/coins/cx6.png"style={{ height: "63px", width: "63px" }}  />
                      <img src="/images/coins/cx7.png"style={{ height: "63px", width: "63px" }}  />
                      <img src="/images/coins/cx8.png"style={{ height: "63px", width: "63px" }}  />
                      <img src="/images/coins/cx9.png"style={{ height: "63px", width: "63px" }}  />
                      <img src="/images/coins/eth-coin.png"style={{ height: "63px", width: "63px" }}  />
                      <img src="/images/coins/ltc-coin.png"style={{ height: "63px", width: "63px" }}  />
                      <img src="/images/coins/zax_c.png"style={{ height: "63px", width: "63px" }}  />
                    </center>
                    <br /><br />
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-art" role="tabpanel" aria-labelledby="nav-art-tab">
                <div class="row">
                  <div class="upcoming__table">
                    <table class="table">
                      <thead class="tbl-th">
                        <tr>
                          <th class="tbl-color">Sr. No.</th>
                          <th class="tbl-color">Status</th>
                          <th class="tbl-color">BSXG</th>
                          <th class="tbl-color">Address</th>
                          <th class="tbl-color">Amount</th>
                          <th class="tbl-color">Total</th>
                          <th class="tbl-color">Refund</th>
                          <th class="tbl-color">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}



          <div class="modal dark_bg fade" id="otp-verification" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header text-center">
                </div>
                <div class="modal-body">
                  <form method="POST" action="#" accept-charset="UTF-8" id="transfer-form1"><input name="_token" type="hidden" value="v0QIzgBbqqQ2Ma12504kOJmBTD9JwA5pmFlxhTVn" />                 <input type="hidden" name="beneficiary" value="" />
                    <input type="hidden" name="amount" value="" />
                    <input type="hidden" name="channel" value="" />
                    <div class="col-16">

                      <table class="table table-bordered">
                        <tbody><tr>
                          <td class="font-weight-bold">Choose Address:</td>
                          <td>                         </td>
                        </tr>
                          <tr>
                            <td class="font-weight-bold">Amount:</td>
                            <td><i class="fa fa-inr"> </i> /-</td>
                          </tr>
                        </tbody></table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>




          <div class="modal dark_bg fade" id="otp-verification" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header text-center">
                </div>
                <div class="modal-body">
                  <form method="POST" action="#" accept-charset="UTF-8" id="transfer-form1"><input name="_token" type="hidden" value="v0QIzgBbqqQ2Ma12504kOJmBTD9JwA5pmFlxhTVn" />                 <input type="hidden" name="beneficiary" value="" />
                    <input type="hidden" name="amount" value="" />
                    <input type="hidden" name="channel" value="" />
                    <div class="col-16">
                      {/* <style type="text/css">
                      table tr td {
                      border-color: #00c5ec !important;
                      }
                   </style> */}
                      <table class="table table-bordered">
                        <tbody><tr>
                          <td class="font-weight-bold">Choose Address:</td>
                          <td>                         </td>
                        </tr>
                          <tr>
                            <td class="font-weight-bold">Amount:</td>
                            <td><i class="fa fa-inr"> </i> /-</td>
                          </tr>
                        </tbody></table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" tabindex="-1" id="activation-successful" data-backdrop="static" data-keyboard="false">

            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content" style={{ borderRadius: "20px" }}>
                <img src="#" style={{ height: "auto", position: "absolute", width: "-webkit-fill-available" }} />
                <div class="modal-body text-center">
                  {/* <button type="button" class="close" data-dismiss="modal">&times;</button> */}
                  <div class="text-center" style={{ margin: "15px" }}>
                    <img src="#" style={{ height: "100px" }} />
                    <div style={{ color: "#039f6c", fontSize: "2rem", fontWeight: "bold" }}>Congratulations </div>
                  </div>
                  <div class="text-center " style={{ boxShadow: "0px 0px 0px 5px #b0afaf17 inset", padding: "20px", borderRadius: "30px" }}>
                    <div class="col" style={{ fontSize: "18px", fontWeight: "bold" }}>
                      {/* <img src="dollar.png"> */}
                    </div>
                    <div class="col" style={{ fontSize: "16px" }}> Withdrawal Successfull </div>


                    <div class="col" style={{ fontSize: "23px", fontWeight: "bold" }}>SBG </div>
                  </div>
                  <div class="mb-3" style={{ textAlign: "center" }}>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close" id="close-withdrawal-modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="modal fade pop-up-modal" id="info-msg-modal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-lg px-5">
              <div class="modal-content border-0" style={{ width: "90% !important", background: "#000 !important" }}>
                <div class="modal-header border-0 p-1">
                  <h5 class="modal-title text-white" id="exampleModalLabel"></h5>
                </div>
                <div class="modal-body p-0 mb-3">
                  <h2 class="glow" style={{ color: "red", textAlign: "center", width: "100%" }}>Notice</h2>
                  <hr />
                  <p style={{ color: "#fff", textAlign: "center", fontSize: "20px" }}>Due to Exchange Server Upgradation, Withdrawal will be resumed after  01:09:2022 19:00 PM IST.  </p>
                  {/* <h4 style="text-align: center; color:#fff;">Inconvenience caused is deeply regretted, Please bare with us.</h4>  */}
                </div>
                <div class="mb-3" style={{ textAlign: "center" }}>
                  <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close" id="close-info-modal">Close</button>
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



