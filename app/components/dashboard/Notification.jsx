import React from "react";
import { BsFillTriangleFill, BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { HiDocumentAdd, HiMail } from "react-icons/hi";

export default function Notification({ isNotiOpen }) {
  return (
    <div>
      <div
        className={`${
          isNotiOpen ? "fixed" : "hidden"
        } absolute z-30 w-72 top-12 right-20 shadow-lg`}
      >
        <div className="w-full flex items-center justify-end text-yellow-200">
          <BsFillTriangleFill size={30} />
        </div>
        <div className="absolute top-5 w-full max-h-60 bg-yellow-200 rounded-lg overflow-y-auto scrollbar-thin scrollbar-thumb-orange-600">
          <h1 className="w-full border-b border-black text-center p-2">15 Notifications</h1>
          <div className="flex items-center justify-between p-2 border-b border-black cursor-pointer hover:bg-yellow-500/20">
            <div className="flex items-center justify-center gap-2">
                <HiMail/>
                <p>4 new messages</p>
            </div>
            <p>3 mins</p>
          </div>
          <div className="flex items-center justify-between p-2 border-b border-black cursor-pointer hover:bg-yellow-500/20">
            <div className="flex items-center justify-center gap-2">
                <HiDocumentAdd/>
                <p>8 order request</p>
            </div>
            <p>10 hours</p>
          </div>
          <div className="flex items-center justify-between p-2 border-b border-black cursor-pointer hover:bg-yellow-500/20">
            <div className="flex items-center justify-center gap-2">
                <BsFillFileEarmarkPdfFill/>
                <p>3 new reports</p>
            </div>
            <p>1 day</p>
          </div>
          <h1 className="w-full text-center p-2 cursor-pointer hover:bg-yellow-500/20">See All Notifications</h1>
        </div>
      </div>
    </div>
  );
}
