import Link from 'next/link'
import React, {useContext, useState} from 'react'
import { SidebarContext } from '../../contexts/SidebarContext'
import MenuItems from './MenuItems'

//React Icons
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {RiBuilding2Line} from 'react-icons/ri'
import {RxDashboard} from 'react-icons/rx'
import {GiMedicines} from 'react-icons/gi'
import {CgListTree} from 'react-icons/cg'
import {BsBox, BsPeople} from 'react-icons/bs'
import {MdOutlinePlaylistAddCheckCircle, MdOutlineSettingsSuggest, MdOutlineCategory} from 'react-icons/md'
import {TbReportSearch, TbBrandProducthunt, TbBabyBottle, TbTruckDelivery} from 'react-icons/tb'

export default function SideBar() {
  const {isSidebarOpen, handlePushTab} = useContext(SidebarContext);
  const menuItems = [
    {cat:'main', name:'Dashboard', link:'/', icon:<RxDashboard/> },
    {cat:'main', name:'Report', icon:<TbReportSearch/>, 
      subItems:[
        {cat:'sub', name:'Chart of Account', link:'/coa',  icon:<CgListTree/>},
        {cat:'sub',  name:'Sales', link:'/sales', icon:<TbBabyBottle/>}
      ]},
    {cat:'main', name:'Products', icon:<TbBrandProducthunt/>, 
      subItems:[
        {cat:'sub',  name:'Pharmacy', link:'/pharmacy',  icon:<GiMedicines/>},
        {cat:'sub',  name:'Non-Pharmacy', link:'/non-pharmacy', icon:<TbBabyBottle/>}
      ]},
    {cat:'main', name:'Order', link:'/order', icon:<MdOutlinePlaylistAddCheckCircle/> },
    {cat:'main', name:'Purchase', link:'/purchase', icon:<HiOutlineShoppingBag/> },
    {cat:'main', name:'Setup', icon:<MdOutlineSettingsSuggest/>, 
      subItems:[
        {cat:'sub',  name:'Category', link:'/category',  icon:<MdOutlineCategory/>},
        {cat:'sub',  name:'Box', link:'/box', icon:<BsBox/>}
      ]},
    {cat:'main', name:'Company', link:'/company', icon:<RiBuilding2Line/> },
    {cat:'main', name:'Suplier', link:'/suplier', icon:<TbTruckDelivery/>},
    {cat:'main', name:'Employe', link:'/employe', icon:<BsPeople/> }
  ];
  return (
    <nav className={`${isSidebarOpen?'w-[60px] hover:w-[300px]':'w-[300px]'} h-screen bg-secondary text-primary overflow-hidden transition-all duration-200`}>
        <div className='h-1/6'>
            {/* company name */}
            <div className='flex whitespace-nowrap border-b border-black'>
                <div className='flex items-center justify-center min-w-[60px] h-[60px]'>
                    <span className='w-[40px] h-[40px] flex items-center justify-center text-xl text-white bg-slate-500 rounded-full'>A</span>
                </div>
                <span className='h-[60px] flex items-center uppercase tracking-widest'>Company</span>
            </div>
            {/* user name */}
            <div className='flex whitespace-nowrap border-b border-black'>
                <div className='flex items-center justify-center min-w-[60px] h-[60px]'>
                    <span className='w-[40px] h-[40px] flex items-center justify-center text-xl text-white bg-slate-500 rounded-full'>A</span>
                </div>
                <span className='h-[60px] flex items-center uppercase tracking-widest'>User</span>
            </div>
        </div>
        {/* menu list items */}
        <ul className='h-5/6 select-none overflow-y-auto scrollbar-none hover:scrollbar-thin scrollbar-thumb-orange-600'>
            {menuItems.map((item, i)=>(
                <MenuItems key={i} item={item} handlePushTab={handlePushTab}/>
              ))}
        </ul>
    </nav>
  )
}
