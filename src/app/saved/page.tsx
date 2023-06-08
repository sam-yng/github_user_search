import React from "react";
import classNames from "classnames";
import { Saved } from "@/components/Saved";

export default function Search() {
  return (
    <main>
      <h1
        className={classNames("text-4xl", "tracking-wider", "fade-in", "mt-8")}
      >
        Search for your saved users
      </h1>
      <Saved />
    </main>
  );
}
