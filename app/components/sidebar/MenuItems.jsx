'use client';
import Link from 'next/link';
import { useContext, useState } from 'react'
import { usePathname  } from 'next/navigation';
import {RiArrowLeftSLine} from 'react-icons/ri'
import { SidebarContext } from '@/app/contexts/SidebarContext'

export default function MenuItems({item}) {
    const path = usePathname ();
    const {isSidebarOpen} = useContext(SidebarContext);
    const [isExpand, setExpand] = useState(false);
    if (!item.subItems) {
        return (
            <li className={`${item.cat === 'sub' && 'pl-2'}`}>
                <Link
                    href={item?.link} 
                    className='h-10 my-2 px-2 rounded hover:bg-secondary-hover flex items-center justify-between cursor-pointer'>
                    <div className='flex items-center'>
                        <i className='w-8 flex items-center justify-center text-xl'>{item.icon}</i>
                        <span className={`${isSidebarOpen ? 'text-[0px]':'block'} pl-2 duration-300 select-none`}>{item.name}</span>
                    </div>
                </Link>
            </li>
        )
    }
    else{ //Items with subitems
        return(
            <li className={`${isExpand && 'ring-1 ring-secondary-hover rounded'}`}>
                <div
                    onClick={()=>setExpand(!isExpand)} 
                    className='h-10 my-2 px-2 rounded hover:bg-secondary-hover flex items-center justify-between cursor-pointer'
                >
                    <div className='flex items-center'>
                        <i className='w-8 flex items-center justify-center text-xl'>{item.icon}</i>
                        <span className={`${isSidebarOpen ? 'text-[0px]':'block'} pl-2 duration-300 select-none`}>{item.name}</span>
                    </div>
                    <span className={`${isExpand && '-rotate-90'} duration-300`}><RiArrowLeftSLine size={20}/></span>
                </div>
                {isExpand && item.subItems.map((sub, index)=>(
                <MenuItems key={index} item = {sub} />
                ))}
            </li>
        )
    }
  
}
