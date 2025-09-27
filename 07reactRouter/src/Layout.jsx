import React,{Suspense} from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <Header />
    <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl text-white">Loading Page...</p>
        </div>
    }>
    <Outlet  />
    </Suspense>
    <Footer  />
    </>
  )
}

export default Layout