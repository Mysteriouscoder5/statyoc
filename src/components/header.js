import logo from "../logo12.png";
import { Link } from "react-router-dom";
import React from "react";
import "./header.css";
// import headerbcg2 from "../headerbcg2.jpg";
// import bcg from "../OSZB621.eps"
// import bcg from "../O4Y0TY0.jpg";
// import $ from "jquery";

class Header extends React.Component {
  // Afterclick() {
  //   $("#menubutton").on("click", function (e) {
  //     // e.preventDefault();
  //     // // let $supp = $("#navbarSupportedContent");
  //     // // $supp.addClass("order-last order-lg-2 ");
  //     // let $supp = $("#offcanvasRight");
  //     // // $supp.addClass("offcanvas offcanvas-end ");
  //     // $supp.toggle();
  //     // // $supp.css(
  //     // //   "transition" , "transform 0.6s ease-in-out"
  //     // // )
  //     // // $supp.slideToggle();
  //   });
  // }

  // componentDidMount() {
  //   this.Afterclick();
  // }

  // handleclose() {
  //   let $supp = $("#offcanvasRight");
  //   $supp.removeClass("show")
  //   $supp.css({
  //     visibility: "hidden",

  //   })
  //   $supp.removeAttr("role")
  //   $supp.removeAttr("aria-modal")
  //   $supp.attr("aria-hidden","true")
  //   $("body").removeAttr("data-bs-overflow")
  //   $("div.offcanvas-backdrop.fade.show").remove()

  // }

  render() {
    return (
      <>
        <header
          className="navbar sticky-top py-0 "
          // style={{
          //   background:
          //     "linear-gradient(270deg,rgba(227,12,68,1)0%,rgba(255,189,89,1)100%)",
          // }}

          style={{
            backgroundColor: "#FFBD59",
            // background: `url(${headerbcg2}) no-repeat center center/cover`,
          }}
        >
          <nav className="container-fluid align-items-center px-2"
          
          >
            <div className="navbar-brand align-items-center py-0 ">
              <div className="navbar-brand">
                <img
                  src={logo}
                  alt=""
                  style={{ height: "3.5rem" }}
                  className=""
                />
                <div className="d-inline-flex fs-3 fw-bolder align-middle">
                  yoCAKE!
                </div>
              </div>
            </div>

            <div
              className="  justify-content-end d-none d-lg-flex ms-auto pe-0  "
              id="navbarSupportedContent"
            >
              <ul className="nav align-items-center justify-content-evenly">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="btn fw-bold fs-5"
                    id="home"
                    style={{ boxShadow: "none" }}
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="btn fw-bold fs-5"
                    style={{ boxShadow: "none" }}
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="btn fw-bold fs-5"
                    style={{ boxShadow: "none" }}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className="offcanvas offcanvas-end "
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
              style={{
                // backgroundColor: "#000",
                // color: "#FFBD59 ",
                transition: "transform .3s ease-in-out",
              }}
            >
              <div className="offcanvas-header ">
                <button
                  type="button"
                  className=" btn shadow-none ms-auto"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  data-bs-target="#offcanvasRight"
                  style={{ color: "#000 " }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    fill="currentColor"
                    className="bi bi-x-lg fw-bold"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="offcanvas-body justify-content-end ">
                <ul className="nav align-items-center p-1 justify-content-center row">
                  <li className="nav-item d-lg-none">
                    <Link
                      to="/"
                      className="btn fw-bold fs-6 p-2"
                      id="home"
                      style={{ boxShadow: "none", color: "#000 " }}
                    >
                      HOME
                    </Link>
                  </li>
                  <div
                    className="d-inline-block d-lg-none  rounded-pill my-3"
                    style={{ height: "1px", backgroundColor: "#000" }}
                  ></div>

                  <li className="nav-item d-lg-none">
                    <Link
                      to="/"
                      className="btn fw-bold fs-6 p-2"
                      style={{ boxShadow: "none", color: "#000 " }}
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <div
                    className="d-inline-block  d-lg-none rounded-pill my-3"
                    style={{ height: "1px", backgroundColor: "#000" }}
                  ></div>
                  <li className="nav-item d-lg-none">
                    <Link
                      to="/"
                      className="btn fw-bold fs-6  p-2"
                      style={{ boxShadow: "none", color: "#000 " }}
                    >
                      CONTACT
                    </Link>
                  </li>
                  <div
                    className="d-inline-block d-lg-none  rounded-pill my-3"
                    style={{ height: "1px", backgroundColor: "#000" }}
                  ></div>

                  <li>
                    <div
                      className="accordion accordion-flush"
                      id="accordionExample"
                      //   onMouseLeave={() => {
                      //     $("#collapseOne").removeClass("show")
                      //     $(".accordion-button").addClass("collapsed")
                      // }}
                    >
                      <div
                        className="accordion-item"
                        style={{
                          // backgroundColor: "#000",
                          color: "#000 ",
                        }}
                      >
                        <h2 className="accordion-header " id="headingOne">
                          <button
                            className="accordion-button border-0 collapsed fw-bold fs-6 p-2 shadow-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                            style={
                              {
                                // backgroundColor: "#000",
                                // color: "#FFBD59 ",
                              }
                            }
                          >
                            CAKE CATEGORIES
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse "
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                          style={{
                            transition: "transform .3s cubic-bezier(0, .52, 0, 1)",
                          }}
                        >
                          <div className="accordion-body">
                            <div>
                              <Link
                                to="/BakeryCakes"
                                className="fs-6 mb-2"
                                style={{
                                  color: "#000 ",
                                  textDecoration: "none",
                                }}
                              >
                                Bakery Cakes
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/PremiumCakes"
                                className="fs-6 mb-2"
                                style={{
                                  color: "#000 ",
                                  textDecoration: "none",
                                }}
                              >
                                Premium Cakes
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/CustomizedCakes"
                                className="fs-6 mb-2"
                                style={{
                                  color: "#000 ",
                                  textDecoration: "none",
                                }}
                              >
                                Custom Cakes
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div
                    className="d-inline-block   rounded-pill my-3"
                    style={{ height: "1px", backgroundColor: "#000" }}
                  ></div>
                </ul>
              </div>
            </div>

            <div className=" pe-0">
              <a
                id="menubutton"
                href="#offcanvasRight"
                data-bs-toggle="offcanvas"
                role="button"
                className="btn "
                style={{ boxShadow: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-list "
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </a>
            </div>
          </nav>
          <div
            className="container-fluid text-center p-2 d-flex justify-content-center align-items-center "
            style={{
              backgroundColor: "#000",
              color: "#FFBD59 ",
              letterSpacing: "0.1em",
            }}
          >
            <h6 className="pune m-0 align-middle me-1">
              DELIVERING ONLY IN PUNE
            </h6>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
