import Link from "next/link";
import { HiArrowCircleRight } from "react-icons/hi";

export default function InfoCard({color, number, title, icon: Icon, link}) {
  return (
    <div style={{backgroundColor:color}} className={`group w-full relative rounded-lg text-white`}>
        <div className="flex items-center justify-between p-2 mb-10">
          <div>
            <h1 className="text-4xl font-bold">{number}</h1>
            <p className="py-4">{title}</p>
          </div>
          <span className="text-black pr-2 opacity-10 duration-300 group-hover:scale-110">
            <Icon size={80}/>
          </span>

        </div>
        <Link 
          href={link}
          className={`absolute bottom-0 w-full flex items-center rounded-b-lg justify-center space-x-3 
          bg-black bg-opacity-20 hover:bg-opacity-30 p-1 cursor-pointer`}
        >
          <button>More info</button>
          <HiArrowCircleRight size={20} />
        </Link>
      </div>
  );
}