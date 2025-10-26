"use client";
import React, { useEffect, useState } from "react";
import { MoreHorizontal, User } from "lucide-react";

const BlogPost = ({ blog }) => (
  <article className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors cursor-pointer">
    <div className="p-4">
      <div className="flex items-start gap-3">
        {/* Avatar */}

        {blog.profile?.profileImg ? (
          <img
            src={blog.profile?.profileImg}
            alt={blog.profile?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <User className="w-12 h-12 rounded-full border p-3 bg-gray-300 text-white"/>
        )}

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-gray-900 dark:text-white hover:underline">
                {blog.profile?.name || "Unknown"}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                @{blog.profile?.uniqueName || "anonymous"}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                · {new Date(blog.createdAt).toLocaleDateString()}
              </span>
            </div>
            <button className="text-gray-500 hover:text-blue-500 p-1 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors">
              <MoreHorizontal size={18} />
            </button>
          </div>

          {/* Blog Title */}
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {blog.title}
          </h2>

          {/* Blog Desc */}
          <p className="text-gray-900 dark:text-gray-100 mb-3 leading-relaxed">
            {blog.desc}
          </p>

          {/* Blog Image */}
          {blog.blogImg && (
            <div className="mb-3 rounded-2xl overflow-hidden ">
              <img
                src={blog.blogImg}
                alt="Blog"
                className="h-[400px] object-cover rounded-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </article>
);

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
    <div className="mt-9 min-h-screen bg-white dark:bg-black">
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
