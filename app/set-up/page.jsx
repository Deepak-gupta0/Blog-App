"use client";
import { useState } from "react";
import { uploadProfileImage } from "../actions/authAction";
import Image from "next/image";
import { CircleUserRound, Plus } from "lucide-react";
import Link from "next/link";

export default function SetUpProfile() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // show preview
    setPreview(URL.createObjectURL(file));
    setLoading(true);

    // upload to imagekit
    try {
      const res = await uploadProfileImage(file);
      console.log("✅ Uploaded:", res);
      setImage(res.url); // store the final URL
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center  items-center bg-gray-900 text-gray-100">
      <div className="border-4 border-gray-600 p-10 flex flex-col justify-center items-center rounded-xl ">
        <h1 className="text-3xl mb-10">Set Profile Picture</h1>
        <div className="relative group h-[160px] w-[160px] rounded-full overflow-hidden shadow-lg">
          {/* Upload Input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="absolute inset-0 opacity-0 cursor-pointer z-20"
          />

          {/* Preview or Placeholder */}
          {preview || image ? (
            <Image
              src={preview || image}
              alt="Profile"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full bg-gray-800">
              <CircleUserRound className="h-3/4 w-3/4 text-gray-500" />
            </div>
          )}

          {/* Blue + Button */}
          <div
            hidden={image}
            className="absolute z-30 bottom-2 right-2 bg-blue-500 hover:bg-blue-600 transition-all duration-200 h-[42px] w-[42px] flex items-center justify-center rounded-full shadow-md"
          >
            <Plus className="text-white h-6 w-6" />
          </div>

          {/* Optional overlay effect */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10" />
        </div>

        {/* Status / Next Button */}
        <div className="mt-6 text-center">
          {loading && <p className="text-sm text-gray-400">Uploading...</p>}
        </div>

        {image && !loading && (
          <Link href="/" className="mt-2">
            <button
              type="button"
              className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Next
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
