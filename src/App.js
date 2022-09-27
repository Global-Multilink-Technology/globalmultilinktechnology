import React from "react"
import { Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./Views/Home/Home";
import ProductDetails from "./Views/product/ProductDetails";
import BuyNow from "./Views/BuyNow/BuyNow";
import GMLTcalculator from "./GMLTCalculator/gmltCalculator";
import Quotation from "./GMLTCalculator/Quotation";
import Cart from "./Views/Cart/Cart";



const App =()=>
{
 
  return(    
      <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ProductDetails" element={<ProductDetails/>} />
        <Route path="/BuyNow" element={<BuyNow/>} />
        <Route path="/gmltCalculator" element={<GMLTcalculator />} />
        <Route path="/Quotation" element={<Quotation />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
   
  )
}

export default App;
