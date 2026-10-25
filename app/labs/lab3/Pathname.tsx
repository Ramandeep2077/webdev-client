"use client";

import { usePathname } from "next/navigation";

export default function Pathname() {
  const pathname = usePathname() ?? "";

  return (
    <div>
      <p>Current pathname: {pathname}</p>
      <p>Pathname length: {pathname.length} on {pathname}</p>
    </div>
  );
}