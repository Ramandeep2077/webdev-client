import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <table>
        <tbody>
          <tr>
            <td align="right">
              <label htmlFor="wd-signin-username">Username</label>
            </td>
            <td>
              <input
                id="wd-signin-username"
                placeholder="username"
                className="wd-username"
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
                className="wd-password"
                defaultValue="123"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link href="/dashboard" id="wd-signin-btn">
                Sign in
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Don&apos;t have an account?{" "}
        <Link href="/account/signup" id="wd-signup-link">
          Sign up
        </Link>
      </p>
    </div>
  );
}
