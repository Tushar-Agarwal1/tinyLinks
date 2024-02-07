import React, { useState } from 'react'
import "./form.css"
import axios from 'axios'
import Result from './result'

const Form = () => {
  const[input,setInput]=useState("");
  const[result,setResult]=useState(false);
  const[shortUrl,setShortUrl]=useState("");
    const handle=async (e)=>{
        e.preventDefault();
        console.log("hii");
        
      await  axios.post('https://tiny-links-aw1j.onrender.com/api/short', {
          input:input
        })
        .then((response) => {
          
          console.log("bue");
          console.log(response.data);
          setShortUrl(response.data);
          setResult(true);
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
        {result?<Result shortUrl={shortUrl}/>:null}
    </div>
  )
}

export default Form