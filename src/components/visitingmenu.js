import cakez1 from "../cakez1.jpg";
import cakez2 from "../cakez2.jpg";
import cakez3 from "../cakez3.jpg";
import cakez4 from "../cakez4.jpg";
import "./visitingmenu.css";

import { Link } from "react-router-dom";
import React from "react";

export default function visitingmenu() {
  return (
    <section className="bg-light pt-2 mt-3 shadow-sm ">
      <div className="pt-4 pb-2 ">
        <h4 className="text-center fw-bolder ">CAKE CATEGORIES</h4>
      </div>
      <div className="d-flex justify-content-evenly py-3 pb-0  flex-wrap shadow-sm">
        <div className="  justify-content-center text-center headtit  mb-1">
          <Link to="/BakeryCakes" style={{ textDecoration: "none" }}>
            <div className="card border-0   bg-light">
              <img
                src={cakez1}
                className="card-img-top rounded-circle  "
                alt="..."
              />
              <div className="card-body my-2 p-0">
                <div
                  className="card-title  fw-normal text-dark "
                  style={{ fontSize: "1.5em", textDecoration: "none" }}
                >
                  Bakery Cakes
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="  justify-content-center text-center headtit  mb-1">
          <Link to="/PremiumCakes" style={{ textDecoration: "none" }}>
            <div className="card border-0  bg-light">
              <img
                src={cakez2}
                className="card-img-top rounded-circle "
                alt="..."
              />
              <div className="card-body my-2 p-0">
                <div
                  className="card-title  fw-normal text-dark "
                  style={{ fontSize: "1.5em", textDecoration: "none" }}
                >
                  Premium Cakes
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="   justify-content-center text-center headtit  mb-1">
          <Link to="/CustomizedCakes" style={{ textDecoration: "none" }}>
            <div className="card border-0  bg-light">
              <img
                src={cakez3}
                className="card-img-top  rounded-circle "
                alt="..."
              />
              <div className="card-body my-2 p-0">
                <div
                  className="card-title  fw-normal text-dark "
                  style={{ fontSize: "1.5em", textDecoration: "none" }}
                >
                  Customized Cakes
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="  justify-content-center text-center headtit  mb-1">
          <Link to="/PremiumCakes" style={{ textDecoration: "none" }}>
            <div className="card border-0  bg-light">
              <img
                src={cakez4}
                className="card-img-top rounded-circle "
                alt="..."
              />
              <div className="card-body my-2 p-0">
                <div
                  className="card-title  fw-normal text-dark "
                  style={{ fontSize: "1.5em", textDecoration: "none" }}
                >
                  Party Essentials
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
