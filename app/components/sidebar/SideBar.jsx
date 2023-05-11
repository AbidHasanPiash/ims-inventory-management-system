import React, {useContext} from 'react'
import { SidebarContext } from '../../contexts/SidebarContext'
import MenuItems from './MenuItems'

//React Icons
import {HiOutlineLogout, HiOutlineShoppingBag} from 'react-icons/hi'
import {RiSearch2Line, RiBuilding2Line} from 'react-icons/ri'
import {RxDashboard} from 'react-icons/rx'
import {GiMedicines} from 'react-icons/gi'
import {CgListTree} from 'react-icons/cg'
import {BsBox, BsPeople} from 'react-icons/bs'
import {MdOutlinePlaylistAddCheckCircle, MdOutlineSettingsSuggest, MdOutlineCategory} from 'react-icons/md'
import {TbReportSearch, TbBrandProducthunt, TbBabyBottle, TbTruckDelivery} from 'react-icons/tb'
import {CiMenuKebab, CiEdit} from 'react-icons/ci'

export default function SideBar() {
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
  const {isSidebarOpen} = useContext(SidebarContext);
  return (
    <aside className={`${isSidebarOpen?'w-20':'w-72'} duration-300 min-h-screen px-2 bg-secondary text-primary`}>
      {/* -----------Brand Name----------- */}
      <div className='h-14 px-3 border-b border-primary border-opacity-50 flex items-center text-lg'>
          <div className='h-8 w-8 rounded-full bg-primary text-secondary font-bold text-center flex items-center justify-center'>
              <span>A</span>
          </div>
          <h1 className={`${isSidebarOpen ? 'text-[0px]':'block'} pl-2 duration-300`}>ABID-IMS</h1>
      </div>
      {/* -----------User Name----------- */}
      <div className='h-14 px-3 border-b border-primary border-opacity-50 flex items-center text-lg'>
          <div className='h-8 w-8 rounded-full bg-primary text-secondary font-bold text-center flex items-center justify-center'>
              <span>P</span>
          </div>
          <h1 className={`${isSidebarOpen ? 'text-[0px]':'block'} pl-2 duration-300`}>User id</h1>
      </div>
      {/* -----------Search Section----------- */}
      <div className={`flex items-center justify-start border border-primary border-opacity-50 my-3 rounded`}>
        <input 
          type="text" 
          placeholder='Search' 
          className={`${isSidebarOpen ? 'hidden':'block'} w-full h-9 bg-secondary-hover rounded-l outline-none pl-3 border-r border-primary border-opacity-50 focus:ring-1`}/>
        <div className='w-14 h-9 flex items-center justify-center'>
          <RiSearch2Line />
        </div>
      </div>
      {/* -----------Sidebar Menu Items----------- */}
      <div className=''>
          <ul>
              {menuItems.map((item, i)=>(
                <MenuItems key={i} item={item}/>
              ))}
          </ul>
      </div>
    </aside>
  )
}
