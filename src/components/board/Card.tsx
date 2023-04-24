import {Task} from "@prisma/client";
import dayjs from "dayjs";
import React from "react";

import {useDragNDrop} from "~/hooks/useDragNDrop";

import {Button} from "../ui/Button";

interface Props {
  task: Task;
}

export const Card: React.FC<Props> = ({task}) => {
  const {onDragStart, onDragEnd, isDragging} = useDragNDrop();

  return (
    <div
      draggable
      className="flex h-[150px] cursor-pointer flex-col rounded-md border border-orange-500 bg-[#15162c] px-2 text-white"
      onDragEnd={onDragEnd}
      onDragStart={() => {
        onDragStart(task);
      }}
    >
      <div className="flex items-center justify-between py-2">
        <div className="text-lg font-semibold capitalize text-orange-500">{task.title}</div>
        <Button
          className="flex h-6 w-6 items-center justify-center rounded-[9999px] text-xs"
          color="danger"
          variant="outline"
          onClick={() => {}}
        >
          X
        </Button>
      </div>
      <div className="line-clamp-3 px-1 font-thin">{task.content}</div>
      <div className="mt-auto px-1 py-2 text-end text-sm font-thin">
        {dayjs(task.createdAt).format("DD/MM/YYYY")}
      </div>
    </div>
  );
};
