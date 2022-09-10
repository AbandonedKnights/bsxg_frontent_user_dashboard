import {
    createSlice
  } from "@reduxjs/toolkit";
  const initialValue = {
   webData:[]
   
  };
  
  export const  WebDataSlice = createSlice({
    name: "WebData",
    initialState: {
      value: initialValue,
    },
    reducers: {
        GET_WEBSITE_DATA: (state, action) => {
        state.value.webData =action.payload.webdata
      },
     
    },
  });
  
  export const {
    GET_WEBSITE_DATA,
    
  } =  WebDataSlice.actions;
  
  export default WebDataSlice.reducer;