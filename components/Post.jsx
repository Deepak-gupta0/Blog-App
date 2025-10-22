import { User } from "lucide-react";
import React from "react";

export default function Post({ desc, blogImg }) {
  console.log("hello works");
  return (
    <div className="flex items-start gap-3">
      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
        <User className="w-6 h-6 text-gray-600" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">Sarah Anderson</span>
          <span className="text-gray-500">@sarahanderson</span>
          <span className="text-gray-500">· 2h</span>
        </div>
        <p className="mt-2 text-gray-800">{desc}</p> 
        <div className="mb-3 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <img
            src={blogImg} //yaha kuch
            alt="Blog cover"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
