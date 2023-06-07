"use client";

import React, { useState } from "react";
import classNames from "classnames";

export const Main: React.FC = () => {
  const [input, setInput] = useState<string | null>(null);
  const [result, setResult] = useState([]);

  const fetchData = async (): Promise<void> => {
    return fetch(`https://api.github.com/search/users?q=${input}`)
      .then((response) => response.json())
      .then((data) => setResult(data))
      .then(() => {
        console.log(result);
      });
  };

  const updateInput = (e: {
    target: { value: React.SetStateAction<string | null> };
  }) => {
    setInput(e.target.value);
  };

  return (
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
        onChange={updateInput}
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
        onClick={fetchData}
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
  );
};
