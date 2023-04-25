import type {NextPage} from "next";

import {ListItem} from "~/components/board/ListItem";
import {api} from "~/utils/api";

const BoardsListPage: NextPage = () => {
  const {data} = api.boards.getAll.useQuery();

  return (
    <div className="flex h-full w-full flex-col gap-3 px-2 pt-2">
      <h1 className="text-xl font-bold text-orange-500">Boards List</h1>

      {data && data.map((board) => <ListItem key={board.id} board={board} />)}
    </div>
  );
};

export default BoardsListPage;
