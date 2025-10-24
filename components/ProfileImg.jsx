"use client"
import { changeProfileImg } from "@/app/profile/[id]/EditProfileAction";
import { User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProfileImg({profile, isOwner}) {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const router = useRouter()

  const handleChange = async (e) => {
    const file = e.target.files[0]

    if(!file) return;
    setPreview(URL.createObjectURL(file))
    setImage(file)
    await changeProfileImg(file, profile)
    router.refresh()
  }
  return (
    <div className="absolute -top-20 left-4">
      <div className="w-40 h-40 rounded-full  border-4 border-white bg-gray-300 flex items-center justify-center overflow-hidden relative">
        {isOwner ? (
          <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="absolute h-full w-full opacity-0 z-70 "
        />
        ) : null}
        
        {preview || profile.profileImg ? (
          <Image
            src={preview || profile.profileImg}
            fill
            alt={profile.uniqueName}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 160px"
            loading="eager"
            className="rounded-full object-cover"
          />
        ) : (
          <User className="w-20 h-20 text-gray-600" />
        )}
      </div>
    </div>
  );
}
