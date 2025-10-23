import PostSection from "@/components/PostSection";
import ProfileSection from "@/components/ProfileSection";
import { getSessionUser, getUserBySlug } from "@/lib/User";
import { notFound } from "next/navigation";

export default async function page({params}) {

  const {id} = await params;

  const {profile, blogs} = await getUserBySlug(id)
  const loggedInUser = await getSessionUser()

  if(!profile){
    return notFound()
  }

  const isOwner = loggedInUser.profile.userId === profile.userId;
  console.log(isOwner)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Cover Section */}
      <div className="w-full bg-gradient-to-r from-blue-400 to-purple-500 h-64"></div>

      {/* Profile Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Info Section */}
        <ProfileSection profile={profile}/>

        {/* Tabs */}
        <div className="border-b border-gray-300 mt-6">
          <div className="flex gap-8">
            <button className="pb-3 px-2 border-b-2 border-blue-500 font-semibold text-blue-500">
              Posts (42)
            </button>
          </div>
        </div>

        {/* Posts Section */}
        <PostSection blogs={blogs} profile={profile}/>
      </div>
    </div>
  );
}
