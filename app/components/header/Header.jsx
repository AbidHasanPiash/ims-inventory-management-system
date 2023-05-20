import Link from 'next/link';
import { usePathname  } from 'next/navigation';
import React, { useState, useContext } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';
import { fullScreen } from './FullScreen'
import { RiMenuFoldFill, RiMenuUnfoldFill, RiMessageLine, RiSearch2Line } from 'react-icons/ri'
import { BiBell, BiExpand, BiCollapse } from 'react-icons/bi'
import Notification from '../dashboard/Notification';

export default function Header() {
    const path = usePathname ();
    const [isFullScreen, setFullScreen] = useState(false);
    const {isSidebarOpen, setSidebarOpen, headerTab, handleRemoveTab} = useContext(SidebarContext);
    const [isNotiOpen, setIsNotiOpen] = useState(false);
    console.log(isNotiOpen);
    return (
        <header className='w-full h-14 bg-gray-200 flex items-center justify-center'>
            <div className='w-full flex justify-between'>
                <div className='h-14 flex items-center gap-3'>
                    <div className='h-full px-3 gap-5 flex items-center justify-center bg-blue-500/20 rounded-r-full'>
                        <button onClick={()=>setSidebarOpen((prev)=>!prev)}>
                            {isSidebarOpen ? <RiMenuFoldFill size={20}/> : <RiMenuUnfoldFill size={20}/>}
                        </button>
                        <Link href={'/'}>Home</Link>
                    </div>
                    <div className='flex space-x-3'>
                        {headerTab?.map((tab, i)=>(
                            <Link key={i} href={`${tab?.link}`} className={`${tab.link === path ? 'bg-blue-500/20' : 'bg-primary hover:bg-blue-500/20'}
                                group flex items-center justify-center gap-3 px-3 py-1 cursor-pointer hover:shadow-lg rounded-full`}
                            >
                                <span>{tab?.name}</span>
                                <span onClick={()=>handleRemoveTab(i)} className='flex w-4 h-4 text-xs rounded-full items-center justify-center bg-gray-500 text-white'>
                                    X
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-3 px-6 bg-blue-500/20 rounded-l-full cursor-pointer'>
                    <button className='flex items-center justify-center w-10 h-10 hover:bg-blue-400/30 rounded-lg transition-colors duration-500'> <RiSearch2Line size={20}/> </button>
                    <button className='flex items-center justify-center w-10 h-10 hover:bg-blue-400/30 rounded-lg transition-colors duration-500'> <RiMessageLine size={20}/> </button>
                    <button
                        onClick={()=>setIsNotiOpen((p)=>!p)}
                        className='flex items-center justify-center w-10 h-10 hover:bg-blue-400/30 rounded-lg transition-colors duration-500'> 
                        <BiBell size={20}/> 
                    </button>
                    <button 
                        className='flex items-center justify-center w-10 h-10 hover:bg-blue-400/30 rounded-lg transition-colors duration-500' 
                        onClick={()=>fullScreen(isFullScreen, setFullScreen)}> 
                        {isFullScreen ? <BiCollapse size={20}/> : <BiExpand size={20}/>} 
                    </button>
                </div>
            </div>
            <Notification isNotiOpen={isNotiOpen}/>
        </header>
    )
}
