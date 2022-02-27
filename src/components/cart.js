import logo from "../logo.png";
// import $ from "jquery";
import React, { useEffect, useState } from "react";

function CItem({ cake, subtotal }) {
 

  return (
    <>
      <div
        id={cake}
        className="row justify-content-center align-middle mt-3 shadow-sm"
      >
        <div
          style={{ margin: "1rem" }}
          className="col-6 p-0 fs-4  d-flex fw-normal align-items-center "
        >
          <button className="bg-light border-0 text-muted p-0" id="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
          {/* <div className="d-inline"> */}

          <img src={logo} alt="" className="ms-4" style={{ width: "6.5rem" }} />
          {/* </div> */}
          <span className="fs-6 mx-auto fw-bold">CAKE NAME</span>
        </div>
        <div
          style={{ margin: "1rem" }}
          className="col fs-4 fw-bold d-flex fw-normal align-items-center justify-content-evenly"
        >
          <div>$250</div>
        </div>
        <div
          style={{ margin: "1rem" }}
          className="col fs-4  d-flex fw-bold align-items-center justify-content-evenly"
        >
          <div className="d-flex  align-items-center px-4 ">
            <div id="totalnum">0</div>
            <div className="d-flex flex-column">
              <button className="bg-light border-0 text-muted btn shadow-none incre">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  className="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
              </button>
              <button className="bg-light border-0 text-muted btn shadow-none decre">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
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
          </div>
        </div>
        <div
          style={{ margin: "1rem" }}
          className="col fs-4 text-muted d-none d-lg-flex fw-bold align-items-center justify-content-evenly"
        >
          {subtotal}
        </div>
      </div>
    </>
  );
}

function ProceedToCheckout({ total }) {
  return (
    <>
      <div className="conatiner-fluid p-5 text-center mt-5">
        <div
          className="row mx-auto justify-content-center bg-light shadow pt-4"
          style={{ maxWidth: "600px", borderRadius: "10px" }}
        >
          <div className="row row-cols-2 gy-2">
            {/* <div className="fw-bold text-end">SUBTOTAL :</div>
            <div className="fw-bold text-start"></div> */}
            <div className="fw-bold text-end">TOTAL :</div>
            <div className="fw-bold text-start">{total}</div>
          </div>
          <div className="my-5">
            <button
              className="btn fw-bold"
              style={{ backgroundColor: "#FFBD59" }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Cart({ itemCount }) {
  const [Subtotal, setSubtotal] = useState([]);
  const [Total, setTotal] = useState(0);
  let i;
  let cartList = [];
  for (i = 1; i <= { itemCount }; i++) {
    cartList.push(<CItem setSubtotal={setSubtotal} />);
  }
  console.log(cartList);

  useEffect(() => {
    Subtotal.map((i, elements) => {
      setTotal(elements);

      return elements.reduce(elements[i] + elements[i++]);
    });
  }, [Subtotal]);

  return (
    <>
      <section className="p-5 bg-light">
        <div className="container-fluid p-5" style={{ maxWidth: "" }}>
          <div className="text-center fs-1">
            <h1 className="fs-1">Cart</h1>
          </div>
          <div className="row justify-content-center mt-5 text-center ">
            <div
              className="col-6 fs-5 fw-bold text-start ps-5"
              style={{ margin: "1rem" }}
            >
              Product
            </div>
            <div className="col fs-5 fw-bold" style={{ margin: "1rem" }}>
              Price
            </div>
            <div className="col fs-5 fw-bold" style={{ margin: "1rem" }}>
              Quantity
            </div>
            <div
              className="col fs-5 fw-bold d-none d-lg-flex"
              style={{ margin: "1rem" }}
            >
              Subtotal
            </div>
          </div>

          {cartList}
          {/* <CItem cake="#strawberry" subtotal={setSubtotal} />
          <CItem cake="#raspberry" subtotal={setSubtotal} />
          <CItem cake="#mango" subtotal={setSubtotal} /> */}

          <ProceedToCheckout total={Total} />
        </div>
      </section>
    </>
  );
}

export default Cart;
