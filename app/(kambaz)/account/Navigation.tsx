"use client";

import Link from "next/link";
import { useAccount } from "./useAccountStore";

export default function AccountNavigation() {
  const { user } = useAccount();

  return (
    <div id="wd-account-navigation" className="text-sm">
      <h4 className="mb-2 text-lg font-semibold">Account</h4>
      <div className="flex flex-col gap-2">
        {!user ? (
          <>
            <Link href="/account/signin" id="wd-account-signin-link">Sign in</Link>
            <Link href="/account/signup" id="wd-account-signup-link">Sign up</Link>
          </>
        ) : (
          <Link href="/account/profile" id="wd-account-profile-link">Profile</Link>
        )}
      </div>
    </div>
  );
}
