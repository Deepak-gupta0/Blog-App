"use client";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
export default function Navbar() {
  const [mobNav, setMobNav] = useState(false);
  const [query, setQuery] = useState("");
  const [uniqueNames, setUniqueNames] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!uniqueNames) {
      const fetchUniqueName = async () => {
        const response = await fetch("/api/uniquename", { method: "GET" });
        const { uniqueName } = await response.json();
        setUniqueNames(uniqueName);
      };
      fetchUniqueName();
    }
  }, []);

  // const handleProfileLink = () => {
  //   const link = `/profile/${uniqueNames}`;
  //   setMobNav(false)
  //   return redirect(link);
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // ✅ Always redirect to blogs search page
      router.push(`/search?tab=blogs&q=${encodeURIComponent(query.trim())}`);
      setQuery(""); // optional: clear input after search
    }
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-60 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-white/90 text-gray-800 backdrop-blur md:max-w-screen ">
      <div className="flex items-center justify-between px-5 py-1 md:py-3">
        <span
          className="pointer-events-none absolute z-0 grid h-[16px] w-[16px] md:h-[50px] md:w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 text-2xl"
          style={{
            opacity: 0,
            transform: "scale(0) translateX(-50%) translateY(-50%)",
            top: 8,
            left: 512,
          }}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="dark:text-white h-[16px] w-[16px] md:w-[1em] md:h-[1em]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1={7} y1={17} x2={17} y2={7} />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>

        <Link
          href="/"
          className=" relative left-0 top-[50%] z-10 text-xl md:text-4xl font-black  md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] dark:text-white cursor-pointer "
        >
          Horizon
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/blogs"
            className="group hover:bg-gray-300/20 relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 dark:text-white/90 transition-colors dark:group-hover:text-white">
              Blogs
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
          <Link
            href="/create-blog"
            className="group relative hover:bg-gray-300/20  scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative  z-10 dark:text-white/90 transition-colors dark:group-hover:text-white">
              Create
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
          <Link
            href={`/profile/${uniqueNames}`}
            className="group hover:bg-gray-300/20 relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 dark:text-white/90 transition-colors dark:group-hover:text-white">
              Profile
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
          <Link
            href="/contact"
            className="group relative hover:bg-gray-300/20 scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 dark:text-white/90 transition-colors dark:group-hover:text-white">
              Contact Us
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>

        <div className="flex items-center gap-4 justify-between">
          <div className=" md:block dark:text-white">
            <div className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform  active:scale-95">
              <div className="relative z-10 transition-colors outline pl-4 overflow-hidden  rounded-4xl md:w-fit flex items-center">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Explore blogs..."
                  className="outline-none dark:text-white text-gray-700"
                />
                <button
                  onClick={handleSearch}
                  className=" text-sm  py-2 px-2 rounded-full outline bg-blue-500 text-white"
                >
                  <Search />
                </button>
              </div>
              <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity " />
            </div>
          </div>
          <button
            onClick={() => setMobNav((prev) => !prev)}
            className="ml-2 block scale-100 text-xl md:text-3xl dark:text-white/90 transition-all hover:scale-105 dark:hover:text-white active:scale-95 md:hidden"
          >

            <svg
              hidden={mobNav}
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
            <X hidden={!mobNav}/>
          </button>
        </div>
      </div>
      <div
        hidden={!mobNav}
        className="block h-screen overflow-hidden backdrop-blur border-[1px] border-white/10 px-2 py-2 text-xs"
      >
        <div className="flex flex-col gap-6 py-6 px-4">
          <Link
            href="/blogs"
            onClick={() => mobNav(false)}
            className="text-lg font-medium dark:text-white/90 transition-all duration-200 dark:hover:text-white hover:translate-x-1"
          >
            Blogs
          </Link>
          <Link
            onClick={() => mobNav(false)}
            href="/create-blog"
            className="text-lg font-medium dark:text-white/90 transition-all duration-200 dark:hover:text-white hover:translate-x-1"
          >
            Create
          </Link>
          <Link
            href={`/profile/${uniqueNames}`}
           onClick={() => mobNav(false)}
            className="text-lg inline-flex font-medium dark:text-white/90 transition-all duration-200 dark:hover:text-white hover:translate-x-1"
          >
            Profile
          </Link>
          <Link
            onClick={() => mobNav(false)}
            href="/contact"
            className="text-lg font-medium dark:text-white/90 transition-all duration-200 dark:hover:text-white hover:translate-x-1"
          >
            Contact Us
          </Link>

          <div className="pt-4 border-t border-white/10">
            <button className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 px-4 py-2.5 text-white font-medium rounded-md transition-colors duration-200 shadow-lg">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
