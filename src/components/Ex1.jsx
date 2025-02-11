import React from 'react'
import Ex2 from './Ex2' // this is not legal but we can use

 const Ex1 = (props) => {
  return (
    <>
    <div>Ex1 {props.name}</div>
    <Ex2 user={props.name}></Ex2>
    </>
  )
}

export default Ex1