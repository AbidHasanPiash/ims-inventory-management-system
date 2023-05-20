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
    const newData = { name: name, link: link };
    setHeaderTab([...headerTab, newData]);
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
      <body className='flex bg-primary text-secondary'>
        <SidebarContext.Provider value={{isSidebarOpen, setSidebarOpen, headerTab, handlePushTab, handleRemoveTab}}>
          <SideBar/>
          <main className='w-full min-h-screen'>
            <Header/>
            <div className=''>
              {children}
            </div>
          </main>
        </SidebarContext.Provider>
      </body>
    </html>
  )
}
