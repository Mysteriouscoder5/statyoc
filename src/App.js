import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import ScrollToTop from "./components/scrolltotop";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Bcmainmenu from "./components/bcmenu";
import Pcmainmenu from "./components/pcmenu";
import Ccmainmenu from "./components/ccmenu";
import SimpleBackdrop from "./components/backdrop";
import $ from "jquery";
import Footer from "./components/footer";
// import Signin from "./components/signin";
// import Signup from "./components/signup";
// import Cart from "./components/cart";

function App() {
  const [itemCount, setitemCount] = useState(0);

  const [backdrop, setbackdrop] = useState(true);

  $(window).on("load", () => {
    setbackdrop(false);
  });
  if (backdrop === true) {
    return <SimpleBackdrop />;
  } else {
    return (
      <div>
        <Header itemCount={itemCount} />
        <ScrollToTop />
        <Routes>
          <Route
            path="/*"
            element={<Home setitemCount={setitemCount} itemCount={itemCount} />}
            exact
          />
          {/* <Route path="/SignIn" element={<Signin />} exact /> */}
          {/* <Route path="/CreateAccount" element={<Signup />} exact /> */}
          {/* <Route path="/Cart" element={<Cart itemCount={itemCount} />} exact/> */}

          <Route path="/BakeryCakes" element={<Bcmainmenu />} />
          <Route path="/PremiumCakes" element={<Pcmainmenu />} />
          <Route path="/CustomizedCakes" element={<Ccmainmenu />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
