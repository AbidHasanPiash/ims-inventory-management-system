'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { usePathname  } from 'next/navigation';
import {RiArrowLeftSLine} from 'react-icons/ri'

export default function MenuItems({item, handlePushTab}) {
    const path = usePathname ();
    const [activeItem, setActiveItem] = useState(path);
    const [isExpand, setExpand] = useState(false);
    useEffect(()=>{
        setActiveItem(path);
    },[path]);
  if (!item.subItems) {
    return(
        <li onClick={()=>handlePushTab(item.name, item.link)} className={`${activeItem === item.link ? 'border-l-4 border-blue-500 bg-blue-500/20 text-white' : 'hover:bg-secondary-hover'}`}>
            <Link href={`${item?.link}`} className='flex whitespace-nowrap'>
                <div className='flex items-center justify-center min-w-[60px] h-[60px]'>
                    <span className='w-[40px] h-[40px] flex items-center justify-center text-xl text-white bg-slate-500 rounded-xl'>{item.icon}</span>
                </div>
                <span className='h-[60px] flex items-center uppercase tracking-widest'>{item.name}</span>
            </Link>
        </li>
    )
  }
  else{
    return(
        <li className={`${isExpand?'h-fit':'h-[60px]'} overflow-hidden transition-all duration-300`}>
            <div onClick={()=>setExpand((p)=>!p)} className='flex items-center justify-between pr-3 hover:bg-secondary-hover cursor-pointer'>
                <span className='flex whitespace-nowrap'>
                    <div className='flex items-center justify-center min-w-[60px] h-[60px]'>
                        <span className='w-[40px] h-[40px] flex items-center justify-center text-xl text-white bg-slate-500 rounded-xl'>{item.icon}</span>
                    </div>
                    <span className='h-[60px] flex items-center uppercase tracking-widest'>{item.name}</span>
                </span>
                <span className={`${isExpand && '-rotate-90'} duration-300`}><RiArrowLeftSLine size={22}/></span>
            </div>
            <ul className='bg-zinc-800'>
                {isExpand && item.subItems.map((sub, index)=>(
                    <li key={index} onClick={()=>handlePushTab(sub.name, sub.link)} className={`${activeItem === sub.link ? 'border-l-4 border-blue-500 bg-blue-500/20 text-white' : 'hover:bg-secondary-hover'}`}>
                        <Link href={`${sub?.link}`} className='flex whitespace-nowrap'>
                            <div className='flex items-center justify-center min-w-[60px] h-[60px]'>
                                <span className='w-[40px] h-[40px] flex items-center justify-center text-xl text-white bg-slate-500 rounded-xl'>{sub.icon}</span>
                            </div>
                            <span className='h-[60px] flex items-center uppercase tracking-widest'>{sub.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    )
  }
}
