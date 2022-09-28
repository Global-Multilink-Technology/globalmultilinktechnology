import React from  "react"
import "./Home.Header.css"
import {TiShoppingCart} from 'react-icons/ti'
import {RiAccountPinCircleFill} from 'react-icons/ri'
import { useSelector } from "react-redux"

const HomeHeader = ()=>
{

    const cart = useSelector((data)=>data.counter.cart)
    return(
        <div className="Header">
            <div className="container1">
                
                  <p className = "container1Text">Don't Know which inverter you need ?   <a href="/gmltcalculator"><span className="calculatorText">Find Out using GMLT Load calculator</span> </a> </p>
            </div>
            <div className="LOGO">
            <a href="/"> <img className="mb-4" src="./GMLTLOGO.jpg" alt="" width="72" height="57"  /></a>
                <p className="LOGOTEXT">GMLT </p>
               
                 <div className="cartIcon"> <a href="/cart"><TiShoppingCart size={23} color="red" /></a></div>
  
                 <p className="cartCounter">{cart.length}</p>               
                 <div className="menuIcon"><RiAccountPinCircleFill size={23} color="red" /></div>
            </div>
            <div className="listxDIV">
              <p className="listx"><a className="anchorText"href="/Inverter">Inverters</a></p>
              <p className="listx">Batteries</p> 
              <p className="listx">Panels</p>
              <p className="listx">Others</p>
            </div>
           <div>
               <p className="LOGOTITLE">Global MultiLinks Technology...</p>
           </div>

        </div>
    )

}

export default HomeHeader;