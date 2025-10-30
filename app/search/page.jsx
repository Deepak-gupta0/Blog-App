import SearchBlogs from "@/components/SearchBlogs";
import SearchProfiles from "@/components/SearchProfiles";
import { Suspense } from "react";

export default async function SearchPage(props) {
  const searchParams = await props.searchParams;

  const tab = searchParams.tab || "";
  const query = searchParams.q || "";

  return (
    <div>
      <div hidden={tab !== "blogs"}>
        <Suspense fallback={<div className="mt-40">Loading...</div>}>
          <SearchBlogs />
        </Suspense>
      </div>

      <div hidden={tab !== "profiles"}>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchProfiles />
        </Suspense>
      </div>
    </div>
  );
}
