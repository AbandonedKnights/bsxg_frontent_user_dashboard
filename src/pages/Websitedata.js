import React from 'react'
import { N_getWebsiteData } from '../utils/api_functions'
import { useDispatch } from 'react-redux';
import { GET_WEBSITE_DATA } from '../features/WebData';
const Websitedata = () => {
  const dispatch = useDispatch();
  return (
   N_getWebsiteData().then((res)=>{
   if (res.status === 200) {
    dispatch(GET_WEBSITE_DATA({webdata: res.data.params.website}));
    return res.data.params.website;
  }
    
   })
  )
}

export default Websitedata