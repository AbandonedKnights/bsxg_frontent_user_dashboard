import React,{useEffect,useState} from "react";
import Loader from "../../components/Loader";
import { N_getSupportedCurrency } from "../../utils/api_functions";
import { useSelector ,useDispatch} from "react-redux";
import {SET_USER_FAV_CURRENCY_RATE,SET_USER_FAV_CURRENCY} from "../../features/Exchange"
const Currency_preference = () => {
    const [loading, setLoading] = React.useState(true);
    const [currency, setCurrency] = React.useState([]);
    const {userInfo } = useSelector((state) => state?.user?.value);
    const activeCurrency ="INR"
 const userid = userInfo.user_id;
  //  const userid = "17e4e2c897c/u";
  useEffect(() => {
    N_getSupportedCurrency(userid)
      .then((d) => {
          console.log(d);
         setCurrency(d.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userInfo]);

  return (
      
    <>
      <div
        class="modal fade"
        id="currency_preference"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="currency_preferenceLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <p class="modal-title" id="currency_preferencedropLabel">
                <i className="fa-solid fa-cent-sign"></i> Currency Preference
              </p>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <p class="modal-title lableclass2">
                      Select your preferred display currency for all markets
                    </p>
                  </div>
                  <div className="col-12">
                    <div className="p-1 theme-color my-sidebox-shadow">
                      <div className="d-flex align-items-center bb-1 h-25">
                        {!loading ? (
                          <article>
                            {currency?.map((d, index) => {
                              return (
                                <CurrencyCard
                                  name={d.currency_name}
                                  symbol={d.currency_coin}
                                  icon={d.currency_logo}
                                  key={index}
                                  active={activeCurrency === d.currency_coin}
                                />
                              );
                            })}
                          </article>
                        ) : (
                          <Loader />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


function CurrencyCard(props) {
    const dispatch = useDispatch();
    const { coins,user_fav_currency } =
    useSelector((state) => state?.exchange?.value);
    return (
      <div
        className="d-flex bb-1 align-items-center row p-0 m-0"
        style={{ padding: "10px" }}
      >
        <div className="d-flex col-4">
          <div className="p-2">
            <img src={`${props.icon}`} height="25" width="25" alt="" />
          </div>
          <div className="p-1">
            <h5 className="pt-1">
              {props.name} ({props.symbol})
            </h5>
          </div>
        </div>
        <div className="offset-5 col-1">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  checked={props.symbol === user_fav_currency.toUpperCase()} onChange={()=>{
            dispatch(SET_USER_FAV_CURRENCY({favcurrency:props.symbol},()=>{
                dispatch(SET_USER_FAV_CURRENCY_RATE({currencyrate:coins[props.symbol.toUpperCase() + "INR"] !== undefined
                ? coins[props.symbol.toUpperCase() + "INR"].current_price
                : 1,
             }))
            }))
        }}/>

        </div>
      </div>
    );
  }
export default Currency_preference;
