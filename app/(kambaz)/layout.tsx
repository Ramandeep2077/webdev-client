import { ReactNode } from "react";
import "./kambaz.css";
import KambazNavigation from "./Navigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz" className="font-sans">
      <KambazNavigation />
      <main className="wd-main-content-offset min-w-0 p-3">{children}</main>
    </div>
  );
}
