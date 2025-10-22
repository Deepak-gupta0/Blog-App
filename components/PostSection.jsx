import { User } from "lucide-react";
import React from "react";
import Post from "./Post";

export default function PostSection({postData}) {
  console.log(postData)
  return (
    <div className="mt-6 space-y-4 pb-12">
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        {postData?.map((post) => (
        <Post key={post.id} desc={post.desc} blogImg={post.blogImg}/>
        ))}
      </div>
    </div>
  );
}
