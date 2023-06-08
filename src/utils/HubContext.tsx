"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { HubUser } from "./@types.user";

export type HubContextType = {
  input: string | null;
  setInput: (input: string | null) => void;
  result: HubUser[];
  setResult: (result: HubUser[]) => void;
  updateInput: (e: {
    target: {
      value: string;
    };
  }) => void;
  fetchData: () => Promise<void>;
};

const HubContext = createContext<HubContextType | undefined>(undefined);

export const HubProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [input, setInput] = useState<string | null>(null);
  const [result, setResult] = useState<HubUser[]>([]);

  const updateInput = (e: { target: { value: string } }) => {
    setInput(e.target.value);
  };

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${input}`
      );
      const json = await response.json();
      setResult(json.items);
    } catch (error) {
      console.log(error);
    }
    console.log(result);
  };

  const value = useMemo(
    () => ({
      input,
      setInput,
      result,
      setResult,
      fetchData,
      updateInput,
    }),
    [input, setInput, result, setResult, fetchData, updateInput]
  );

  return <HubContext.Provider value={value}>{children}</HubContext.Provider>;
};

export const useHub = (): HubContextType => {
  const value = useContext(HubContext);
  if (!value) {
    throw new Error("useHub can only be called from within a HubProvider");
  }
  return value;
};
