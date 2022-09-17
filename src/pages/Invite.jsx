import React, {useEffect, useState} from 'react';
import {api_test} from "../utils/api";
import { useSelector } from "react-redux";

const Invite = () => {
    const { userInfo } = useSelector((state) => state?.user?.value);
	const user_id = userInfo.user_id;
	const [reffaralid, setRffaralId] = useState("");
	const [name, setName] = useState("");
    useEffect(()=>{
		api_test
		.post("getRefferalInfo", {
			user_id:user_id
		})
		.then((res) => {
		  let data =res.data; 
		  if(data.status == 200){
			setRffaralId(data.profile_data.user)
			setName(data.profile_data.name)
		  }
		  
		})
		.catch((error) => {
		  console.log("user", error);
		})
	  }, [])
  return (
    <div><div class="col-xxl-2 col-xl-2 col-lg-2 col-md-1 col-sm-6 icon-alignment" style={{justifyContent: "center",
    display: "flex"}}>
     <button class="show-modal btn-toggle-modal"
         type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
         style={{ margin: "0px !important", background: "none" }} id="invite_modal">
         <div class="process__item mb-10">
             <div class="process__icon mb-2" style={{justifyContent:"center",display:"flex"}}>
                 <img src="./images/buy_sell_icon/Invite-new.png" alt="" class="icon-size" />
             </div>
             <div class="process__content">
                 <p class="icon-name">Invite</p>
             </div>
         </div>
     </button>
 </div>
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h3 class="modal-title" id="exampleModalLabel" style={{ color: "black", textAlign: "center" }}>Get up to 2000% Rewards</h3>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body" style={{background:"#d5cece"}}>
							<div style={{
								justifyContent: "center",
								display: " flex",
								margin: "10px"
							}}>
								<div style={{ height: "100px", width: "200px", border: "1px solid gray",borderRadius:"5px",background:"white",textAlign:"center" }}>
                                      <p>https://bsxg.io/register/{reffaralid}</p>
									  <h5>{name}</h5>
								</div>

							</div>
                          <div style={{justifyContent:"center",display:"flex"}}>
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style={{marginRight:"10px"}}>Copy Link</button>
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Signup</button>
						</div>
						</div>
						{/* <div class="modal-footer">
							Share
						</div> */}
					</div>
				</div>
			</div>
 
 </div>
  )
}

export default Invite