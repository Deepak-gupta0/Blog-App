"use client";
import { useState, useTransition } from "react";
import { setUpProfileAction } from "../actions/authAction";
import Image from "next/image";
import { CircleUserRound, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SetUpProfile() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter()

  const [isPending, startTransition] = useTransition();
  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    // show preview
    setLoading(true);
    setPreview(URL.createObjectURL(file));
    setLoading(false);
    setImage(file);
  };

  const handleSubmit = async () => {
    startTransition(async () => {
      const trimmedName = name.trim()
      const trimmedDesc = desc.trim()
      const trimmedAddress = address.trim()

      const response = await setUpProfileAction(image, { name: trimmedName, desc: trimmedDesc, address : trimmedAddress });

      if(response.success){
        return router.push("/")
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center w-full  items-center bg-gray-900 text-gray-100">
      <div className="w-full md:w-[760px] border-4 border-gray-600 p-10 flex flex-col justify-center items-center rounded-xl ">
        <h1 className="text-3xl mb-10">Profile Set Up</h1>
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

        {/* userName */}
        <div className="mt-1 text-sm w-full">
          <label htmlFor="username" className="block text-gray-400 ">
            Name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="w-full border-b border-gray-700 bg-gray-900 px-4 py-3 text-gray-100 outline-none focus:border-violet-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-1 text-sm w-full">
          <label htmlFor="username" className="block text-gray-400 ">
            Address
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="w-full border-b border-gray-700 bg-gray-900 px-4 py-3 text-gray-100 outline-none focus:border-violet-400"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="w-full mt-3">
          <label htmlFor="desc" className="block text-sm  text-gray-400 mb-2">
            Description
          </label>
          <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Tell something about yourself..."
            rows="4"
            className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg focus:border-violet-400  transition-all outline-none text-gray-100 resize-none"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!name || !desc || !image || isPending} 
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2
    ${
      !name || !desc || !image || isPending
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl"
    }
  `}
        >
          {isPending ? "Uploading..." : "Next"}
        </button>
      </div>
    </div>
  );
}
