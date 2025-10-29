"use client";
import Image from "next/image";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function SearchBlogCard({ blog }) {
  const { blogImg, title, desc, createdAt, profile, _id } = blog;
  const formattedDate = new Date(createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
      {/* Blog Image */}
      <Link href={`/blogs/${_id}`} className="relative block w-full h-56">
        <Image
          src={blogImg}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </Link>

      {/* Blog Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">{title}</h2>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{desc}</p>

        {/* Author Info */}
        <div className="flex items-center justify-between mt-4">
          <Link href={`/profile/${profile.uniqueName}`} className="flex items-center gap-2">
            <Image
              src={profile.profileImg}
              alt={profile.name}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700">{profile.name}</span>
          </Link>

          {/* Date */}
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <Calendar size={14} />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
