import React, {  createContext, useState } from 'react'
const Store=createContext();

export default function Context({children}) {
    const[values,setValues]=useState(10)
  return (
   <Store.Provider value={{values,setValues}}>
    {children}
   </Store.Provider>
  )
}
export {Store}
