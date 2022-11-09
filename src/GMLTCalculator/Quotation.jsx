import React from "react"
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
   const PanelTotal = 78*NumOfSolarPanels;
   const ClampHookTotal = Math.ceil(ClampHook * 0.9);
   const ControllerTotal = ChargeController[1] * ChargeController[2]
   const SolarTotal = ControllerTotal + ClampHookTotal + PanelTotal;


   // Solar Rack
   const rackPrice = 25
   const RackQuantity = NumOfBatteries>=2?NumOfBatteries/2:NumOfBatteries
   const RackTotal = rackPrice*(NumOfBatteries/4)


   // Total
   const InverterTotal = inverterPrice+BatteryTotal+RackTotal

   //Grand Total
   const GrandTotal = InverterTotal + SolarTotal
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
          <td>{PanelTotal>999?`₦${PanelTotal/1000}m`:`₦${PanelTotal}K`}</td>
        </tr>
        <tr>
          <td>2</td>
          <td><p style={{fontSize:"12px"}}>Clamp&Hook</p></td>
          <td>---</td>
          <td>₦950</td>
          <td>{ClampHook}</td>
          <td>{ClampHookTotal>999?`₦${ClampHookTotal/1000}m`:`₦${ClampHookTotal}K`}</td>
        </tr>
        <tr>
        <td>3</td>
          <td>Controller</td>
          <td>{ChargeController[0]}A</td>
          <td>₦{ChargeController[1]}K</td>
          <td>{ChargeController[2]}</td>
          <td>{ControllerTotal>999?`₦${ControllerTotal/1000}m`:`₦${ControllerTotal}K`}</td>
        </tr>
        <tr>
        <td>4</td>
          <td>Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td>{SolarTotal>999?`₦${SolarTotal/1000}m`:`₦${SolarTotal}K`}</td>
        </tr>
      </tbody>
    </Table> 
    <p>Grand Total:₦{GrandTotal>999?`₦${GrandTotal/1000}m`:`₦${GrandTotal}K`}K</p>
      <Footer />
    </div>
   )
}


export default Quotation;