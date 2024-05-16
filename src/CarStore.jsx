import React from 'react'
import { useState } from 'react';
import "./carstore.css"

const CarStore = () => {
   const [cars , setCars]=useState([]);
   const [carYear, setCarYear] = useState(new Date().getFullYear());
   const [carModel, setCarModel] = useState("");
   const [carMade, setCarMade]= useState("")

   const addCars=()=>{

      const trimModel = carModel.trim();
      const trimMade = carMade.trim();


      if( trimModel !== "" && trimMade !== ""){
         const newCar = {
            year: carYear,
            model : trimModel,
            made : trimMade
         }
   
         setCars(c =>[...c, newCar])
         setCarYear(new Date().getFullYear());
         setCarModel("");
         setCarMade("");
      }
      
   
         
      
   }
      
      
   function removeCar(index){

      setCars(cars.filter((car, i) => i !== index));

   }

   const yearCars=(event)=>{
      setCarYear(event.target.value);
      

   }
   const modelCars=(event)=>{
      setCarModel(event.target.value);
   

   }

   const madeCars=(event)=>{
      setCarMade(event.target.value);
      

   }

   const deleteAll=()=>{
      setCars([]);
   }




  return (
    <div className='box'>
      <h2>list of cars</h2>
      <ol>
         {
            cars.map((data ,index)=>{
         
             return <li key={index} > 

            <span> {data.year} {data.model} {data.made} </span>

            <button id='red-but' onClick={()=>removeCar(index)}>remove car</button>
             
             </li>
         
            })
         }
      </ol>
      
      <hr />
      <input id='year-input' type="number" value={carYear} onChange={yearCars} /> <br />
      <input id='model-input' type="text" value={carModel} onChange={modelCars} /> <br />
      <input id='make-input' type="text" value={carMade} onChange={madeCars} /> <br />
      <button  id='green' onClick={addCars}>Add Car</button> &nbsp;&nbsp;&nbsp;
      <button  id='delete-all' onClick={deleteAll}>Delete All</button>
    </div>
  )
}

export default CarStore;