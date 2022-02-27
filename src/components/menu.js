import React, { useState } from "react";
import $ from "jquery";
import "./item.css";
import "./menu.css";
import Item from "./item";
import Visitingmenu from "./visitingmenu";
import cake1 from "../cake1.jpg";
import cake2 from "../cake2.jpg";
import cake3 from "../cake3.jpg";
import cake4 from "../cake4.jpg";
import cake5 from "../cake5.jpg";
import cake6 from "../cake6.jpg";
import cake7 from "../cake7.jpg";
import cake8 from "../cake8.jpg";

function ViewMore({ num, clss }) {
  const [btnText, setbtnText] = useState("VIEW MORE");
  const [tog, settog] = useState(true);

  function ShowHidden(e) {
    e.preventDefault();
    $(`${num}`).slideToggle();
    settog(false);
    // console.log(tog);
    if (tog === true) {
      $(`.${clss} svg`).css({
        transform: "rotate(-180deg)",
      });
    } else if (tog === false) {
      $(`.${clss} svg`).css({
        transform: "rotate(0deg)",
        transition: " transform 0.3s ease-in-out",
      });
      settog(true);
    }
  }

  function changeText(e) {
    e.preventDefault();
    if (btnText === "VIEW MORE") {
      setbtnText("VIEW LESS");
    } else if (btnText === "VIEW LESS") {
      setbtnText("VIEW MORE");
    }
  }

  return (
    <>
      <div className=" mx-auto text-center p-5 d-none d-md-block ">
        <button
          href={num}
          className={`btn fw-bold ${clss}`}
          onClick={(e) => {
            ShowHidden(e);
            changeText(e);
          }}
        >
          {btnText}
        </button>
      </div>
      <div className="mx-auto text-center p-3 pb-4 d-block d-md-none ">
        <button
          href={num}
          className={`btn fw-bold ${clss}`}
          onClick={(e) => {
            ShowHidden(e);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

function Menu() {
  function Bcmenu() {
    return (
      <>
        <section className=" bg-light p-1 ">
          <div className="shadow-sm pb-0  px-2 bcmenu ">
            <div className="  p-2 pb-0">
              <div>
                <h4 className="text-center fw-bold">Fresh Cakes</h4>
              </div>
              <div className="justify-content-center text-center d-flex mb-2">
                <div
                  className="rounded-pill "
                  style={{
                    width: "30px",
                    backgroundColor: "black",
                    height: "3px",
                  }}
                ></div>
              </div>
            </div>
            <div className="container-fluid  p-1 pt-0  ">
              <div className="row  justify-content-center">
                <Item itemname="CAKE NAME" itemcode="BC00001" img={cake1} />
                <Item itemname="CAKE NAME" itemcode="BC00002" img={cake2} />
                <Item itemname="CAKE NAME" itemcode="BC00003" img={cake3} />
                <Item itemname="CAKE NAME" itemcode="BC00004" img={cake4} />
              </div>
              <div
                id="scrollmenu1"
                className="row p-1 mt-3  scroll-menu1 justify-content-center"
                style={{ display: "none" }}
              >
                <Item itemname="CAKE NAME" itemcode="BC00005" img={cake4} />
                <Item itemname="CAKE NAME" itemcode="BC00006" img={cake8} />
                <Item itemname="CAKE NAME" itemcode="BC00007" img={cake2} />
                <Item itemname="CAKE NAME" itemcode="BC00008" img={cake3} />
              </div>
            </div>

            <ViewMore num="#scrollmenu1" clss="view-more1 " />
          </div>
        </section>
      </>
    );
  }
  function Pcmenu() {
    return (
      <>
        <section className=" bg-light p-1">
          <div className="shadow-sm pb-0 px-2 pcmenu ">
            <div className="  p-2 pb-0">
              <div>
                <h4 className="text-center fw-bold">Premium Cakes</h4>
              </div>
              <div className="justify-content-center text-center d-flex mb-2">
                <div
                  className="rounded-pill "
                  style={{
                    width: "30px",
                    backgroundColor: "black",
                    height: "3px",
                  }}
                ></div>
              </div>
            </div>
            <div className="container-fluid p-1 pt-0 ">
              <div className="row  justify-content-center">
                <Item itemname="CAKE NAME" itemcode="PC00001" img={cake5} />
                <Item itemname="CAKE NAME" itemcode="PC00002" img={cake6} />
                <Item itemname="CAKE NAME" itemcode="PC00003" img={cake7} />
                <Item itemname="CAKE NAME" itemcode="PC00004" img={cake8} />
              </div>
              <div
                id="scrollmenu2"
                className="row p-1 mt-3  scroll-menu2 justify-content-center"
                style={{ display: "none" }}
              >
                <Item itemname="CAKE NAME" itemcode="PC00005" img={cake1} />
                <Item itemname="CAKE NAME" itemcode="PC00006" img={cake7} />
                <Item itemname="CAKE NAME" itemcode="PC00007" img={cake3} />
                <Item itemname="CAKE NAME" itemcode="PC00008" img={cake6} />
              </div>
            </div>

            <ViewMore num="#scrollmenu2" clss="view-more2 " />
          </div>
        </section>
      </>
    );
  }
  function Ccmenu() {
    return (
      <>
        <section className="  bg-light p-1">
          <div className="shadow-sm pb-0 px-2 ccmenu">
            <div className=" p-2 pb-0">
              <div>
                <h4 className="text-center fw-bold">Customized Cakes</h4>
              </div>
              <div className="justify-content-center text-center d-flex mb-2">
                <div
                  className="rounded-pill "
                  style={{
                    width: "30px",
                    backgroundColor: "black",
                    height: "3px",
                  }}
                ></div>
              </div>
            </div>

            <div className="container-fluid  p-1 pt-0 ">
              <div className="row  justify-content-center">
                <Item itemname="CAKE NAME" itemcode="CC00001" img={cake1} />
                <Item itemname="CAKE NAME" itemcode="CC00002" img={cake2} />
                <Item itemname="CAKE NAME" itemcode="CC00003" img={cake3}/>
                <Item itemname="CAKE NAME" itemcode="CC00004" img={cake5}/>
              </div>
              <div
                id="scrollmenu3"
                className="row p-1 mt-3  scroll-menu3 justify-content-center"
                style={{ display: "none" }}
              >
                <Item itemname="CAKE NAME" itemcode="CC00005" img={cake5} />
                <Item itemname="CAKE NAME" itemcode="CC00006" img={cake2} />
                <Item itemname="CAKE NAME" itemcode="CC00007" img={cake8} />
                <Item itemname="CAKE NAME" itemcode="CC00008" img={cake3} />
              </div>
            </div>

            <ViewMore num="#scrollmenu3" clss="view-more3 " />
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <Visitingmenu />

      {/* FULLMENU */}

      {/*<div
        id="carouelExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{transition: "transform .3s ease-in-out"}}
      >
        <div className="carousel-inner">
          <div className=" carousel-item active" style={{transition: "transform .3s ease-in-out"}}>
            <div className="row" style={{transition: "transform .3s ease-in-out"}} >

              <Item itemname="CAKE NAME4" itemcode="BC00005" />
              <Item itemname="CAKE NAME5" itemcode="BC00006" />
              <Item itemname="CAKE NAME6" itemcode="BC00007" />
              <Item itemname="CAKE NAME7" itemcode="BC00008" />
            </div>
          </div>
          <div className=" carousel-item" style={{transition: "transform .3s ease-in-out"}}>
            <div className="row" style={{transition: "transform .3s ease-in-out"}}>

            <Item itemname="CAKE NAME4" itemcode="BC00005" />
            <Item itemname="CAKE NAME5" itemcode="BC00006" />
            <Item itemname="CAKE NAME6" itemcode="BC00007" />
            <Item itemname="CAKE NAME7" itemcode="BC00008" />
            </div>
          </div>
          <div className="carousel-item" style={{transition: "transform .3s ease-in-out"}}>
            <div className="row" style={{transition: "transform .3s ease-in-out"}}>

            <Item itemname="CAKE NAME4" itemcode="BC00005" />
            <Item itemname="CAKE NAME5" itemcode="BC00006" />
            <Item itemname="CAKE NAME6" itemcode="BC00007" />
            <Item itemname="CAKE NAME7" itemcode="BC00008" />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <Bcmenu />
      <Pcmenu />
      <Ccmenu />
    </>
  );
}
export default Menu;
