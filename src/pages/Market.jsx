import React from 'react'
import MyNavbar from '../components/MyNavbar'
export default function Market() {
    return (
        <div>
            <MyNavbar />
            <section class="contact__info pt-10 pb-10" style={{marginTop:"30px"}}>
                <div class="container">
                    <h2 style={{ textAlign: "center" }}>

                        My Next Level VIP Achievement - <b>Expert </b>Rank
                    </h2>
                    <div class="" style={{ border: " 4px solid #4e4b4b", padding: "20px", borderRadius: "10px" }}>
                        <div class="row">
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                                <div class="contact__info-item align-items-center mb-20">
                                    <div class="contact__text">
                                        <div class="progress market_progress">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ backgroundColor: "#e53636", width: "0%" }}>
                                                <small class="justify-content-center d-flex position-absolute prog-width-full" style={{ fontSize: "20px", fontWeight: "700", color: "#000",paddingLeft:"50px" }}>
                                                    <span style={{ fontSize: "20px", marginRight: "10px" }}></span> 0%</small>
                                            </div>
                                        </div>
                                        <p className='market_head'>1. Next level <i>Expert </i> Total Leg in Tree <i>5</i> condition is remaining by 5 Direct Leg</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div class="contact__info-item align-items-center mb-20">
                                    <div class="contact__text">
                                        <div class="progress market_progress">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "0%" }}>
                                                <small class="justify-content-center d-flex position-absolute prog-width" style={{ fontSize: "20px", fontWeight: " 700", color: "#000 " }}>
                                                    <span style={{ fontSize: "20px",paddingLeft:"50px" }}></span> 0%</small>
                                            </div>
                                        </div>
                                        <p className='market_head'>2. Next level <i>Expert</i> Total Business <i>50000</i><br /> condition is remaining by 50000 Business</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div class="contact__info-item align-items-center mb-20">
                                    <div class="contact__text">
                                        <div class="progress market_progress">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "0%" }}>
                                                <small class="justify-content-center d-flex position-absolute prog-width" style={{ fontSize: "20px", fontWeight: "700", color: "#000" }}>
                                                    <span style={{ fontSize: "20px", marginRight: "10px",paddingLeft:"50px" }}></span> 0% </small>
                                            </div>
                                        </div>
                                        <p className='market_head'>3. 50% Business in Any One Leg <br /> condition is remaining by 25000 Business</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div class="contact__info-item align-items-center mb-20">
                                    <div class="contact__text">
                                        <div class="progress market_progress">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "0%" }}>
                                                <small class="justify-content-center d-flex position-absolute prog-width" style={{ fontSize: " 20px", fontWeight: "700", color: "#000" }}>
                                                    <span style={{ fontSize: "20px", marginRight: "10px",paddingLeft:"50px" }}></span> 0%</small>
                                            </div>
                                        </div>
                                        <p className='market_head'>4. 10% Business in Another Leg <br /> condition is remaining by 5000 Business</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div class="contact__info-item align-items-center mb-20">
                                    <div class="contact__text">
                                        <div class="progress market_progress">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "0%" }}>
                                                <small class="justify-content-center d-flex position-absolute prog-width" style={{ fontSize: "20px", fontWeight: "700", color: "#000 " }}>
                                                    <span style={{ fontSize: "20px", marginRight: "10px" ,paddingLeft:"50px"}}></span> 0%</small>
                                            </div>
                                        </div>
                                        <p className='market_head'>5. 40% Business in Other 3 Legs <br /> condition is remaining by 20000 Business</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="nft__area pt-20 pb-40" style={{marginTop:"30px"}}>
		<div class="container">
			<div class="alert blinking" style={{textAlign: "center",fontSize: "20px",fontWeight: "600"}}>
				<strong class="blink">How to Achieve Reward Level </strong>
				<button type="button" class="btn btn-success" data-toggle="modal" data-target="#videoModal" id="videoModal">Play Video</button>
			</div>
			<div class="modal fade" id="video_modal" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel">
			  <div class="modal-dialog" role="document">
				<div class="modal-content video_modal_content">
				  <div class="modal-header">
					  <h4 class="video_modal_header">Achieve Reward Level</h4>
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
			  <div class="col-xxl-9 table-head-align">
				 <div class="section__title-wrapper d-none d-sm-block">
					<h3 class="section__title">Total Portfolio (BSXG) <i class="fa fa-eye eye-color" aria-hidden="true"></i></h3>
					<h5 class="section__title userbuz_fast">0 BSXG</h5>
				 </div>
				 <div class="section__title-wrapper d-lg-none">
					<h3 class="section__title" style={{fontSize:"20px"}}>Total Portfolio (BSXG) <i class="fa fa-eye eye-color" aria-hidden="true"></i></h3>
					<h5 class="section__title userbuz_fast" style={{fontSize:"20px"}}>0 BSXG</h5>
				 </div>
			  </div>

		   </div>
		   <div class="row">
	 <div class="col-xxl-12 col-xl-12 table-head-align d-none d-sm-block d-sm-none d-md-block">
		 <div class="row" style={{marginLeft: "5px"}}>
		   <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width:" max-content "}}>
		   <div class="process__item" style={{textAlign: "center"}}>
			  <a href="#">
				 <div class="process__icon">
					<span><img src="/images/coins/restake-report-inside.png" alt="" class="icon-size"/></span>
				 </div>
			  </a>
			  <div class="process__content">
				 <p class="icon-name menu-title-p menu-title-p-active">Total Earning</p>
			  </div>
		   </div>
		</div>
		
		<div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content "}}>
		   <div class="process__item" style={{textAlign: "center"}}>
			  <a href="#">
				 <div class="process__icon">
					<span><img src="/images/coins/activation-report-inside.png" alt="" class="icon-size"/></span>
				 </div>
			  </a>
			  <div class="process__content">
				 <p class="icon-name" style={{marginTop: "10px"}}>Today's Earning</p>
			  </div>
		   </div>
		</div>
	 </div>
	 </div>
  </div>
  
  <center>
	 <div class="row d-lg-none d-sm-none" style={{marginLeft: "5px"}}>
		  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content"}}>
		   <div class="process__item">
			  <a href="#">
				 <div class="process__icon active">
					<span><img src="/images/coins/restake-report-inside.png" alt="" class="icon-size"/></span>
				 </div>
			  </a>
			  <div class="process__content">
				 <p class="icon-name menu-title-p menu-title-p-active">Total<br/>Earning</p>
			  </div>
		   </div>
		</div>
		<div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2" style={{width: "max-content "}}>
		   <div class="process__item">
			  <a href="#">
				 <div class="process__icon">
					<span><img src="/images/coins/activation-report-inside.png" alt="" class="icon-size"/></span>
				 </div>
			  </a>
			  <div class="process__content">
				 <p class="icon-name menu-title-p">Today's<br/>Earning</p>
			  </div>
		   </div>
		</div>
	 </div>
  </center>
  <hr style={{color: "rgb(255 255 255)"}}/>
		   <div class="row">
			  <div class="col-xxl-12">
				 <div class="tab-content nft__tab" id="nfvtabcontent">
					<div class="tab-pane fade show active" id="nav-trending" role="tabpanel" aria-labelledby="nav-trending-tab">
					   <div class="row">
						  <div class="upcoming__table" style={{width:"100%"}}>
							 <div class="table-responsive">
						  <table class="table" style={{width:"100%"}}>
							 <thead class="tbl-th" className='market_tabel_head'>
								<tr>
								   <th class="tbl-color">My Earning</th>
								   <th class="tbl-color table-right">0 BSXG</th>
								</tr>
							 </thead>
							 <tbody>
								<tr>
								   <td><a href="#" className='market_tabel_head' >Unilevel</a></td>
								   <td class="table-right"><a href="#"className='market_tabel_head'>0 BSXG</a></td>
								</tr>
								<tr>
								   <td><a href="#" className='market_tabel_head'>Stake Profit</a></td>
								   <td class="table-right"><a href="#" className='market_tabel_head'>0 BSXG</a></td>
								</tr>
								<tr>
								   <td><a href="#" className='market_tabel_head'>Global Pool</a></td>
								   <td class="table-right"><a href="#" className='market_tabel_head'>0 BSXG</a></td>
								</tr>
								<tr>
								   <td><a href="#" className='market_tabel_head'>Sponsor Income</a></td>
								   <td class="table-right"><a href="#" className='market_tabel_head'>0 BSXG</a></td>
								</tr>
							 </tbody>
							 </table>
							 </div>
						  </div>
					   </div>
					</div>
				   </div>
			  </div>
		   </div>
		</div>
	 </section>
     <section class="process__area pb-0">
		<div class="container">
		   <div class="row">
			  <div class="col-md-6" style={{marginBottom:"15px"}}>
				 <div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
					   <div class="activity__item-inner d-flex align-items-center">
						  <div class="activity__thumb mr-20">
							 <a href="#">
								<img src="/images/coins/trophy-1.png" alt=""/>
							 </a>
						  </div>
						  <div class="activity__content">
							 <h3 class="activity__title">
								<a href="#">Total Team Member's (BSXG) </a>
							 </h3>
							 <p style={{color:"black"}}><a href="#" class="total_team_fast">0</a> Member's <i class="fa fa-eye eye-color" aria-hidden="true"></i></p>
						  </div>
					   </div>
					</div>
			  </div>
			  <div class="col-md-6" style={{marginBottom:"15px"}}>
				 <div class="activity__item d-md-flex align-items-center justify-content-between mb-10 bg-box">
					   <div class="activity__item-inner d-flex align-items-center">
						  <div class="activity__thumb mr-20">
							 <a href="#">
								<img src="/images/coins/reward-2.png" alt=""/>
							 </a>
						  </div>
						  <div class="activity__content">
							 <h3 class="activity__title">
								<a href="#">My Referral (BSXG)</a>
							 </h3>
							 <p style={{color:"black"}}><a href="#">0</a> Member's <i class="fa fa-eye eye-color" aria-hidden="true"></i></p>
						  </div>
					   </div>
					</div>
			  </div>
		   </div>
		</div>
	 </section>
     <section class="nft__area pt-35 pb-40">	
		 <div class="container">			 
			<div class="row">
			  <div class="col-xxl-9 table-head-align">
				 <div class="section__title-wrapper mb-40" >
					<h3 class="section__title" style={{
                      margin: "30px 0px",
                      fontSize: "35px"}}>My Referrals</h3>
				 </div>
			  </div>
			</div>
			<div class="row"></div>
		 </div>	 
	</section>
        </div>
    )
}
