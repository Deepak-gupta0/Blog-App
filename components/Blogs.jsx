"use client";
import React, { useEffect, useState } from "react";
import DropdownMenuRadioGroupDemo from "./DropdownMenu";
import TravelCard from "./Card";
import { useSearchParams } from "next/navigation";

export default function BlogsPage() {
  const params = useSearchParams();
  const searchParams = params.get("page");
  const [blogs, setBlogs] = useState([]);

  let page = parseInt(searchParams, 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 8;

  const fetchBlogs = async () => {
    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page, perPage }),
    });
    const { tests, testCount } = await response.json();
    setBlogs(tests);
  };

  const totalPages = Math.ceil(data.itemCount / perPage);

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  useEffect(() => {
    fetchBlogs();
  }, [searchParams]);

  const categories = [
    "All",
    "Destination",
    "Culinary",
    "Lifestyle",
    "Tips & Hacks",
  ];

  return (
    <div className="py-10 px-6 flex flex-col">
      <div>
        <h1 className="text-4xl font-semibold">Blog</h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 py-1">
          Here we share travel tips, destination guides, and stories that
          inspire your next adventure.
        </p>
      </div>

      <div className="py-4 flex justify-between flex-wrap gap-4">
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 dark:bg-gray-800 shadow-lg rounded-md"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="inline-flex items-center gap-2">
          Sort by:
          <DropdownMenuRadioGroupDemo />
        </div>
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
          <TravelCard key={index} blog={blog} title={blog.title} />
        ))}
      </div>
    </div>
  );
}
