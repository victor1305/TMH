import React from "react";

import { getUserData } from "@/lib/api";

import UserProfile from "@/components/UserProfile";

export default async function ProfilePage() {
  const user = await getUserData();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Perfil de Usuario</h1>
      <UserProfile {...user} />
    </div>
  );
}
