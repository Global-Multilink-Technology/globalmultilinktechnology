import React,{useState} from "react"
import HomeHeader from "../Views/Home/Home.Header";
import "./Quotation.css"
import Footer from "../Views/Footer/Footer";
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getInverterRating,getNumbersofBatteries } from "./SolarFunctions";



const Quotation = ()=>
{
   const load =  useSelector((data)=>data.counter.load)
   const INVERTER = getInverterRating(load);
   const NumOfBatteries = getNumbersofBatteries(load) 
   
   const inverterPrice = Number(INVERTER[1])
   const batteryCost = 185
   const acsurgePrice = 20
   const rackPrice = 25
   const accessoriesPrice =110
   return(
    <div>
      <HomeHeader />
      <h2 className="header">Your Quotation</h2>
      <h2 className="headerX">{Math.ceil(load)}watts</h2>
      <h2 className="header">INVERTER PHASE</h2>
      <div className="container">      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Item </th>
          <th>Rating</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Inverter</td>
          <td>{INVERTER[0]}KVA</td>
          <td>₦{inverterPrice}K</td>
          <td>1</td>
          <td>₦{inverterPrice}K</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Battery</td>
          <td>230Ah</td>
          <td>₦{batteryCost}k</td>
          <td>{NumOfBatteries}</td>
          <td>₦{(NumOfBatteries * batteryCost)}K</td>
        </tr>
        <tr>
        <td>3</td>
          <td>AC Surge</td>
          <td>-----</td>
          <td>₦{acsurgePrice}K</td>
          <td>1</td>
          <td>₦{acsurgePrice}K</td>
        </tr>
        <tr>
        <td>4</td>
          <td>Rack</td>
          <td>-----</td>
          <td>₦{rackPrice}K</td>
          <td>1</td>
          <td>₦{rackPrice}K</td>
        </tr>
        <tr>
        <td>5</td>
          <td>Accessory</td>
          <td>-----</td>
          <td>₦{accessoriesPrice}K</td>
          <td>----</td>
          <td>₦{accessoriesPrice}K</td>
        </tr>
        <tr>
        <td>6</td>
          <td>Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td>₦{inverterPrice+(batteryCost*NumOfBatteries)+acsurgePrice+rackPrice+accessoriesPrice}K</td>
        </tr>
      </tbody>
    </Table> 
      </div>
      <h2 className="header">SOLAR PHASE</h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Item </th>
          <th>Rating</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Panels</td>
          <td>330Watt</td>
          <td>₦78K</td>
          <td>4</td>
          <td>₦312K</td>
        </tr>
        <tr>
          <td>2</td>
          <td><p style={{fontSize:"12px"}}>Clamp & Hook</p></td>
          <td>---</td>
          <td>₦5k</td>
          <td>2</td>
          <td>₦10K</td>
        </tr>
        <tr>
        <td>3</td>
          <td>Controller</td>
          <td>120A</td>
          <td>₦85K</td>
          <td>1</td>
          <td>₦85K</td>
        </tr>
        <tr>
        <td>4</td>
          <td>PV Cables</td>
          <td>50mm</td>
          <td>₦20k</td>
          <td>4yards</td>
          <td>₦23K</td>
        </tr>
      </tbody>
    </Table> 
      <Footer />
    </div>
   )
}


export default Quotation;