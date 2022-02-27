// import logo from "../logo.png";
import $ from "jquery";
import { useEffect, useState } from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import load from "../load.jpg";

function Item(props) {
  const [loading, setloading] = useState(true);

  // setTimeout(() => {
  //   setloading(false);
  // }, 500);

  function Loading() {
    return (
      <>
        <div className="col col-6 col-sm-3  mt-3 px-3 item ">
          <div className="card placeholder-glow" aria-hidden="true">
            <img src={load} className="placeholder card-img-top " alt="..." />
            <div className="card-body">
              <p className="card-text placeholder-glow">
                <span className="placeholder col-10"></span>
                <span className="placeholder col-6"></span>
              </p>
              <div className="placeholder-glow">
                <span className="placeholder  col-4"></span>
              </div>

              <h4 className="card-title placeholder-glow">
                <span className="placeholder col-12"></span>
              </h4>
            </div>
          </div>
        </div>
      </>
    );
  }

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  function handlecopy() {
    let value = `${props.itemcode}`;

    navigator.clipboard.writeText(value);
  }

  function copied() {
    let sp = `${props.itemcode}`;

    $("." + sp + " .first").hide();
    $("." + sp + " .second").show();
  }
  function blurcopied() {
    let sp = `${props.itemcode}`;
    $("." + sp + " .first").show();
    $("." + sp + " .second").hide();
  }
  useEffect(() => {
    $("img.card-img-top").on("load", () => {
      setloading(false);
    });
  }, [loading]);

  if (loading === true) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="col col-6 col-sm-3  mt-3  item ">
          <div
            className="card  border-0  itemcard"
            style={{ borderRadius: "10px" }}
          >
            <img
              src={props.img}
              className="card-img-top hov"
              alt="..."
              style={{ borderRadius: "13px" }}
            />
            <div className="card-body py-2 px-2 ">
              <h6
                className="card-title text-muted fw-bold mb-0"
                style={{ fontSize: "14px" }}
              >
                {props.itemname}
              </h6>
              <p className="card-text text-end mb-0 fw-bold">$250</p>
              <label
                htmlFor="exampleFormControlInput1"
                className="mb-1 fw-bold"
                style={{ fontSize: "13px" }}
              >
                Item Code :
              </label>

              <div
                className="input-group align-middle border-0  rounded-pill"
                style={{ backgroundColor: "#e9ecef" }}
              >
                <input
                  className={` form-control rounded-pill py-1 border-0 `}
                  type="text"
                  value={props.itemcode}
                  aria-label="itemcode"
                  disabled
                  readOnly
                />
                <BootstrapTooltip title={<span>Copy to clipboard</span>} arrow>
                  <button
                    className={`btn border-0 shadow-none `}
                    onClick={() => {
                      handlecopy();
                      copied();
                    }}
                    onBlur={blurcopied}
                  >
                    <span
                      className={`d-flex align-items-center ${props.itemcode}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-clipboard"
                        viewBox="0 0 16 16"
                      >
                        <path
                          className="first"
                          d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                        />
                        <path
                          className="first"
                          d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                        />
                        <path
                          className="second "
                          style={{ display: "none" }}
                          d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"
                        />
                        <path
                          className="second "
                          style={{ display: "none" }}
                          d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"
                        />
                      </svg>
                    </span>
                  </button>
                </BootstrapTooltip>
              </div>
            </div>
          </div>
        </div>

        {/* <Afterloading /> */}
      </>
    );
  }
}

export default Item;
