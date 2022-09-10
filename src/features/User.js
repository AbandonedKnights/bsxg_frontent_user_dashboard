import {
  createSlice
} from "@reduxjs/toolkit";
let id = "";
id = localStorage.getItem("exchange_inrx_userID");

const initialValue = {
  isLoggedIn: id ? true : false,
  userInfo: {
    user_id:id,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialValue,
  },
  reducers: {
    login: (state, action) => {
      console.log("Login Payload", action.payload);
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = {isLoggedIn:false, userInfo:{}};
    },
  },
});

export const {
  logout,
  login
} = userSlice.actions;
export default userSlice.reducer;