import PostSection from "@/components/PostSection";
import ProfileSection from "@/components/ProfileSection";
import { getUserBySlug } from "@/lib/User";

export default async function ProfileId(props) {
  const params = await props.params;
  const { id } = params;

  const { profile, blogs, isOwner } = await getUserBySlug(id);

  if (!profile) {
    return <p className="text-center text-gray-500">Profile doesn't exists.</p>;
  }

  const isOwnerProfile = isOwner;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Cover Section */}
      <div className="w-full bg-gradient-to-r from-blue-400 to-purple-500 h-64"></div>

      {/* Profile Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Info Section */}
        <ProfileSection profile={profile} isOwnerProfile={isOwnerProfile} />

        {/* Tabs */}
        <div className="border-b border-gray-300 mt-6">
          <div className="flex gap-8">
            <button className="pb-3 px-2 border-b-2 border-blue-500 font-semibold text-blue-500">
              Posts ({blogs.length})
            </button>
          </div>
        </div>

        {/* Posts Section */}
        <PostSection blogs={blogs} profile={profile} />
      </div>
    </div>
  );
}
