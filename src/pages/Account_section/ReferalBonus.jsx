import React from "react";
import AccountTab from "./AccountTab";
const ReferalBonus = () => {
  return (
    <>
      <AccountTab />
      <div
        class="alert alert-primary p-1 mt-2"
        role="alert"
        style={{ borderColor: "#639cec" }}
      >
        <p className="p-0">
          {" "}
          <i className="fas fa-warning" /> Please do not disclose the password
          of your account, SMS and Google Authentication codes to anyone,
          including our staff. Beware of online fraud. Hotbit staff will not ask
          for your account information or password in any means.
        </p>
      </div>

      <div className="mb-1" style={{ color: "#2a5095" }}>
        <div className="card">
          <div className="container mt-3 mb-3">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div class="card refcard">
                  <div class="card-body text-center">
                    <div className="fw-bold"> TOTAL REFERRED FRIENDS</div>
                    <h6>
                      {" "}
                      <i className="fas fa-user"></i> 2
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div class="card refcard">
                  <div class="card-body text-center">
                    <div className="fw-bold"> TOTAL COMMISSIONS EARNED</div>

                    <h6 className="">1600 (BTEX)</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div class="card refcard">
                  <div class="card-body text-center">
                    <div className="fw-bold"> YOUR COMMISSION RATE</div>
                    <h6>800 (BTEX)</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* table */}

          <div className="container">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr style={{color:"#2a5095"}}>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Dates</th>
                    <th scope="col">Coin</th>
                    <th scope="col">COMMISSION</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* table end */}
        </div>
      </div>
    </>
  );
};

export default ReferalBonus;
