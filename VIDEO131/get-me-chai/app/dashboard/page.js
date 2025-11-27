"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const { data: session } = useSession();
  if (!session) {
    const router = useRouter();
    router.push("/login");
  }
  return <div>dashboard op</div>;
}

export default page;
