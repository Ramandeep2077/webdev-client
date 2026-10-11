import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-2xl">
      <h1 className="mb-4 text-2xl font-semibold">Profile</h1>
      <table className="w-full border-separate border-spacing-y-3">
        <tbody>
          <tr>
            <td align="right">
              <label htmlFor="wd-profile-username">Username</label>
            </td>
            <td>
              <input
                id="wd-profile-username"
                defaultValue="alice"
                placeholder="username"
                className="wd-username"
              />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-profile-password">Password</label>
            </td>
            <td>
              <input
                id="wd-profile-password"
                defaultValue="123"
                placeholder="password"
                type="password"
                className="wd-password"
              />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-firstname">First name</label>
            </td>
            <td>
              <input
                defaultValue="Alice"
                placeholder="First Name"
                id="wd-firstname"
              />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-lastname">Last name</label>
            </td>
            <td>
              <input
                defaultValue="Wonderland"
                placeholder="Last Name"
                id="wd-lastname"
              />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-dob">Date of birth</label>
            </td>
            <td>
              <input defaultValue="2000-01-01" type="date" id="wd-dob" />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-email">Email</label>
            </td>
            <td>
              <input
                defaultValue="alice@wonderland"
                type="email"
                id="wd-email"
              />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-role">Role</label>
            </td>
            <td>
              <select defaultValue="FACULTY" id="wd-role">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link href="/account/signin" className="inline-block rounded bg-blue-600 px-3 py-2 text-white no-underline">Sign out</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
