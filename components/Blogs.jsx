"use client";
import React, { useEffect, useState } from "react";
import DropdownMenuRadioGroupDemo from "./DropdownMenu";
import TravelCard from "./Card";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogsPage() {
  const params = useSearchParams();
  const searchParams = params.get("page");
  const [blogs, setBlogs] = useState([]);
  const [blogCount, setBlogCount] = useState(0);
  const [sortOrder, setSortOrder] = useState("newest");
  const [open, setOpen] = useState(false);

  const handleSelect = (value) => {
    setSortOrder(value);
    setBlogs((prevBlogs) => {
      const sorted = [...prevBlogs]; // copy banaya
      if (value === "oldest") {
        sorted.reverse(); // agar oldest select hua toh reverse kar do
      } else {
        sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // newest
      }
      return sorted;
    });
    setOpen(false);
  };

  let page = parseInt(searchParams, 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 8;

  const fetchBlogs = async () => {
    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page, perPage }),
    });
    const { blogs, blogCount } = await response.json();
    setBlogs(blogs);
    setBlogCount(blogCount);
  };

  const totalPages = Math.ceil(blogCount / perPage);

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  const isPageOutOfRange = page > totalPages;

  const pageNumbers = [];
  const offsetNumber = 3;
  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }
  useEffect(() => {
   
      fetchBlogs();
  }, [searchParams]);

  const categories = ["All", "Destination", "Culinary", "Lifestyle"];

  return (
    <div className="py-10 px-6 flex flex-col">
      <div>
        <h1 className="text-4xl font-semibold">Blog</h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 py-1">
          Here we share travel tips, destination guides, and stories that
          inspire your next adventure.
        </p>
      </div>

      <div className="relative inline-block text-left">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-between w-40 px-4 py-2 text-sm font-medium bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
        >
          {sortOrder === "newest" ? "Newest" : "Oldest"}
          <ChevronDown
            className={`ml-2 h-4 w-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div className="absolute left-0-0 z-10 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
            <button
              onClick={() => handleSelect("newest")}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                sortOrder === "newest" ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              Newest
            </button>
            <button
              onClick={() => handleSelect("oldest")}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                sortOrder === "oldest" ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              Oldest
            </button>
          </div>
        )}
      </div>
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          justify-items-center
        "
      >
        {blogs?.map((blog, index) => (
          <TravelCard
            key={index}
            blog={blog}
            title={blog.title}
            desc={blog.desc}
            blogImg={blog.blogImg}
          />
        ))}
      </div>
      {isPageOutOfRange ? (
        <div>No more pages...</div>
      ) : (
        <div className="flex justify-center items-center mt-16">
          <div className="flex border-[1px] gap-4 rounded-[10px] border-light-green p-4">
            {page === 1 ? (
              <div className="opacity-60" aria-disabled="true">
                <ChevronLeft />
              </div>
            ) : (
              <Link href={`?page=${prevPage}`} aria-label="Previous Page">
                <ChevronLeft />
              </Link>
            )}

            {pageNumbers.map((pageNumber, index) => (
              <Link
                key={index}
                className={
                  page === pageNumber
                    ? "outline fw-bold px-2 rounded-md text-black bg-gray-200"
                    : "px-1 rounded-md"
                }
                href={`?page=${pageNumber}`}
              >
                {pageNumber}
              </Link>
            ))}

            {page === totalPages ? (
              <div className="opacity-60" aria-disabled="true">
                <ChevronRight />
              </div>
            ) : (
              <Link href={`?page=${nextPage}`} aria-label="Next Page">
                <ChevronRight />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
