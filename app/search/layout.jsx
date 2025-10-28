"use client"
import { useState } from "react"

export default function layout({children}) {

  const [isAll, setIsAll] = useState(true)
  const [isBlog, setIsBlog] = useState(false)
  const [isProfile, setIsProfile] = useState(false)

  const handleBlogOpen = () => {
    setIsAll(false)
    setIsBlog(true)
    setIsProfile(false)
  }
  const handleProfileOpen = () => {
    setIsAll(false)
    setIsProfile(true)
    setIsBlog(false)
  }
  const handleAllPage = () => {
    setIsAll(true)
    setIsProfile(false)
    setIsBlog(false)
  }


  return (
    <div className="flex flex-col mt-20 px-7">
      <div className="w-full text-lg gap-6 flex border-b  ">
        <button onClick={handleAllPage} className={` py-2 ${isAll ? "border-b-4 rounded border-blue-400"  : null}`}><span>All</span></button>
        <button onClick={handleBlogOpen} className={`py-2 ${isBlog ? "border-b-4 rounded border-blue-400" : null}`}><span>Blog</span></button>
        <button onClick={handleProfileOpen} className={`py-2 ${isProfile ? "border-b-4 rounded border-blue-400" : null}`}><span>Profile</span></button>
      </div>
      <div>{children}</div>
    </div>
  )
}
