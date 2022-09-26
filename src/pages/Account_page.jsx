import React from 'react'
import MyNavbar from '../components/MyNavbar'
import { useSelector } from "react-redux";

export default function Account_page() {
   const { isLoggedIn, userInfo } = useSelector((state) => state?.user?.value);
   const userid = userInfo.email;
   console.log(userid, "userid");
   return (
      <div>
         <MyNavbar />
         <section class="nft__area pt-100 pb-25" style={{ margin: "20px 0px" }}>
            <div class="container">
               <button class="btn45" id="reward_modal" style={{ display: "none" }}>View Offer</button>
               <div class="container-fluid">
                  <div class="popup__wrapper account-pg-scroll" style={{ Zindex: "1", marginTop: "3%" }}>
                     {/* <div class="popup__content reward-popup-modal">
                       <button class="popup__close">x</button>
                       <div class="popup__details">
                          <div class="row " style={{paddingBottom: "4%",marginTop: "4%"}}>
                             <center>
                              
                                <img src="" class="reward-popup-img" style={{opacity: "0"}}/>
                              
                                   <p id="responsivetexth"  class="reward-popup-title">Vipin</p>
                                   <p id="responsivetextp"  class="reward-popup-rank">0</p>
                             </center>
                            
                            
                          </div>
                         
                         
                       </div>
                    </div> */}
                  </div>
               </div>


               <div class="row">
                  <div class="col-xxl-12 table-head-align">
                     <div class="section__title-wrapper mb-10 " style={{ textAlign: "center" }}>
                        <img src="/images/user.jpg" alt="" style={{ width: "100px", borderRadius: "15px", marginBottom: "20px", display: "inline" }} />
                        <h3 style={{ textAlign: "center" }}>Vipin - {userid}</h3>
                        <h4 style={{ textAlign: "center", paddingTop: "10px" }}>vipinatraura@gmail</h4>



                        <h5 style={{ textAlign: "center", paddingTop: "10px" }}>Total Package - 0 BSXG</h5>
                     </div>

                     <div class="share__social share-icon-account" style={{ display: "flex", justifyContent: "center" }}>
                        <span id="refer_link" style={{ display: "none" }}>https://BSXGglobal.io/refer-register/U0JHNjc3MDAx</span>
                        <a href="#"><i class="fa fa-link refre-link-color" onclick="copyReferLink()" style={{
                           color: "#0000bc",
                           fontSize: "20px",
                           background: " gray",
                           padding: "10px",
                           borderRadius: "50%"
                        }}
                        ></i></a>
                        <a href="#" target="_blank"><i class="fa-brands fa-whatsapp refer-whatsapp-color" style={{
                           color: "#25D366",
                           fontSize: "20px",
                           background: " gray",
                           padding: "10px",
                           borderRadius: "50%",
                           margin: "0px 20px",
                        }}></i></a>
                        <a target="_blank" href="#"><i class="fa fa-telegram refer-telegram-color" style={{
                           color: "#00acee",
                           fontSize: "20px",
                           background: " gray",
                           padding: "10px",
                           borderRadius: "50%"
                        }}></i></a>
                     </div>

                     <div class="progress progress-md" style={{ height: "35px", marginTop: "15px", marginBottom: "15px" }}>
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-green" style={{ backgroundColor: " green", width: "0%" }}>
                           <small class=" position-absolute w-100" style={{ fontSize: "20px", fontWeight: " 700", color: "#000", display: "flex", justifyContent: "end" }}>
                              <span style={{ fontSize: "20px", marginRight: "10px" }}>3X</span> 0 %</small>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="row">
                  <div class="col-xxl-12 col-xl-12 table-head-align d-none d-sm-block">
                     <div class="row" style={{ justifyContent: "center" }}>
                        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{ width: " max-content" }}>
                           <div class="process__item">
                              <a href="#">
                                 <div class="process__icon">
                                    <span><img src="/Images/buy_sell_icon/profile-acc.png" alt="" class="icon-size" /></span>
                                 </div>
                              </a>
                              <div class="process__content">
                                 <p class="icon-name menu-title-p menu-title-p-active">Profile</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{ width: " max-content" }}>
                           <div class="process__item">
                              <a href="#">
                                 <div class="process__icon">
                                    <span><img src="/Images/buy_sell_icon/profile-image-acc.png" alt="" class="icon-size" /></span>
                                 </div>
                              </a>
                              <div class="process__content">
                                 <p class="icon-name menu-title-p">Profile Image</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{ width: " max-content" }}>
                           <div class="process__item">
                              <a href="#">
                                 <div class="process__icon">
                                    <span><img src="/Images/buy_sell_icon/user-kyc-acc.png" alt="" class="icon-size" /></span>
                                 </div>
                              </a>
                              <div class="process__content">
                                 <p class="icon-name menu-title-p">User KYC</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{ width: " max-content" }}>
                           <div class="process__item">
                              <a href="#">
                                 <div class="process__icon">
                                    <span><img src="/Images/buy_sell_icon/password-change-acc.png" alt="" class="icon-size" /></span>
                                 </div>
                              </a>
                              <div class="process__content">
                                 <p class="icon-name menu-title-p">Change Password</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{ width: " max-content" }}>
                           <div class="process__item">
                              <a href="#">
                                 <div class="process__icon">
                                    <span><img src="/Images/buy_sell_icon/dubai-expo-green.png" alt="" class="icon-size" /></span>
                                 </div>
                              </a>
                              <div class="process__content">
                                 <p class="icon-name menu-title-p">Dubai Crypto<br />Expo Form</p>
                              </div>
                           </div>
                        </div>





                     </div>
                  </div>
               </div>

               <center>
                  <div class="row d-lg-none d-sm-none" style={{ marginLeft: "5px" }}>
                     <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: " max-content" }}>
                        <div class="process__item">
                           <a href="#">
                              <div class="process__icon">
                                 <span><img src="/Images/buy_sell_icon/profile-acc.png" alt="" class="icon-size" /></span>
                              </div>
                           </a>
                           <div class="process__content">
                              <p class="icon-name menu-title-p menu-title-p-active">Profile</p>
                           </div>
                        </div>
                     </div>
                     <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: " max-content" }}>
                        <div class="process__item">
                           <a href="#">
                              <div class="process__icon">
                                 <span><img src="/Images/buy_sell_icon/profile-image-acc.png" alt="" class="icon-size" /></span>
                              </div>
                           </a>
                           <div class="process__content">
                              <p class="icon-name menu-title-p">profile Image</p>
                           </div>
                        </div>
                     </div>
                     <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: " max-content" }}>
                        <div class="process__item">
                           <a href="#">
                              <div class="process__icon">
                                 <span><img src="/Images/buy_sell_icon//user-kyc-acc.png" alt="" class="icon-size" /></span>
                              </div>
                           </a>
                           <div class="process__content">
                              <p class="icon-name menu-title-p">User KYC</p>
                           </div>
                        </div>
                     </div>
                     <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: " max-content" }}>
                        <div class="process__item">
                           <a href="#">
                              <div class="process__icon">
                                 <span><img src="/Images/buy_sell_icon/password-change-acc.png" alt="" class="icon-size" /></span>
                              </div>
                           </a>
                           <div class="process__content">
                              <p class="icon-name menu-title-p">Change Password</p>
                           </div>
                        </div>
                     </div>
                     <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: " max-content" }}>
                        <div class="process__item">
                           <a href="#">
                              <div class="process__icon">
                                 <span><img src="/Images/buy_sell_icon/dubai-expo-green.png" alt="" class="icon-size" /></span>
                              </div>
                           </a>
                           <div class="process__content">
                              <p class="icon-name menu-title-p">Dubai Crypto<br />Expo Form</p>
                           </div>
                        </div>
                     </div>


                  </div>
               </center>
               <hr style={{ color: "#282727" }} />

               <div class="col-xxl-12 col-lg-12">
                  <div class="profile__tab-content">
                     <div class="tab-content" id="profile-tabContent">
                        <div class="tab-pane fade show active" id="nav-information" role="tabpanel" aria-labelledby="nav-information-tab">
                           <div class="profile__info">
                              <h3 class="profile__info-title">Welcome - Vipin!</h3>

                              <div class="profile__info-content  update-profile-form">
                                 <form method="POST" action="/Images/buy_sell_icon/update-profile" accept-charset="UTF-8" id="profile-update-form"><input name="_token" type="hidden" value="iIMwAX6VRvcDshZMllwGhc0bMwDnVx6W2e2sa1Wa" />
                                    <input type="hidden" name="otp" class="update-profile" value="null" />
                                    <input type="hidden" name="page_on" value="account" />
                                    <div class="row">
                                       <div class="col-xxl-6 col-md-6">
                                          <div class="profile__input-box">
                                             <h4>User Name</h4>
                                             <div class="profile__input">
                                                <input className='account_page_input' type="text" placeholder="Enter first name" value="Vipin kumar" name="first_name" disabled="" />
                                                <input type="hidden" class="form-control" value="" name="last_name" />
                                                <small class="text-danger"></small>
                                                <i class="fa fa-user"></i>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="col-xxl-6 col-md-6">
                                          <div class="profile__input-box">
                                             <h4>Email</h4>
                                             <div class="profile__input">
                                                <input className='account_page_input' type="email" placeholder="Enter your email" value="vipinatraura@gmail.com" name="email" style={{ backgroundColor: "white" }} />
                                                <i class="fa fa-envelope"></i>
                                                <small class="text-danger"></small>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="col-xxl-6 col-md-6">
                                          <div class="profile__input-box">
                                             <h4>Mobile No.</h4>
                                             <div class="profile__input">
                                                <input className='account_page_input' type="text" placeholder="Enter your number" value="8787257693" name="mobile" style={{ backgroundColor: "white" }} />
                                                <i class="fa fa-phone"></i>
                                                <small class="text-danger"></small>
                                             </div>
                                          </div>
                                       </div>


                                       <div class="col-xxl-6 col-md-6">
                                          <div class="profile__input-box">
                                             <h4>Facebook Profile/Page URL</h4>
                                             <div class="profile__input">
                                                <input className='account_page_input' type="text" placeholder="Enter URL" value="" name="fb_url" style={{ backgroundColor: "white" }} />
                                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                                <small class="text-danger"></small>
                                             </div>
                                          </div>
                                       </div>

                                       <div class="col-xxl-6 col-md-6">
                                          <div class="profile__input-box">
                                             <h4>Instagram Profile/Page URL</h4>
                                             <div class="profile__input">
                                                <input className='account_page_input' type="text" placeholder="Enter URL" value="" name="insta_url" style={{ backgroundColor: "white" }} />
                                                <i class="fa fa-instagram"></i>
                                                <small class="text-danger"></small>
                                             </div>
                                          </div>
                                       </div>

                                       <div class="col-xxl-6 col-md-6">
                                          <div class="profile__input-box">
                                             <h4>Twitter Profile/Page URL</h4>
                                             <div class="profile__input">
                                                <input className='account_page_input' type="text" placeholder="Enter URL" value="" name="tw_url" style={{ backgroundColor: "white" }} />
                                                <i class="fa fa-twitter"></i>
                                                <small class="text-danger"></small>
                                             </div>
                                          </div>
                                       </div>



                                       <div class="col-xxl-6 col-md-6">
                                          <div class="profile__input-box">
                                             <h4>Select OTP Mode</h4>
                                             <div class="profile__input">
                                                <select class="form-control" name="otp_mode">
                                                   <option value="" disable="" selected="" hidden="">Select OTP Mode </option>
                                                   <option value="mobile">Mobile</option>
                                                   <option value="email">OTP on Email</option>
                                                </select>
                                                <small class="text-danger otp_mode"></small>
                                             </div>
                                          </div>
                                       </div>

                                       <div class="col-xxl-12" style={{ margin: "20px 0px " }}>
                                          <div class="profile__btn">
                                             <button class="tp-btn-3 with_otp_btn" type="button" onclick="sendOtp()">Update</button>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                              <center>
                                 <div class="otp-form" style={{ display: "none" }}>
                                    <div class="col-xxl-6 col-lg-6">
                                       <div class="card" style={{ border: "blanchedalmond" }}>
                                          <div class="card-body" style={{ background: "linear-gradient(45deg, #1f2732 , #1e2530)" }}>
                                             <label class="label-control" style={{ color: " white" }}>Enter your 6 digit OTP</label>
                                             <form method="post" action="" id="otp-form">
                                                <input type="hidden" name="_token" value="iIMwAX6VRvcDshZMllwGhc0bMwDnVx6W2e2sa1Wa" />
                                                <div class="form-group">
                                                   <input type="hidden" class="form-control" name="mobile" id="mobile_num1" value="" />
                                                </div>
                                                <div class="otp-input-field">
                                                   <input type="text" class="form-control" id="otpBox1" name="otpBox1" value="" placeholder="Enter OTP" />
                                                   <small class="text-danger"></small>
                                                   <center><small class="text-danger codeBoxError" style={{ fontSize: "16px" }}></small></center>
                                                   <div class="col-md-12 mb-4 resend-otp-timer">
                                                      <div class="form-group otp-timer text-center">
                                                         <p class="text-center bg-danger p-1" style={{ borderRadius: "20px" }}>Resend OTP? Wait: <span class="timer"></span> seconds</p>
                                                      </div>
                                                   </div>
                                                   <div class="registration-form-account send-otp-btn">
                                                      <p class="registration-form-account-para-tag">Didn't get OTP? <input type="button" value="Resend OTP" class="btn btn-success registration-form-signin-button resend-otp-btn" onclick="sendOtp()" /></p>
                                                   </div>
                                                   <button class="custom-btn btn-12 with_otp_btn" type="button" onclick="verifyOtp()" id="activation_btn_otp"><span>Submit</span></button>

                                                </div></form>
                                          </div>
                                       </div>
                                    </div>
                                 </div></center>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}