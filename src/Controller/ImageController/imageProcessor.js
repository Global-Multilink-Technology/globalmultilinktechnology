export const getMultipleImage =(images)=>
{      
    const string = images.toString()    
    const filterString = string.replace(/ /g,"")     
     const Images = filterString.split(',')
     const obj = Images.map((x , index)=>({id:index+1,imgUrl:x}))
     return obj;
  }

  export const getOneImage = (images)=>
  {
 
    const text = images.toString()    
    const g = text.replace(/ /g,"")     
     const image1 = g.split(',')
     return image1[0];
  }


  