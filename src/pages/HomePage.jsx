import React from 'react'
import './mainpage/css/style-1.css'
import './mainpage/css/responsive-1.css'
import './mainpage/css/color-two.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
   <>
   <div class="main-page-wrapper">
   		<div class="html-top-content">
		   <div class="theme-top-section">
					<img src="./images/home/bg5.png" alt="" class="blue-shape" />
					<header class="theme-main-menu color-white">
						<div class="container">
							<div class="menu-wrapper clearfix">
								<div class="logo"><Link to="/"><img src="./images/logo.png" alt="Logo" style={{height:'130px', width:'300px'}}/></Link></div>
								
								<ul class="right-widget celarfix">
									<li class="login-button"><Link to="/login">Login <i class="flaticon-right-thin"></i></Link></li>
								</ul>

							    <nav class="navbar navbar-expand-lg dark-bg" id="mega-menu-holder">
							    	<div class="container">
							    		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
							    		  <i class="fa fa-bars" aria-hidden="true"></i>
							    		</button>
							    		<div class="collapse navbar-collapse" id="navbarResponsive">
							    		  <ul class="navbar-nav">
							    		  	<li class="nav-item">
							    		  	  <a class="nav-link active" href="#about">About</a>
							    		  	</li>
							    		  	<li class="nav-item">
							    		  	  <a class="nav-link" href="#features">Features</a>
							    		  	</li>
							    		  	<li class="nav-item">
							    		  	  <a class="nav-link" href="#services">Services</a>
							    		  	</li>
							    		  	<li class="nav-item">
							    		  	  <a class="nav-link" href="#token">Token</a>
							    		  	</li>
							    		  	<li class="nav-item">
							    		  	  <a class="nav-link" href="#roadmap">Roadmap</a>
							    		  	</li>
							    		  	<li class="nav-item">
							    		  	  <a class="nav-link" href="#contact">Contact</a>
							    		  	</li>
							    		  </ul>
							    		</div>
							    	</div>
							    </nav>
							</div>
						</div>
					</header>
					
					<div id="theme-banner" class="theme-banner-two">
						<img src="./images/shape/3.png" alt="" class="cube-shape" />
						<img src="./images/shape/4.png" alt="" class="illustration" />
						<div class="container">
							<div class="main-text-wrapper">
								<h1>WELCOME AT<br />AMAZING GLOBAL<br />BUSINESS OPPORTUNITY.</h1>
								<p>Now it’s much easy to connect faster then ever!</p>
								<ul class="button-group clearfix">
									<li><Link to="/register">Sign Up</Link></li>
								</ul>
							</div>
						</div>
					</div>


					<div class="about-cryto" id="about">
						<div class="container">
							<div class="row">
								<div class="col-lg-6 order-lg-last">
									<div class="theme-title">
										<div class="upper-heading">What is crypto?</div>
										<h2>Let us introduce about the Crypto currency</h2>
									</div>
									<p class="sub-text">cryto came into being clear vision to become a global leader in the world of crypto currency market.</p>
									<p class="text">A cryptocurrency (or “crypto”) is a digital asset that can circulate without the need for a central monetary authority such as a government or bank. Instead, cryptocurrencies are created using cryptographic techniques that enable people to buy, sell or trade them securely.</p>
								</div>
								<div class="col-lg-6 order-lg-first">
									<img src="images/shape/5.png" alt="" style={{opacity:1}} data-aos="zoom-out" />
								</div>
							</div>
						</div> 
					</div>
			</div>
			<div class="our-features-three" id="features">
					<img src="./images/home/bg6.png" alt="" class="main-bg-shape" />
					<img src="./images/shape/6.png" alt="" class="cube-shape" data-aos="fade-left" data-aos-duration="1500" />
					<div class="line-shape-one shape"></div>
					<div class="line-shape-two shape"></div>
					<div class="line-shape-three shape"></div>
					<div class="line-shape-four shape"></div>
					<div class="line-shape-five shape"></div>
					<div class="line-shape-six shape"></div>
					<div class="container">
						<div class="theme-title text-center">
							<h2>Benefits for Crypto</h2>
						</div>
						

						<div class="row">
							<div class="col-md-4 col-sm-6 col-xs-12">
								<div class="single-feature">
									<div class="icon-box">
										<img src="./images/icon/8.png" alt="" class="primary-icon" />
									</div>
									<h3>cryto is untraceable</h3>
									<p>Sending and receiving addresses as well as transacted amounts.</p>
								</div>
							</div>
							<div class="col-md-4 col-sm-6 col-xs-12">
								<div class="single-feature">
									<div class="icon-box">
										<img src="./images/icon/9.png" alt="" class="primary-icon" />
									</div>
									<h3>Autonomy self-rule.</h3>
									<p>cryto has striven to solve blockchain governance. </p>
								</div>
							</div>
							<div class="col-md-4 col-sm-6 col-xs-12">
								<div class="single-feature">
									<div class="icon-box">
										<img src="./images/icon/10.png" alt="" class="primary-icon" />
									</div>
									<h3>Transparency & Stability</h3>
									<p>In crypto, transparency brings trust & old strong transparency</p>
								</div>
							</div>
						</div> 
					</div> 
				</div>
				<div class="our-feature-two dark-bg" id="services">
					<div class="container">
						<div class="row">
							<div class="col-lg-6">
								<div class="text">
									<div class="number">01</div>
									<h2 class="title"><span>Decentralized</span> Minning Our core focus.</h2>
									<p>Mining should be fair & easy! We do not allow ASICs on our network. The development team is wholy commited to with keeping it that way.</p>
									<a href="#" class="learn-more">Learn More <i class="flaticon-right-thin"></i></a>
								</div>
							</div>
							<div class="col-lg-6 img-box"><div><img src="images/shape/7.png" alt="" /></div></div>
						</div> 

						<div class="row">
							<div class="col-lg-6 order-lg-last">
								<div class="text">
									<div class="number">02</div>
									<h2 class="title"><span>Populer</span> Money and Smart wallet.</h2>
									<p>Mining should be fair & easy! We do not allow ASICs on our network. The development team is wholy commited to with keeping it that way.</p>
									<a href="#" class="learn-more">Learn More <i class="flaticon-right-thin"></i></a>
								</div>
							</div>
							<div class="col-lg-6 order-lg-first img-box"><div><img src="images/shape/8.png" alt="" /></div></div>
						</div>

						<div class="row">
							<div class="col-lg-6">
								<div class="text">
									<div class="number">03</div>
									<h2 class="title"><span>Upholding</span> Confidentialit & Strong Security.</h2>
									<p>Mining should be fair & easy! We do not allow ASICs on our network. The development team is wholy commited to with keeping it that way.</p>
									<a href="#" class="learn-more">Learn More <i class="flaticon-right-thin"></i></a>
								</div>
							</div> 
							<div class="col-lg-6 img-box"><div><img src="./images/shape/9.png" alt="" /></div></div>
						</div>
					</div>
				</div>

				<div class="our-road-map" id="roadmap">
					<div class="container">
						<div class="theme-title text-center">
							<h2>Road Map</h2>
							<p>A centralized, distributed Blockchain system providing businesses and developers with a low cost Merchants, users, friends perform</p>
						</div>
					</div>
					<div class="time-line-wrapper">
						<div id="timeline-frame"></div>	
					</div>
				</div>
				<div class="apps-overview color-two">
					<div class="overlay-bg" style={{backgroundImage:'url(images/home/bg2.png)'}}>
						<img src="images/shape/13.png" alt="" class="cube-shape-one" data-aos="fade-right" data-aos-duration="1500" />
						<div class="container">
							<div class="inner-wrapper">
								<img src="images/home/s8-1.png" alt="" class="s8-mockup" data-aos="fade-down" data-aos-duration="2500" />
								<img src="images/home/x-1.png" alt="" class="x-mockup" data-aos="fade-up" data-aos-duration="2500" />
								<div class="row">
									<div class="col-lg-5 offset-lg-7">
										<div class="text">
											<h3>don’t miss our apps</h3>
											<h2>Mobile Application for Faster Access.</h2>
											<h6>Now you can control dashboard from the mobile!</h6>
											<p>Mining should be fair & easy! We dose not allow ASIC on our network. The development team is who commited to with keeping it that way.</p>
											<ul class="button-group">
												<li><a href="#"><i class="flaticon-apple"></i> Apple Store</a></li>
												<li><a href="#"><img src="images/icon/playstore-1.png" alt="" /> Google Play</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="contact-section-dark" id="contact">
					<img src="./images/shape/14.png" alt="" class="cube-shape-one" data-aos="fade-left" data-aos-duration="1500" />
					<div class="container">
						<div class="theme-title text-center">
							<h2>Get In Touch</h2>
							<p>vel modus honestatis ad, vim an vidit aliquam instructior. Alii efficiendi <br /> intellegebat nec ea, mea elitr interesset ea</p>
						</div>

						<form action="#" class="form-validation" autocomplete="off">
							<div class="row">
								<div class="col-lg-6">
									<input type="text" placeholder="First Name" name="firstName" />
								</div>
								<div class="col-lg-6">
									<input type="text" placeholder="Last Name" name="lastName" />
								</div>
								<div class="col-lg-6">
									<input type="email" placeholder="Email Address" name="email" />
								</div>
								<div class="col-lg-6">
									<input type="text" placeholder="Phone Number" name="phone" />
								</div>
								<div class="col-12">
									<textarea placeholder="Your Message" name="message"></textarea>
								</div>
							</div>
							<button>Send Message</button>
						</form>
							<div class="alert-wrapper" id="alert-success">
								<div id="success">
									<button class="closeAlert"><i class="fa fa-times" aria-hidden="true"></i></button>
									<div class="wrapper">
						               	<p>Your message was sent successfully.</p>
						             </div>
						        </div>
						    </div>
						    <div class="alert-wrapper" id="alert-error">
						        <div id="error">
						           	<button class="closeAlert"><i class="fa fa-times" aria-hidden="true"></i></button>
						           	<div class="wrapper">
						               	<p>Sorry!Something Went Wrong.</p>
						            </div>
						        </div>
						    </div> 
					</div>
				</div>

				<footer class="theme-footer dark-style">
					<div class="container">
						<div class="inner-wrapper">
							<div class="top-footer-data-wrapper">
								<div class="row">
									<div class="col-lg-4 col-sm-6 footer-logo">
										<div class="logo"><Link to="/"><img src="./images/logo.png" alt="Logo" /></Link></div>
										<a href="#" class="email">info@bsxg.io</a>
										{/* <a href="#" class="mobile">648-xxx-xxxx</a> */}
									</div>
									<div class="col-lg-4 col-sm-6 footer-list">
										<h4 class="title">Quick Links</h4>
										<ul>
											<li><a href="#">How it Works</a></li>
											<li><a href="#">Guarantee</a></li>
											<li><a href="#">Security</a></li>
										</ul>
									</div>
									<div class="col-lg-4 col-sm-6 footer-list">
										<h4 class="title">About Us</h4>
										<ul>
											<li><a href="#">Testimonials</a></li>
											<li><a href="#">Blog</a></li>
										</ul>
									</div>
								</div>
							</div>

							<div class="bottom-footer clearfix">
								<p class="copyright">&copy; 2022 <Link to="/">BSXG</Link> All Right Reserved</p>
								<ul>
									<li><a href="https://www.facebook.com/bsxglobal/?ti=as" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="https://twitter.com/BSXGLOBAL?t=aEqnfjS16TiWLdmT_WXRQQ&s=35" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li><a href="https://instagram.com/bsxg_global?igshid=YmMyMTA2M2Y=" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
								</ul>
								<ul>
									<li><a href="https://t.me/bsxg_global" target="_blank"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
									<li><a href="https://youtube.com/channel/UCf1d06Ap6IeazAVSE5fr6lg" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
								</ul>
							</div> 
						</div>
					</div>
				</footer>
			<button class="scroll-top tran3s color-one-bg">
				<i class="fa fa-long-arrow-up" aria-hidden="true"></i>
			</button>
				
		</div>
   </div>

   </>
	)
}

export default HomePage