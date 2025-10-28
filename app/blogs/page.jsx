"use client";
import React, { useEffect, useState } from "react";
import BlogPost from "@/components/BlogPost";

export default function BlogFeed() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Fetch API
  const fetchFeed = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page }),
    });

    const data = await res.json();

    // Agar 0 aaye toh end hai
    if (data.length === 0) setHasMore(false);

    // Purane posts ke sath append kar do
    setPosts((prev) => [...prev, ...data]);
    setLoading(false);
  };

  // Load jab page change ho
  useEffect(() => {
    fetchFeed();
  }, [page]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 2 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:mt-9 mt-20 min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Latest Blogs
          </h1>
        </div>
      </div>

      {/* Blog Feed */}
      <div className="max-w-2xl mx-auto">
        {posts.map((blog) => (
          <BlogPost key={blog._id} blog={blog} />
        ))}

        {loading && (
          <div className="text-center text-gray-500 py-6">Loading more...</div>
        )}
        {!hasMore && (
          <div className="text-center text-gray-400 py-6">
            You’ve reached the end 🎉
          </div>
        )}
      </div>
    </div>
  );
}
