import React from "react"
import { useSelector,useDispatch } from "react-redux";
import HomeHeader from "../Home/Home.Header"
import "./BuyNow.css"
import {BsTelephoneOutbound} from "react-icons/bs"
import Footer from "../Footer/Footer";
import { getMultipleImage } from "../../Controller/ImageController/imageProcessor";



const BuyNow = ()=>
{
    const dispatch = useDispatch();
    const product = useSelector((data)=>data.counter.product)
    const image = product.map((data)=>data.image)
    const title = product.map((data)=>data.title)
    const details = product.map((data)=>data.details)
    const images = product.map((data)=>data.moreImage)
    const img = getMultipleImage(images)
   return(
    <div>
         <HomeHeader />
        <p className="BuyNow">Call Now</p>
        <p className="BuyNow">08063540500</p>
        <p className="BuyNow">08034839763</p>
        <img src={image}  className="img" alt = "GMLT LOGO" />
        <p className="title">{title}</p>
        <div className="ButtonContainer">
        <button className="BuyNowContainer" >       
       <p className="BuyNowText">Call us now</p>
       <span className="AddToCartIcon">
          <BsTelephoneOutbound color="red" size={23} />
       </span>        

     </button>
     </div> 
     <div className="detailsContainer">
           <p className="detailsText">Product Description</p>
        <p>
            {details}
        </p>
     </div>

     <div className="detailsContainer">
           <p className="detailsText">Image Gallery</p>
        <p>
            {
               img.map((data)=>
               <div key={data.id}>
               <img src={data.imgUrl}  alt="GMLT LOGO" className="img" />
               </div>
               )
            }
        </p>
     </div>

     <Footer />
    </div>
   )
}

export default BuyNow;