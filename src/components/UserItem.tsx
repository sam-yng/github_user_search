/* eslint-disable indent */
import React, { useCallback, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import flag from "../../public/assets/icons/flag.png";
import check from "../../public/assets/icons/checkmark.png";
import { useHub } from "@/utils/HubContext";
import greenflag from "../../public/assets/icons/flag-green.png";

type UserItemProps = {
  avatar?: string;
  name: string;
  link: string;
  flagged: boolean;
  id: number;
};

export const UserItem: React.FC<UserItemProps> = ({
  name,
  link,
  flagged,
  id,
}: UserItemProps) => {
  const { setResult, result } = useHub();

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const onClickSaveUser = useCallback(() => {
    setResult(
      result.map((item) =>
        item.id === id
          ? {
              ...item,
              flagged: !flagged,
            }
          : item
      )
    );
    console.log(result);
  }, [flagged, id, setResult, result]);

  return (
    <>
      <article
        className={classNames(
          "flex",
          "flex-row",
          "text-white",
          "text-xl",
          "my-4",
          "mx-4",
          "items-center",
          "justify-between"
        )}
      >
        <h1
          className={classNames("hover:text-green-500", "hover:cursor-pointer")}
        >
          {name}
        </h1>
        <Link target="blank" href={link}>
          <h1 className={classNames("hover:text-green-500")}>{link}</h1>
        </Link>
        <button
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClickSaveUser}
          className={classNames("w-6", "h-6")}
        >
          <Image
            alt="icon"
            src={
              flagged === true
                ? check
                : flag && isHovering === true
                ? greenflag
                : flag
            }
          />
        </button>
      </article>
    </>
  );
};
