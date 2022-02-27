import { Link } from "react-router-dom";
import React from "react";

class Signin extends React.Component {
  render() {
    return (
      <>
        <section id="signin" className="p-5 bg-light mb-5 ">
          <div className="container-fluid ">
            <div className="row justify-content-center">
              <div className="col p-3" style={{ maxWidth: " 640px" }}>
                <div className="mb-5">
                  <h2>Login Details</h2>
                </div>

                <div className="">
                  <form action="">
                    <div className="mb-4">
                      <label for="" className="form-label">
                        Email Id / Contact Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your email-id / contact number"
                        className="form-control capi p-3"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label for="" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="form-control capi  p-3"
                        required
                      />
                    </div>

                    <div className=" text-center py-4 ">
                      <button
                        className="btn fw-bold fs-5 w-100 p-2"
                        style={{
                          backgroundColor: "#FFBD59",
                          color: " #100600",
                        }}
                      >
                        SIGN IN
                      </button>
                    </div>
                    <div className="mt-5 text-center">
                      <div className="mb-3 fs-4">Don't have an account?</div>
                      <div>
                        <Link
                          to="/CreateAccount"
                          className="btn fw-bold p-3 fs-6"
                          id="createaccount"
                          style={{
                            backgroundColor: "#FFBD59",
                            color: " #100600",
                          }}
                          // onClick={(document.title = "yoCAKE | CreateAccount")}
                        >
                          CREATE AN ACCOUNT
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Signin;
