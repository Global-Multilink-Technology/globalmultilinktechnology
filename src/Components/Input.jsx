import React from 'react'
import './Input.css'
const TextInput =({type,onChangeText,className})=>
{
   return(
     <div>
         <input type="text" className={className} name="fname" onChangeText={onChangeText}/>
    </div>
   )
}
export default TextInput;