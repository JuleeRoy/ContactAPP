import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="bg-indigo-600 flex-initial w-[25%] flex justify-center item-center rounded-lg ">
        <ul className='p-4 m-auto text-white'>
        <li className='p-4 uppercase font-bold  text-xl text-center'>
            <h1>SideBar</h1>
            </li>
            <li className='p-4 uppercase font-semibold text-center'><Link to="/">Contact</Link></li>
            <li className='p-4 uppercase font-semibold text-center'>
                <Link to="/map">Maps</Link>
            </li>
            <li className='p-4 uppercase font-semibold text-center'>
                <Link to="/chart">Charts</Link>
            </li>
           
        </ul>
    </div>
  )
}

export default Sidebar