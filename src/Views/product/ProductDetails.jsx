import React from "react"
import { useSelector,useDispatch } from "react-redux";
import HomeHeader from "../Home/Home.Header"
import "./ProductDetails.css"
import {MdOutlineAddShoppingCart} from "react-icons/md"
import {BsCash} from "react-icons/bs"
import { addToCart } from "../../Redux/Slices/userSlice";
import Footer from "../Footer/Footer";
import { getMultipleImage } from "../../Controller/ImageController/imageProcessor";




const ProductDetails = ()=>
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
        <p className="productDetails">Product Details</p>
        <img src={image}  className="img" alt = "GMLT LOGO" />
        <p className="title">{title}</p>
        <div className="ButtonContainer">
        <button className="AddToCartContainer" onClick={()=>dispatch(addToCart(product))}>
       
             <p className="AddToCartText">Add to Cart</p>
             <span className="AddToCartIcon">
                <MdOutlineAddShoppingCart color="white" size={23} />
             </span>        
    
        </button>
        <button className="BuyNowContainer" onClick={()=>setTimeout(()=>{setTimeout(()=>window.location.href='/BuyNow',80)},10)}>       
       <p className="BuyNowText">Buy Now</p>
       <span className="AddToCartIcon">
          <BsCash color="red" size={23} />
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


export default ProductDetails;