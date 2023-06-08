"use client";

import React from "react";
import classNames from "classnames";
import { ResultsBox } from "./ResultsBox";

export const Saved: React.FC = () => {
  return (
    <>
      <main
        className={classNames(
          "flex",
          "flex-row",
          "mt-6",
          "justify-between",
          "fade-in"
        )}
      ></main>
      <ResultsBox activePage="saved" />
    </>
  );
};
