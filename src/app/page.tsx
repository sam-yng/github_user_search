import classNames from "classnames";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main
      className={classNames(
        "h-[92vh]",
        "flex",
        "flex-col",
        "justify-center",
        "items-center"
      )}
    >
      <h1 className={classNames("text-4xl", "tracking-wider", "fade-in")}>
        GitHub User Search
      </h1>
      <Link href="/search">
        <button
          className={classNames(
            "border",
            "border-white",
            "px-4",
            "py-2",
            "rounded-lg",
            "mt-6",
            "mb-16",
            "hover:bg-white",
            "hover:text-black",
            "hover:border-black",
            "delay-100",
            "duration-300",
            "transition-colors",
            "fade-in"
          )}
        >
          Explore Now
        </button>
      </Link>
    </main>
  );
}
