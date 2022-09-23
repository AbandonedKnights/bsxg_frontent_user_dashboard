import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountTab from './AccountTab';
import Security_Setting from './Security_Setting';
const Account = () => {
    const { isLoggedIn } = useSelector((state) => state?.user?.value);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
          console.log("iw::", isLoggedIn);
          navigate("../", { replace: true });
        }
      }, [isLoggedIn]);
  return (
    <div className='accountbg'>
 
  <AccountTab/>
  <div class="alert alert-primary p-1 mt-2 col-lg-10 m-auto" role="alert" style={{borderColor:"#639cec" }}>
<p className="p-0" style={{textAlign:"center"}}> <i className="fas fa-warning"></i> Please do not disclose the password of your account, SMS and Google Authentication codes to anyone, including our staff. Beware of online fraud. Hotbit staff will not ask for your account information or password in any means.</p>
</div>
  <Security_Setting/>
  </div>
  )
}

export default Account