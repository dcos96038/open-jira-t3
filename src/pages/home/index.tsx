import type {NextPage} from "next";

import React from "react";

import {Column} from "~/components/board/Column";
import {api} from "~/utils/api";

const UserHome: NextPage = () => {
  const tasks = api.tasks.getAll.useQuery();

  return (
    <div className="container mx-auto h-full overflow-x-auto">
      <div className="flex h-full w-fit justify-around gap-5 px-5 pt-5">
        <Column state="TODO" tasks={tasks.data?.filter((t) => t.state === "TODO") || []} />
        <Column
          state="IN PROGRESS"
          tasks={tasks.data?.filter((t) => t.state === "IN_PROGRESS") || []}
        />
        <Column state="COMPLETED" tasks={tasks.data?.filter((t) => t.state === "DONE") || []} />
      </div>
    </div>
  );
};

export default UserHome;
