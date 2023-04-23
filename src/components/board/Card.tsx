import dayjs from "dayjs";
import React from "react";

import {RouterOutputs} from "~/utils/api";

type Task = RouterOutputs["tasks"]["getAll"][number];

interface Props {
  title: Task["title"];
  content: Task["content"];
  createdAt: Task["createdAt"];
}

export const Card: React.FC<Props> = ({title, content, createdAt}) => {
  return (
    <div className="flex h-[150px] cursor-pointer flex-col rounded-md border border-orange-500 bg-[#15162c] px-2 text-white">
      <div className="text-lg font-semibold capitalize text-orange-500">{title}</div>
      <div className="line-clamp-3 px-1 font-thin">{content}</div>
      <div className="mt-auto px-1 py-2 text-end text-sm font-thin">
        {dayjs(createdAt).format("DD/MM/YYYY")}
      </div>
    </div>
  );
};
