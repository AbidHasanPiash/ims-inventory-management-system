"use client"
import './globals.css';
import { SidebarContext } from './contexts/SidebarContext';
import SideBar from './components/sidebar/SideBar';
import Header from './components/header/Header';
import { useState } from 'react';

export const metadata = {
  title: 'IMS | Dashboard',
  description: 'It\'s providing a comprehensive solution for managing a shop\'s inventory. The app is scalable, allowing for easy expansion as the business grows. Built with the latest technologies, this inventory management system provides a robust and reliable solution for any shop looking to streamline their inventory management process.',
}

export default function RootLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [headerTab, setHeaderTab] = useState([{ name: '', link: '' }]);
  const handlePushTab = (name, link) => {
    // Remove blank objects from headerTab
    const filteredTab = headerTab.filter((tab) => tab.name !== '' || tab.link !== '');
    const newData = { name: name, link: link };
    // Check if newData already exists in headerTab
    const isDuplicate = headerTab.some((tab) => tab.name === name && tab.link === link);
    if (!isDuplicate) {
      setHeaderTab([...filteredTab, newData]);
    }
  };
  const handleRemoveTab = (index) => {
    const updatedTab = [...headerTab];
    updatedTab.splice(index, 1);
    setHeaderTab(updatedTab);
  };
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body className='flex bg-primary text-secondary overflow-hidden'>
        <SidebarContext.Provider value={{isSidebarOpen, setSidebarOpen, headerTab, handlePushTab, handleRemoveTab}}>
          <SideBar/>
          <main className='w-full min-h-screen'>
            <Header/>
            <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-orange-600'>
              {children}
            </div>
          </main>
        </SidebarContext.Provider>
      </body>
    </html>
  )
}
