'use client';
import React, { useState } from 'react'

export default function Coa() {
  const [tab, setTab] = useState([{ name: '', link: '' }]);

  const handlePushData = (name, link) => {
    const newData = { name: name, link: link };
    setTab([...tab, newData]);
  };

  const handleRemoveData = (index) => {
    const updatedTab = [...tab];
    updatedTab.splice(index, 1);
    setTab(updatedTab);
  };
  return (
    <div>
      
    <div>
      <button onClick={()=>handlePushData('ok', 'ok2')}>Push Data</button>

      <ul>
        {tab.map((item, index) => (
          <li key={index}>
            {index} {'  '}
            Name: {item.name}, Link: {item.link}
            <button onClick={() => handleRemoveData(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}
