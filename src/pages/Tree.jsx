import React from 'react'

export default function Tree() {
  return (
    <>
        <section class="nft__area pt-100 pb-25">
   <div class="container">
                <div class="alert blinking" style={{textAlign: "center",fontSize: "20px",fontWeight: "600",color:"white"}}>
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
                          <source src="https://sbgglobal.io/sbg-assets-dashboard/videos/levels-video.mp4" type="video/mp4"/>
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
                                    <h3 class="profile__info-title">My Tree View</h3>
                                    <div class="profile__info-content">
                                       <div class="row">
                                          <div class="col-xxl-4 col-lg-4">
                                          </div>
                                          <div class="col-xxl-3 col-lg-3" style={{margin:"10px"}}>
                                             <label style={{color:"white",fontSize:"15px"}}>Refer Code</label>
                                             <input type="text" name="refer_code" id="search-refer" style={{borderRadius: "10px",padding:"5px"}}/>  
                                          </div>
                                          <div class="col-xxl-1 col-lg-1">
                                             <button type="button" class="btn btn-success" onclick="submitRefer()" style={{borderRadius: "6px",padding: "2px 16px 6px 15px"}}>Search</button>                 
                                          </div>
                                          <div class="col-xxl-4 col-lg-4">
                                          </div>
                                       </div>
                                    </div>
                                    <div class="row">
                                       <div class="col-md-5">
                                          <div class="card">
                                             <div class="table-responsive">
                                                <table class="table card-table table-vcenter text-nowrap table-1-margin">
                                                   <thead>
                                                   </thead>
                                                   <tbody>
                                                      <tr class="tbl-color" style={{background: "#124350",
                                                        color:" white"}}>
                                                         <td>Name:</td>
                                                         <td> </td>
                                                      </tr>
                                                      <tr>
                                                         <td style={{color: "black"}}>User Id:</td>
                                                         <td style={{color: "black"}}></td>
                                                      </tr>
                                                      <tr class="tbl-color" style={{background: "#124350",
                                                        color:" white"}}>
                                                         <td>Plan Package:</td>
                                                         <td>
                                                                                                                        0
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td style={{color: "black"}}>Parent User ID:</td>
                                                         <td style={{color: "black"}}>NA</td>
                                                      </tr>
                                                      <tr class="tbl-color" style={{background: "#124350",
                                                        color:" white"}}>
                                                         <td>Total Portfolio:</td>
                                                         <td id="total_business">$0</td>
                                                      </tr>
                                                      <tr>
                                                         <td style={{color: "black"}}>Total VIP Portfolio:</td>
                                                         <td id="total_vip_business" style={{color: "black"}}>$0</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="col-md-2"></div>
                                       <div class="col-md-5">
                                          <div class="card">
                                             <div class="table-responsive">
                                                <table class="table card-table table-vcenter text-nowrap table-1-margin">
                                                   <thead>
                                                   </thead>
                                                   <tbody>
                                                      <tr>
                                                         <td style={{color: "black"}}>Package Name</td>
                                                         <td style={{color: "black"}}>Total Count</td>
                                                         <td style={{color: "black"}}>Total VIP Count</td>
                                                      </tr>
                                                      <tr class="tbl-color" style={{background: "#124350",
                                                        color:" white"}}>
                                                         <td>Silver - BSXG 50:</td>
                                                         <td id="plan_2">0</td>
                                                         <td id="vip_2">0</td>
                                                      </tr>
                                                      <tr>
                                                         <td style={{color: "black"}}>Gold - BSXG 100:</td>
                                                         <td style={{color: "black"}} id="plan_3">0</td>
                                                         <td style={{color: "black"}} id="vip_3">0</td>
                                                      </tr>
                                                      <tr class="tbl-color" style={{background: "#124350",
                                                        color:" white"}}>
                                                         <td>Topaz - BSXG 200:</td>
                                                         <td id="plan_9">0</td>
                                                         <td id="vip_9">0</td>
                                                      </tr>
                                                      <tr>
                                                         <td style={{color: "black"}}>Platinum - BSXG 500:</td>
                                                         <td style={{color: "black"}} id="plan_4">0</td>
                                                         <td style={{color: "black"}} id="vip_4">0</td>
                                                      </tr>
                                                      <tr class="tbl-color" style={{background: "#124350",
                                                        color:" white"}}>
                                                         <td>Diamond - BSXG 1000:</td>
                                                         <td id="plan_5">0</td>
                                                         <td id="vip_5">0</td>
                                                      </tr>
                                                      <tr>
                                                         <td style={{color: "black"}}>Ruby - BSXG 2000:</td>
                                                         <td style={{color: "black"}} id="plan_6">0</td>
                                                         <td style={{color: "black"}} id="vip_6">0</td>
                                                      </tr>
                                                      <tr class="tbl-color" style={{background: "#124350",
                                                        color:" white"}}>
                                                         <td>Emerald - BSXG 3000:</td>
                                                         <td id="plan_10">0</td>
                                                         <td id="vip_10">0</td>
                                                      </tr>
                                                      <tr>
                                                         <td style={{color: "black"}}>Sapphire - BSXG 5000:</td>
                                                         <td style={{color: "black"}} id="plan_7">0</td>
                                                         <td style={{color: "black"}} id="vip_7">0</td>
                                                      </tr>
                                                      <tr class="tbl-color" style={{background: "#124350",
                                                        color:" white"}}>
                                                         <td>Dubai Tour - BSXG 10000:</td>
                                                         <td id="plan_8">0</td>
                                                         <td id="vip_8">0</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12" style={{paddingBottom: "5%"}}>
                                        <div class="tree">
                                          <ul class="clearfix ul-responsive" style={{left: "30% !important"}}>
                                             <li style={{justifyContent:"center",display:"flex"}}>
                                                <a class="top-child pt-1" href="/home">
                                                                                                      <img src="/images/logo.png" alt="" style={{height:"200px",width:"350px"}}/>
                                                                                                      <p><span> </span><br/><span></span></p>
                                                   {/* <div class="tree-person-details hang-down">
                                                      <table class="table table-striped mb-0 table-sm table-bordered">
                                                         <tbody>
                                                            <tr>
                                                               <td class="td-color">Name</td>
                                                               <td class="td-color">  </td>
                                                            </tr>
                                                            <tr>
                                                               <td class="td-color">Refer Code</td>
                                                               <td class="td-color"></td>
                                                            </tr>
                                                            <tr>
                                                               <td class="td-color">Plan Name</td>
                                                               <td class="td-color"></td>
                                                            </tr>
                                                            <tr>
                                                               <td class="td-color">Parent Refer</td>
                                                               <td class="td-color">NA</td>
                                                            </tr>
                                                            <tr>
                                                               <td class="td-color">Activation Date:</td>
                                                               <td class="td-color"></td>
                                                            </tr>
                                                         </tbody>
                                                      </table>
                                                   </div> */}
                                                </a>
                                                <ul>
                                                                                                   </ul>
                                             </li>
                                          </ul>
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
   </div>
</section>
    </>
  )
}
