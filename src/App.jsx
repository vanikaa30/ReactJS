import React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Cards'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


//+++++++++++++++++++++++++++++++++++++++
// function app(){
// const a=10;
// const name="Vanika"
// // return "Hello! App.jsx -> main.jsx -> index.html"
// // if we will try to return h1 and h2 tag then it will return only h1 as a function could return only one statement so that's why we have returned div tag 
// return <div> 
//   <h1>first tag for {a}</h1>
//   <h2>second tag for {name}</h2>
// </div>

// }

//++++++++++++++++++++++++++++
// const app=()=>{

// let name="Vanika"
//   const abc=()=>{
     
//     name="Chandan"
//     console.log("A");
//   }   

//  return <div>
//     <h1>My name is {name}</h1>
//     <button onClick={abc}>Change User</button>
//   </div>
// }
// export default app;

//++++++++++++++++++++++++
//hooks are special type of functions ,functional component means work is done on function basis

const App=()=>{
//   // const a=10 //insetad of making this use //usestatesnippet
//  const [a, setA] = useState(10)
//  const changeA=()=>{
//   console.log("change A worked onclick")
//   setA(100)
//  }
//   return (
//     <div>
//       <h1>value of a is {a}</h1>
//       <button onClick={changeA}>Change a</button>
//     </div>
  
// }


// const [number, setnumber] = useState(0)
// return(
//   <div>
//     <h1>Number is {number}</h1>
//     <button onClick={()=>{
//       setnumber(number+1)
//     }}>Increment</button>
//     <button onClick={()=>{setnumber(number-1)}}>Decrement</button>
//   </div>
// )

// +++++++++++++++++++ tailwindcss
// return (
//   <div>
//   <h1 className='text-5xl bg-amber-900 text-blue-300'>Hello this is</h1>
//   <h1 className='text-3xl bg-amber-950'>This is another</h1>
//   </div>
// )

//+++++++++++++++++++ form
// const submitHandler=(e)=>{
//   e.preventDefault() //used to prevent page reloading on submission
//   console.log("Your form is submitted.")
// }

// // const [username, setusername] = useState('Chandan') value={username} in input tag
// //onChange={(e)=>{console.log('Hello')}} it will print hello n times i.e n is the length of your input
// //onChange={(e)=>{console.log(e.target.value)}} it will print the value letter by letter
// //onChange=()=>{setusername(e.target.value)} it will take the value from user and will store it is known as two way binding
// const [username, setusername] = useState(" ")
// return (
// <div>
//     <form className='py-2.5' onSubmit={(e)=>{
//       submitHandler(e);
//     }}>
//       <label for='namee' className='text-xl'>Enter your Name: </label>
//       <input value={username} onChange={(e)=>{setusername(e.target.value)}} type='text' name='namee' placeholder='Enter your name' className='px-4 py-1 bg-blue-100 m-4 text-blue-950 rounded'></input>
//       <button className='px-4 py-1 m-4 text-xl font-semibold bg-emerald-800 rounded'>Submit</button>
//       <p className='text-white'>Entered name : {username}</p>
//     </form>
//   </div>
// )

//++++++++++++++++++++++ components
// //fragments are empty tag <></> works as wrapper
//we can extract components of header using import header from "path of header"
const user="Vanika"
 return (
  <>
  <Header></Header> 
  <Card username={user} age='20' city='Pinjore'></Card>
  <Footer></Footer>
  </>
 )



}
export default App