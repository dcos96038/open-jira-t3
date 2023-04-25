import type {NextPage} from "next";

import {useRouter} from "next/router";
import React from "react";

import {Column} from "~/components/board/Column";
import {DragNDropProvider} from "~/hooks/useDragNDrop";
import {api} from "~/utils/api";

const BoardPage: NextPage = () => {
  const {query} = useRouter();

  const tasks = api.tasks.getAll.useQuery({board: query.id as string});

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

export default BoardPage;
