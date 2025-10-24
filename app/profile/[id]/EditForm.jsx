"use client";
import React, { useEffect, useState } from "react";
import {
  Calendar,
  Link2,
  X,
  Edit2,
  User,
  MapPin,
  FileText,
} from "lucide-react";
import { EditProfileAction } from "./EditProfileAction";
import { useRouter } from "next/navigation";

export default function EditForm({isOwner, profile}) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData,setProfileData] = useState(profile) 
  const router = useRouter()

  const editData = (field, value) => {
    setProfileData(prev => ({...prev, [field] : value}))
  }

  const handleCancel = () => {
    setProfileData(profile)
    setIsEditing(false)
  }

  const handleSave = async () => {
    console.log(profileData)
    await EditProfileAction(profileData)
    console.log("save handler worked")
    setIsEditing(false)
    router.refresh(); 
  }

  return (
    <div>
      <div className="pt-4 flex justify-end">
        {isOwner && (
          <button onClick={() => setIsEditing(prev => !prev)} className="px-6 py-2 border border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-100 transition">
            Edit Profile
          </button>
        )}
      </div>
      {isEditing && (
        <div className="fixed inset-0  bg-white/80 bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-slideUp">
            {/* Close Button */}
            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Edit Profile
            </h2>

            {/* Name Field */}
            <div className="mb-5">
              <label className=" text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                Name
              </label>
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => editData("name" , e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>

            {/* Description Field */}
            <div className="mb-5">
              <label className=" text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Description
              </label>
              <textarea
                value={profileData.desc}
                onChange={(e) => editData("desc" , e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                rows="3"
                placeholder="Tell us about yourself"
              />
            </div>

            {/* Location Field */}
            <div className="mb-6">
              <label className=" text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <input
                type="text"
                value={profileData.address}
                onChange={(e) => editData("address" , e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your location"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
