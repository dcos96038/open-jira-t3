import React from "react";

import {api} from "~/utils/api";

import {Button} from "../ui/Button";

interface Props {
  handleModal: (value: boolean) => void;
}

export const NewBoardModal: React.FC<Props> = ({handleModal}) => {
  const ctx = api.useContext();

  const {mutate, isLoading} = api.boards.create.useMutation({
    onSuccess: () => {
      void ctx.boards.getAll.invalidate();
      handleModal(false);
    },
    onError: (e) => {
      console.error(e);
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formValues = new FormData(event.currentTarget);
    const title = formValues.get("title") as string;

    mutate({title});
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold text-orange-500">Create new board</h1>
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <label className="text-sm font-semibold text-white" htmlFor="title">
          Title
        </label>
        <input
          className="rounded-md bg-zinc-800 px-3 py-2 text-white outline-none"
          id="title"
          name="title"
          placeholder="Enter some title..."
          type="text"
        />
        <div className="ml-auto flex items-center gap-3">
          <Button
            color="danger"
            disabled={isLoading}
            onClick={() => {
              handleModal(false);
            }}
          >
            Cancel
          </Button>
          <Button isLoading={isLoading} type="submit">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};
