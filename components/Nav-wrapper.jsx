"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const authRoutes = ["/login", "/register", "/create-blog", `/profile`, "/set-up"];
  const hideNavbar = authRoutes.includes(pathname);

  if (hideNavbar) return null; // login/signup pe kuch mat dikha

  return <Navbar/>
}
