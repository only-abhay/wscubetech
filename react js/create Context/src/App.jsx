import React, { useContext } from 'react'
import { Store } from './context'

export default function App() {
  const {values,setValues}=useContext(Store)
  
  return (
  <div>
      <div>{values}</div>
      <button onClick={()=>{
      setValues(values+1)
    }}>+</button>
    
  </div>
  )
}
