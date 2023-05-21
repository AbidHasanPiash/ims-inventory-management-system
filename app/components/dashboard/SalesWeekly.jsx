'use client'
import React from 'react'
import { BiUpArrowAlt } from 'react-icons/bi';
import {FaChartLine} from 'react-icons/fa'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from 'recharts';

export default function SalesWeekly() {
    const today = new Date(); // Get the current date
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const day = today.getDay();
    const updateDays = [...days.slice(day), ...days.slice(0, day)];
    const data = [
      { sale: updateDays[6], Pharmacy: 9000, NonPharmacy: 4400 },
      { sale: updateDays[5], Pharmacy: 4000, NonPharmacy: 2400 },
      { sale: updateDays[4], Pharmacy: 5000, NonPharmacy: 4400 },
      { sale: updateDays[3], Pharmacy: 6000, NonPharmacy: 6400 },
      { sale: updateDays[2], Pharmacy: 9000, NonPharmacy: 6400 },
      { sale: updateDays[1], Pharmacy: 4000, NonPharmacy: 8400 },
      { sale: updateDays[0], Pharmacy: 4700, NonPharmacy: 6400 },
    ];
  return (
    <div className='shadow-xl border rounded-lg bg-gray-200 text-xs md:text-sm xl:text-md'>
    {/* heading section */}
    <div className="m-5 text-gray-500">
      <div className='flex items-center justify-between mb-10'>
        <div className='flex items-center justify-start space-x-2'>
          <FaChartLine/> 
          <h1>Weekly Sale Update</h1>
        </div>
        <p className='text-blue-400 hover:text-blue-700 cursor-pointer'>View Report</p>
      </div> 
      {/* ********************************** */}
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-xl'>$4,140.00</h1>
          <p>Sales Over Time</p>
        </div>
        <div className='flex flex-col items-end justify-end'>
          <h1 className='flex items-center justify-center text-xl text-green-500'>
            <BiUpArrowAlt size={20}/>
            <span>12.5%</span>
          </h1>
          <p>Since last Week</p>
        </div>
      </div>
    </div>
    <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart data={data} width={100} height={100} margin={{ top: 5, right: 30, left: 10, bottom: 5, }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sale" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="Pharmacy" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="NonPharmacy" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
    </ResponsiveContainer>
    </div>
  )
}
