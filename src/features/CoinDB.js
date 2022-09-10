import {
    createSlice
  } from "@reduxjs/toolkit";
  const initialValue = {
    // wallet_loading: true,
    coins_loading: true,
    pending_order_loading: true,
    close_order_loading:true,
    user_fav_loading: true,
    wallet: [],
    buymarket: {
      marketprice: 0,
      marketvolume: 0,
      active:0,
    },
    sellmarket: {
      marketprice: 0,
      marketvolume: 0,
      active:0,
    },
  };
  
  export const CoinDBSlice = createSlice({
    name: "coinDB",
    initialState: {
      value: initialValue,
    },
    reducers: {
        GET_COIN_DATA: (state, action) => {
        state.value.coins = [...action.payload.coins]
      },
      BUY_MARKET_PRICE:(state,action)=>{
        state.value.buymarket=[action.payload.buy_market]
      },
      SELL_MARLKET_PRICE:(state,action)=>{
        state.value.sellmarket=[action.payload.sell_market]
      },
      SET_WALLET_DETAILS:(state,action)=>{
        state.value.wallet=[action.payload.wallet_details]
      }
    
    },
  });
  
  export const {
    GET_COIN_DATA,
    BUY_MARKET_PRICE,
    SELL_MARLKET_PRICE
    
  } = CoinDBSlice.actions;
  
  export default CoinDBSlice.reducer;