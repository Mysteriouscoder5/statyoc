// import cake1 from "../bg-cake-1.jpg";
// import cake2 from "../bg-cake-2.jpg";
// import cake3 from "../bg-cake-3.jpg";
// import { data } from "jquery";
import { useState, useEffect } from "react";
import carousalbg from "../carousalbg.jpg";
import "./carousal.css";
// import carousalbg2 from "../carousalbg2.jpg"

function Carousal() {
  const [areapin, setareapin] = useState("");
  const [flag, setflag] = useState();
  const [modalmsg, setmodalmsg] = useState("");

  function updateareapin(e) {
    setareapin(e.target.value);
  }

  useEffect(() => {
    let pin = ["411027", "411004", "411003"];

    let found = pin.includes(areapin);
    let len = areapin.length;
    if (found === true) {
      setflag(1);

      setmodalmsg("WE DELIVER IN YOUR AREA");
    }
    if (found === false) {
      if (len !== 6 || typeof areapin !== Number) {
        setflag(2);

        setmodalmsg("PLS ENTER VALID PINCODE");
      } else {
        setflag(2);

        setmodalmsg("WE DONT DELIVER IN YOUR AREA");
      }
    }
  }, [areapin, flag]);

  function Deliverymodal() {
    return (
      <>
        <div
          className="modal fade "
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered text-center">
            <div className="modal-content">
              <div className="modal-body ">{modalmsg}</div>
              <div className="modal-footer p-1">
                <button
                  type="button"
                  className="btn btn-warning fw-bold text-black mx-auto"
                  data-bs-dismiss="modal"
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${carousalbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          id="carousal"
          className="p-3 align-middle row"
          style={{
            backdropFilter: "brightness(0.7)",
          }}
        >
          <div className="text-center text-white mt-auto">
            <h3>Delivering Happiness!!</h3>
          </div>

          <div className=" mx-auto " style={{ maxWidth: "900px" }}>
            <div className="input-group flex-nowrap rounded-pill bg-white p-1 mt-2">
              <span
                className="input-group-text rounded-pill border-0 bg-white"
                id="addon-wrapping"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control rounded-pill border-0 shadow-none"
                placeholder="Enter your exact pincode"
                aria-label="Pincode"
                aria-describedby="addon-wrapping"
                value={areapin}
                onChange={updateareapin}
              />

              <button
                type="button"
                className="btn btn-warning fw-bold rounded-pill shadow-none"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                CHECK
              </button>
            </div>
          </div>
        </div>
      </section>
      <Deliverymodal />
    </>
  );
}
export default Carousal;
