import { useContext } from "react"
import { SidebarContext } from "@/app/contexts/SidebarContext"

export default function MenuItems({item}) {
    const {isSidebarOpen} = useContext(SidebarContext);
    if (!item.subItems) {
        return (
            <li className='h-10 my-2 flex items-center px-2 rounded hover:bg-secondary-hover'>
            <i className='w-8 flex items-center justify-center text-xl'>{item.icon}</i>
            <span className={`${isSidebarOpen ? 'text-[0px]':'block'} pl-2 duration-300`}>{item.name}</span>
            </li>
        )
    }
  
}
