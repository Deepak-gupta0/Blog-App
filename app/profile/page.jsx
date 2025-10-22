"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function UserProfile() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchUserProfileData();
  }, []);

  const fetchUserProfileData = async () => {
    const response = await fetch("/api/profile", { method: "GET" });

    if (response.status == 401) {
      return router.push("/login");
    }
    const data = await response.json();
    
    if (data.status == 401) {
      return router.push("/login");
    }
    setUserData(data);

    return router.push(`/profile/${data.uniqueName}`);
  };

  return <div></div>;
}
