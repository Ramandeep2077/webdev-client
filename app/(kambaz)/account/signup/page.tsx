"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useAccount } from "../useAccountStore";

export default function Signup() {
  const router = useRouter();
  const { signIn } = useAccount();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password !== verifyPassword) {
      setError("Passwords do not match.");
      return;
    }
    signIn({
      username: username.trim(),
      firstName: username.trim(),
      lastName: "",
      dateOfBirth: "",
      email: "",
      role: "STUDENT",
    });
    router.push("/account/profile");
  }

  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-4 text-2xl font-semibold">Sign up</h1>
      <form onSubmit={submit} className="grid gap-4">
        <label className="grid gap-1" htmlFor="wd-signup-username">
          Username
          <input id="wd-signup-username" name="username" autoComplete="username" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)} required className="wd-username rounded border border-neutral-300 px-3 py-2" />
        </label>
        <label className="grid gap-1" htmlFor="wd-signup-password">
          Password
          <input id="wd-signup-password" name="password" autoComplete="new-password" placeholder="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required className="wd-password rounded border border-neutral-300 px-3 py-2" />
        </label>
        <label className="grid gap-1" htmlFor="wd-signup-password-verify">
          Verify password
          <input id="wd-signup-password-verify" name="verifyPassword" autoComplete="new-password" placeholder="verify password" type="password" value={verifyPassword} onChange={(event) => setVerifyPassword(event.target.value)} required className="wd-password-verify rounded border border-neutral-300 px-3 py-2" />
        </label>
        {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
        <button type="submit" className="rounded bg-blue-600 px-3 py-2 text-white">Sign up</button>
      </form>
      <p className="mt-4">
        Already have an account? <Link href="/account/signin">Sign in</Link>
      </p>
    </div>
  );
}
