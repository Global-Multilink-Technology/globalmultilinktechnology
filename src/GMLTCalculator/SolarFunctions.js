
export const getInverterRating = (load)=>
{
   const result = (Math.floor(Number(load) / 0.8));
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
    const  backupTime = 12;
    const NumOfBaetteries =(backupTime * load)/(12 * 220)
    return Math.floor(NumOfBaetteries);
}

export const getNumberofSolarPanels = (load,NumberOfBatteries)=>
{
     const NumberOfPanels = getNumbersofBatteries(load) 
}