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
          <td>{INVERTER[1]}K</td>
          <td>1</td>
          <td>{INVERTER[1]}K</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Battery</td>
          <td>230Ah</td>
          <td>185k</td>
          <td>{NumOfBatteries}</td>
          <td>{NumOfBatteries * 185}K</td>
        </tr>
        <tr>
        <td>3</td>
          <td>Rack</td>
          <td>-----</td>
          <td>24K</td>
          <td>1</td>
          <td>24K</td>
        </tr>
        <tr>
        <td>4</td>
          <td>Accessory</td>
          <td>-----</td>
          <td>-----</td>
          <td>----</td>
          <td>23K</td>
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
          <td>78K</td>
          <td>4</td>
          <td>312K</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Clamp-Hook</td>
          <td>---</td>
          <td>5k</td>
          <td>2</td>
          <td>10K</td>
        </tr>
        <tr>
        <td>3</td>
          <td>Controller</td>
          <td>120A</td>
          <td>85K</td>
          <td>1</td>
          <td>85K</td>
        </tr>
        <tr>
        <td>4</td>
          <td>PV Cables</td>
          <td>50mm</td>
          <td>20k</td>
          <td>4yards</td>
          <td>23K</td>
        </tr>
      </tbody>
    </Table> 
      <Footer />
    </div>
   )
}


export default Quotation;