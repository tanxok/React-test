import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

// Components
import Home from "./my/home";
import Renting from "./my/renting";
import Payment from "./my/payment";
import Contact from "./my/contact";
import Login from "./my/Login";
// import Main from './my/main';

function App() {
  return (
    <div>
    <Router>
      <Routes>
            <Route path="/" component={<Renting />} />
            <Route path="/test" component={Renting} />
            <Route path="/payment" component={Payment} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;
