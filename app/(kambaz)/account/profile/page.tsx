"use client";

import { useRouter } from "next/navigation";
import { useAccount } from "../useAccountStore";

export default function Profile() {
  const router = useRouter();
  const { user, signOut } = useAccount();

  if (!user) return null;

  function handleSignOut() {
    signOut();
    router.push("/account/signin");
  }

  return (
    <div id="wd-profile-screen" className="max-w-2xl">
      <h1 className="mb-4 text-2xl font-semibold">Profile</h1>
      <dl className="grid max-w-lg grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <dt className="font-medium">Username</dt><dd>{user.username}</dd>
        <dt className="font-medium">First name</dt><dd>{user.firstName}</dd>
        <dt className="font-medium">Last name</dt><dd>{user.lastName || "—"}</dd>
        <dt className="font-medium">Date of birth</dt><dd>{user.dateOfBirth || "—"}</dd>
        <dt className="font-medium">Email</dt><dd>{user.email || "—"}</dd>
        <dt className="font-medium">Role</dt><dd>{user.role}</dd>
      </dl>
      <button type="button" onClick={handleSignOut} className="mt-5 rounded bg-blue-600 px-3 py-2 text-white">
        Sign out
      </button>
    </div>
  );
}
