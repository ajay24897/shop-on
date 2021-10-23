import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import Loader from "./Hooks/loader.js";
import About from "./Pages/about";

import Cart from "./Pages/cart";
import Home from "./Pages/home";
import Men from "./Pages/men";
import Women from "./Pages/women";
import SingIn from "./Pages/signIn";
import NetworkInfo from "./Components/NetworkInfo.js";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const loader = useSelector((state) => state.LoaderReducer);

  // window.addEventListener("offline", function (e) {
  //   console.log("offline");
  // });

  // window.addEventListener("online", function (e) {
  //   console.log("online");
  // });

  return (
    <div>
      <Router>
        {loader && <Loader />}
        <Navbar />
        <div style={{ height: 40 }} />
        <NetworkInfo />
        <div className="page-height">
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/product/men"} component={Men} />
            <Route exact path={"/product/women"} component={Women} />
            <Route exact path={"/cart"} component={Cart} />
            <Route exact path={"/singIn"} component={SingIn} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/product/men/:id"} component={Men} />
            <Route exact path={"/product/women/:id"} component={Women} />
            <Route exact path={"/:id"} component={Home} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

{
  /* // import { useSelector, useDispatch } from "react-redux";
// const disatch = useDispatch();
// const selectector = useSelector((state) => state.cart);
// import { decreament, increament } from "./redux/actions/cart"; */
}

{
  /* Counter:{selectector} */
}
{
  /* <button onClick={() => disatch(increament(10))}>Increament </button>
        <button onClick={() => disatch(decreament(10))}>DECREMENT </button> */
}
