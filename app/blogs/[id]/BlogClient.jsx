"use client";
import React, { useEffect, useState } from "react";
import { Calendar, User, Clock, ArrowLeft, Share2, Heart } from "lucide-react";
import Link from "next/link";

export default function BlogClient({ blogId }) {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
    fetchBlog();
  }, [blogId]);


  const fetchBlog = async () => {
    setIsLoading(true);
    const response = await fetch(`/api/blogs/${blogId}`, {
      method: "GET",
    });

    if(!response.ok) throw new Error("Blog not found")

    const data = await response.json();
    setBlog(data);
    setIsLoading(false);
  };


 
  return (
    <>
        <h1 hidden={!isLoading}>Loading...</h1>

        <div hidden={isLoading} className="min-h-screen bg-gray-50 mx-auto w-fit">
          {/* Header */}
          <div className="bg-white shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft size={20} />
                <span>Back to Blogs</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <article className="max-w-4xl mx-auto px-4 py-8">
            {/* Title Section */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {blog?.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{blog?.desc}</p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span className="font-medium">{blog?.profile?.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{blog?.createdAt}</span>
                </div>
                
              </div>

              {/* Tags */}
            </header>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={blog?.blogImg}
                alt={blog?.title}
                className="w-auto md:h-140 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Author Card */}
            <Link href={`/profile/${blog?.profile?.uniqueName}`} className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-4">
                <img
                  src={blog?.profile?.profileImg}
                  alt={blog?.profile?.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {blog?.profile?.name}
                  </h3>
                  <p className="text-gray-600">{blog?.profile?.desc}</p>
                </div>
              </div>
            </Link>
          </article>
        </div>
    </>
  );
}

// {
//     "_id": "68f9d7a9a70364cbc422e37d",
//     "title": "PakDee gupta",
//     "desc": "lovelovelovelove",
//     "blogImg": "https://ik.imagekit.io/iao5n4ddg/Screenshot_2025-07-18_182704_BxIpM8ZLJo.png",
//     "userId": "68f32f0a14b5e7a2a5ee3563",
//     "createdAt": "2025-10-23T07:22:17.297Z",
//     "__v": 0,
//     "profile": {
//         "_id": "68f7a5285f7a3cc9270c6dc2",
//         "profileImg": "https://ik.imagekit.io/iao5n4ddg/Screenshot_2025-05-23_234908_KoYnkxvKV.png",
//         "name": "Deepak",
//         "desc": "Deepak is a very good Boy ",
//         "address": "Housing Board, Bhilai, CG",
//         "userId": "68f32f0a14b5e7a2a5ee3563",
//         "uniqueName": "ravikumaryadav_f2zj0g",
//         "createdAt": "2025-10-21T15:22:16.835Z",
//         "__v": 0
//     }
// }
