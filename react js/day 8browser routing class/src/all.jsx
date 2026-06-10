import React from 'react'
import { Outlet } from 'react-router-dom'

export default function All() {
  return (
    <>
    <div>Header</div>
    <Outlet/>
    <div>footer</div>
    </>
  )
}
