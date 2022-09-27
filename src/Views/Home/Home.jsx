import React from "react"
import HomeHeader from "./Home.Header";
import ImageSlider from "../ImageSlider/ImageSlider";
import ProductList from "../product/Products";
import {productData} from "../product/MockData"
import Footer from "../Footer/Footer";
const Home =()=> 
{
    return ( 
     <div>
      <HomeHeader />
      <ImageSlider />
      <ProductList  data = {productData} />
      <Footer />
    </div>
    );
  }

  export default Home
  