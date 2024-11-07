import React from "react";

export default function Category({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) {
  return (
    <div
      className="border border-dark20 rounded-[7px] w-[152px] h-[57px] lg:w-[230px] lg:h-[80px] flex items-center justify-center flex-shrink-0 cursor-pointer "
      onClick={onClick}
    >
      <span>{name}</span>
    </div>
  );
}
