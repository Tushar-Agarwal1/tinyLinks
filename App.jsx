import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './src/component/Navbar'
import "./app.css"
import Form from './src/component/Form'
const App=()=>{
  return (
  <><div className='bg'><Navbar/><Form/>
  
  
    </div></>
  )

}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
