import React from "react";

const Activitylog = () => {
  return (
    <>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <div className="card">
      <div
            class="card-header"
            style={{
              borderColor: "#c6d0e0",
              background: "#f5f9ff",
              color: "#084298",
            }}
          >
            <h5 className=" pt-1 ">Login History</h5>
          </div>
        <div className="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr className="tbleclass">
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div></div>
    </>
  );
};

export default Activitylog;
