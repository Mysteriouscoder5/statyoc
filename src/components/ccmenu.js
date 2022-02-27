import Item from "./item";
import cake1 from "../cake1.jpg";
import cake2 from "../cake2.jpg";
import cake3 from "../cake3.jpg";
import cake4 from "../cake4.jpg";
import cake5 from "../cake5.jpg";
import cake6 from "../cake6.jpg";
import cake7 from "../cake7.jpg";
import cake8 from "../cake8.jpg";
// import Visitingmenu from "./visitingmenu";
import React from "react";

export default function ccmainmenu() {
  return (
    <>
      {/* <Visitingmenu /> */}
      <section className="p-1 bg-light pt-2">
        <div className="shadow-sm ccmenu pb-5 px-2">
          <div className="p-2 pb-0">
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

          <div className="container-fluid p-1 pt-0 ">
            <div className="row  justify-content-center">
              <Item itemname="CAKE NAME" itemcode="CC00001" img={cake6} />
              <Item itemname="CAKE NAME" itemcode="CC00002" img={cake2} />
              <Item itemname="CAKE NAME" itemcode="CC00003" img={cake8} />
              <Item itemname="CAKE NAME" itemcode="CC00004" img={cake5} />
              <Item itemname="CAKE NAME" itemcode="CC00005" img={cake3} />
              <Item itemname="CAKE NAME" itemcode="CC00006" img={cake7} />
              <Item itemname="CAKE NAME" itemcode="CC00007" img={cake4} />
              <Item itemname="CAKE NAME" itemcode="CC00008" img={cake1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
