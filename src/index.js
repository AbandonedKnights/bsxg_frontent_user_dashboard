import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/User";
import  exchangeReducer from "./features/Exchange";
import "./utils/i18n";
import Loading from "./components/Loading";
import coinDBReducer from "./features/CoinDB"
import WebDataReducer from "./features/WebData"
const store = configureStore({
  reducer: {
    user: userReducer,
    exchange:exchangeReducer,
    coinDB:coinDBReducer,
    WebData:WebDataReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
