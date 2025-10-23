"use client";
import React, { useEffect, useState } from "react";
import DropdownMenuRadioGroupDemo from "./DropdownMenu";
import TravelCard from "./Card";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogsPage() {
  const params = useSearchParams();
  const searchParams = params.get("page");
  const [blogs, setBlogs] = useState(null);
  const [blogCount, setBlogCount] = useState(0)
  // console.log(blogCount)

  let page = parseInt(searchParams, 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 8;

  const fetchBlogs = async () => {
    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page, perPage }),
    });
    const {blogs, blogCount} = await response.json();
    setBlogs(blogs);
    setBlogCount(blogCount)
  };

  const totalPages = Math.ceil(blogCount / perPage);
  // console.log(totalPages)

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
    if(!blogs){
      fetchBlogs();
    }
  }, [searchParams]);

  const categories = [
    "All",
    "Destination",
    "Culinary",
    "Lifestyle",
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
        <div className="flex gap-2  md:overflow-x-scroll">
          <div className="flex items-center md:hidden">
          <ChevronLeft className="text-black"/>
          </div>

          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 dark:bg-gray-800 shadow-xl md:shadow-lg rounded-md h-fit"
            >
              {category}
            </button>
          ))}
          <div className="flex items-center md:hidden">
          <ChevronRight className="text-black"/>
          </div>
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
          <TravelCard key={index} blog={blog} title={blog.title} desc={blog.desc} blogImg={blog.blogImg} />
        ))}
      </div>
      {isPageOutOfRange ? (
					<div>No more pages...</div>
				): (

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
