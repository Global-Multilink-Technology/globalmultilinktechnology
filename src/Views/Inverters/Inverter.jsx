import React from "react"
import HomeHeader from "../Home/Home.Header";
import ImageSlider from "../ImageSlider/ImageSlider";
import ProductList from "../product/Products";
import {productData} from "../Inverters/MockData"
import Footer from "../Footer/Footer";
import "./Inverter.css"
const Inverter =()=> 
{
    return ( 
     <div>
      <HomeHeader />
      <p className="headText">INVERTERS</p>
      <ProductList  data = {productData} />
      <Footer />
    </div>
    );
  }

  export default Inverter;
  