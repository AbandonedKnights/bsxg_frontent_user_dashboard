import React, { useEffect, useState } from 'react'
import MyNavbar from '../components/MyNavbar'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Invite from './Invite';
import { api_test } from '../utils/api';

const Home = () => {
	const { isLoggedIn } = useSelector((state) => state?.user?.value);
	const { userInfo } = useSelector((state) => state?.user?.value);
	const user_id = userInfo.user_id;
	const [coindata, setCoinData] = useState();
	const navigate = useNavigate();
	useEffect(() => {
		if (!isLoggedIn) {
			console.log("iw::", isLoggedIn);
			navigate("../", { replace: true });
		}
	}, [isLoggedIn]);
	useEffect(() => {
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
  const coins = coindata && coindata.map((item) => {
	return (
	  <>
	 <img src={item.icon} class="img-circle user-img-circle achievers-logo" alt="Profile Photo"
									   style={{ height: "20px", marginTop: "5px" }} />
								<span>	{item.symbol}<b>{item.current_price_usdt} $</b></span>
	  </>
	);
});

	return (
		<div>
			<MyNavbar />
			<section id="home" class="no-spacing grad">
				<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
					<div class="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

					</div>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="./images/banner/banner1.png" class="d-block  w-100 dash_banner dash-1" alt="..." />
						</div>
						<div class="carousel-item">
							<img src="./images/banner/banner2.jpg" class="d-block w-100 dash_banner" alt="..." />
						</div>
						<div class="carousel-item">
							<img src="./images/banner/banner_3.jpg" class="d-block w-100 dash_banner" alt="..." />
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>

			</section>
			{/* notice section  */}
			<section>
				<div class="position-relative marquee-container d-none d-sm-block">
					<div class="marquee marquee2 d-flex justify-content-around">
						<span>Users will get only 90BSXG in a plan package of 50BSXG and users got 150BSXG extra funds of Old Pakages maybe the fund has been deducted.</span>

					</div>
				</div>
			</section>
			<section >
				<div class="container">
					<div class=" menu-center row">
						<Invite />
						<div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: "max-content" }}>
							<a href="/activation">
								<div class="process__item mb-10">
									<div class="process__icon mb-2 item_text" style={{ justifyContent: "center", display: "flex" }}>
										<img src="./images/buy_sell_icon/activation-new.png" alt="" class="icon-size" />
									</div>
									<div class="process__content">
										<p class="icon-name">Activation</p>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: "max-content" }}>
							<a href="/restake">
								<div class="process__item mb-10">
									<div class="process__icon mb-2 item_text" style={{ justifyContent: "center", display: "flex" }}>
										<img src="./images/buy_sell_icon/restake-new.png" alt="" class="icon-size" />
									</div>
									<div class="process__content">
										<p class="icon-name">Restake</p>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: "max-content" }}>
							<Link to="../Diposit_panel">
								<div class="process__item mb-10 item_text">
									<div class="process__icon mb-2" style={{ justifyContent: "center", display: "flex" }}>
										<img src="./images/buy_sell_icon/deposit-new.png" alt="" class="icon-size" />
									</div>
									<div class="process__content">
										<p class="icon-name">Deposit</p>
									</div>
								</div>
							</Link>
						</div>
						<div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: "max-content" }}>
							<a href="/withdrawal_panel">
								<div class="process__item mb-10 item_text">
									<div class="process__icon mb-2" style={{ justifyContent: "center", display: "flex" }}>
										<img src="./images/buy_sell_icon/withdrawal-new.png" alt="" class="icon-size" />
									</div>
									<div class="process__content">
										<p class="icon-name">Withdraw</p>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: "max-content" }}>
							<a href="/tree">
								<div class="process__item mb-10">
									<div class="process__icon mb-2 item_text" style={{ justifyContent: "center", display: "flex" }}>
										<img src="./images/buy_sell_icon/treeview-new.png" alt="" class="icon-size" />
									</div>
									<div class="process__content">
										<p class="icon-name">Tree View</p>
									</div>
								</div>
							</a>
						</div>
						<div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{ width: "max-content" }}>
							<a href="/wallet_transfer">
								<div class="process__item mb-10">
									<div class="process__icon mb-2 item_text" style={{ justifyContent: "center", display: "flex" }}>
										<img src="./images/buy_sell_icon/wallettransfer-new.png" alt="" class="icon-size" />
									</div>
									<div class="process__content">
										<p class="icon-name">Wallet Transfer</p>
									</div>
								</div>
							</a>
						</div>

						

					</div>
				</div>
			</section>

			{/* <section>
				<div class="row col-lg-11 m-auto">
					<div class="col-sm-2 home_card_container">
						<Link to="#">
							<div class="card home_card">
								<div class="card-body home_card_body">
									<p class="card-text" style={{margin:"0px"}}>
										<img
											src="/images/Funds/invite.png"
											style={{ height: "50px",display:"flex",margin:"auto"}}
											alt=" img not found"
										/>
									</p>

									<h4 class="icon-name" style={{textAlign:"center"}}>Activation</h4>

								</div>

							</div>
						</Link>
					</div>
					<div class="col-sm-2 home_card_container">
						<Link to="#">
							<div class="card home_card">
								<div class="card-body home_card_body">
									<p class="card-text" style={{margin:"0px"}}>
										<img
											src="/images/Funds/invite.png"
											style={{ height: "50px",display:"flex",margin:"auto"}}
											alt=" img not found"
										/>
									</p>

									<h4 class="icon-name" style={{textAlign:"center"}}>Restake</h4>

								</div>

							</div>
						</Link>
					</div>
					<div class="col-sm-2 home_card_container">
						<Link to="#">
							<div class="card home_card">
								<div class="card-body home_card_body">
									<p class="card-text" style={{margin:"0px"}}>
										<img
											src="/images/Funds/invite.png"
											style={{ height: "50px",display:"flex",margin:"auto"}}
											alt=" img not found"
										/>
									</p>

									<h4 class="icon-name" style={{textAlign:"center"}}>Deposit
</h4>

								</div>

							</div>
						</Link>
					</div>
					<div class="col-sm-2 home_card_container">
						<Link to="#">
							<div class="card home_card">
								<div class="card-body home_card_body">
									<p class="card-text" style={{margin:"0px"}}>
										<img
											src="/images/Funds/invite.png"
											style={{ height: "50px",display:"flex",margin:"auto"}}
											alt=" img not found"
										/>
									</p>

									<h4 class="icon-name" style={{textAlign:"center"}}>Activation</h4>

								</div>

							</div>
						</Link>
					</div>
					
					<div class="col-sm-2 home_card_container">
						<Link to="#">
							<div class="card home_card">
								<div class="card-body home_card_body">
									<p class="card-text" style={{margin:"0px"}}>
										<img
											src="/images/Funds/invite.png"
											style={{ height: "50px",display:"flex",margin:"auto"}}
											alt=" img not found"
										/>
									</p>

									<h4 class="icon-name" style={{textAlign:"center"}}>Activation</h4>

								</div>

							</div>
						</Link>
					</div>
					<div class="col-sm-2 home_card_container">
						<Link to="#">
							<div class="card home_card">
								<div class="card-body home_card_body">
									<p class="card-text" style={{margin:"0px"}}>
										<img
											src="/images/Funds/invite.png"
											style={{ height: "50px",display:"flex",margin:"auto"}}
											alt=" img not found"
										/>
									</p>

									<h4 class="icon-name" style={{textAlign:"center"}}>Activation</h4>

								</div>

							</div>
						</Link>
					</div>
				</div>
			</section> */}

			{/* <section class="process__area pt-0 pb-0">
            <div class="container">
               <div class="row">
                  <div class="col-md-3 activity-width">
                     <div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
                        <div class="activity__item-inner d-flex align-items-center">
                           <div class="activity__thumb mr-20">
                              <a href="#">
                              <img src="https://sbgglobal.io/sbg-assets-dashboard/img/activity/baby-doge.png" alt=""/>
                              </a>
                           </div>
                           <div class="activity__content">
                              <h3 class="activity__title">
                                 <a href="#">Baby Doge</a>
                              </h3>
                              <p><span id="baby_doge_amount" style="color:#3771fe;">0 </span> <i class="fa fa-eye eye-color baby_doge_eye" aria-hidden="true"></i> </p>
                           </div>
                           <a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style={{fontSize: "150%",marginLeft: "20px"}}></i></a>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-3 activity-width">
                     <div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
                        <div class="activity__item-inner d-flex align-items-center">
                           <div class="activity__thumb mr-20">
                              <a href="#">
                              <img src="https://sbgglobal.io/sbg-assets-dashboard/img/activity/shiba-inu.png" alt=""/>
                              </a>
                           </div>
                           <div class="activity__content">
                              <h3 class="activity__title">
                                 <a href="#">Shiba Inu</a>
                              </h3>
                              <p><span id="shiba_amount" style="color:#3771fe;">0 </span> <i class="fa fa-eye eye-color shiba_eye" aria-hidden="true"></i> </p>
                           </div>
                           <a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style="font-size: 150%;margin-left: 20px;"></i></a>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-3 activity-width">
                     <div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
                        <div class="activity__item-inner d-flex align-items-center">
                           <div class="activity__thumb mr-20">
                              <img src="https://sbgglobal.io/sbg-assets-dashboard/img/activity/upcoming-reward.png" alt=""/>
                           </div>
                           <div class="activity__content">
                              <h3 class="activity__title">
                                 <p style="font-size: 17px; color: #0c1939;line-height: 1.2;">Upcoming Rewards</p>
                              </h3>
                              <p><span id="reward_amount" style="color:#3771fe;">0  </span><strong style="color: #000;font-weight: 500;"> SBG</strong> <i class="fa fa-eye eye-color upcoming_reward_eye" aria-hidden="true"></i> </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-3 modal-for-income activity-width">
                     <div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
                        <div class="activity__item-inner d-flex align-items-center">
                           <div class="activity__thumb mr-20">
                              <img src="https://sbgglobal.io/sbg-assets-dashboard/img/activity/today-earning.png" alt=""/>
                           </div>
                           <div class="activity__content">
                              <h3 class="activity__title">
                                 <a href="javascript: void(0)" class="todayIncomeModal">Today's Earning</a>
                              </h3>
                              <p><a href="javascript: void(0)" id="today_amount">0</a> <strong style="color: #000;font-weight: 500;">SBG</strong> <i class="fa fa-eye eye-color today_earn_eye" aria-hidden="true"></i></p>
                           </div>
                           <a href="javascript: void(0)" class="todayIncomeModal"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style="font-size: 150%;margin-left: 20px;"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section> */}
			<section>
				{/* <div class="col-md-2 activity-width">
					<div class="activity__item d-md-flex align-items-center justify-content-between mb-8 bg-box">
						<div class="activity__item-inner d-flex align-items-center">
							<div class="activity__thumb mr-20">
								<a href="#">
									<img src="https://sbgglobal.io/sbg-assets-dashboard/img/activity/baby-doge.png" alt="" />
								</a>
							</div>
							<div class="activity__content">
								<h3 class="activity__title">
									<a href="#">Baby Doge</a>
								</h3>
								<p><span id="baby_doge_amount"
									style={{ color: "#3771fe" }}>0 </span> <i class="fa fa-eye eye-color baby_doge_eye" aria-hidden="true"></i> </p>
							</div>
							<a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style={{ fontSize: "150%", marginLeft: "20px" }}></i></a>
						</div>
					</div>
				</div> */}
				<div class="row min_card">
					<div class="col-sm-4 all-wallet">
						<div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
							<div class="activity__item-inner d-flex align-items-center">
								<div class="activity__thumb mr-20">
									<a href="#">
										<img src="./images/coins/baby-doge.png" alt="" />
									</a>
								</div>
								<div class="activity__content">
									<h3 class="activity__title">
										<a href="#">Baby Doge</a>
									</h3>
									<p><span id="baby_doge_amount" style={{ color: "white" }}>0 </span> <i class="fa fa-eye eye-color baby_doge_eye" aria-hidden="true"></i> </p>
								</div>
								<a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style={{ fontSize: "150%", marginLeft: "20px" }}></i></a>
							</div>
						</div>
					</div>

					<div class="col-sm-4 all-wallet">
						<div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
							<div class="activity__item-inner d-flex align-items-center">
								<div class="activity__thumb mr-20">
									<a href="#">
										<img src="./images/coins/shiba-inu.png" alt="" />
									</a>
								</div>
								<div class="activity__content">
									<h3 class="activity__title">
										<a href="#">Shiba Inu</a>
									</h3>
									<p><span id="baby_doge_amount" style={{ color: "white" }}>0 </span> <i class="fa fa-eye eye-color baby_doge_eye" aria-hidden="true"></i> </p>
								</div>
								<a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style={{ fontSize: "150%", marginLeft: "20px" }}></i></a>
							</div>
						</div>
					</div>
					<div class="col-sm-4 all-wallet">
						<div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
							<div class="activity__item-inner d-flex align-items-center">
								<div class="activity__thumb mr-20">
									<a href="#">
										<img src="./images/coins/upcoming-reward.png" alt="" />
									</a>
								</div>
								<div class="activity__content">
									<h3 class="activity__title">
										<a href="#">Up Rewards</a>
									</h3>
									<p><span id="baby_doge_amount" style={{ color: "white" }}>0 </span> <i class="fa fa-eye eye-color baby_doge_eye" aria-hidden="true"></i> </p>
								</div>
								<a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style={{ fontSize: "150%", marginLeft: "20px" }}></i></a>
							</div>
						</div>
					</div>
					<div class="col-sm-4 all-wallet">
						<div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
							<div class="activity__item-inner d-flex align-items-center">
								<div class="activity__thumb mr-20">
									<a href="#">
										<img src="./images/coins/today-earning.png" alt="" />
									</a>
								</div>
								<div class="activity__content">
									<h3 class="activity__title">
										<a href="#">Today's Earning</a>
									</h3>
									<p><span id="baby_doge_amount" style={{ color: "white" }}>0 </span> <i class="fa fa-eye eye-color baby_doge_eye" aria-hidden="true"></i> </p>
								</div>
								<a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style={{ fontSize: "150%", marginLeft: "20px" }}></i></a>
							</div>
						</div>
					</div>
					<div class="col-sm-4 all-wallet">
						<div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
							<div class="activity__item-inner d-flex align-items-center">
								<div class="activity__thumb mr-20">
									<a href="#">
										<img src="./images/coins/reward-2.png" alt="" />
									</a>
								</div>
								<div class="activity__content">
									<h3 class="activity__title">
										<a href="#">Total Earning</a>
									</h3>
									<p><span id="baby_doge_amount" style={{ color: "white" }}>0 </span> <i class="fa fa-eye eye-color baby_doge_eye" aria-hidden="true"></i> </p>
								</div>
								<a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style={{ fontSize: "150%", marginLeft: "20px" }}></i></a>
							</div>
						</div>
					</div>
					<div class="col-sm-4 all-wallet">
						<div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
							<div class="activity__item-inner d-flex align-items-center">
								<div class="activity__thumb mr-20">
									<a href="#">
										<img src="./images/coins/avl-balance.png" alt="" />
									</a>
								</div>
								<div class="activity__content">
									<h3 class="activity__title">
										<a href="#">Reward Balance</a>
									</h3>
									<p><span id="baby_doge_amount" style={{ color: "white" }}>0 </span> <i class="fa fa-eye eye-color baby_doge_eye" aria-hidden="true"></i> </p>
								</div>
								<a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style={{ fontSize: "150%", marginLeft: "20px" }}></i></a>
							</div>
						</div>
					</div>
					<div class="col-sm-4 all-wallet">
						<div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
							<div class="activity__item-inner d-flex align-items-center">
								<div class="activity__thumb mr-20">
									<a href="#">
										<img src="./images/coins/activation-balance.png" alt="" />
									</a>
								</div>
								<div class="activity__content">
									<h3 class="activity__title">
										<a href="#">Active Balance</a>
									</h3>
									<p><span id="baby_doge_amount" style={{ color: "white" }}>0 </span> <i class="fa fa-eye eye-color baby_doge_eye" aria-hidden="true"></i> </p>
								</div>
								<a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style={{ fontSize: "150%", marginLeft: "20px" }}></i></a>
							</div>
						</div>
					</div>
					<div class="col-sm-4 all-wallet">
						<div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
							<div class="activity__item-inner d-flex align-items-center">
								<div class="activity__thumb mr-20">
									<a href="#">
										<img src="./images/coins/hold-wallet.png" alt="" />
									</a>
								</div>
								<div class="activity__content">
									<h3 class="activity__title">
										<a href="#">Hold Wallet</a>
									</h3>
									<p><span id="baby_doge_amount" style={{ color: "white" }}>0 </span> <i class="fa fa-eye eye-color baby_doge_eye" aria-hidden="true"></i> </p>
								</div>
								<a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style={{ fontSize: "150%", marginLeft: "20px" }}></i></a>
							</div>
						</div>
					</div>
					<div class="col-sm-4 all-wallet">
						<div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
							<div class="activity__item-inner d-flex align-items-center">
								<div class="activity__thumb mr-20">
									<a href="#">
										<img src="./images/coins/total-portfolios-new.png" alt="" />
									</a>
								</div>
								<div class="activity__content">
									<h3 class="activity__title">
										<a href="#">Total Portfolio</a>
									</h3>
									<p><span id="baby_doge_amount" style={{ color: "white" }}> 0 </span> <i class="fa fa-eye eye-color baby_doge_eye" aria-hidden="true"></i> </p>
								</div>
								<a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style={{ fontSize: "150%", marginLeft: "20px" }}></i></a>
							</div>
						</div>
					</div>
					<div class="col-sm-4 all-wallet">
						<div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
							<div class="activity__item-inner d-flex align-items-center">
								<div class="activity__thumb mr-20">
									<a href="#">
										<img src="./images/coins/todays-portfolios-new.png" alt="" />
									</a>
								</div>
								<div class="activity__content">
									<h3 class="activity__title">
										<a href="#">Today Portfolio</a>
									</h3>
									<p><span id="baby_doge_amount" style={{ color: "white" }}>0 </span> <i class="fa fa-eye eye-color baby_doge_eye" aria-hidden="true"></i> </p>
								</div>
								<a href="#"> <i class="fa-solid fa-up-right-from-square fa-rotate-270" style={{ fontSize: "150%", marginLeft: "20px" }}></i></a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="section-spacing" >
				<div class="container content_slide" style={{
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

			{/* <section class="section-spacing inverse-bg" id="features">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="section-title text-center">


								<h2>Our Native Token's</h2>
								<div class="row">
									<div class="col-sm-4">
										<div class="card" style={{ height: "140px" }}>

											<span>
												<img src="https://sbgglobal.io/sbg-assets-dashboard/img/activity/bgvt.png" alt="" />
											</span>

											<h5 class="card-title">BGVT</h5>
											<p class="card-text">Bit Game Verse Token.</p>

										</div>
									</div>
									<div class="col-sm-4">
										<div class="card" style={{ height: "140px" }}>

											<span>
												<img src="https://sbgglobal.io/sbg-assets-dashboard/img/activity/mmit.png" alt="" />
											</span>

											<h5 class="card-title">MMIT</h5>
											<p class="card-text">Mango Man Intelligent Token.</p>

										</div>
									</div>
									<div class="col-sm-4">
										<div class="card" style={{ height: "140px" }}>

											<span>
												<img src="https://sbgglobal.io/sbg-assets-dashboard/img/activity/zax-logo.png" alt="" />
											</span>

											<h5 class="card-title">ZILLIONXO</h5>
											<p class="card-text">Zillion Aakar Xo.</p>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
			</section> */}
			<section style={{
				justifyContent: "center",
				display: "flex",
				margin: "30px 0px",
			}}>

				<button type="button" class="btn btn-info mmit-join">BSXG  Group<br />Join Telegram</button>
			</section>


			<section class="auction__area pt-0 pb-30">
				<div class="container user_list">
					<div class="card dash-card">
						<div class="card-header bg-box" style={{ textAlign: "center" }}>
							<a href="#">
								<h3 class="card-title" style={{ color: "black", padding: "10px 0px" }}>BSXG VIP Achiever's</h3>
							</a>
						</div>
						<div class="card-body p-0" style={{ textAlign: "center" }}>
							<div class="upcoming__table">
								<div class="table-responsive">
									<table class="table bsxg_vip">
										<thead class="tbl-th" style={{ background: "#0fa2bf" }}>
											<tr>
												<th class="tbl-color">Sr. No.</th>
												<th class="tbl-color">User Name</th>
												<th class="tbl-color">User Id</th>
												<th class="tbl-color">Level</th>
											</tr>
										</thead>
										<tbody class="bg-box" style={{ overflow: "hidden", background: "#c7d3e7" }}>

											<tr style={{ backgroundColor: " transparent ", border: "0px solid" }}>
												<td>1.</td>
												<td>Vinod kumar</td>
												<td>BSXG783515</td>
												<td>Expert</td>
											</tr>

											<tr style={{ backgroundColor: " transparent ", border: "0px solid " }}>
												<td>2.</td>
												<td>Girjesh Kumar pandey</td>
												<td>BSXG110390</td>
												<td>Expert</td>
											</tr>

											<tr style={{ backgroundColor: " transparent ", border: "0px solid " }}>
												<td>3.</td>
												<td>Anil pratap</td>
												<td>BSXG100083</td>
												<td>Expert</td>
											</tr>

											<tr style={{ backgroundColor: " transparent ", border: "0px solid" }}>
												<td>4.</td>
												<td>Sonu 1</td>
												<td>BSXG341565</td>
												<td>Expert</td>
											</tr>

											<tr style={{ backgroundColor: " transparent ", border: "0px solid " }}>
												<td>5.</td>
												<td>Abhishek</td>
												<td>BSXG146347</td>
												<td>Expert</td>
											</tr>

										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="card-header bg-box" style={{ marginTop: "-16px", textAlign: "center" }}>
							<a href="#">
								<h3 class="card-title" style={{ color: "black", marginTop: "5px" }}>More</h3>
							</a>
						</div>
					</div>
				</div>
			</section>

			<section class="auction__area pt-0 " style={{ marginTop: "50px" }}>
				<div class="container user_list">
					<div class="card dash-card">
						<div class="card-header bg-box" style={{ textAlign: "center" }}>
							<a href="#">
								<h3 class="card-title" style={{ color: "black", padding: "10px 0px" }}>BSXG Global Pool Achiever's</h3>
							</a>
						</div>
						<div class="card-body p-0" style={{ textAlign: "center" }}>
							<div class="upcoming__table">
								<div class="table-responsive">
									<table class="table bsxg_vip">
										<thead class="tbl-th" style={{ background: "#0fa2bf" }}>
											<tr>
												<th class="tbl-color">Sr. No.</th>
												<th class="tbl-color">User Name</th>
												<th class="tbl-color">User Id</th>
												<th class="tbl-color">Level</th>
											</tr>
										</thead>
										<tbody class="bg-box" style={{ overflow: "hidden", background: "#c7d3e7" }}>

											<tr style={{ backgroundColor: " transparent ", border: "0px solid " }}>
												<td>1.</td>
												<td>Vinod kumar</td>
												<td>BSXG783515</td>
												<td>2 STAR</td>
											</tr>

											<tr style={{ backgroundColor: " transparent ", border: "0px solid" }}>
												<td>2.</td>
												<td>Girjesh Kumar pandey</td>
												<td>BSXG110390</td>
												<td>2 STAR</td>
											</tr>

											<tr style={{ backgroundColor: " transparent ", border: "0px solid " }}>
												<td>3.</td>
												<td>Anil pratap</td>
												<td>BSXG100083</td>
												<td>2 STAR</td>
											</tr>

											<tr style={{ backgroundColor: " transparent ", border: "0px solid " }}>
												<td>4.</td>
												<td>Sonu 1</td>
												<td>BSXG341565</td>
												<td>2 STAR</td>
											</tr>

											<tr style={{
												backgroundColor: " transparent ", border: "0px solid "
											}}>
												<td>5.</td>
												<td>Abhishek</td>
												<td>BSXG146347</td>
												<td>2 STAR</td>
											</tr>

										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="card-header bg-box" style={{ marginTop: "-16px", textAlign: "center" }}>
							<a href="#">
								<h3 class="card-title" style={{ color: "black", marginTop: "5px" }}>More</h3>
							</a>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="row">
					<div class="col-sm-10 col-lg-5" style={{ margin: "auto" }}>
						<form className='Review_form'>
							<h2 style={{ color: "black", textAlign: "center" }}>Share your Review</h2>
							<div class="form-group">
								<label for="exampleInputEmail1">Title:</label>
								<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
								//  placeholder="Enter email" 
								/>

							</div>
							<div class="form-group" style={{ marginBottom: "30px" }}>
								<label for="exampleInputPassword1">Message:</label>
								<input type="password" class="form-control" id="exampleInputPassword1"
								//  placeholder="Password" 
								/>
							</div>
							<button type="submit" class="btn btn-primary d-flex m-auto">Submit</button>
						</form>

					</div>
					<div class="col-sm-10 col-lg-7 m-auto small_slider">
						<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active">
									<div class="card text-center">
										<div class="card-body" style={{ background: "#c7d3e7", height: "325px" }}>
											<img src="./images/dp.jpg" alt="" style={{ height: "60px", justifyContent: "center", display: "inline", margin: "30px 0px", borderRadius: "5px" }} />
											<h3 style={{ color: "black" }}>Miracle system strong plan quick payment</h3>
											<p class="card-text" style={{ color: "#01222b" }}>With supporting text below as a natural lead-in to additional content.</p>
											<h3 style={{ color: "black" }}> Ajay Kumar - BSXG640098</h3>
										</div>

									</div>
								</div>
								<div class="carousel-item">
									<div class="card text-center">
										<div class="card-body" style={{ background: "#c7d3e7", height: "325px" }}>
											<img src="./images/dp.jpg" alt="" style={{ height: "60px", justifyContent: "center", display: "inline", margin: "30px 0px", borderRadius: "5px" }} />
											<h3 style={{ color: "black" }}>Miracle system strong plan quick payment</h3>
											<p class="card-text" style={{ color: "#01222b" }}>With supporting text below as a natural lead-in to additional content.</p>
											<h3 style={{ color: "black" }}> Vipin Kumar - BSXG640098</h3>
										</div>

									</div>
								</div>
								<div class="carousel-item">
									<div class="card text-center">
										<div class="card-body" style={{ background: "#c7d3e7", height: "325px" }}>
											<img src="./images/dp.jpg" alt="" style={{ height: "60px", justifyContent: "center", display: "inline", margin: "30px 0px", borderRadius: "5px" }} />
											<h3 style={{ color: "black" }}>Miracle system strong plan quick payment</h3>
											<p class="card-text" style={{ color: "#01222b" }}>With supporting text below as a natural lead-in to additional content.</p>
											<h3 style={{ color: "black" }}> Atul Kumar - BSXG640098</h3>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section style={{ marginBottom: "50px" }}>
				<h1 class="bsxg_up_hed" style={{ textAlign: "center" }}>BSXG Updates</h1>
				<div class="row trending_box">
					<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
						<div class="card dash-card">
							<div class="card-header" style={{ padding: "0.2rem 1rem ", textAlign: "center", padding: "20px", background: " #c7d3e7" }}>
								<h3 class="card-title news-card-title" style={{ color: "black" }}>BSXG Trending News</h3>
							</div>
							<div class="card-body p-0">
								<div class="">
									<ul class="list-group mb-0">

										<li class="list-group-item d-flex border-top-0 border-left-0 border-right-0" style={{ backgroundColor: "transparent " }}>
											<div class="w-3 h-3 bg-success mr-3 mt-1 brround"></div>
											<div>
												<label class="fs-12" style={{ fontSize: "20px", fontWeight: "700" }}>SBGGLOBAL MEGA SEMINAR</label>
												<p style={{ fontSize: "14px", color: "#000" }}>You All Are Invited.
													Location MIEPA VENUE at Palace Compound Near Advanced Hospital.</p>
												<p class="mb-0 fs-12" style={{ fontSize: "14px", color: "#000" }}><span style={{ fontSize: "14px", fontWeight: "500", color: "#000" }}>17th July 2022 (11:00 AM)</span></p>
											</div>
										</li>

										<li class="list-group-item d-flex border-top-0 border-left-0 border-right-0" style={{ backgroundColor: "transparent " }}>
											<div class="w-3 h-3 bg-success mr-3 mt-1 brround"></div>
											<div>
												<label class="fs-12" style={{ fontSize: "20px", fontWeight: "700" }}>BSXG Global Seminar</label>
												<p style={{ fontSize: "14px", color: "#000" }}>10th May 2022 - Shillong Meghalaya</p>
												<p class="mb-0 fs-12" style={{ fontSize: "14px", color: "#000" }}><span style={{ fontSize: "14px", fontWeight: "500", color: "#000" }}>Anyone have team in this
													State, please let us know.
													Thanks.</span></p>
											</div>
										</li>

										<li class="list-group-item d-flex border-top-0 border-left-0 border-right-0" style={{ backgroundColor: "transparent " }}>
											<div class="w-3 h-3 bg-success mr-3 mt-1 brround"></div>
											<div>
												<label class="fs-12" style={{ fontSize: "20px", fontWeight: "700" }}>BSXG Global Seminar</label>
												<p style={{ fontSize: "14px", color: "#000" }}>8th May 2022 - Imphal Manipur</p>
												<p class="mb-0 fs-12" style={{ fontSize: "14px", color: "#000" }}><span style={{ fontSize: "14px", fontWeight: "500", color: "#000" }}>Anyone have team in this
													State, please let us know.
													Thanks.</span></p>
											</div>
										</li>

										<li class="list-group-item d-flex border-top-0 border-left-0 border-right-0" style={{ backgroundColor: "transparent " }}>
											<div class="w-3 h-3 bg-success mr-3 mt-1 brround"></div>
											<div>
												<label class="fs-12" style={{ fontSize: "20px", fontWeight: "700" }}>BSXG Global Seminar</label>
												<p style={{ fontSize: "14px", color: " #000" }}>6th May 2022 - Surat Gujarat</p>
												<p class="mb-0 fs-12" style={{ fontSize: "14px", color: "#000" }}><span style={{ fontSize: "14px", fontWeight: "500", color: "#000" }}>Anyone have team in this
													State, please let us know.
													Thanks.</span></p>
											</div>
										</li>

										<li class="list-group-item d-flex border-top-0 border-left-0 border-right-0" style={{ backgroundColor: "transparent " }}>
											<div class="w-3 h-3 bg-success mr-3 mt-1 brround"></div>
											<div>
												<label class="fs-12" style={{ fontSize: "20px", fontWeight: "700" }}>BSXG Global Seminar</label>
												<p style={{ fontSize: "14px", color: "#000" }}>4th May 2022 -  Ahmedabad Gujarat</p>
												<p class="mb-0 fs-12" style={{ fontSize: "14px", color: "#000" }}><span style={{ fontSize: "14px", fontWeight: "500", color: "#000" }}>Anyone have team in this
													State, please let us know.
													Thanks.</span></p>
											</div>
										</li>

									</ul>
								</div>
							</div>

						</div>
					</div>
					<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 zoom-mb">
						<div class="card">

							<img src="./images/blog1.jpg" />

						</div>
					</div>
				</div>
			</section>

			{/* <section class="section-spacing inverse-bg" id="countdown-warp">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-md-6">
							<div class="text-block wow fadeIn" data-wow-delay="0.2s">
								<h2>Special Offer-<span>30%</span> off For This Month</h2>
								<p>While existing solutions offer to solve just one problem at a time.</p>
								<div id="countdown"></div>
								<a href="#" class="morebtn">Join & Buy Token Now</a>
							</div>
						</div>

						<div class="col-md-6">

						</div>

					</div>
				</div>
			</section> */}

			{/* <section class="section-spacing" id="roadmap">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="section-title text-center">
								<h5>Roadmap</h5>
								<h2>The Timeline of Our Business</h2>
							</div>
						</div>
					</div>

					<div class="row roadmap-img">
						<div class="col-md-12">
							<div class="roadmap-outer">
								<div class="roadmap"></div>
								<div class="roadmap rm-step1">
									<div class="roadmap-content wow fadeInLeft" data-wow-delay="0.2s">
										<h3>Blockchain</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
										<span class="rmyear"> 2007</span>
									</div>
								</div>


								<div class="roadmap rm-step2">

									<div class="roadmap-content wow fadeInRight" data-wow-delay="0.2s">
										<h3>Token Bridge</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
										<span class="rmyear"> 2010</span>
									</div>
								</div>
								<div class="roadmap rm-step3">

									<div class="roadmap-content wow fadeInRight" data-wow-delay="0.2s">
										<h3>Times</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
										<span class="rmyear"> 2015</span>
									</div>
								</div>
								<div class="roadmap rm-step4">

									<div class="roadmap-content wow fadeInLeft" data-wow-delay="0.2s">
										<h3>Token</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
										<span class="rmyear"> 2018</span>
									</div>
								</div>
								<div class="roadmap rm-step5">

									<div class="roadmap-content wow fadeInRight" data-wow-delay="0.2s">
										<h3>Circle</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
										<span class="rmyear"> 2020</span>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* <section id="testimonial" class="section-spacing inverse-bg">
				<div class="container">
					<div class="text-block wow fadeIn" data-wow-delay="0.2s">
						<h2>See Whats Our Clients Say's About Us</h2>
					</div>
					<div class="row align-items-center testimonial-row">

						<div class="col-md-4">
							<div class="download-text wow fadeIn">
								<img src="img/testimonial-icon.png" class="testimonial-icon" />
								<p>"The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions.The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions."</p>
								<div class="row testimonial-footer">
									<div class="col-md-4 testimonial-footer-img" ><img src="img/team/1.jpg" /></div>
									<div class="col-md-8 testimonial-footer-text"><b>Marielle Wigington</b><br />Los Angeles. CA</div>
								</div>



							</div>
						</div>
						<div class="col-md-4">
							<div class="download-text wow fadeIn">
								<img src="img/testimonial-icon.png" class="testimonial-icon" />
								<p>"The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions.The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions."</p>
								<div class="row testimonial-footer">
									<div class="col-md-4 testimonial-footer-img" ><img src="img/team/1.jpg" /></div>
									<div class="col-md-8 testimonial-footer-text"><b>Marielle Wigington</b><br />Los Angeles. CA</div>
								</div>



							</div>
						</div>
						<div class="col-md-4">
							<div class="download-text wow fadeIn">
								<img src="img/testimonial-icon.png" class="testimonial-icon" />
								<p>"The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions.The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions."</p>
								<div class="row testimonial-footer">
									<div class="col-md-4 testimonial-footer-img" ><img src="img/team/1.jpg" /></div>
									<div class="col-md-8 testimonial-footer-text"><b>Marielle Wigington</b><br />Los Angeles. CA</div>
								</div>



							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* <section id="team" class="section-spacing">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="section-title text-center">
								<h2>Our Motivated Team</h2>
								<p>The ICO crypto team combines a passion for esports, industry experise &amp; proven record in finance.</p>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-4">
							<div class="team-member text-center">
								<div class="thumb">
									<img src="img/team/1.jpg" alt="" />
								</div>
								<h4>Micheal Jhon</h4>
								<h5>CEO & Frounder</h5>
								<ul class="social-media">
									<li>Twitter</li>
									<li>Dribbble</li>
									<li>Behance</li>
								</ul>
							</div>
						</div>

						<div class="col-md-4">
							<div class="team-member text-center">
								<div class="thumb">
									<img src="img/team/2.jpg" alt="" />
								</div>
								<h4>Jhon Abraham</h4>
								<h5>Head Investor</h5>
								<ul class="social-media">
									<li>Twitter</li>
									<li>Dribbble</li>
									<li>Behance</li>
								</ul>
							</div>
						</div>

						<div class="col-md-4">
							<div class="team-member text-center">
								<div class="thumb">
									<img src="img/team/3.jpg" alt="" />
								</div>
								<h4>Robert Thomson</h4>
								<h5>UI Designer</h5>
								<ul class="social-media">
									<li>Twitter</li>
									<li>Dribbble</li>
									<li>Behance</li>
								</ul>
							</div>
						</div>

						<div class="col-md-4">
							<div class="team-member text-center">
								<div class="thumb">
									<img src="img/team/4.jpg" alt="" />
								</div>
								<h4>Selina Gomej</h4>
								<h5>Senior Developer</h5>
								<ul class="social-media">
									<li>Twitter</li>
									<li>Dribbble</li>
									<li>Behance</li>
								</ul>
							</div>
						</div>
						<div class="col-md-4">
							<div class="team-member text-center">
								<div class="thumb">
									<img src="img/team/1.jpg" alt="" />
								</div>
								<h4>Micheal Jhon</h4>
								<h5>CEO & Frounder</h5>
								<ul class="social-media">
									<li>Twitter</li>
									<li>Dribbble</li>
									<li>Behance</li>
								</ul>
							</div>
						</div>

						<div class="col-md-4">
							<div class="team-member text-center">
								<div class="thumb">
									<img src="img/team/2.jpg" alt="" />
								</div>
								<h4>Jhon Abraham</h4>
								<h5>Head Investor</h5>
								<ul class="social-media">
									<li>Twitter</li>
									<li>Dribbble</li>
									<li>Behance</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="moreteam-btn"><a href="#" >More Team</a></div>
			</section> */}

			{/* <section class="section-spacing inverse-bg" id="trademobile">
				<div class="container">
					<div class="row align-items-center">

						<div class="col-md-8">
							<div class="text-block wow fadeIn" data-wow-delay="0.2s">
								<h2>Trade on The mobile App</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor arcu. Vestibulum ac ex lacinia.

								</p>

							</div>
						</div>



					</div>
				</div>
			</section> */}

			{/* <section class="section-spacing" id="blog">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="section-title text-center">
								<h2> Recent Cryptocurrency Blog </h2>
								<p>The ICO crypto team combines a passion for esports, industry experise &amp; proven record in finance.The ICO crypto team combines a.</p>
							</div>
						</div>
					</div>

					<div class="row align-items-center testimonial-row">

						<div class="col-md-4">
							<div class="download-text wow fadeIn">
								<img src="img/blog1.jpg" class="testimonial-icon" />
								<h4>The use of crypto-currencies has become</h4>
								<p>The use of crypto-currencies has become more widespread, and they are now increasingly.</p>
								<div class="row testimonial-footer">
									<div class="col-md-2 testimonial-footer-img" ><img src="img/team/1.jpg" /></div>
									<div class="col-md-8 testimonial-footer-text"><b>Marielle Wigington</b><br />February 19, 2022</div>
									<div class="col-md-2" ><a href="#" class="blog-link"> + </a></div>
								</div>



							</div>
						</div>
						<div class="col-md-4">
							<div class="download-text wow fadeIn">
								<img src="img/blog2.jpg" class="testimonial-icon" />
								<h4>The use of crypto-currencies has become</h4>
								<p>The use of crypto-currencies has become more widespread, and they are now increasingly.</p>
								<div class="row testimonial-footer">
									<div class="col-md-2 testimonial-footer-img" ><img src="img/team/1.jpg" /></div>
									<div class="col-md-8 testimonial-footer-text"><b>Marielle Wigington</b><br />February 19, 2022</div>
									<div class="col-md-2" ><a href="#" class="blog-link"> + </a></div>
								</div>



							</div>
						</div>
						<div class="col-md-4">
							<div class="download-text wow fadeIn">
								<img src="img/blog3.jpg" class="testimonial-icon" />
								<h4>The use of crypto-currencies has become</h4>
								<p>The use of crypto-currencies has become more widespread, and they are now increasingly.</p>
								<div class="row testimonial-footer">
									<div class="col-md-2 testimonial-footer-img" ><img src="img/team/1.jpg" /></div>
									<div class="col-md-8 testimonial-footer-text"><b>Marielle Wigington</b><br />February 19, 2022</div>
									<div class="col-md-2" ><a href="#" class="blog-link"> + </a></div>
								</div>



							</div>
						</div>
					</div>



				</div>
			</section>

			<section class="section-spacing inverse-bg" id="start_trading_warp">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-md-12">
							<div class="text-block wow fadeIn" data-wow-delay="0.2s">
								<h2>Start Trading Glow</h2>
								<p>While existing solutions offer to solve just one problem at a time.</p>

								<a href="#" class="morebtn">Ragister Now</a>
							</div>
						</div>



					</div>
				</div>
			</section> */}



			{/* <footer id="footer_bar">
				<div class="row">
					<div class="col-md-7 footer_profile">
						<div class="row">
							<div class="col-md-2">
							</div>
							<div class="col-md-10">
								<div class="row">
									<div class="col-md-4">
										<a class="navbar-brand" href="index-2.html">
											<img src="img/logo.png" alt="Logo" />
										</a>
									</div>
									<div class="col-md-8">
										<p>The ICO crypto team combines a passion for esports, industry experise & proven record in finance.The ICO crypto team combines a passion for esports, industry experise.</p>
									</div>
								</div>
							</div>
						</div>

						<hr />
						<div class="row">
							<div class="col-md-2">
							</div>
							<div class="col-md-3">
					<h3>Useful links</h3>
					<ul>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Trems of Services</a></li>
						<li><a href="#">Disclamier</a></li>
						<li><a href="#">Credits</a></li>
						<li><a href="#">Faq</a></li>
					</ul>
				</div>
				<div class="col-md-3">
					<h3>Quick links</h3>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Market</a></li>
						<li><a href="#">Trading</a></li>
						<li><a href="#">Team</a></li>
					</ul>
				</div>
							<div class="col-md-4">
					<h3>Office Address</h3>
					<p><i class="fa fa-address-card"></i> Usa. xyz ICO crypto team combines a passion for esports<br /><i class="fa fa-envelope"></i> abc@xyz.com<br /><i class="fa fa-phone"></i> +1634-234-2345</p>
				</div>

						</div>


					</div>
					<div class="col-md-5 newsletter_warp">
						<div class="row">
								<div class="col-md-9">
<div class="newsletter">
	<h3>Newsletter</h3>
	<p>The ICO crypto team combines a passion for esports, industry experise & proven record in finance.</p>
<div class="form-group has-error">
		<input placeholder="Email here" class="form-control" name="email" type="email" required id="newsletter_email" data-error="Email here" />
		<button type="subimt" id="newsletter_subimt"><i class="fa fa-plus"></i></button>
</div>
</div>
	</div>
	<div class="col-md-3">

	</div>
</div>


<hr />

						<h3>Join the conversation</h3>
						<ul class="social-media">
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fa fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>



				<hr />

				<div class="container">
					<div class="row">
						<div class="col-md-7">
							<p>&copy; copyright 2022 | All right reserved.</p>
						</div>
						<div class="col-md-5">
							<div class="copyright text-center">
								<a href="#">Suppor</a> | <a href="#">Privacy Policy</a>
							</div>
						</div>
					</div>
				</div>
			</footer> */}


			<div class="back-top">
				<a href="#">
					<span class="icon-bg"></span>
					<span class="back-to-top-text">Top</span>
					<i class="fa fa-angle-up"></i>
				</a>
			</div>

			{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
				Launch demo modal
			</button> */}









			{/* <div class="modal-dialog modal_dialog_invite">
               <div class="modal-content modal_content_invite">
                  <button class="modal-close modal_close_invite btn-toggle-modal" id="close_invite_modal">X</button>
                  <div class="logo">
                     <img src="https://sbgglobal.io/sbg-assets-dashboard/img/about/Logo.png" style={{width: "35%"}}/>
                  </div>
                  <center>
                     <h3 style={{color: "white"}}>Get up to 2000% Rewards</h3>
                     <div class="sectionimage">
                        <img src="https://sbgglobal.io/sbg-assets-dashboard/img/money.png"/>
                     </div>
                     <div class="invite_box">
                        <h4 style={{fontWeight: "bold",color: "#355283",padding: "30px 10px 10px 13px",marginTop: "-19px"}}><span style={{fontSize: "18px",color: "red"}}>SBG677001</span></h4>
                        <h5 style={{color: "black",paddingBottom: "20px"}}>Jitendra </h5>
                     </div>
                  </center>
                  <div class="background">
                     <center>
                        <div class="share__social share-icon-account">
                           <span id="refer_link"></span>
                           <div class="background">
                              <center>
                                 <button class="clipboard" onclick="copyReferLink()">Copy link</button>
                                 <a class="signup_modal_btn" href="https://sbgglobal.io/refer-register/U0JHNjc3MDAx">Signup </a>
                              </center>
                           </div>
                                                   </div>
                     </center>
                  </div>
               </div>
            </div> */}


		</div>


	)

}


export default Home


