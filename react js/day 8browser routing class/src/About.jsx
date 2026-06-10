import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1 className="">About page</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}
