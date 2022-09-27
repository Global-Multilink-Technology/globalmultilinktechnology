import React from "react"
import "./Footer.css"
import {BsWhatsapp} from "react-icons/bs"
import {FiPhoneCall} from "react-icons/fi"
import {TbMathFunction} from "react-icons/tb"
import {HiOutlineMail} from "react-icons/hi"

const Footer = () =>
{
    return(
      <div className="fbody">
       <div className="footerCardContainer">
       <a href="https://wa.me/+2347063072036">
       <p className="cardTitle">Live Chat</p>
        <div className="cardIconText">
        <div className="cardIcon">
           <BsWhatsapp color="whitesmoke" size={33}/>
        </div>
        <div className="cardText">          
             <p className="cardIconText">Mon-Sat, 7am-6pm</p>
             <p className="cardIconText">Sun, 12pm-6pm</p>
        </div>
        </div>
      </a>
        </div>

        <div className="footerCardContainer">
       <p className="cardTitle">Contact GMLT Sales</p>
        <div className="cardIconText">
        <div className="cardIcon">
           <FiPhoneCall color="whitesmoke" size={33}/>
        </div>
        <div className="cardText">
             <p className="cardIconNumber">+2348063540500</p>
             <p className="cardIconNumber">+2347063072036</p>
             <p className="cardIconText">Mon-Sat, 7am-6pm</p>
             <p className="cardIconText">Sun, 12pm-6pm</p>
        </div>
        </div>
      
        </div>

        <div className="footerCardContainer">
        <a href="/gmltcalculator">
       <p className="cardTitle">Calculate your load</p>
        <div className="cardIconText">
        <div className="cardIcon">
           <TbMathFunction color="whitesmoke" size={33}/>
        </div>
        <div className="cardText">
             <p className="cardIconNumber">
                You can use <span className="calculatorText">GMLT smart software tool</span> to help 
                you calculate your load to know which inverter
              to buy,number of batteries,and panel ratings you need 
             </p>
           
        </div>
        </div> 
        </a>     
        </div>

        <div className="footerCardContainer">
       <p className="cardTitle">Contact us</p>
        <div className="cardIconText">
        <div className="cardIcon">
           <HiOutlineMail color="whitesmoke" size={33}/>
        </div>
        <div className="cardText">
             <p className="cardIconEmail"> 
                globalsolarpowersystems@gmail.com
             </p>
             <p className="cardIconEmail"> 
                globalsolarpowersystems@gmail.com
             </p>           
        </div>
        </div>
      
        </div>
    
        </div>
    )

}

export default Footer;