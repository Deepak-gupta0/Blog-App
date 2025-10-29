"use client";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function SearchProfileCard({ profile }) {
  const { profileImg, name, desc, address, uniqueName } = profile;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      {/* Profile Header */}
      <div className="flex flex-col items-center p-6">
        <Link href={`/profile/${uniqueName}`} className="relative block w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
          <Image
            src={profileImg}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80px"
          />
        </Link>

        <h2 className="mt-3 text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 text-center mt-1 line-clamp-2">{desc}</p>

        {/* Address */}
        {address && (
          <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
            <MapPin size={14} />
            <span className="line-clamp-1">{address}</span>
          </div>
        )}
      </div>
    </div>
  );
}
