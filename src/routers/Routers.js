import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";

function Routers() {
  return (
    <Routes>
        <Route path= "/" element={<Navigate to = "home" />} />
      <Route path="home" element={<Home />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="ProductDetails" element={<ProductDetails />} />
      <Route path="Checkout" element={<Checkout />} />
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Cart" element={<Cart />} />
    </Routes>
  );
}

export default Routers;
