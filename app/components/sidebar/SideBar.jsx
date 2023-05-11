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
    { id:1, name:'Dashboard', message:'new', link:'/', icon:<RxDashboard/> },
    { id:2, name:'Report',  link:'/report', icon:<TbReportSearch/> },
    { id:3, name:'Chart of Account',  link:'/chartofaccount', icon:<CgListTree/> },
    { id:3, name:'Chart of Account View',  link:'/chartofaccountview', icon:<CgListTree/> },
    { id:4, name:'Products', message:'new', icon:<TbBrandProducthunt/>, 
      subItems:[
        {id:1, name:'Pharmacy', link:'/pharmacy',  icon:<GiMedicines/>},
        {id:2, name:'Non-Pharmacy', message:'new', link:'/non-pharmacy', icon:<TbBabyBottle/>}
      ]},
    { id:5, name:'Order', link:'/order', icon:<MdOutlinePlaylistAddCheckCircle/> },
    { id:6, name:'Purchase', link:'/purchase', icon:<HiOutlineShoppingBag/> },
    { id:7, name:'Setup', icon:<MdOutlineSettingsSuggest/>, 
      subItems:[
        {id:1, name:'Category', link:'/category',  icon:<MdOutlineCategory/>},
        {id:2, name:'Box', link:'/box', icon:<BsBox/>}
      ]},
    { id:8, name:'Company', link:'/company', icon:<RiBuilding2Line/> },
    { id:9, name:'Suplier', link:'/suplier', icon:<TbTruckDelivery/>},
    { id:10, name:'Employe', link:'/employe', icon:<BsPeople/> }
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
