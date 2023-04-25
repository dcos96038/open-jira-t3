import {Board} from "@prisma/client";
import Link from "next/link";
import React from "react";

type BoardWithTaskCount = Board & {taskCount: number};

interface Props {
  board: BoardWithTaskCount;
}

export const ListItem: React.FC<Props> = ({board}) => {
  return (
    <Link className="flex flex-col" href={`/boards/${board.id}`}>
      <div className="flex cursor-pointer items-center justify-between rounded-md border border-orange-500 bg-zinc-800 p-2 text-white hover:border-green-400 hover:bg-zinc-600">
        <h2 className="text-lg font-semibold">{board.title}</h2>
        <span className="mr-3 rounded-xl bg-orange-500 px-2 text-sm font-bold text-white">
          {board.taskCount} Tasks
        </span>
      </div>
    </Link>
  );
};
