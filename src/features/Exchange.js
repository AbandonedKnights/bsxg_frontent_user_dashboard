import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
  orderHistory: {},
  sellOrder: {},
  buyOrder: {},
  coins: [],
  cmcLoading: true,
  paired_currency: ["BTC", "USDT", "INRX", "INR"],
  paired_currency_price: '',
  active_coin_details: {},
  active_coin: "BTC",
  active_paired_currency: "INR",
  user_fav_currency: "INR",
  user_fav_currency_rate: 1,
  currency_prefix: {
    INR: "₹ ",
    USDT: "$ ",
    BTC: " ฿",
    INRX: "INRX",
  },
  user_order_close:[],
  user_order_pending:[],
  currency_graph: [],
  switch_theme:"dark"
};

export const exchangeSlice = createSlice({
  name: "exchange",
  initialState: {
    value: initialValue,
  },
  reducers: {
    cmcPayload: (state, action) => {
      state.value.coins = [...action.payload.coins];
      state.value.cmcLoading = action.payload.cmcLoading;
    },
    buy_Order: (state, action) => {
      state.value.buyOrder = action.payload.buyOrder;
    },
    sell_Order: (state, action) => {
      state.value.sellOrder = action.payload.sellOrder;
    },
    order_History: (state, action) => {
      state.value.orderHistory = action.payload.orderHistory;
    },
    set_active_coin: (state, action) => {
      state.value.active_coin = action.payload.coin;
    },
    set_active_paired_currency: (state, action) => {
      state.value.active_paired_currency = action.payload.pcoin;
    },
    set_currency_prefix: (state, action) => {
      state.value.currency_prefix = action.payload.prefix_currency;
    },
    SET_USER_FAV_CURRENCY: (state, action) => {
      state.value.user_fav_currency = action.payload.favcurrency;
    },
    set_pc_price: (state, action) => {
      // console.log("action::", action.payload)
      state.value.paired_currency_price = action.payload.data;
    },
    set_active_coin_details: (state, action) => {
      state.value.active_coin_details = action.payload.data;
    },
    set_user_order_pending:(state,action)=>{
      // console.log(action.payload.pending_order,"action.payload.pending_order");
      state.value.user_order_pending=action.payload.pending_order
    },
    set_user_order_close:(state,action)=>{
      state.value.user_order_close=action.payload.close_order
    },
    GET_CURRENCY_DATA:(state,action)=>{
      state.value.currency_graph=action.payload.cur_graph
    },
    WEB_THEME:(state,action)=>{
      state.value.switch_theme =action.payload.switchtheme
    },
    SET_USER_FAV_CURRENCY_RATE:(state,action)=>{
      state.value.user_fav_currency_rate =action.payload.currencyrate
    }
  },
});

export const {
  cmcPayload,
  order_History,
  sell_Order,
  buy_Order,
  set_active_coin,
  set_active_paired_currency,
  set_pc_price,
  set_active_coin_details,
  set_user_order_pending,
  set_user_order_close,
  GET_CURRENCY_DATA,
  WEB_THEME,
  SET_USER_FAV_CURRENCY_RATE,
  SET_USER_FAV_CURRENCY
} = exchangeSlice.actions;

export default exchangeSlice.reducer;
