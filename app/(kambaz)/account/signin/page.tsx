import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-4 text-2xl font-semibold">Sign in</h1>
      <table className="w-full border-separate border-spacing-y-3">
        <tbody>
          <tr>
            <td align="right">
              <label htmlFor="wd-signin-username">Username</label>
            </td>
            <td>
              <input
                id="wd-signin-username"
                placeholder="username"
                className="wd-username w-full rounded border border-neutral-300 px-3 py-2"
                defaultValue="ada"
              />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-signin-password">Password</label>
            </td>
            <td>
              <input
                id="wd-signin-password"
                placeholder="password"
                type="password"
                className="wd-password w-full rounded border border-neutral-300 px-3 py-2"
                defaultValue="123"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link href="/dashboard" id="wd-signin-btn" className="block rounded bg-blue-600 px-3 py-2 text-center text-white no-underline">
                Sign in
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <label className="mb-2 block text-sm font-medium" htmlFor="wd-ai-signin-note">Sample note</label>
      <input id="wd-ai-signin-note" placeholder="sample note" className="mb-3 w-full rounded border border-neutral-300 px-3 py-2" />
      <p>
        Don&apos;t have an account?{" "}
        <Link href="/account/signup" id="wd-signup-link">
          Sign up
        </Link>
      </p>
    </div>
  );
}
