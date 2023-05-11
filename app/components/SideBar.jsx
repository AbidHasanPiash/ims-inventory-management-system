import React, {useContext} from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import {RxDashboard} from 'react-icons/rx'
import {RiSearch2Line} from 'react-icons/ri'

export default function SideBar() {
  const {isSidebarOpen} = useContext(SidebarContext);
  return (
    <aside className={`${isSidebarOpen?'w-20':'w-72'} duration-300 min-h-screen px-2 bg-secondary text-primary text-xl`}>
        <div className='h-14 px-3 border-b border-primary border-opacity-50 flex items-center'>
            <div className='h-8 w-8 rounded-full bg-primary text-secondary font-bold text-center flex items-center justify-center'>
                <span>P</span>
            </div>
            <h1 className='pl-2'>ABID-IMS</h1>
        </div>
        <div className='h-16 px-3 border-b border-primary border-opacity-50 flex items-center'>
            <div className='h-8 w-8 rounded-full bg-primary text-secondary font-bold text-center flex items-center justify-center'>
                <span>P</span>
            </div>
            <h1 className='pl-2'>User id</h1>
        </div>
        <div className={`duration-300 flex items-center justify-start border border-primary border-opacity-50 my-3 rounded`}>
          <input 
            type="text" 
            placeholder='Search' 
            className='w-full h-9 bg-secondary-hover rounded-l outline-none pl-3 border-r border-primary border-opacity-50 focus:ring-1'/>
          <RiSearch2Line className='w-14 text-white '/>
        </div>
        <div className='text-lg'>
            <ul>
                <li className='h-10 my-2 flex items-center px-2 rounded hover:bg-secondary-hover'>
                    <span className='w-8 flex items-center justify-center'><RxDashboard/></span>
                    <span>Dashboard</span>
                </li>
            </ul>
            <span>{isSidebarOpen ? 'open' : 'close'}</span>
        </div>
    </aside>
  )
}