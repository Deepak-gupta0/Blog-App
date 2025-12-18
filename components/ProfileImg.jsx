// --- ProfileImg component (touched up & responsive) ---
"use client";
import { changeProfileImg } from "@/app/profile/[id]/EditProfileAction";
import { Camera, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export function ProfileImg({ profile, isOwnerProfile }) {
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setUploading(true);
    try {
      await changeProfileImg(file, profile);
      router.refresh();
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="absolute -top-16 sm:-top-20 left-3 sm:left-4">
      <div className="relative h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
        {/* Image / Placeholder */}
        {preview || profile?.profileImg ? (
          <Image
            src={preview || profile.profileImg}
            alt={profile?.uniqueName || "profile"}
            fill
            sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <User className="h-10 w-10 sm:h-12 sm:w-12 text-gray-500" />
          </div>
        )}

        {/* Owner Overlay */}
        {isOwnerProfile && (
          <label className="absolute inset-0 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
            <div className="absolute inset-0 grid place-items-center bg-black/0 hover:bg-black/40 transition-colors">
              <Camera className="text-white opacity-0 group-hover:opacity-100" />
            </div>
          </label>
        )}

        {/* Uploading indicator */}
        {uploading && (
          <div className="absolute inset-0 grid place-items-center bg-white/60 backdrop-blur">
            <span className="text-xs font-medium">Uploading…</span>
          </div>
        )}
      </div>
    </div>
  );
}
