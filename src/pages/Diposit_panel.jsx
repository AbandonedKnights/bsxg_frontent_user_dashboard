import React, {useEffect, useState} from 'react'
import MyNavbar from '../components/MyNavbar'
import {api_test} from "../utils/api";
import { useSelector } from "react-redux";
import { add, div } from '../utils/Math';
import QRCode from "react-qr-code";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';

export default function Diposit_panel() {
   const { isLoggedIn } = useSelector((state) => state?.user?.value);
   const { userInfo } = useSelector((state) => state?.user?.value);
	const user_id = userInfo.user_id;
   const [coin, setCoin] = useState();
   const [packages, setPackages] = useState();
   const [coindata, setCoinData] = useState();
   const [walletAddress, setWalletAddress] = useState();
   const [depositBalance, setDepositBalance] = useState();
   const [depositCoin, setDepositCoin] = useState("none");
   const [copied, setCopied] = useState(false);
   const [PackageData, setPackageData] = useState();
   const navigate = useNavigate();
   useEffect(() => {
		if (!isLoggedIn) {
			console.log("iw::", isLoggedIn);
			navigate("../", { replace: true });
		}
	}, [isLoggedIn]);
   useEffect(()=>{
		api_test
		.post("get-deposit-details")
		.then((res) => {
		  let data =res.data; 
		  if(data.status == 200){
         setCoin(data.params.coin)
         setPackages(data.params.packages_data)
		  }
		  
		})
		.catch((error) => {
		  console.log("user", error);
		})
      api_test
		.post("get-price")
		.then((res) => {
		  let data =res.data; 
		  if(data.status == 200){
         setCoinData(data.coins)
		  }
		  
		})
		.catch((error) => {
		  console.log("user", error);
		})
	  }, [])
     useEffect(()=>{
      api_test
		.post("update-wallet",{user_id})
		.then((res) => {
		  let data =res.data; 
        console.log("updateWallet",data)		  
		})
		.catch((error) => {
		  console.log("user", error);
		})
     }, [])
      const coinlist = coin && coin.map((item) => {
         if (item.symbol !== "BabyDoge" && item.symbol !== 'SHIB') {
           return (
             <>
             <option value={item.symbol}>{item.symbol} </option>
             </>
           );
         }
       });
       const packagelist = depositCoin != 'none' && packages && packages.map((item) => {
           return (
             <>
             <option value={item.amount}>{item.amount}{" BSXG "}{item.name}</option>
             </>
           );
       });
       const coins = coindata && coindata.map((item) => {
         return (
           <>
          <img src={item.icon} class="img-circle user-img-circle achievers-logo" alt="Profile Photo"
											style={{ height: "20px", marginTop: "5px" }} />
									 <span>	{item.symbol}<b>{item.current_price_usdt} $</b></span>
           </>
         );
     });
     const fetchWallet = (symbol) => {
      let data = {
         user_id, 
         symbol
      }
      api_test
		.post("create-wallets-user", data)
		.then((res) => {
		  let data =res.data; 
		  if(data.status == 200){
         setWalletAddress(data.wallet_address);
         setDepositCoin(symbol=='USDT'?'USDT TRC20':symbol)
         let coinprice = coindata && coindata.find((item)=>item.symbol==symbol);
         let price = symbol == 'USDT'?1:coinprice.current_price_usdt;
         let bal = div(PackageData, price);
         setDepositBalance(bal)
		  }
		  
		})
		.catch((error) => {
		  console.log("user", error);
		})
     }
     const calculatBalance = (pack) => {
      let fee = add(pack,2);
      setPackageData(fee);
      let coinprice = coindata && coindata.find((item)=>item.symbol==depositCoin);
      let price = depositCoin == 'USDT TRC20'?1:coinprice.current_price_usdt;
      let bal = div(fee, price);
      setDepositBalance(bal); 
     }
  return (
    <>
    <MyNavbar/>
 <section class="nft__area pt-100 pb-25">
   <div class="container">
      <div class="row">
         <div class="col-xxl-12 col-xl-12 table-head-align d-none d-sm-block d-sm-none d-md-block">
             <div class="row" style={{justifyContent: "space-around"}}>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 lg-menu" style={{width: "max-content"}}>
               <div class="process__item active">
                  <a href="#">
                     <div class="process__icon">
                        <span><img src="/images/buy_sell_icon/deposit-inside.png" alt="" class="icon-size"/></span>
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
                        <span><img src="/images/buy_sell_icon/deposit-report.png" alt="" class="icon-size"/></span>
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
         <div class="row d-lg-none d-sm-none" style={{marginLeft: "5px",display: "flex",
    justifyContent: "space-around"}}>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content "}}>
               <div class="process__item active">
                  <a href="#">
                     <div class="process__icon">
                        <span><img src="/images/buy_sell_icon/deposit-inside.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p menu-title-p-active">Deposit<br/>Panel</p>
                  </div>
               </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content"}}>
               <div class="process__item">
                  <a href="#">
                     <div class="process__icon">
                        <span><img src="/images/buy_sell_icon/deposit-report.png" alt="" class="icon-size"/></span>
                     </div>
                  </a>
                  <div class="process__content">
                     <p class="icon-name menu-title-p">Deposit<br/>Report</p>
                  </div>
               </div>
            </div>
            
            
         </div>
      </center>
      <hr style={{color: "#282727"}}/>
      
                <div class="alert blinking" style={{textAlign: "center",fontSize: '20px',fontWeight: "600"}}>
                    <strong class="blink">How to Create Deposit tutorial </strong>
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
                           <img src="/images/coins/trx-coin.png"/>
                           <img src="/images/coins/usdt-coin.png"/>
                           <img src="/images/coins/bnb-coin.png"/>
                           <img src="/images/coins/eth-coin.png"/><br/>
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
                                          <div class="col-md-5"
                                          style={{background:" #0c1939",
                                                padding: "10px",
                                                borderRadius: "5px"}}>
                                             <div class="form-group">
                                                <label class="col-md-3 control-label" for="selectbasic" style={{color: "white"}}>Select Coin</label>
                                                <div class="col-md-12">
                                                   <select class="form-control" name="coin_name" onChange={(e)=>{
                                                      fetchWallet(e.target.value);
                                                   }}>
                                                      <option disabled="disabled" selected="selected">Select Coin</option>
                                                      {coinlist}
																										   
												   </select>
                                                   <small class="text-danger "></small>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="col-md-2"></div>
                                          <div class="col-md-5"
                                          style={{background:" #0c1939",
                                                padding: "10px",
                                                borderRadius: "5px"}}>
                                             <div class="form-group">
                                                <label class="col-md-3 control-label" for="selectbasic" style={{color: "white"}}>Select Package</label>
                                                <div class="col-md-12">
                                                   <select class="form-control" name="pack_name" onChange={(e)=>{
                                                      calculatBalance(e.target.value);
                                                   }}>
                                                      <option disabled="disabled" selected="selected">Select BSXG Packages</option>
                                                      {packagelist}
																	</select>
                                                   <small class="text-danger "></small>
                                                </div>
                                             </div>
                                          </div>
                                          {/* <div class="col-md-4" id="amount"
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
                                          </div> */}
                                       </div>
                                       <br/>
                                       <h5><span style={{color:"red"}}>Note :</span> <strong class="deposit-h5-color" style={{color:"black"}}>On final transaction please send amount including network fee.</strong></h5>
                                       <div class="frame">
                                          <center>
                                             <div class="image">
                                                <img src="/images/buy_sell_icon/deposit-bottom.png" style={{width: "25%"}}/><br/>
                                                <span>
                                                <button class="btn btn-warning show-modal btn-toggle-modal"
         type="button" data-bs-toggle="modal" data-bs-target="#info-msg-modal"
         style={{ margin: "0px" }} id="deposit_btn">Deposit
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
                        {/* <center>
                       
                           <h1 style={{color:"black"}}>Upcoming BSXG Wallet</h1>
                           
                        </center>
                        <br/>
                        <center style={{display: "flex",
                       justifyContent: "center"}}>
                        <img src="/images/coins/bnb-coin.png" style={{ height: "63px", width: "63px" }} />
                        <img src="/images/coins/btc-coin.png" style={{ height: "63px", width: "63px" }} />
                       <img src="/images/coins/eth-coin.png"style={{ height: "63px", width: "63px" }}  />
                       
                    </center> */}
                        <br/><br/>
                        <section class="section-spacing" >
				<div class="container " style={{
					borderTop: "1px solid gray",
					borderBottom: "1px solid gray"
				}}>
					<div class="row align-items-center">
						<div class="col-md-12 col-lg-12">
							<div class="position-relative marquee-container d-none d-sm-block">
								<div class="marquee d-flex justify-content-around">
									
										{coins}
								</div>

							</div>
						</div>

					</div>


				</div>
			</section>
         <br />
         <br />
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </div>

    <div class="modal fade pop-up-modal" id="info-msg-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0">
            <div class="modal-header">
                  <h2 style={{color:"#ffbd49",fontWeight: "600", textAlign: "center"}}>Deposit Info</h2>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
                  {depositBalance && depositCoin && walletAddress ?
                  <div class="modal-body ">
                     <p class="modal-title" id="exampleModalLabel">
                        Send to your Secure Address
                     </p> <hr />
                     <strong>Total Amount to Send :{" "}{depositBalance}{" "}{depositCoin}</strong>
                     <hr />
                     <div className="container">
                        <div className="">
                        <label htmlFor="coin_address">
                           Destination Address :
                        </label>{" "}
                        <br />
                        <CopyToClipboard
                           text={walletAddress}
                           onCopy={() => setCopied({ copied: true })}
                        >
                           {copied ? (
                              <span className="cop_btn text-success">
                              <span>{walletAddress}</span>
                              <span className="mx-1">Copied</span>
                              </span>
                           ) : (
                              <span className="cop_btn theme-color-text">
                              <span>
                                 {walletAddress}
                                 <span className="mx-1">
                                    {" "}
                                    <i
                                    className="fas fa-copy"
                                    aria-hidden="true"
                                    ></i>
                                 </span>
                              </span>
                              </span>
                           )}
                        </CopyToClipboard>
                        </div>
                        <hr />
                        <QRCode value={walletAddress?walletAddress:''} />
                        <div className="signupform-control">
                        <div className="text-danger">
                           <i
                              className="fas fa-warning"
                              aria-hidden="true"
                           ></i>{" "}
                           Disclaimer
                        </div>
                        <hr className="h_r" />
                        <label htmlFor="disclaimer">
                           Please Deposit only {depositCoin}{" "}
                           to this address. If you Deposit any other
                           coins, It will be lost forever.
                        </label>
                        </div>
                     </div>
                     <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"> FINISH</button>
                  </div>:
                   <div class="modal-body">
                   <p class="modal-title" id="exampleModalLabel">
                     <div class="alert alert-info" role="alert">
                        Please select coin for deposit and package
                        </div>
                   </p>
                </div>}
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
