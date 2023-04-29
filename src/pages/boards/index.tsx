import type {NextPage} from "next";

import {useState} from "react";

import {ListItem} from "~/components/board/ListItem";
import {NewBoardModal} from "~/components/board/NewBoardModal";
import {Button} from "~/components/ui/Button";
import {ModalWrapper} from "~/components/ui/ModalWrapper";
import {api} from "~/utils/api";

const BoardsListPage: NextPage = () => {
  const [createBoardModal, setCreateBoardModal] = useState(false);
  const {data} = api.boards.getAll.useQuery();

  return (
    <>
      <div className="flex h-full w-full flex-col gap-3 px-2 pt-2">
        <div className="flex items-center justify-between py-2">
          <h1 className="text-xl font-bold text-orange-500">Boards List</h1>
          <Button
            variant="outline"
            onClick={() => {
              setCreateBoardModal(true);
            }}
          >
            Create new
          </Button>
        </div>

        {data && data.map((board) => <ListItem key={board.id} board={board} />)}
        {createBoardModal && (
          <ModalWrapper>
            <NewBoardModal handleModal={setCreateBoardModal} />
          </ModalWrapper>
        )}
      </div>
    </>
  );
};

export default BoardsListPage;
