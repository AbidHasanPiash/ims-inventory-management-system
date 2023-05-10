import SideBar from '@/components/sideBar'
import './globals.css'

export const metadata = {
  title: 'IMS | Dashboard',
  description: 'It\'s providing a comprehensive solution for managing a shop\'s inventory. The app is scalable, allowing for easy expansion as the business grows. Built with the latest technologies, this inventory management system provides a robust and reliable solution for any shop looking to streamline their inventory management process.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex'>
        <SideBar/>
        <main className='w-full min-h-screen'>
          {children}
        </main>
      </body>
    </html>
  )
}
