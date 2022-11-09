import React,{useState} from "react"
import HomeHeader from "../Views/Home/Home.Header";
import "./Quotation.css"
import Footer from "../Views/Footer/Footer";
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getInverterRating,getNumbersofBatteries,getNumberofSolarPanels,getNoOfChargeController } from "./SolarFunctions";



const Quotation = ()=>
{
  //Battery Variables
   const load =  useSelector((data)=>data.counter.load)
   const INVERTER = getInverterRating(load);
   const NumOfBatteries = getNumbersofBatteries(load)    
   const inverterPrice = Number(INVERTER[1])
   const batteryCost = 185
   const BatteryTotal = NumOfBatteries * batteryCost 


   //Solar Variables 
   const NumOfSolarPanels = getNumberofSolarPanels(load,NumOfBatteries)
   const ClampHook = NumOfSolarPanels * 3
   const ChargeController = getNoOfChargeController(NumOfSolarPanels)


   // Solar Rack
   const rackPrice = 25
   const RackQuantity = NumOfBatteries>=2?NumOfBatteries/2:NumOfBatteries
   const RackTotal = rackPrice*(NumOfBatteries/4)


   // Total
   const InverterTotal = inverterPrice+BatteryTotal+RackTotal
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
          <td>{inverterPrice>999?`₦${inverterPrice/1000}m`:`₦${inverterPrice}K`}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Battery</td>
          <td>230Ah</td>
          <td>₦{batteryCost}k</td>
          <td>{NumOfBatteries}</td>
          <td>{BatteryTotal>900?`₦${BatteryTotal/1000}m`:`₦${BatteryTotal}K`}</td>
        </tr>
         <tr>
        <td>3</td>
          <td>Rack</td>
          <td>{RackQuantity}</td>
          <td>₦{rackPrice}K</td>
          <td>{RackQuantity/2}</td>
          <td>{RackTotal>999?`₦${RackTotal/1000}m`:`₦${RackTotal}K`}</td>
        </tr>
        <tr>
        <td>4</td>
          <td>Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td>{InverterTotal>999?`₦${InverterTotal/1000}m`:`₦${InverterTotal}K`}</td>
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
          <td>{NumOfSolarPanels}</td>
          <td>₦{78*NumOfSolarPanels}K</td>
        </tr>
        <tr>
          <td>2</td>
          <td><p style={{fontSize:"12px"}}>Clamp&Hook</p></td>
          <td>---</td>
          <td>₦950</td>
          <td>{ClampHook}</td>
          <td>₦{Math.ceil(ClampHook * 0.9)}K</td>
        </tr>
        <tr>
        <td>3</td>
          <td>Controller</td>
          <td>{ChargeController[0]}A</td>
          <td>₦{ChargeController[1]}K</td>
          <td>{ChargeController[2]}</td>
          <td>₦{ChargeController[1] * ChargeController[2]}K</td>
        </tr>
        <tr>
        <td>4</td>
          <td>PV Cables</td>
          <td>50mm</td>
          <td>₦20k</td>
          <td>4yards</td>
          <td>₦23K</td>
        </tr>
        <tr>
        <td>5</td>
          <td>Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td>₦{(ChargeController[1]* ChargeController[2])+(Math.ceil(ClampHook * 0.9) + (78*NumOfSolarPanels))}K</td>
        </tr>
      </tbody>
    </Table> 
    <p>Grand Total:₦{(ChargeController[1]* ChargeController[2])+(Math.ceil(ClampHook * 0.9) + (78*NumOfSolarPanels))+inverterPrice+(batteryCost*NumOfBatteries)+rackPrice}K</p>
      <Footer />
    </div>
   )
}


export default Quotation;