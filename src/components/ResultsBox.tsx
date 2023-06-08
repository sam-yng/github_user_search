import React from "react";
import classNames from "classnames";
import { useHub } from "@/utils/HubContext";
import { UserItem } from "./UserItem";

type ResultsBoxProps = {
  activePage: string;
};

export const ResultsBox: React.FC<ResultsBoxProps> = ({
  activePage,
}: ResultsBoxProps) => {
  const { result } = useHub();

  return (
    <>
      {activePage === "search" ? (
        <main
          className={classNames(
            "h-[65vh]",
            "border",
            "border-white",
            "mt-8",
            "overflow-x-auto",
            "fade-in",
            "rounded-xl"
          )}
        >
          {result.map((item) => (
            <UserItem
              key={item.id}
              id={item.id}
              flagged={item.flagged}
              name={item.login}
              link={item.html_url}
            />
          ))}
        </main>
      ) : (
        <main
          className={classNames(
            "h-[65vh]",
            "border",
            "border-white",
            "mt-8",
            "overflow-x-auto",
            "fade-in",
            "rounded-xl"
          )}
        >
          {result
            .filter((item) => item.flagged === true)
            .map((item) => (
              <UserItem
                key={item.id}
                id={item.id}
                flagged={item.flagged}
                name={item.login}
                link={item.html_url}
              />
            ))}
        </main>
      )}
    </>
  );
};
