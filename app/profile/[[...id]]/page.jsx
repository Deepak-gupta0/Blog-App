"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { User, MapPin, Calendar, Link2 } from "lucide-react";
import Image from "next/image";

export default function page() {
  const [profileData, setProfileData] = useState({});
  console.log(profileData);

  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const response = await fetch("/api/profile", {
      method: "GET",
    });

    if (response.status == 401) {
      return router.push("/login");
    }

    if (response.status == 500) {
      return (
        <div className="h-screen w-full flex items-center justify-center">
          <span>Something went wrong</span>
        </div>
      );
    }
    const data = await response.json();
    return setProfileData(data);
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
            <div className="w-40 h-40 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center overflow-hidden">
              {profileData.profileImg ? (
                <img src={profileData?.profileImg} fill={"true"} alt="kak" />
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
            <button className="pb-3 px-2 text-gray-600 hover:text-gray-900">
              Media
            </button>
            <button className="pb-3 px-2 text-gray-600 hover:text-gray-900">
              Likes
            </button>
          </div>
        </div>

        {/* Posts Section */}
        <div className="mt-6 space-y-4 pb-12">
          {/* Post 1 */}
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">
                    Sarah Anderson
                  </span>
                  <span className="text-gray-500">@sarahanderson</span>
                  <span className="text-gray-500">· 2h</span>
                </div>
                <p className="mt-2 text-gray-800">
                  Just finished redesigning our company's dashboard! Really
                  proud of how it turned out. The new color scheme and layout
                  make everything so much more intuitive. 🎨
                </p>
                <div className="mt-4 flex gap-6 text-gray-500">
                  <button className="hover:text-blue-500">💬 12</button>
                  <button className="hover:text-green-500">🔄 5</button>
                  <button className="hover:text-red-500">❤️ 48</button>
                  <button className="hover:text-blue-500">📤</button>
                </div>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">
                    Sarah Anderson
                  </span>
                  <span className="text-gray-500">@sarahanderson</span>
                  <span className="text-gray-500">· 1d</span>
                </div>
                <p className="mt-2 text-gray-800">
                  Hot take: Dark mode is overrated. There, I said it. 🌞
                </p>
                <div className="mt-4 flex gap-6 text-gray-500">
                  <button className="hover:text-blue-500">💬 156</button>
                  <button className="hover:text-green-500">🔄 23</button>
                  <button className="hover:text-red-500">❤️ 89</button>
                  <button className="hover:text-blue-500">📤</button>
                </div>
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">
                    Sarah Anderson
                  </span>
                  <span className="text-gray-500">@sarahanderson</span>
                  <span className="text-gray-500">· 3d</span>
                </div>
                <p className="mt-2 text-gray-800">
                  Working on a new project using React and Tailwind. The
                  developer experience is just *chef's kiss* 👨‍🍳
                </p>
                <div className="mt-3 bg-gray-100 rounded-lg p-4 border border-gray-300">
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded"></div>
                  <p className="mt-2 font-semibold text-gray-900">
                    New Landing Page Design
                  </p>
                  <p className="text-sm text-gray-600">
                    Modern, clean, and responsive
                  </p>
                </div>
                <div className="mt-4 flex gap-6 text-gray-500">
                  <button className="hover:text-blue-500">💬 34</button>
                  <button className="hover:text-green-500">🔄 67</button>
                  <button className="hover:text-red-500">❤️ 234</button>
                  <button className="hover:text-blue-500">📤</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
