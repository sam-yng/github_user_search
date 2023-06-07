import React from "react";
import classNames from "classnames";
import { Main } from "../../components/Main";

export default function Search() {
  return (
    <main>
      <h1
        className={classNames("text-4xl", "tracking-wider", "fade-in", "mt-8")}
      >
        Search for users across GitHub
      </h1>
      <p className={classNames("mt-2", "fade-in")}>Using Github REST API</p>
      <Main />
    </main>
  );
}
