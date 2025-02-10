import React from 'react'

const Header = () => {
  return (
  <nav className='bg-emerald-950 flex py-5 px-10 items-center justify-between'>
    <h2 className='text-3xl'>Navbar</h2>
    <div className='flex gap-8 items-center'>
      <h4 className='text-xl'>Home</h4>
      <h4 className='text-xl'>About</h4>
      <h4 className='text-xl'>Contact</h4>
      <h4 className='text-xl'>Services</h4>
    </div>
    </nav>
  )
}

export default Header