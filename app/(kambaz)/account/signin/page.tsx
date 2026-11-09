"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useAccount } from "../useAccountStore";

export default function Signin() {
  const router = useRouter();
  const { signIn } = useAccount();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    signIn({
      username: username.trim(),
      firstName: username.trim(),
      lastName: "",
      dateOfBirth: "",
      email: "",
      role: "STUDENT",
    });
    router.push("/dashboard");
  }

  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-4 text-2xl font-semibold">Sign in</h1>
      <form onSubmit={submit} className="grid gap-4">
        <label className="grid gap-1" htmlFor="wd-signin-username">
          Username
          <input
            id="wd-signin-username"
            name="username"
            autoComplete="username"
            placeholder="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
            className="wd-username w-full rounded border border-neutral-300 px-3 py-2"
          />
        </label>
        <label className="grid gap-1" htmlFor="wd-signin-password">
          Password
          <input
            id="wd-signin-password"
            name="password"
            autoComplete="current-password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="wd-password w-full rounded border border-neutral-300 px-3 py-2"
          />
        </label>
        <button id="wd-signin-btn" type="submit" className="rounded bg-blue-600 px-3 py-2 text-white">
          Sign in
        </button>
      </form>
      <p className="mt-4">
        Don&apos;t have an account?{" "}
        <Link href="/account/signup" id="wd-signup-link">
          Sign up
        </Link>
      </p>
    </div>
  );
}
