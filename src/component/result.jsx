import React from 'react'
import "./result.css"

const result = ({shortUrl}) => {
    const copy=()=>{
        console.log("tushki"+shortUrl);
        
        window.navigator.clipboard.writeText(shortUrl);
    }
  return (
    <div className='output'> <h3 class="result">{shortUrl}</h3>
    <button className='resultButton' onClick={copy}>Copy</button></div>
   
  )
}

export default result