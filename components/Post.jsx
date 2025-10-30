import { ConvertDate } from "@/lib/auth";
import { User } from "lucide-react";
import Image from "next/image";
import React from "react";


export default function Post({ desc, blogImg, profile, createdAt }) {
  const date = ConvertDate(createdAt)
  return (
    <div className="flex items-start gap-3">
      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center relative overflow-hidden flex-shrink-0">
          {profile.profileImg ? (
            <Image src={profile.profileImg} fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 160px"
                  loading="eager" alt="blog-image"/>
          ) : (
            <User />
          )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">{profile.name}</span>
          <span className="text-gray-500">@{profile.uniqueName}</span>
          <span className="text-gray-500">· {date}</span>
        </div>
        <p className="mt-2 text-gray-800">{desc}</p> 
        <div className="mb-3 rounded-2xl overflow-hidden">
          <img
            src={blogImg} //yaha kuch
            alt="Blog cover"
            className="w-auto h-[250px] object-cover  border border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>
    </div>
  );
}
