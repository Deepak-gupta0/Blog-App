import { MoreHorizontal, User } from "lucide-react";
import Link from "next/link";

const BlogPost = ({ blog }) => (
  <article className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors ">
    <div className="p-4">
      <div className="flex items-start gap-3">
        {/* Avatar */}

        {blog.profile?.profileImg ? (
          <img
            src={blog.profile?.profileImg}
            alt={blog.profile?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <User className="w-12 h-12 rounded-full border p-3 bg-gray-300 text-white" />
        )}

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <Link
              href={`/profile/${blog.profile?.uniqueName}`}
              className="flex items-center gap-2 flex-wrap"
            >
              <span className="font-bold text-gray-900 dark:text-white hover:underline">
                {blog.profile?.name || "Unknown"}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                @{blog.profile?.uniqueName || "anonymous"}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                · {new Date(blog.createdAt).toLocaleDateString()}
              </span>
            </Link>
            <button className="text-gray-500 hover:text-blue-500 p-1 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors">
              <MoreHorizontal size={18} />
            </button>
          </div>

          <Link href={`/blogs/${blog._id}`}>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {blog.title}
            </h2>

            {/* Blog Desc */}
            <p className="text-gray-900 dark:text-gray-100 mb-3 leading-relaxed">
              {blog.desc}
            </p>

            {/* Blog Image */}
            {blog.blogImg && (
              <div className="mb-3 rounded-2xl overflow-hidden ">
                <img
                  src={blog.blogImg}
                  alt="Blog"
                  className="h-[400px] object-cover rounded-2xl"
                />
              </div>
            )}
          </Link>

        </div>
      </div>
    </div>
  </article>
);

export default BlogPost;