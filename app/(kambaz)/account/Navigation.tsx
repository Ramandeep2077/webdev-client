import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="text-sm">
      <h4 className="mb-2 text-lg font-semibold">Account</h4>
      <Link href="/account/signin">Sign in</Link>
      <Link href="/account/signup">Sign up</Link>
      <Link href="/account/profile">Profile</Link>
    </div>
  );
}
