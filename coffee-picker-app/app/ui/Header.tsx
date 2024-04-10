"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children?: React.ReactNode;
}

export const Header: React.FC<Props> = (props) => {
  const currentPath = usePathname();
  return (
    <header className="flex h-16">
      <Link href="/">
        <nav
          className={
            currentPath === "/" ? "text-green-500 font-semibold p-5" : "p-5"
          }
        >
          HOME
        </nav>
      </Link>
      <Link href="/cafes">
        <nav
          className={
            currentPath === "/cafes"
              ? "text-green-500 font-semibold p-5"
              : "p-5"
          }
        >
          CAFES
        </nav>
      </Link>
      <Link href="/login">
        <nav
          className={
            currentPath === "/login"
              ? "text-green-500 font-semibold p-5"
              : "p-5"
          }
        >
          LOGIN
        </nav>
      </Link>
    </header>
  );
};
