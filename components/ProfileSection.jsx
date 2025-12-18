import EditForm from "@/app/profile/[id]/EditForm";
import { ConvertDate } from "@/lib/auth";
import { Calendar, MapPin } from "lucide-react";
import { ProfileImg } from "./ProfileImg";

export default function ProfileSection({ profile, isOwnerProfile }) {
  const date = ConvertDate(profile?.createdAt);

  return (
    <div className="relative">
      {/* Profile Image */}
      <ProfileImg profile={profile} isOwnerProfile={isOwnerProfile} />

      {/* Edit Profile */}
      <EditForm isOwnerProfile={isOwnerProfile} profile={profile} />

      {/* User Details */}
      <div className="mt-14 px-2 sm:px-0 pb-6">
        {/* Name */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          {profile?.name}
        </h1>

        {/* Username */}
        <p className="text-sm sm:text-base text-gray-500 mt-0.5">
          @{profile?.uniqueName}
        </p>

        {/* About */}
        {profile?.desc && (
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
            {profile.desc}
          </p>
        )}

        {/* Meta Info */}
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-500">
          {profile?.address && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{profile.address}</span>
            </div>
          )}

          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Joined {date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}