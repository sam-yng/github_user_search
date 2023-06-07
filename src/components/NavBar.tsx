import React from "react";
import Image from "next/image";
import github from "../../public/assets/images/thehub.png";
import Link from "next/link";
import classNames from "classnames";

export const NavBar: React.FC = () => {
  return (
    <nav
      className={classNames(
        "w-full",
        "flex",
        "flex-row",
        "justify-between",
        "py-5",
        "items-center"
      )}
    >
      <Link href="/">
        <Image
          className={classNames("h-10", "w-10")}
          alt="Github Logo"
          src={github}
        />
      </Link>
      <div className={classNames("space-x-12")}>
        <Link href="/search">Search</Link>
        <Link href="/saved">Saved</Link>
      </div>
    </nav>
  );
};
