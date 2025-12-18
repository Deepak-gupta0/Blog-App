"use client";
import { LogOutAction } from "@/app/actions/authAction";
import { Search, X, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [mobNav, setMobNav] = useState(false);
  const [query, setQuery] = useState("");
  const [uniqueName, setUniqueName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchUniqueName = async () => {
      const res = await fetch("/api/uniquename");
      if (res.status === 401) return router.push("/login");
      const data = await res.json();
      setUniqueName(data.uniqueName);
    };
    fetchUniqueName();
  }, [router]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?tab=blogs&q=${encodeURIComponent(query)}`);
    setQuery("");
    setMobNav(false);
  };

  const handleLogout = async () => {
    const res = await LogOutAction();
    if (res?.success) router.push("/login");
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black">
            Horizon
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="/blogs">Blogs</NavLink>
            <NavLink href="/create-blog">Create</NavLink>
            <NavLink href={`/profile/${uniqueName}`}>Profile</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search blogs"
                className="rounded-md border px-3 py-1 text-sm outline-none"
              />
              <button className="rounded-md bg-blue-600 p-2 text-white">
                <Search size={16} />
              </button>
            </form>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobNav(!mobNav)}
            className="md:hidden"
          >
            {mobNav ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobNav && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col gap-5 px-4 py-6">
            <MobileLink href="/blogs" setMobNav={setMobNav}>Blogs</MobileLink>
            <MobileLink href="/create-blog" setMobNav={setMobNav}>Create</MobileLink>
            <MobileLink href={`/profile/${uniqueName}`} setMobNav={setMobNav}>Profile</MobileLink>
            <MobileLink href="/contact" setMobNav={setMobNav}>Contact</MobileLink>

            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search blogs"
                className="flex-1 rounded-md border px-3 py-2 text-sm outline-none"
              />
              <button className="rounded-md bg-blue-600 p-2 text-white">
                <Search size={16} />
              </button>
            </form>

            <button
              onClick={handleLogout}
              className="mt-4 rounded-md bg-red-600 py-2 text-white"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium hover:text-blue-600"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, setMobNav }) {
  return (
    <Link
      href={href}
      onClick={() => setMobNav(false)}
      className="text-lg font-medium"
    >
      {children}
    </Link>
  );
}