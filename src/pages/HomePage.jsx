import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
	return (
		<>
			<div>
				<header class="tm-site-header">
					<div class="tm-header-menu">
						<div class="container tm-header-menu-container">
							<div class="tm-site-branding">
								<a href="#" class="tm-logo-link">
									<img src="/images/logo.png" style={{ height: "70px" }} alt="" class="tm-logo" />
								</a>
								<span class="tm-site-title">
									<a href="#">BSXG Global</a>
								</span>
							</div>
							<nav class="tm-primary-nav tm-section-active">
								<ul class="tm-primary-nav-list">
									<li class="menu-item"><a href="#about" class="nav-link">About</a></li>
									<li class="menu-item"><a href="#howitworks" class="nav-link">How It Works</a></li>
									<li class="menu-item"><a href="#tokensale" class="nav-link">Token Sale</a></li>
									<li class="menu-item"><a href="#bounty" class="nav-link">Bounty</a></li>
									{/* <li class="menu-item"><a href="#roadmap" class="nav-link">Roadmap</a></li> */}
									<li class="menu-item"><a href="#team" class="nav-link">Team</a></li>
									{/* <li class="menu-item"><a href="#faq" class="nav-link">Faq</a></li> */}
								</ul>
								{/* <div class="tm-language">
                    	<div class="tm-active-language">EN</div>
                    	<div class="tm-lenguage-dropdown">
                    		<a href="#">FR</a>
                    		<a href="#">CH</a>
                    		<a href="#">HI</a>
                    	</div>
                    </div> */}
								<div class="tm-menu-meta">
									<Link to="login" class="tm-btn tm-style1 tm-with-border">LOGIN</Link>
									<Link to="register" class="tm-btn tm-style1 tm-with-border">SIGNUP</Link>
									{/* <button class="tm-btn tm-style1 tm-with-border" data-toggle="modal" data-target="#tm-login">LOGIN</button>
                    	<button class="tm-btn tm-style1 tm-with-border" data-toggle="modal" data-target="#tm-signup">SIGNUP</button> */}
								</div>
							</nav>
						</div>
					</div>
				</header>
				<div class="tm-section-active tm-fix-bar">
					<ul>
						<li><a href="#home" class="nav-link"></a></li>
						<li><a href="#about" class="nav-link"></a></li>
						<li><a href="#video" class="nav-link"></a></li>
						<li><a href="#howitworks" class="nav-link"></a></li>
						<li><a href="#tokensale" class="nav-link"></a></li>
						<li><a href="#bounty" class="nav-link"></a></li>
						<li><a href="#roadmap" class="nav-link"></a></li>
						<li><a href="#team" class="nav-link"></a></li>
						<li><a href="#featured-company" class="nav-link"></a></li>
						<li><a href="#faq" class="nav-link"></a></li>
						<li><a href="#tm-subscribe" class="nav-link"></a></li>
						<li><a href="#footer" class="nav-link"></a></li>
					</ul>
				</div>
				<section id="home" className="row tm-hero-section tm-bg">
					<div
						className="slider_body"
						style={{
							marginTop: "60px",
							textAlign: "-webkit-center",
							marginBottom: "30px",
						}}
					>
						<div id="carouselExampleIndicators" className="carousel slide">
							<div className="carousel-inner">
								<div
									className="carousel-item active h-100"
								>
									<img
										style={{ width: '100%' }}
										src="/images/banner/banner11.jpeg"
										className="d-block  h-100 img-fluid"
										alt="Not Found"
									/>
								</div>
								<div className="carousel-item h-100">
									<img
										style={{ width: '100%' }}
										src="/images/banner/banner12.jpeg"
										className="d-block  h-100 img-fluid"
										alt="Not Found"
									/>
								</div>
								<div className="carousel-item h-100">
									<img
										style={{ width: '100%' }}
										src="/images/banner/banner1.png"
										className="d-block h-100 img-fluid"
										alt="Not Found"
									/>
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="next"
								style={{ left: "" }}
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</section>
				<section class="tm-about-wrap" id="about">
					<div class="empty-space col-md-b90 col-xs-b55"></div>
					<div class="container">
						<div class="row">
							{/* <div class="col-lg-6">
					<div class="tm-about-img-wrap">
						<div class="tm-about-img">
							<img src="assets/img/about-img1.png" alt="" />
							<img src="/images/coins/usdt-coin.png" alt="" class="tm-ethereum" />
							<img src="/images/coins/usdt-coin.png" alt="" class="tm-ethereum2" />
							<img src="/images/coins/usdt-coin.png" alt="" class="tm-ethereum3" />
							<img src="/images/coins/usdt-coin.png" alt="" class="tm-ethereum4" />
						</div>
					</div>
				</div> */}
							<div class="col-lg-12">
								<div class="tm-about">
									<h2 class="tm-m0 tm-lh40 col-xs-t-1 tm-md-f28 tm-md-lh35">What is BSXG?</h2>
									<div class="empty-space col-md-b20 col-xs-b10"></div>
									<div class="tm-f20 tm-md-f15 tm-m0 tm-lh30 tm-md-lh20">BSXG is bitstarX Global Platform For Business</div>
									<div class="empty-space col-md-b10 col-xs-b15"></div>
									<h2 class="tm-m0 tm-lh60 tm-md-f28 tm-md-lh34">Why ?</h2>
									<div class="empty-space col-md-b10 col-xs-b10"></div>
									<div class="tm-about-text tm-f20 tm-md-f15 tm-lh32 tm-md-lh20 col-xs-t-1">
										<p>BSXG  Investments Offers Low-risk Daily Income
											Plans With Returns That Are 3x More Than The Fixed Deposit
											Rates Offered By Banks. Our Daily income Investment Plans
											Are Fully Customizable, Giving Our Clients The Freedom To
											Choose Their Investment Tenure Period And Deposit Amount
											As Per Their Financial Needs.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="empty-space col-md-b85 col-xs-b55"></div>
				</section>
				{/* <div class="tm-about-video" id="video">
					<img src="assets/img/video-bg.jpg" alt=" Background" />

				

					<div class="tm-video-button js-video-button" data-video-id="63636954" data-channel="vimeo">
						<i class="icofont icofont-play-alt-3"></i>
						<span class="tm-video-animaiton"></span>
					</div>
				</div> */}
                 <section style={{justifyContent:"center",display:"flex"}}>
				<video controls>
					{/* <source src="/Videos/home.mp4" type="video/webm" /> */}
					<source src="Videos/home.mp4"  />
					Sorry, your browser doesn't support videos.
				</video>
				</section>
				<section class="tm-ocher-work" id="howitworks">
					<div class="empty-space col-md-b85 col-xs-b50"></div>
					<div class="container">
						<div class="tm-section-heading tm-style1">
							<div class="tm-section-heading-left">
								<h2 class="tm-m0 tm-md-f28 tm-md-lh34">BSXG <br />
									is the game changer</h2>
							</div>
							<div class="tm-section-heading-right">
								<h2 class="col-xs-b20 tm-md-f28 tm-md-lh34">Why?</h2>
								<div class="tm-f20 tm-md-f15 tm-lh30 tm-md-lh24">Our Uniqueness Stems From Our Ability to provide Investors
									With The Highest Returns In The Industry, Allowing Us To Help
									Them Generate More Wealth And Achieve Financial Stability.
								</div>
							</div>
						</div>
						<div class="empty-space col-md-b75 col-xs-b50"></div>
						<div class="tm-section-heading tm-style2">
							<h2 class="text-center col-xs-b2 col-xs-t-2 tm-md-f28 tm-md-lh34">Look at our adventages</h2>
						</div>
						<div class="empty-space col-md-b55 col-xs-b35"></div>
					</div>
					<div class="container">
						<div class="row">
							<div class="col-lg-4 col-sm-6">
								<div class="tm-single-work">
									<div class="tm-single-work-icon">
										{/* <i class="flaticon-ethereum"></i> */}
										<img src='/Images/credit-card.png' style={{ height: "115px" }} />
									</div>
									<div class="tm-single-work-text tm-f20 tm-md-f18 tm-md-lh28 tm-lh30">Easy to  pay</div>
								</div>
								<div class="empty-space col-md-b30 col-xs-b30"></div>
							</div>
							<div class="col-lg-4 col-sm-6">
								<div class="tm-single-work">
									<div class="tm-single-work-icon">
										{/* <i class="flaticon-strategy"></i> */}
										<img src='/Images/profits.png' style={{ height: "115px" }} />
									</div>
									<div class="tm-single-work-text tm-f20 tm-md-f18 tm-md-lh28 tm-lh30">Per Day Profit</div>
								</div>
								<div class="empty-space col-md-b30 col-xs-b30"></div>
							</div>
							<div class="col-lg-4 col-sm-6">
								<div class="tm-single-work">
									<div class="tm-single-work-icon">
										{/* <i class="flaticon-block"></i> */}
										<img src='/Images/Withdrawal.png' style={{ height: "115px" }} />
									</div>
									<div class="tm-single-work-text tm-f20 tm-md-f18 tm-md-lh28 tm-lh30">Daily  Withdrawal</div>
								</div>
								<div class="empty-space col-md-b30 col-xs-b30"></div>
							</div>
							<div class="col-lg-4 col-sm-6">
								<div class="tm-single-work">
									<div class="tm-single-work-icon">
										{/* <i class="flaticon-ethereum"></i> */}
										<img src='/Images/security.jpg' style={{ height: "115px" }} />
									</div>
									<div class="tm-single-work-text tm-f20 tm-md-f18 tm-md-lh28 tm-lh30">High Security</div>
								</div>
								<div class="empty-space col-md-b30 col-xs-b30"></div>
							</div>
							<div class="col-lg-4 col-sm-6">
								<div class="tm-single-work">
									<div class="tm-single-work-icon">
										{/* <i class="flaticon-decentralized"></i> */}
										<img src='/Images/Payment.png' style={{ height: "115px" }} />

									</div>
									<div class="tm-single-work-text tm-f20 tm-md-f18 tm-md-lh28 tm-lh30">Fastest Payment </div>
								</div>
								<div class="empty-space col-md-b30 col-xs-b30"></div>
							</div>

						</div>
					</div>
					<div class="empty-space col-md-b60 col-xs-b30"></div>
					<div class="tm-section-heading tm-style2">
						<h2 class="text-center col-xs-b2 col-xs-t-1 tm-md-f28 tm-md-lh34">Comparison with other solutions</h2>
					</div>
					<div class="empty-space col-md-b55 col-xs-b35"></div>
					<div class="container">
						<div class="row">
							<div class="col-lg-12">
								<div class="tm-comparison-table text-center">
									<div class="table-responsive">
										<table class="table table-bordered">
											<thead style={{ color: "white" }}>
												<tr>
													<th></th>
													<th>Traditional</th>
													<th>BlockBit</th>
													<th>ICOBlock</th>
												</tr>
											</thead>
											<tbody style={{ color: "white" }}>
												<tr>
													<td>Decentralized Database</td>
													<td><div class="tm-blank"></div></td>
													<td><div class="tm-blank"></div></td>
													<td><div class="tm-blank"></div></td>
												</tr>
												<tr>
													<td>Unique Numeric ID</td>
													<td><div class="tm-blank"></div></td>
													<td><div class="tm-blank"></div></td>
													<td><div class="tm-blank"></div></td>
												</tr>
												<tr>
													<td>Primary Target Market</td>
													<td>UK</td>
													<td>USA</td>
													<td>Australia</td>
												</tr>
												<tr>
													<td>Target Market Size</td>
													<td>Country Specific</td>
													<td>123 Million</td>
													<td>1.5 Billion</td>
												</tr>
												<tr>
													<td>Information Liability</td>
													<td>High</td>
													<td>Medium</td>
													<td>Low</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="empty-space col-md-b95 col-xs-b60"></div>
				</section>
				<section class="tm-token-sale tm-light-blue-bg" id="tokensale">
					<div class="empty-space col-md-b85 col-xs-b45"></div>
					<div class="container">
						<div class="tm-section-heading tm-style1 tm-color2">
							<div class="tm-section-heading-left">
								<h2 class="tm-m0 tm-light-blue-c tm-md-f28 tm-md-lh34">What <br />
									is a token sale?</h2>
							</div>
							<div class="tm-section-heading-right">
								<div class="tm-f20 tm-md-f15 tm-lh30 tm-white-c tm-md-lh24">A token sale, sometimes referred to as an ICO, is form of crowd funding for digital currency-related projects. In token sales, purch - asers buy units of a new currency in exchange for legal tender or other digital currencies, such as Bitcoin or Ethereum.</div>
							</div>
						</div>
						<div class="empty-space col-md-b75 col-xs-b50"></div>
					</div>
					<div class="container">
						<div class="row">
							<div class="col-xl-6">
								<h2 class="text-center col-xs-b2 col-xs-t-2 tm-light-blue-c tm-md-f28 tm-md-lh34">Token Distribution</h2>
								<div class="empty-space col-md-b55 col-xs-b35"></div>
								<div class="tm-token-distribution col-xs-b1">
									<div class="tm-token-distribution-left">
										<ul class="tm-token-distribution-list tm-f20 tm-md-f15 tm-white-c">
											<li><span class="tm-blank tm-token-color1"></span><span class="tm-percentage tm-light-blue-c">50%</span> ICO supporters</li>
											<li><span class="tm-blank tm-token-color2"></span><span class="tm-percentage tm-light-blue-c">20%</span> Team members</li>
											<li><span class="tm-blank tm-token-color3"></span><span class="tm-percentage tm-light-blue-c">15%</span> Marketing</li>
											<li><span class="tm-blank tm-token-color4"></span><span class="tm-percentage tm-light-blue-c">10%</span> Angel investors</li>
											<li><span class="tm-blank tm-token-color5"></span><span class="tm-percentage tm-light-blue-c">05%</span> Bounty Fund</li>
										</ul>
									</div>
									<div class="tm-token-distribution-right tm-sp-token-distribution">
										<img src="assets/img/token-percentage01.png" alt="" class="tm-token-distribution-img" />
									</div>
								</div>
								<div class="empty-space col-lg-b0 col-xs-b55"></div>
							</div>
							<div class="col-xl-6">
								<h2 class="text-center col-xs-b2 col-xs-t-2 tm-light-blue-c tm-md-f28 tm-md-lh34">Token Fund Usage</h2>
								<div class="empty-space col-md-b55 col-xs-b35"></div>
								<div class="tm-token-distribution col-xs-b1">
									<div class="tm-token-distribution-left">
										<ul class="tm-token-distribution-list tm-f20 tm-md-f15 tm-white-c">
											<li><span class="tm-blank tm-token-color1"></span><span class="tm-percentage tm-light-blue-c">40%</span> Platform development</li>
											<li><span class="tm-blank tm-token-color2"></span><span class="tm-percentage tm-light-blue-c">25%</span> Sales & marketing</li>
											<li><span class="tm-blank tm-token-color3"></span><span class="tm-percentage tm-light-blue-c">20%</span> Operational costs</li>
											<li><span class="tm-blank tm-token-color4"></span><span class="tm-percentage tm-light-blue-c">10%</span> Legal expenses</li>
											<li><span class="tm-blank tm-token-color5"></span><span class="tm-percentage tm-light-blue-c">05%</span> Strategy development</li>
										</ul>
									</div>
									<div class="tm-token-distribution-right">
										<img src="assets/img/token-percentage02.png" alt="" class="tm-token-distribution-img" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="empty-space col-md-b95 col-xs-b60"></div>
					{/* <div class="tm-dark-blue-bg tm-bounty" id="bounty">
						<div class="empty-space col-md-b90 col-xs-b55"></div>
						<div class="container">
							<h2 class="text-center col-xs-b2 tm-light-blue-c col-xs-t-1 tm-md-f28 tm-md-lh34">Bounty Fund Distribution (<span class="tm-white-c">5%</span> of the total)</h2>
							<div class="empty-space col-md-b55 col-xs-b30"></div>
							<div class="tm-token-distribution">
								<div class="tm-token-distribution-left">
									<ul class="tm-token-distribution-list tm-f20 tm-md-f15 tm-white-c">
										<li><span class="tm-blank tm-token-color1"></span><span class="tm-percentage tm-light-blue-c">25%</span>  Facebook bounty campaing</li>
										<li><span class="tm-blank tm-token-color2"></span><span class="tm-percentage tm-light-blue-c">25%</span> Telegram bounty campaing</li>
										<li><span class="tm-blank tm-token-color3"></span><span class="tm-percentage tm-light-blue-c">20%</span> Twitter bounty campaing</li>
										<li><span class="tm-blank tm-token-color4"></span><span class="tm-percentage tm-light-blue-c">15%</span> Membership bounty campaing</li>
										<li><span class="tm-blank tm-token-color5"></span><span class="tm-percentage tm-light-blue-c">10%</span> Authors bounty campaing</li>
										<li><span class="tm-blank tm-token-color5"></span><span class="tm-percentage tm-light-blue-c">05%</span> Reserve</li>
									</ul>
									<div class="empty-space col-lg-b0 col-xs-b40"></div>
								</div>
								<div class="tm-token-distribution-right tm-sp-token-distribution col-xs-b1">
									<img src="assets/img/token-percentage03.png" alt="" class="tm-token-distribution-img" />
								</div>
							</div>
						</div>
						<div class="empty-space col-md-b95 col-xs-b60"></div>
					</div> */}
				</section>
				<section class="tm-member tm-bg" id="team" style={{ backgroundImage: 'url(assets/img/member-bg.jpg)' }}>
					{/* <div class="tm-team-wrap">
						<div class="empty-space col-md-b90 col-xs-b55"></div>
						<h2 class="text-center col-xs-b2 tm-light-blue-c col-xs-t-1 tm-md-f28 tm-md-lh34">Meet Our Team</h2>
						<div class="empty-space col-md-b55 col-xs-b35"></div>
						<div class="container">
							<div class="row">
								<div class="col-lg-3 col-md-6">
									<div class="tm-member-card text-center">
										<div class="tm-member-thumb"><img src="assets/img/member01.jpg" alt="" /></div>
										<div class="tm-member-desc tm-white-bg">
											<h3 class="tm-member-name tm-f20 tm-md-f15 tm-blue-c col-xs-b5">George Alexiev</h3>
											<div class="tm-member-designation tm-f18">Senior Developer</div>
										</div>
										<div class="empty-space col-md-b35 col-xs-b25"></div>
										<ul class="tm-member-social-btn">
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-linkedin"></i></span></a></li>
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-telegram"></i></span></a></li>
										</ul>
									</div>
									<div class="empty-space col-md-b30 col-xs-b30"></div>
								</div>
								<div class="col-lg-3 col-md-6">
									<div class="tm-member-card text-center">
										<div class="tm-member-thumb"><img src="assets/img/member02.jpg" alt="" /></div>
										<div class="tm-member-desc tm-white-bg">
											<h3 class="tm-member-name tm-f20 tm-md-f15 tm-blue-c col-xs-b5">Oscar Machado</h3>
											<div class="tm-member-designation tm-f18">UX/ UI designer</div>
										</div>
										<div class="empty-space col-md-b35 col-xs-b25"></div>
										<ul class="tm-member-social-btn">
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-linkedin"></i></span></a></li>
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-telegram"></i></span></a></li>
										</ul>
									</div>
									<div class="empty-space col-md-b30 col-xs-b30"></div>
								</div>
								<div class="col-lg-3 col-md-6">
									<div class="tm-member-card text-center">
										<div class="tm-member-thumb"><img src="assets/img/member03.jpg" alt="" /></div>
										<div class="tm-member-desc tm-white-bg">
											<h3 class="tm-member-name tm-f20 tm-md-f15 tm-blue-c col-xs-b5">Lasse Clausen</h3>
											<div class="tm-member-designation tm-f18">Analitics</div>
										</div>
										<div class="empty-space col-md-b35 col-xs-b25"></div>
										<ul class="tm-member-social-btn">
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-linkedin"></i></span></a></li>
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-telegram"></i></span></a></li>
										</ul>
									</div>
									<div class="empty-space col-md-b30 col-xs-b30"></div>
								</div>
								<div class="col-lg-3 col-md-6">
									<div class="tm-member-card text-center">
										<div class="tm-member-thumb"><img src="assets/img/member04.jpg" alt="" /></div>
										<div class="tm-member-desc tm-white-bg">
											<h3 class="tm-member-name tm-f20 tm-md-f15 tm-blue-c col-xs-b5">Daniil Kostin</h3>
											<div class="tm-member-designation tm-f18">Fronted Developer</div>
										</div>
										<div class="empty-space col-md-b35 col-xs-b25"></div>
										<ul class="tm-member-social-btn">
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-linkedin"></i></span></a></li>
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-telegram"></i></span></a></li>
										</ul>
									</div>
									<div class="empty-space col-md-b30 col-xs-b30"></div>
								</div>
							</div>
						</div>
					</div> */}
					<div class="tm-advisor-wrap">
						<div class="empty-space col-md-b60 col-xs-b25"></div>
						<h2 class="text-center col-xs-b2 tm-light-blue-c col-xs-t-1 tm-md-f28 tm-md-lh34">Meet Our Advisors</h2>
						<div class="empty-space col-md-b55 col-xs-b35"></div>
						<div class="container">
							<div class="row">
								<div class="col-lg-3 col-md-6">
									<div class="tm-member-card text-center">
										<div class="tm-member-thumb"><img src="assets/img/member05.jpg" alt="" /></div>
										<div class="tm-member-desc tm-white-bg">
											<h3 class="tm-member-name tm-f20 tm-md-f15 tm-blue-c col-xs-b5">Dan Handy</h3>
											<div class="tm-member-designation tm-f18">CEO & Founder</div>
										</div>
										<div class="empty-space col-md-b35 col-xs-b25"></div>
										<ul class="tm-member-social-btn">
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-linkedin"></i></span></a></li>
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-telegram"></i></span></a></li>
										</ul>
									</div>
									<div class="empty-space col-md-b30 col-xs-b30"></div>
								</div>
								<div class="col-lg-3 col-md-6">
									<div class="tm-member-card text-center">
										<div class="tm-member-thumb"><img src="assets/img/member06.jpg" alt="" /></div>
										<div class="tm-member-desc tm-white-bg">
											<h3 class="tm-member-name tm-f20 tm-md-f15 tm-blue-c col-xs-b5">Gerardo Rivas</h3>
											<div class="tm-member-designation tm-f18">Executive President</div>
										</div>
										<div class="empty-space col-md-b35 col-xs-b25"></div>
										<ul class="tm-member-social-btn">
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-linkedin"></i></span></a></li>
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-telegram"></i></span></a></li>
										</ul>
									</div>
									<div class="empty-space col-md-b30 col-xs-b30"></div>
								</div>
								<div class="col-lg-3 col-md-6">
									<div class="tm-member-card text-center">
										<div class="tm-member-thumb"><img src="assets/img/member07.jpg" alt="" /></div>
										<div class="tm-member-desc tm-white-bg">
											<h3 class="tm-member-name tm-f20 tm-md-f15 tm-blue-c col-xs-b5">David Jevans</h3>
											<div class="tm-member-designation tm-f18">Director Business</div>
										</div>
										<div class="empty-space col-md-b35 col-xs-b25"></div>
										<ul class="tm-member-social-btn">
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-linkedin"></i></span></a></li>
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-telegram"></i></span></a></li>
										</ul>
									</div>
									<div class="empty-space col-md-b30 col-xs-b30"></div>
								</div>
								<div class="col-lg-3 col-md-6">
									<div class="tm-member-card text-center">
										<div class="tm-member-thumb"><img src="assets/img/member08.jpg" alt="" /></div>
										<div class="tm-member-desc tm-white-bg">
											<h3 class="tm-member-name tm-f20 tm-md-f15 tm-blue-c col-xs-b5">Henry Polar</h3>
											<div class="tm-member-designation tm-f18">Community Advisor</div>
										</div>
										<div class="empty-space col-md-b35 col-xs-b25"></div>
										<ul class="tm-member-social-btn">
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-linkedin"></i></span></a></li>
											<li><a href="#" class="tm-social-btn"><span><i class="fa fa-telegram"></i></span></a></li>
										</ul>
									</div>
									<div class="empty-space col-md-b30 col-xs-b30"></div>
								</div>
							</div>
						</div>
						<div class="empty-space col-md-b65 col-xs-b30"></div>
					</div>
				</section>
				{/* <div class="tm-token-wrap" id="featured-company">
					<div class="empty-space col-md-b95 col-xs-b60"></div>
					<div class="container">
						<div class="row">
							<div class="col-lg-12">
								<div class="tm-token">
									<h2 class="tm-token-heading tm-m0 tm-md-f28 tm-md-lh34">Token Listed</h2>
									<div class="tm-token-list">
										<div class="tm-single-token"><img src="assets/img/token01.png" alt="" /></div>
										<div class="tm-single-token"><img src="assets/img/token02.png" alt="" /></div>
										<div class="tm-single-token"><img src="assets/img/token03.png" alt="" /></div>
									</div>
								</div>
								<div class="tm-token-bar">
									<span class="tm-bar-circle"></span>
									<span class="tm-bar-circle"></span>
								</div>
								<div class="tm-token">
									<h2 class="tm-token-heading tm-m0 tm-md-f28 tm-md-lh34">Featured On</h2>
									<div class="tm-token-list">
										<div class="tm-single-token"><img src="assets/img/token04.png" alt="" /></div>
										<div class="tm-single-token"><img src="assets/img/token05.png" alt="" /></div>
										<div class="tm-single-token"><img src="assets/img/token06.png" alt="" /></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="empty-space col-md-b95 col-xs-b60"></div>
				</div> */}
				{/* <section class="tm-faq-wrap tm-bg" id="faq" style={{backgroundImage: 'url(assets/img/faq-bg.jpg)'}}>
		<div class="empty-space col-md-b90 col-xs-b55"></div>
		<h2 class="text-center col-xs-b2 tm-light-blue-c col-xs-t-1 tm-md-f28 tm-md-lh34">Frequently Asked Questions</h2>
		<div class="empty-space col-md-b55 col-xs-b35"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="tabs animated-fade">
					    <ul class="tab-links">
					      <li class="active"><a href="#top-question">Top Questions</a></li>
					      <li><a href="#company">Company</a></li>
					      <li><a href="#product">Product</a></li>
					      <li><a href="#token-sale">Token Sale</a></li>
					    </ul>
					    <div class="tab-content">
						    <div id="top-question" class="tab active">
						        <div class="tm-faq">
									<div class="accordian-wrapper">
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f16">What is Ocher ?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f16">Why do we need Ethereum?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f16">Which countries does populous currently support?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f16">What kind security does populous use to protect my account?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f16">What problems does Ocher attempt to solve?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f16">What would you consider to be a success with this ICO?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f16">Are Ocher token ERC-20 resellable?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f16">Whom can I reach out to with other questions?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            </div>
								</div>
						    </div>
						    <div id="company" class="tab">
						        <div class="tm-faq">
									<div class="accordian-wrapper">
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">What is Ocher ?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">Why do we need Ethereum?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">Which countries does populous currently support?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">What kind security does populous use to protect my account?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">What problems does Ocher attempt to solve?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">What would you consider to be a success with this ICO?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">Are Ocher token ERC-20 resellable?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">Whom can I reach out to with other questions?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            </div>
								</div>
						    </div>
						    <div id="product" class="tab">
						      	<div class="tm-faq">
									<div class="accordian-wrapper">
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">What is Ocher ?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">Why do we need Ethereum?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">Which countries does populous currently support?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">What kind security does populous use to protect my account?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">What problems does Ocher attempt to solve?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">What would you consider to be a success with this ICO?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">Are Ocher token ERC-20 resellable?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">Whom can I reach out to with other questions?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            </div>
								</div>
							</div>
						    <div id="token-sale" class="tab">
						      	<div class="tm-faq">
									<div class="accordian-wrapper">
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">What is Ocher ?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">Why do we need Ethereum?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">Which countries does populous currently support?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">What kind security does populous use to protect my account?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">What problems does Ocher attempt to solve?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">What would you consider to be a success with this ICO?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">Are Ocher token ERC-20 resellable?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            	<div class="single-accordian">
						            		<h3 class="accordian-head tm-light-blue-c tm-f20 tm-md-f15">Whom can I reach out to with other questions?</h3>
						            		<div class="accordian-body">Ocher is the most functional template for Ethereum block chain ERC Token ICO’S. Switable for star up ICO’s. A token sale, sometimes referred to as an initial coin offering (ICO), is form of rowd-funding for digital currency-related projects.</div>
						            	</div>
						            </div>
								</div>
						    </div>
					    </div>
					</div>
				</div>
			</div>
		</div>
		<div class="empty-space col-md-b85 col-xs-b50"></div>
	</section> */}

				<section class="tm-subscribe-wrap tm-bg" id="tm-subscribe" style={{ backgroundImage: 'url(assets/img/subscribe-bg.jpg)' }}>
					<div class="empty-space col-md-b90 col-xs-b55"></div>
					<div class="container">
						<div class="row">
							<div class="offset-lg-2 col-lg-8">
								<form class="mailchimp subscribe-form text-center" action="https://storerepublic.us12.list-manage.com/subscribe/post?u=d227d8d335060b093084903d0&amp;id=9ba078ceb0">
									<h2 class="col-xs-b2 col-xs-t-1 tm-md-f28 tm-md-lh34">Enter your email address for newsletter <br />
										subscription</h2>
									<div class="empty-space col-md-b25 col-xs-b25"></div>
									<input type="email" name="subscribe" id="subscriber-email" placeholder="Your email address" />
									<div class="empty-space col-md-b35 col-xs-b35"></div>
									<button type="submit" id="subscribe-button" class="tm-btn col-xs-b1"><span>SUBSCRIBE</span></button>
									<h5 class="subscription-success"> .</h5>
									<h5 class="subscription-error"> .</h5>
									<label class="subscription-label" for="subscriber-email"></label>
								</form>
							</div>
						</div>
					</div>
					<div class="empty-space col-md-b95 col-xs-b60"></div>
				</section>
				<footer class="tm-site-footer tm-bg" id="footer" style={{ backgroundImage: 'url(assets/img/footer-bg.jpg)' }}>
					<div class="empty-space col-md-b90 col-xs-b55"></div>
					<div class="tm-top-footer">
						<div class="container">
							<div class="row">
								<div class="col-lg-5">
									<h2 class="tm-footer-bar col-xs-b2 tm-light-blue-c col-xs-t-1 tm-md-f28 tm-md-lh34">Send a message</h2>
									<div class="empty-space col-md-b55 col-xs-b30"></div>
									<form action="assets/php/mail.php" class="contact-form col-xs-b1 homepage_form" method="post" id="contact-form">
										<div class="tm-form-field">
											<input type="text" id="name" name="name" required />
											<span class="bar"></span>
											<label>Full Name</label>
										</div>
										<div class="tm-form-field">
											<input type="text" id="email" name="email" required />
											<span class="bar"></span>
											<label>Email Address</label>
										</div>
										<div class="tm-form-field">
											<textarea cols="30" rows="10" id="msg" name="msg" required></textarea>
											<span class="bar"></span>
											<label>Your Message</label>
										</div>
										<button class="tm-btn" type="submit" id="submit" name="submit" style={{ display: "flex", margin: "auto", justifyContent: "center" }}>
											<span>Send Message</span>
										</button>
									</form>
									<div id="tm-alert"></div>
								</div>
								<div class="col-lg-7">
									<h2 class="tm-footer-bar col-xs-b2 tm-light-blue-c text-center col-xs-t-1 tm-md-f28 tm-md-lh34">Join us in the community</h2>
									<div class="empty-space col-md-b55 col-xs-b40"></div>
									<div class="tm-social-btn-wrap tm-style1 col-xs-b1">
										<div class="tm-socil-bar-wrap">
											<div class="tm-socil-bar bar1"></div>
											<div class="tm-socil-bar bar2"></div>
											<div class="tm-socil-bar bar3"></div>
											<div class="tm-socil-bar bar4"></div>
											<div class="tm-socil-bar bar5"></div>
											<div class="tm-socil-bar bar6"></div>
											<div class="tm-socil-bar bar7"></div>
											<div class="tm-socil-bar bar8"></div>
										</div>
										<div class="tm-single-social-btn tm-active">
											<a href="#" class="tm-email-btn"><span><i class="fa fa-envelope-o"></i></span></a>
											<div class="tm-social-btn-text">info@bsxg.io</div>
										</div>
										<div class="tm-single-social-btn">
											<a href="https://www.facebook.com/bsxglobal/?ti=as" target="_blank" class="tm-social-btn tm-facebook"><span><i class="fa fa-facebook"></i></span></a>
											<div class="tm-social-btn-text">Facebook</div>
										</div>
										<div class="tm-single-social-btn">
											<a href="#" class="tm-social-btn tm-linkedin" target="_blank"><span><i class="fa fa-linkedin"></i></span></a>
											<div class="tm-social-btn-text">Linkedin</div>
										</div>
										<div class="tm-single-social-btn">
											<a href="https://twitter.com/BSXGLOBAL?t=aEqnfjS16TiWLdmT_WXRQQ&s=35" target="_blank" class="tm-social-btn tm-twitter"><span><i class="fa fa-twitter"></i></span></a>
											<div class="tm-social-btn-text">Twitter</div>
										</div>
										<div class="tm-single-social-btn">
											<a href="https://instagram.com/bsxg_global?igshid=YmMyMTA2M2Y=" target="_blank" class="tm-social-btn tm-reddit"><span><i class="fa fa-instagram"></i></span></a>
											<div class="tm-social-btn-text">Instagram</div>
										</div>
										<div class="tm-single-social-btn">
											<a href="https://t.me/bsxg_global" class="tm-social-btn tm-telegram" target="_blank"><span><i class="fa fa-telegram"></i></span></a>
											<div class="tm-social-btn-text">Telegram</div>
										</div>
										<div class="tm-single-social-btn">
											<a href="#" class="tm-social-btn tm-medium" target="_blank"><span><i class="fa fa-medium"></i></span></a>
											<div class="tm-social-btn-text">Medium</div>
										</div>
										<div class="tm-single-social-btn">
											<a href="#" class="tm-social-btn tm-github" target="_blank"><span><i class="fa fa-github-alt"></i></span></a>
											<div class="tm-social-btn-text">Github</div>
										</div>
										<div class="tm-single-social-btn">
											<a href="https://youtube.com/channel/UCf1d06Ap6IeazAVSE5fr6lg" target="_blank" class="tm-social-btn tm-youtube"><span><i class="fa fa-youtube-play"></i></span></a>
											<div class="tm-social-btn-text">Youtube</div>
										</div>
									</div>
									<div class="empty-space col-md-b60 col-xs-b60"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="empty-space col-md-b95 col-xs-b55"></div>
					<div class="tm-copyright tm-white-c tm-f20 tm-md-f15">
						<div class="container">© 2018 BSXG, All Right Reserved </div>
					</div>
				</footer>
				<div class="modal fade" id="tm-signup">
					<div class="modal-dialog">
						<div class="modal-content">
							<button type="button" class="close" data-dismiss="modal">x</button>
							<div class="tm-modal tm-color1">
								<h2 class="tm-modal-title">SIGN UP TO Ocher</h2>
								<form action="#" class="tm-modal-form">
									<div class="tm-modal-input">
										<input type="text" placeholder="User Name" />
										<i class="flaticon-profile"></i>
									</div>
									<div class="tm-modal-input">
										<input type="email" placeholder="Email" />
										<i class="flaticon-mail"></i>
									</div>
									<div class="tm-modal-input">
										<input type="text" placeholder="Password" />
										<i class="flaticon-lock"></i>
									</div>
									<div class="tm-modal-input">
										<input type="text" placeholder="Repeat Password" />
										<i class="flaticon-lock"></i>
									</div>
									<div class="empty-space col-md-b40 col-xs-b40"></div>
									<button class="tm-btn tm-style1 w-100" type="submit">LOG IN</button>
									<div class="tm-modal-or">OR</div>
									<button class="tm-btn tm-style1 w-100 tm-modal-fb-btn"><i class="fa fa-facebook"></i>LOG in with facebook</button>
									<div class="empty-space col-md-b20 col-xs-b20"></div>
									<button class="tm-btn tm-style1 w-100 tm-modal-goo-btn"><i class="fa fa-google-plus"></i>LOG in with GOOGle</button>
								</form>
								<div class="empty-space col-md-b55 col-xs-b55"></div>
								<div class="tm-modal-footer">
									<a href="#" class="tm-forgot-p">Forgot Password?</a>
									<a href="#" class="tm-new-signup">New Here? Sign UP</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal fade" id="tm-login">
					<div class="modal-dialog">
						<div class="modal-content">
							<button type="button" class="close" data-dismiss="modal">x</button>
							<div class="tm-modal tm-color1">
								<h2 class="tm-modal-title">Log In TO Ocher</h2>
								<form action="#" class="tm-modal-form">
									<div class="tm-modal-input">
										<input type="text" placeholder="User Name" />
										<i class="flaticon-profile"></i>
									</div>
									<div class="tm-modal-input">
										<input type="text" placeholder="Password" />
										<i class="flaticon-lock"></i>
									</div>
									<div class="empty-space col-md-b40 col-xs-b40"></div>
									<button class="tm-btn tm-style1 w-100" type="submit">LOG IN</button>
									<div class="tm-modal-or">OR</div>
									<button class="tm-btn tm-style1 w-100 tm-modal-fb-btn"><i class="fa fa-facebook"></i>LOG in with facebook</button>
									<div class="empty-space col-md-b20 col-xs-b20"></div>
									<button class="tm-btn tm-style1 w-100 tm-modal-goo-btn"><i class="fa fa-google-plus"></i>LOG in with GOOGle</button>
								</form>
								<div class="empty-space col-md-b55 col-xs-b55"></div>
								<div class="tm-modal-footer">
									<a href="#" class="tm-forgot-p">Forgot Password?</a>
									<a href="#" class="tm-new-signup">New Here? Sign UP</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id='scrollup'><i class="fa fa-angle-double-up"></i></div>
			</div>

		</>
	)
}

export default HomePage