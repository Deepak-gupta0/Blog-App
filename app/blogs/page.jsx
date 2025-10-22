import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';

const BlogPost = ({ author, username, timeAgo, content, likes, comments, avatar, image }) => (
  <article className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors cursor-pointer">
    <div className="p-4">
      {/* Author Info */}
      <div className="flex items-start gap-3">
        <img 
          src={avatar} 
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 dark:text-white hover:underline">
                {author}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                @{username}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                · {timeAgo}
              </span>
            </div>
            <button className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 p-1 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors">
              <MoreHorizontal size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="text-gray-900 dark:text-gray-100 mb-3 leading-relaxed">
            {content}
          </div>

          {/* Blog Image */}
          {image && (
            <div className="mb-3 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <img 
                src={image} 
                alt="Blog cover"
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between max-w-md mt-2">
            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 group transition-colors">
              <div className="p-2 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                <MessageCircle size={18} />
              </div>
              <span className="text-sm">{comments}</span>
            </button>

            <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 dark:hover:text-red-400 group transition-colors">
              <div className="p-2 rounded-full group-hover:bg-red-50 dark:group-hover:bg-red-900/20 transition-colors">
                <Heart size={18} />
              </div>
              <span className="text-sm">{likes}</span>
            </button>

            <button className="text-gray-500 hover:text-green-500 dark:hover:text-green-400 group transition-colors">
              <div className="p-2 rounded-full group-hover:bg-green-50 dark:group-hover:bg-green-900/20 transition-colors">
                <Share2 size={18} />
              </div>
            </button>

            <button className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 group transition-colors">
              <div className="p-2 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                <Bookmark size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default function BlogFeed() {
  const blogs = [
    {
      id: 1,
      author: "Sarah Johnson",
      username: "sarahj_dev",
      timeAgo: "2h",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content: "Just finished building a new authentication system with Next.js 14 and Prisma. The App Router makes everything so much cleaner! 🚀 Here's what I learned about server actions...",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      likes: 234,
      comments: 45
    },
    {
      id: 2,
      author: "Mike Chen",
      username: "mikechen",
      timeAgo: "4h",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      content: "Hot take: TypeScript isn't just about catching bugs, it's about writing self-documenting code. Your future self will thank you for those type definitions.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
      likes: 567,
      comments: 89
    },
    {
      id: 3,
      author: "Emma Davis",
      username: "emma_codes",
      timeAgo: "6h",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      content: "Finally deployed my portfolio site! Built with React, Tailwind, and Framer Motion. The animations turned out better than I expected. Check it out and let me know what you think! ✨",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
      likes: 892,
      comments: 123
    },
    {
      id: 4,
      author: "Alex Kumar",
      username: "alexkumar_tech",
      timeAgo: "8h",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      content: "Been experimenting with Supabase for real-time features. The developer experience is incredible - went from idea to working prototype in just a few hours!",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      likes: 445,
      comments: 67
    },
    {
      id: 5,
      author: "Lisa Park",
      username: "lisapark_ui",
      timeAgo: "12h",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      content: "Design tip: Don't underestimate the power of whitespace. Sometimes the best design decision is what you choose NOT to add. Less is often more. 🎨",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
      likes: 1203,
      comments: 156
    }
  ];

  return (
    <div className=" mt-9 hidden md:block min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Latest Blogs</h1>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-2xl mx-auto">
        {blogs.map((blog) => (
          <BlogPost key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
}