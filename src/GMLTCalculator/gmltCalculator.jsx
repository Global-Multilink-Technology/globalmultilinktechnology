import React,{useState,useEffect} from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import HomeHeader from "../Views/Home/Home.Header";
import { NumberOfCFL50W } from "./loadcounter";
import "./GMLTcalculator.css"
import Footer from "../Views/Footer/Footer";
import { useDispatch } from 'react-redux';
import { loadmath } from "../Redux/Slices/userSlice";
import Button from 'react-bootstrap/Button';


const GMLTcalculator = ()=>
{
    const dispatch = useDispatch();
    const [load,setLoad] = useState(0);
    const [CFL_14W,setCFL_14W] = useState(0);
    const [Fan,setFan] = useState(0);
    const [Laptop_60W,setLaptop_60W] = useState(0);
    const [TV_150W,setTV_150W] = useState(0);
    const [AC_1_5hp,setAC_1_5hp] = useState(0);
    const [WashingMachine_300W,setWashigMachine_300W] = useState(0);

    const updateWashingMachine_300W = (data)=>
    {
        setWashigMachine_300W(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Laptop_60W*60)+(TV_150W*150)+(AC_1_5hp*1118.55)+(data*300))
      
    }
    const updateAC_1_5hp = (data)=>
    {
        setAC_1_5hp(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Laptop_60W*60)+(TV_150W*150)+(data*1118.55)+(WashingMachine_300W*300))
      
    }
    const updateCFL_14W = (data)=>
    {
        setCFL_14W(data)
        setLoad((data*14)+(Fan*70)+(Laptop_60W*60)+(TV_150W*150)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
      
    }
    
    const updateFan = (data)=>
    {
        setFan(data)
        setLoad((CFL_14W*14)+(data*70)+(Laptop_60W*60)+(TV_150W*150)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }
        
    const updateTV_150W = (data)=>
    {
        setTV_150W(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Laptop_60W*60)+(data*150)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }

    const updateLaptop_60W = (data)=>
    {
        setLaptop_60W(data)
        setLoad((CFL_14W*14)+(Fan*70)+(data*60)+(TV_150W*150)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }


 
   return(
    <div>
      <HomeHeader />
      <h2 className="header">Select your load(s)</h2>
      <h2 className="power">{load}watts</h2>
      <div className="container">
      <div className="box">
      <p className="loadText">Lamp(CFL)-11Watts</p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={CFL_14W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateCFL_14W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      </div>
      <div className="box">
      <p className="loadText">Celing Fan -70Watts</p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={Fan}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateFan(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      </div>
      </div>
      <div className="container">
      <div className="box">
      <p className="loadText">Laptop-60Watts <span style={{color:"white"}}>.......</span></p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={Laptop_60W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateLaptop_60W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      </div>
      <div className="box">
      <p className="loadText">TV-150Watts</p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={TV_150W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateTV_150W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      </div>
      </div>
      <div className="container">
      <div className="box">
      <p className="loadText">Washing Machine<span style={{color:"white"}}>......</span></p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={WashingMachine_300W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateWashingMachine_300W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      </div>
      <div className="box">
      <p className="loadText">AC 1.5hp</p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={AC_1_5hp}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateAC_1_5hp(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      </div>
      </div>
      <div className="buttonDIV">
      <Button className='w-40' variant="danger" onClick={()=>setTimeout(()=>{dispatch(loadmath(load));setTimeout(()=>window.location.href='/Quotation',80)},10)}>Generate Quotation</Button>
      </div>
      <Footer />
    </div>
   )
}


export default GMLTcalculator;