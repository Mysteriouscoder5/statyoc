import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <>
        <section id="signup" className="p-5 bg-light mb-5">
          <div className="container-fluid ">
            <div className="row justify-content-center">
              <div className="col p-3" style={{ maxWidth: "640px" }}>
                <div className="mb-5">
                  <h2>Create Account</h2>
                </div>

                <div className="">
                  <form action="">
                    <div className="mb-4">
                      <label for="" className="form-label">
                        First Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="form-control capi p-3"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label for="" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        className="form-control capi p-3"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label for="" className="form-label">
                        Email Id
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your email-id"
                        className="form-control capi p-3"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label for="" className="form-label">
                        Contact Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your contact number"
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
                          backgroundColor: " #FFBD59",
                          color: "#100600",
                        }}
                      >
                        SIGN UP
                      </button>
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

export default Signup;
