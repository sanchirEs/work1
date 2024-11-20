'use client'
import TransferHistory from "@/components/element/TransferHistory";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {session.user.email}</h1>
      <p>Your role is: {session.user.role}</p>
      
      {/* <TransferHistory /> */}
    </div>
  );
}
