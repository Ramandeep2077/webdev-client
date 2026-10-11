import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-4 text-2xl font-semibold">Sign up</h1>
      <table className="w-full border-separate border-spacing-y-3">
        <tbody>
          <tr>
            <td align="right">
              <label htmlFor="wd-signup-username">Username</label>
            </td>
            <td>
              <input
                id="wd-signup-username"
                placeholder="username"
                className="wd-username"
                defaultValue="ada"
              />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-signup-password">Password</label>
            </td>
            <td>
              <input
                id="wd-signup-password"
                placeholder="password"
                type="password"
                className="wd-password"
                defaultValue="123"
              />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-signup-password-verify">Verify password</label>
            </td>
            <td>
              <input
                id="wd-signup-password-verify"
                placeholder="verify password"
                type="password"
                className="wd-password-verify"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link href="/account/profile" className="inline-block rounded bg-blue-600 px-3 py-2 text-white no-underline">Sign up</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Already have an account? <Link href="/account/signin">Sign in</Link>
      </p>
    </div>
  );
}
