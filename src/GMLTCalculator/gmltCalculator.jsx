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
    const [TV_100WBELOW,setTV_100WBELOW] = useState(0);
    const [AC_1_5hp,setAC_1_5hp] = useState(0);
    const [WashingMachine_300W,setWashigMachine_300W] = useState(0);
    const [EnergyBulb_40W,setEnergyBulb_40W] = useState(0);
    const [Fridge_150W,setFridge_150W] = useState(0);
    const [DeepFreezer_400W,setDeepFreezer_400W] = useState(0);
    const [Decoder_20W,setDecoder_20W] = useState(0);
    const [HomeTheater_100W,setHomeTheater_100W] = useState(0);
    const [microWave_600W,setmicroWave_600W] = useState(0);
    const [Printer_50W,setPrinter_50W] = useState(0);


    const updateWashingMachine_300W = (data)=>
    {
        setWashigMachine_300W(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Printer_50W*50)+(microWave_600W*600)+(Fridge_150W*150)+(HomeTheater_100W*300)+(Decoder_20W*20)+(DeepFreezer_400W*400)+(EnergyBulb_40W*40)+(Laptop_60W*65)+(TV_150W*300)+(TV_100WBELOW*100)+(AC_1_5hp*1118.55)+(data*300))
      
    }
    const updateAC_1_5hp = (data)=>
    {
        setAC_1_5hp(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Printer_50W*50)+(microWave_600W*600)+(Fridge_150W*150)+(HomeTheater_100W*300)+(Decoder_20W*20)+(DeepFreezer_400W*400)+(Laptop_60W*65)+(EnergyBulb_40W*40)+(TV_150W*300)+(TV_100WBELOW*100)+(data*1118.55)+(WashingMachine_300W*300))
      
    }
    const updateCFL_14W = (data)=>
    {
        setCFL_14W(data)
        setLoad((data*14)+(Fan*70)+(Printer_50W*50)+(microWave_600W*600)+(Fridge_150W*150)+(HomeTheater_100W*300)+(Decoder_20W*20)+(DeepFreezer_400W*400)+(EnergyBulb_40W*40)+(Laptop_60W*65)+(TV_150W*300)+(TV_100WBELOW*100)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
      
    }
    
    const updateFan = (data)=>
    {
        setFan(data)
        setLoad((CFL_14W*14)+(data*70)+(Printer_50W*50)+(microWave_600W*600)+(Fridge_150W*150*150)+(HomeTheater_100W*300)+(Decoder_20W*20)+(DeepFreezer_400W*400)+(EnergyBulb_40W*40)+(Laptop_60W*65)+(TV_150W*300)+(TV_100WBELOW*100)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }
        
    const updateTV_150W = (data)=>
    {
        setTV_150W(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Printer_50W*50)+(microWave_600W*600)+(Fridge_150W*150)+(HomeTheater_100W*300)+(Decoder_20W*20)+(DeepFreezer_400W*400)+(TV_100WBELOW)+(EnergyBulb_40W*40)+(Laptop_60W*65)+(data*150)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }

    const updateLaptop_60W = (data)=>
    {
        setLaptop_60W(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Printer_50W*50)+(microWave_600W*600)+(Fridge_150W*150)+(HomeTheater_100W*300)+(Decoder_20W*20)+(DeepFreezer_400W*400)+(data*65)+(EnergyBulb_40W*40)+(TV_150W*300)+(TV_100WBELOW*100)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }

    const updateTV100WBELOW = (data)=>
    {
        setTV_100WBELOW(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Printer_50W*50)+(microWave_600W*600)+(Fridge_150W*150)+(HomeTheater_100W*300)+(Decoder_20W*20)+(DeepFreezer_400W*400)+(Laptop_60W*65)+(EnergyBulb_40W*40)+(TV_150W*300)+(data*100)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }
    const updateEnergyBulb_40W = (data)=>
    {
        setEnergyBulb_40W(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Printer_50W*50)+(microWave_600W*600)+(Fridge_150W*150)+(HomeTheater_100W*300)+(Decoder_20W*20)+(DeepFreezer_400W*400)+(Laptop_60W*65)+(data*40)+(TV_150W*300)+(TV_100WBELOW*100)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }
    const updateFridge_150W = (data)=>
    {
        setFridge_150W(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Printer_50W*50)+(microWave_600W*600)+(Laptop_60W*65)+(HomeTheater_100W*300)+(Decoder_20W*20)+(EnergyBulb_40W)+(data*150)+(TV_150W*300)+(TV_100WBELOW*100)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }
    const updateDeepFreezer_400W = (data)=>
    {
        setDeepFreezer_400W(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Printer_50W*50)+(microWave_600W*600)+(Laptop_60W*65)+(HomeTheater_100W*300)+(Decoder_20W*20)+(EnergyBulb_40W)+(data*400)+(Fridge_150W*150)+(TV_150W*300)+(TV_100WBELOW*100)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }
    const updateDecoder_20W = (data)=>
    {
        setDecoder_20W(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Printer_50W*50)+(microWave_600W*600)+(HomeTheater_100W*300)+(Laptop_60W*65)+(DeepFreezer_400W*400)+(EnergyBulb_40W)+(data*20)+(Fridge_150W*150)+(TV_150W*300)+(TV_100WBELOW*100)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }
    const updateHomeTheater_100W = (data)=>
    {
        setHomeTheater_100W(data)
        setLoad((CFL_14W*14)+(Fan*70)+(Printer_50W*50)+(microWave_600W*600)+(Laptop_60W*65)+(Decoder_20W*20)+(EnergyBulb_40W)+(DeepFreezer_400W*400)+(data*300)+(Fridge_150W*150)+(TV_150W*300)+(TV_100WBELOW*100)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }
    const updateMicroWave_600W = (data)=>
    {
        setmicroWave_600W(data)
        setLoad((CFL_14W*14)+(data*600)+(Printer_50W*50)+(Fan*70)+(Laptop_60W*65)+(Decoder_20W*20)+(EnergyBulb_40W*40)+(DeepFreezer_400W*400)+(HomeTheater_100W*300)+(Fridge_150W*150)+(TV_150W*300)+(TV_100WBELOW*100)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }
    const updatePrinter_50W = (data)=>
    {
        setPrinter_50W(data)
        setLoad((CFL_14W*14)+(data*50)+(microWave_600W*600)+(Fan*70)+(Laptop_60W*65)+(Decoder_20W*20)+(EnergyBulb_40W*40)+(DeepFreezer_400W*400)+(HomeTheater_100W*300)+(Fridge_150W*150)+(TV_150W*300)+(TV_100WBELOW*100)+(AC_1_5hp*1118.55)+(WashingMachine_300W*300))
    }
  
   return(
    <div>
      <HomeHeader />
      <h2 className="header">Select your load(s)</h2>
      <h2 className="headerX">{load}watts</h2>
      <div className="MainContainer">
      <div className="container">
        
        <div className="box">
        <p className="loadText">Television(TV)</p>
           <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={TV_100WBELOW}>
           {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateTV100WBELOW(data.id)}>{data.id}</Dropdown.Item>)}      
        </DropdownButton>
        <p className="loadTextWatt">(100W)</p>
        </div>
  
        <div className="box">
        <p className="loadText">Energy Bulb</p>
        <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={EnergyBulb_40W}>
           {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateEnergyBulb_40W(data.id)}>{data.id}</Dropdown.Item>)}      
        </DropdownButton>
        <p className="loadTextWatt">(40W)</p>
        </div>
        </div>
      <div className="container">

      <div className="box">
      <p className="loadText">Lamp(F-Tube)</p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={CFL_14W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateCFL_14W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      <p className="loadTextWatt">(14W)</p>
      </div>
      <div className="box">
      <p className="loadText">Celing Fan(CF)</p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={Fan}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateFan(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      <p className="loadTextWatt">(70W)</p>
      </div>
      </div>
      <div className="container">
      <div className="box">
      <p className="loadText">Laptops(LAP)</p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={Laptop_60W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateLaptop_60W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      <p className="loadTextWatt">(65W)</p>
      </div>
      <div className="box">  
      <p className="loadText">Television(TV)</p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={TV_150W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateTV_150W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      <p className="loadTextWatt">(300W)</p>
      </div>
      </div>
      <div className="container">
      <div className="box">
      <p className="loadText">Washing Mac</p>      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={WashingMachine_300W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateWashingMachine_300W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      <p className="loadTextWatt">(300W)</p>
      </div>
      <div className="box">
      <p className="loadText">AC Split Unit</p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={AC_1_5hp}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateAC_1_5hp(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
        <p className="loadTextWatt">(1.5hp)</p>
      </div>
      </div>
      <div className="container">
      <div className="box">
      <p className="loadText">Fridge(1-Door)</p>      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={Fridge_150W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateFridge_150W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      <p className="loadTextWatt">(150W)</p>
      </div>
      <div className="box">
      <p className="loadText">Deep Freezer</p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={DeepFreezer_400W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateDeepFreezer_400W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
        <p className="loadTextWatt">(400W)</p>
      </div>
      </div>
      <div className="container">
      <div className="box">
      <p className="loadText">Decoder(Cable)</p><DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={Decoder_20W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateDecoder_20W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      <p className="loadTextWatt">(15W)</p>
      </div>
      <div className="box">
      <p className="loadText">Home Theater</p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={HomeTheater_100W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateHomeTheater_100W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
        <p className="loadTextWatt">(300W)</p>
      </div>
      </div>
      <div className="container">
      <div className="box">
      <p className="loadText2">Microwave(Oven)</p><DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={microWave_600W*600}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updateMicroWave_600W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
      <p className="loadTextWatt">(600W)</p>
      </div>
      <div className="box">
      <p className="loadText">Printer(Deskjet)</p>
      <DropdownButton  className="dropdowncontainer" id="dropdown-basic-button" title={Printer_50W}>
         {NumberOfCFL50W.map((data)=><Dropdown.Item onClick={()=>updatePrinter_50W(data.id)}>{data.id}</Dropdown.Item>)}      
      </DropdownButton>
        <p className="loadTextWatt">(50W)</p>
      </div>
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