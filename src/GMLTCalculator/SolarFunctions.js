
export const getInverterRating = (load)=>
{
   const result = (load/0.8);
  if((result>=0)&&(result<=800))
  {
    return [1,75];
  }else if((result>=900)&&(result<=1100))
  {
    return [1.5,95];
  }else if((result>=1200)&&(result<=1900))
  {
    return [2.5,220];
  }else if((result>=1900)&&(result<=3000))
  {
    return [3.5,285];
  }else if((result>=3000)&&(result<=4200))
  {
    return [5,540];
  }else if((result>=4200)&&(result<=6200))
  {
    return [7.5,690];
  }
  else if((result>=6300)&&(result<=9200))
  {
    return [10,740];
  }
  else if((result>=9300)&&(result<=14200))
  {
    return [15,1340];
  }
}

export const getNumbersofBatteries=(load)=>
{
     const  backupTime = 2;
     const InverterRating = getInverterRating(load)
     if(InverterRating[0]<=1)
     {
       return 1;      
     }else if((InverterRating[0]>1)&&(InverterRating[0]<=2))
     {
          return 1*backupTime;
     }else if((InverterRating[0]>2)&&(InverterRating[0]<=3))
     {
          return 2 * backupTime;
     }else if((InverterRating[0]>3)&&(InverterRating[0]<=4.8))
     {
          return 2*backupTime;
     }else if((InverterRating[0]>4.8)&&(InverterRating[0]<=7.5))
     {
          return 4*backupTime;
     }else if((InverterRating[0]>7.5)&&(InverterRating[0]<=15))
     {
          return 8*backupTime;
     }

}

export const getNumberofSolarPanels = (load,NumberOfBatteries)=>
{
     const NumberOfPanels = getNumbersofBatteries(load) * 3
     return NumberOfPanels;  
}
export const getNoOfChargeController= (NumberOfPanels)=>
{
     let NoOfcontroller = 1
     let PanelCurrent = (NumberOfPanels * 330)/48  
  if(PanelCurrent<40)
  {
      return [40,80,1];
  }else
  if((PanelCurrent>40)&&(PanelCurrent<70))
  {
        return [60,120,1];
  }else if(PanelCurrent>100)
  {
      
        for(let i=PanelCurrent;i>120;i = i/2)
        {
          PanelCurrent = PanelCurrent/2;
          NoOfcontroller = NoOfcontroller + 1;
        }
        return [120,185,NoOfcontroller]  
      
      }
  }
