"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function SearchLayout() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const query = searchParams.get("q") || "";
  const tab = searchParams.get("tab") || "";

  return (
    <div className="mt-20">
      <nav className="flex gap-6 border-b px-4 mt-2">
        <button
          onClick={() => router.push(`/search?tab=blogs&q=${encodeURIComponent(query)}`)}
          className={`pb-2 cursor-pointer ${tab === "blogs" ? "border-b-2 border-black" : ""}`}
        >
          Blogs
        </button>

        <button
          onClick={() => router.push(`/search?tab=profiles&q=${encodeURIComponent(query)}`)}
          className={`pb-2 cursor-pointer ${tab === "profiles" ? "border-b-2 border-black" : ""}`}
        >
          Profiles
        </button>
      </nav>
    </div>
  );
}
