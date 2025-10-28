// Server Component
import { formatMongoDate } from "@/lib/auth";
import BlogClient from "./BlogClient";

export default async function Page({ params }) {
  const { id } = await params;
  return <BlogClient blogId={id} />;
}
