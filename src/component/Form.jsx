import React, { useState } from 'react'
import "./form.css"
import axios from 'axios'

const Form = () => {
  const[input,setInput]=useState("");
    const handle=async (e)=>{
        e.preventDefault();
        console.log("hii");
        
      await  axios.post('/api/short', {
          input:input
        })
        .then((response) => {
          console.log(response.data);
            // Handle data
        })
        .catch((error) => {
          console.log(error);
        })
        
        
        

    }
    
  return (
   

    <div className='form'>
        <h1>Premium Url Shortner</h1>
        <form action="" onSubmit={handle}>
            <input type="text" placeholder='Enter Url' onChange={(e)=>{setInput(e.target.value)
            console.log(input);}}/>
            <button className='form-button' type='submit' >short</button>
            
        </form>
    </div>
  )
}

export default Form