"use client"
import { SearchBlogsAction } from '@/app/actions/SearchAction'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import SearchBlogCard from './SearchBlogCard'

export default function SearchBlogs() {

  const searchParams = useSearchParams()

  const blogName = searchParams.get("q") || "";

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchSearchBlogs = async () => {
      const blogsData = await SearchBlogsAction(blogName);
      setBlogs(blogsData.blogsData);
    };
    fetchSearchBlogs();
  }, [blogName]);

  if(!(blogs?.length)){
    return <p className="text-center text-gray-500">No blogs found.</p>;
  }


  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <SearchBlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  )
}
