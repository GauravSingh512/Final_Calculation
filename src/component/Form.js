import React, { useState } from 'react';
import Array from "./Array";
import  "../GlobalVaribale/Variable";
const Form = () => {
const [fieldName, setFieldName]=useState({
  fname:'',
  lname:'',
  email:''
});
  function handleChange(event) {
   
    var name = event.target.value;
    setFieldName(name);
    // console.log(name);
  }
  return (
    <>
            <div className="container">
                <div className="brand-logo"></div>
                <div className="brand-title">TWITTER</div>
                <div className="inputs">
               {
                Array.map((param)=>{
                  return <>
                  <label>{param.label} </label>
                  <input type="text" placeholder={param.label} id={param.id} name ={param.name}  value={fieldName.value} onChange={(e)=>handleChange(e)}
                   key={param.id}/>
                  </>
                })
               }

                <label>Attachment</label>
                    <input type="file" placeholder="Upload File " src='' id='lid' />
                <button type="submit" >LOGIN </button>
                </div>
            </div>
         
    </>
  )
}

export default Form
