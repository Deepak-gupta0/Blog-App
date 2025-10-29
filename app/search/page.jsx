import SearchBlogs from "@/components/SearchBlogs";
import SearchProfiles from "@/components/SearchProfiles";

export default async function SearchPage(props) {
  const searchParams = await props.searchParams;

  const tab = searchParams.tab || "";
  const query = searchParams.q || "";
  console.log(tab)

  return <div>
    <div hidden={tab !== "blogs"}>
      <SearchBlogs />
    </div>

    <div hidden={tab !== "profiles"}>
      <SearchProfiles />
    </div>
  </div>;
}
