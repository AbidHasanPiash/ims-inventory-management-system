import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';
import { fullScreen } from './FullScreen'
import { RiMenuFoldFill, RiMenuUnfoldFill, RiMessageLine, RiSearch2Line } from 'react-icons/ri'
import { BiBell, BiExpand, BiCollapse } from 'react-icons/bi'

export default function Header() {
    const [isFullScreen, setFullScreen] = useState(false);
    const {isSidebarOpen, setSidebarOpen} = useContext(SidebarContext);
    return (
        <header className='w-full h-14 bg-gray-200'>
            <div className='flex items-center justify-between px-6 py-3 text-xl text-gray-700'>
                    <div className='flex items-center space-x-4'>
                        <button onClick={()=>setSidebarOpen(!isSidebarOpen)}>
                            {isSidebarOpen ? <RiMenuFoldFill/> : <RiMenuUnfoldFill/>}
                        </button>
                        <Link href={'/'}>Home</Link>
                    </div>
                    <div className='flex space-x-8'>
                        <button> <RiSearch2Line /> </button>
                        <button> <RiMessageLine /> </button>
                        <button> <BiBell /> </button>
                        <button onClick={()=>fullScreen(isFullScreen, setFullScreen)}> {isFullScreen ? <BiCollapse/> : <BiExpand/>} </button>
                    </div>
            </div>
        </header>
    )
}
