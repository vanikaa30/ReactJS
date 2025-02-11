import React from 'react'
//console.log(props) will give the value in object format but
// props.a returns the object
const Cards = (props) => {
  console.log(props)
  return (
    <div className='mr-7 mt-7  bg-white text-black inline-block p-6 text-center rounded'>
      <img className='ml-12 h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
      <h1 className='text-xl font-semibold mb-2'>{props.user}</h1>
      <h1 className='text-blue-500'>(Profession: {props.prof})</h1>
      <h1 >Age: {props.age}</h1>
      <h2 >City: {props.city}</h2>
      <button className='bg-emerald-700 text-white font-medium p-2 m-4 rounded'>Add Friend</button>

    </div>
  )
}

export default Cards