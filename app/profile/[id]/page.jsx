"use client";
import { notFound, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { User, MapPin, Calendar, Link2 } from "lucide-react";
import Image from "next/image";
import PostSection from "@/components/PostSection";

export default function page() {
  const router = useRouter();
  const pathname = usePathname();
  const [path, setPath] = useState("");
  const [profileData, setProfileData] = useState({});
  const [postData, setPostData] = useState([]);
  // console.log(postData);

  useEffect(() => {
    getPath();
  }, []);

  const getPath = async () => {
    const path = pathname.slice(1).split("/")[1];
    setPath(path);
    await fetchProfile(path);
    await fetchPosts();
  };

  const fetchProfile = async (url) => {
    const response = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(url),
    });

    if (response.status == 404) {
      return notFound();
    }

    if (response.status == 500) {
      return notFound();
    }

    const data = await response.json();
    return setProfileData(data);
  };

  const fetchPosts = async () => {
    const response = await fetch("/api/blogs", { method: "GET" });
    const data = await response.json();
    console.log(data);
    return setPostData(data);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Cover Section */}
      <div className="w-full bg-gradient-to-r from-blue-400 to-purple-500 h-64"></div>

      {/* Profile Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Info Section */}
        <div className="relative">
          {/* Profile Image */}
          <div className="absolute -top-20 left-4">
            <div className="w-40 h-40 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center overflow-hidden relative">
              {profileData.profileImg ? (
                <Image
                  src={profileData.profileImg}
                  fill
                  alt={profileData.uniqueName}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 160px"
                  loading="eager"
                  className="rounded-full object-cover"
                />
              ) : (
                <User className="w-20 h-20 text-gray-600" />
              )}
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="pt-4 flex justify-end">
            <button className="px-6 py-2 border border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-100 transition">
              Edit Profile
            </button>
          </div>

          {/* User Details */}
          <div className="mt-16 pb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              {profileData?.name}
            </h1>
            <p className="text-gray-600 mt-1">@{profileData?.uniqueName}</p>

            {/* About Section */}
            <p className="mt-4 text-gray-800 text-lg">{profileData?.desc}</p>

            {/* Additional Info */}
            <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{profileData?.address}</span>
              </div>
              <div className="flex items-center gap-1">
                <Link2 className="w-4 h-4" />
                <a href="#" className="text-blue-500 hover:underline">
                  portfolio.com
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Joined March 2020</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 mt-6">
              <div>
                <span className="font-bold text-gray-900">248</span>
                <span className="text-gray-600 ml-1">Following</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">1.2K</span>
                <span className="text-gray-600 ml-1">Followers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-300 mt-6">
          <div className="flex gap-8">
            <button className="pb-3 px-2 border-b-2 border-blue-500 font-semibold text-blue-500">
              Posts (42)
            </button>
          </div>
        </div>

        {/* Posts Section */}
        <PostSection postData={postData} />
      </div>
    </div>
  );
}
