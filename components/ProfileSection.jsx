import EditForm from "@/app/profile/[id]/EditForm";
import { ConvertDate } from "@/lib/auth";
import { Calendar, Link2, X, Edit2, User, MapPin, FileText} from "lucide-react";
import ProfileImg from "./ProfileImg";


export default function ProfileSection({ profile, isOwner }) {
  const { createdAt } = profile;
  const isEditing = true

  const date = ConvertDate(createdAt);

  return (
    <div className="relative">
      {/* Profile Image */}
      <ProfileImg profile={profile} isOwner={isOwner}/>

      {/* Edit Profile Button */}

      
      <EditForm isOwner={isOwner} profile={profile}/>

      {/* User Details */}
      <div className="mt-16 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">{profile?.name}</h1>
        <p className="text-gray-600 mt-1">@{profile?.uniqueName}</p>

        {/* About Section */}
        <p className="mt-4 text-gray-800 text-lg">{profile?.desc}</p>

        {/* Additional Info */}
        <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{profile?.address}</span>
          </div>

          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mt-6">
          <div>
            <span className="font-bold text-gray-900">248</span>
            <span className="text-gray-600 ml-1">Following</span>
          </div>
          <div>
            <span className="font-bold text-gray-900">1.2K</span>
            <span className="text-gray-600 ml-1">Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
