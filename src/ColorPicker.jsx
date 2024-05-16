import React, { useState } from 'react';
import "./cpicker.css"

function ColorPicker() {

   const[color,setColor]=useState("#ffff45");


   const colorupdate=(event)=>{
      setColor(event.target.value);
      console.log(color);
   }







  return (

    <div>
      <div className='main-box' style={{backgroundColor: color }}>
         <p id='para'>Selected Color:{color}</p>
      </div>
      <div className='picker'>
         <p>select a color:{color}</p>
         <input type="color" value={color} onChange={colorupdate}/>
      </div>

    </div>
  )
}

export default ColorPicker