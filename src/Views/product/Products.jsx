import React from "react"
import ProductCard from "./ProductCard";
const ProductList = ({data}) =>
{

    return(
        <div>
             {
             data.map((data)=>
               <div key={data.id}>
               <ProductCard title={data.title} description={data.description} image={data.image} data={data} />
               </div>
               )
             }
        </div>
    )
}
export default ProductList;