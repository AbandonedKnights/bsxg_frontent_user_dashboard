import React from "react";

const privacyControl = () => {
  return (
    <div
      class="modal fade"
      id="privacy"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="privacyLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="privacydropLabel">
              privacy
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div
              className="col-12"
              style={{ marginTop: "-16px" }}
            >
              <div className="p-2 theme-color my-sidebox-shadow">
                <div className="main-profile-pro d-flex align-items-center bb-1 h-25">
                  <i className="fa fa-shield ml-2 mr-2 mt-2" />
                  <h5 className="px-2 font-weight-bold pt-3 text-success">
                    Privacy Policy Control
                  </h5>
                </div>
                <article>
                  <div className="col-md-10">
                    <div className="sanfont ">
                      <div className="bold mb-2 d-flex">
                        You control your data, and we respect that.
                      </div>
                      <div className="text-secondary mb-2 d-flex">
                      <i className="fa fa-minus mt-1 text-success mr-3" aria-hidden="true"></i> <h6> For requests regarding:</h6>
                      </div>
                      <ul className="text-secondary mb-2 d-flex justify-content-between"  >
                        <li className="ml-2 mr-2 ">
                          <i
                            className="fa fa-circle text-success mr-2"
                            aria-hidden="true"
                          ></i>{" "}
                          Copy of your data
                        </li>
                        <li className="ml-2 mr-2 ">
                          <i
                            className="fa fa-circle text-success mr-2"
                            aria-hidden="true"
                          ></i>{" "}
                          Data export
                        </li>
                        <li className="ml-2 mr-2 ">
                          <i
                            className="fa fa-circle text-success mr-2"
                            aria-hidden="true"
                          ></i>{" "}
                          Data correction
                        </li>
                      </ul>
                      <div className="text-secondary ">
                        
                        Please reach out to us. Our team will be happy to help
                        you out.
                      </div>
                      <a
                        href="#support"
                        className="btn btn-success mt-2 mb-2 bold"
                      >
                        {" "}
                        Contact Us
                      </a>
                    </div>
                  </div>
                </article>
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
  );
};

export default privacyControl;
