import { FiShoppingCart } from "react-icons/fi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { MdOutlineAssignmentReturned, MdAddTask } from "react-icons/md";
import InfoCard from "./components/dashboard/InfoCard";

export default function Home() {
  return (
    <div className="w-full h-full">
        <div className="grid xl:grid-cols-4 grid-cols-2 gap-3 p-3">
            <InfoCard color='sky' number='240' title='Customers surves' icon={FiShoppingCart} link='#'/>
            <InfoCard color='green' number='1420' title='Items Sold' icon={BiPurchaseTagAlt} link='#'/>
            <InfoCard color='red' number='4' title='Returns' icon={MdOutlineAssignmentReturned} link='#'/>
            <InfoCard color='yellow' number='340' title='Items Added' icon={MdAddTask} link='#'/>
        </div>
    </div>
  );
}
