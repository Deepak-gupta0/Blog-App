"use client";
import { SearchProfilesAction } from "@/app/actions/SearchAction";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SearchProfileCard from "./SearchProfileCard";

export default function SearchProfiles() {
  const searchParams = useSearchParams();

  const profileName = searchParams.get("q") || "";

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchSearchProfiles = async (data) => {
      const profileData = await SearchProfilesAction(data);
      setProfiles(profileData);
    };
    fetchSearchProfiles(profileName);
  }, []);

  if(!(profiles?.length)){
    return <p className="text-center text-gray-500">No profiles found.</p>;
  }

  return <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((p, i) => (
        <SearchProfileCard key={p.profile?._id || i} profile={p} />
      ))}
    </div>
}
