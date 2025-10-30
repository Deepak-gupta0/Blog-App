import { User } from "lucide-react";
import React from "react";
import Post from "./Post";

export default function PostSection({blogs, profile}) {
  return (
    <div className="mt-6 space-y-4 pb-12 ">
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200 ">
        {blogs?.map((post) => (
        <Post key={post._id} desc={post.desc} blogImg={post.blogImg} profile={profile} createdAt={post.createdAt} blogId={post._id}/>
        ))}
      </div>
    </div>
  );
}
