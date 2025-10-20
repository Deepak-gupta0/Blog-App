"use client"
import Link from 'next/link'
import React, { useState } from 'react'
export default function Navbar() {
  const [mobNav, setMobNav] = useState(false)
  return (
    <nav
  className="glass-nav fixed left-0 right-0 top-0 z-10 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gray-900/60 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl md:max-w-screen"
>
  <div className="glass-nav flex items-center justify-between px-5 py-2 md:py-3">
    <span
      className="pointer-events-none absolute z-0 grid h-[16px] w-[16px] md:h-[50px] md:w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 text-2xl"
      style={{
        opacity: 0,
        transform: "scale(0) translateX(-50%) translateY(-50%)",
        top: 8,
        left: 512
      }}
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white h-[16px] w-[16px] md:w-[1em] md:h-[1em]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1={7} y1={17} x2={17} y2={7} />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </span>

    <span className="pointer-events-none relative left-0 top-[50%] z-10 text-xl md:text-4xl font-black  md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] text-white">
      Horizon
    </span>

    <div className="hidden items-center gap-2 md:flex">
      <a
        href="#"
        className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
      >
        <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
          Blogs
        </span>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
      <Link
        href="/create-blog"
        className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
      >
        <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
          Create
        </span>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
      <Link
        href="/profile"
        className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
      >
        <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
          Profile
        </span>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
      <a
        href="#"
        className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
      >
        <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
          Contact Us
        </span>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
    </div>

    
    <div className="flex items-center gap-4">
      <div className="text-white">
        <button className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform  active:scale-95">
          <div className="relative z-10 transition-colors outline pl-4 overflow-hidden  rounded-md md:w-fit">
            <input type="text" placeholder='Explore blogs...' className='outline-none text-white'/>
            <button className=' text-sm bg-white text-black py-2 px-2'>Search</button>
          </div>
          <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity " />
        </button>
      </div>
      <button onClick={() => setMobNav(prev => !prev)} className="ml-2 block scale-100 text-xl md:text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1={3} y1={12} x2={21} y2={12} />
          <line x1={3} y1={6} x2={21} y2={6} />
          <line x1={3} y1={18} x2={21} y2={18} />
        </svg>
      </button>
    </div>
  </div>
  <div hidden={!mobNav} className="block overflow-hidden backdrop-blur border-[1px] border-white/10 px-2 py-2 text-xs">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="text-white/90 transition-colors hover:text-white"
        >
          Products
        </a>
        <a
          href="#"
          className="text-white/90 transition-colors hover:text-white"
        >
          History
        </a>
        <a
          href="#"
          className="text-white/90 transition-colors hover:text-white"
        >
          Contact
        </a>
      </div>

      <div>
        <button className='bg-red-600 px-2 py-1 text-white rounded-xs'>
          Logout
        </button>
      </div>
      
    </div>
  </div>
</nav>

  )
}
