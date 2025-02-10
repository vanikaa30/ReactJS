import React from 'react'
//console.log(props) will give the value in object format but
// props.a returns the object
const Cards = (props) => {
    console.log(props.username);
  return (
    <div className='bg-zinc-900 text-2xl p-6 m-16 mr-96 text-center rounded'>
        <img className='h-32 w-32 rounded-full mb-3' src="" alt=""/>
        <h1 className='text-2xl font-semibold mb-4'>Username: {props.username}</h1>
        <h1>Age: {props.age}</h1>
        <h2>City: {props.city}</h2>
        <button className='bg-red-950 p-2 m-4 rounded'>Submit</button>
    </div>
  )
}

export default Cards