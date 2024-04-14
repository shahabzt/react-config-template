import React from 'react'
import { Outlet } from 'react-router-dom'

const Button = () => {
  return (
    <>
    <button>test</button>
    <Outlet/>
    </>
  )
}

export default Button