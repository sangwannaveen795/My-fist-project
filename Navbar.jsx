import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-around  bg-indigo-900 text-white py-2'>
        <div className='logo'>
          <span className='font bold text-xl'>  i Taske</span>
        </div>
        <ul className='flex gap-8 mx-9'>
          <li className='cursor-pointer hover:font -bold translate-all '>Home</li>
          <li className='cursor-pointer hover:font -bold translate-all '>About</li>
          <li className='cursor-pointer hover:font -bold translate-all '>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
