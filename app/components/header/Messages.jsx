import React from "react";
import { BsFillTriangleFill} from "react-icons/bs";
import { BiUser, BiTime } from "react-icons/bi";

export default function Messages({ isMesgOpen }) {
  return (
    <div>
      <div
        className={`${
          isMesgOpen ? "fixed" : "hidden"
        } absolute z-30 w-80 top-12 right-32 shadow-lg`}
      >
        <div className="w-full flex items-center justify-end text-sky-200">
          <BsFillTriangleFill size={30} />
        </div>
        <div className="absolute top-5 w-full max-h-60 bg-sky-200 rounded-lg overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400">
          <div className="flex items-center justify-between p-2 border-b border-black cursor-pointer hover:bg-sky-500/20">
            <div className="flex items-center gap-3 px-2 py-1">
                <div className="ring ring-blue-500 text-blue-500 rounded-full"> <BiUser size={35}/> </div>
                <div>
                    <h1>Mr. Akib</h1>
                    <p className="w-32 text-xs truncate">Call me whenever you get this message.</p>
                </div>
            </div>
            <p className="flex items-center justify-center space-x-1 text-sm"><BiTime size={15}/> <span>2 mins</span></p>
          </div>
          <div className="flex items-center justify-between p-2 border-b border-black cursor-pointer hover:bg-sky-500/20">
            <div className="flex items-center gap-3 px-2 py-1">
                <div className="ring ring-blue-500 text-blue-500 rounded-full"> <BiUser size={35}/> </div>
                <div>
                    <h1>Sharmin Shila</h1>
                    <p className="w-32 text-xs truncate">What is the update?</p>
                </div>
            </div>
            <p className="flex items-center justify-center space-x-1 text-sm"><BiTime size={15}/> <span>42 mins</span></p>
          </div>
          <div className="flex items-center justify-between p-2 border-b border-black cursor-pointer hover:bg-sky-500/20">
            <div className="flex items-center gap-3 px-2 py-1">
                <div className="ring ring-blue-500 text-blue-500 rounded-full"> <BiUser size={35}/> </div>
                <div>
                    <h1>Arifa Billah</h1>
                    <p className="w-32 text-xs truncate">I will call you soon.</p>
                </div>
            </div>
            <p className="flex items-center justify-center space-x-1 text-sm"><BiTime size={15}/> <span>1 hour</span></p>
          </div>
          <h1 className="w-full text-center p-2 cursor-pointer hover:bg-sky-500/20">See All Messages</h1>
        </div>
      </div>
    </div>
  )
}
