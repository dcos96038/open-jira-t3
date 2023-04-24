import type {NextPage} from "next";

import React from "react";

import {Column} from "~/components/board/Column";
import {DragNDropProvider} from "~/hooks/useDragNDrop";
import {api} from "~/utils/api";

const UserHome: NextPage = () => {
  const tasks = api.tasks.getAll.useQuery();

  return (
    <DragNDropProvider>
      <div className="flex h-full w-full gap-5 px-5 pt-5 lg:justify-center">
        <Column state="TODO" tasks={tasks.data?.filter((t) => t.state === "TODO") || []} />
        <Column
          state="IN_PROGRESS"
          tasks={tasks.data?.filter((t) => t.state === "IN_PROGRESS") || []}
        />
        <Column state="DONE" tasks={tasks.data?.filter((t) => t.state === "DONE") || []} />
      </div>
    </DragNDropProvider>
  );
};

export default UserHome;
