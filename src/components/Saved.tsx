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
      >
        <input
          className={classNames(
            "border",
            "border-white",
            "w-full",
            "bg-black",
            "focus:outline-none",
            "px-2",
            "rounded-lg",
            "py-2",
            "focus:bg-white",
            "focus:text-black",
            "focus:border-black",
            "duration-300",
            "delay-50",
            "transition-colors"
          )}
        ></input>
        <button
          className={classNames(
            "border",
            "border-white",
            "rounded-lg",
            "px-6",
            "ml-4",
            "hover:bg-white",
            "hover:text-black",
            "hover:border-black",
            "delay-50",
            "duration-300",
            "transition-colors"
          )}
        >
          Search
        </button>
      </main>
      <ResultsBox activePage="saved" />
    </>
  );
};
