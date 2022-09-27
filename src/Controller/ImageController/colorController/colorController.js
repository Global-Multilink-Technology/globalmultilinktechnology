export const getMultipleColors =(colors)=>{
      
    const string =colors.toString()// Converts the input data to string
    
    const filterString = string.replace(/ /g,"") // Removes spaces from the string

     const colorArray = filterString.split(',')//Converts Strings to Array

     const colorObjects =colorArray.map((x , index)=>({id:index+1,color:x}))//Converts Array to Color Objects

     return colorObjects;// Return an Object of Colors
  }

  export const getOneColor = (colors)=>
  {
 
    const text =(colors).toString()
    
    const g = text.replace(/ /g,"")
     
     const image1 = g.split(',')
     return image1[0];
  }