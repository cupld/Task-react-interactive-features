
import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css"
import CookieDetail from "./components/CookieDetail"
import cookies from "./products"
import React, { useState } from "react";



function App() {

const [cookei,setCookie] = useState();
  return (
    <div>
      <Home />
      <ProductList />
      <CookieDetail cookies={cookies} />
    </div>
  );
}

export default App;
