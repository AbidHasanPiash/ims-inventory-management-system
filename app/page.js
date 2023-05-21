import { FiShoppingCart } from "react-icons/fi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { MdOutlineAssignmentReturned, MdAddTask } from "react-icons/md";
import InfoCard from "./components/dashboard/InfoCard";
import SalesWeekly from "./components/dashboard/SalesWeekly";

export default function Home() {
  return (
    <div className="w-full h-full">
      <h1 className="text-3xl p-3">Dashboard</h1>
      <div className="grid xl:grid-cols-4 grid-cols-2 gap-3 p-3">
        <InfoCard color='#345995' number={241} title='Customers surves' icon={FiShoppingCart} link='#'/>
        <InfoCard color='#03CEA4' number={1420} title='Items Sold' icon={BiPurchaseTagAlt} link='#'/>
        <InfoCard color='#FB4D3D' number={4} title='Returns' icon={MdOutlineAssignmentReturned} link='#'/>
        <InfoCard color='#EAC435' number={344} title='Items Added' icon={MdAddTask} link='#'/>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6 m-3 mb-20">
        <SalesWeekly/>
      </div>
    </div>
  );
}
