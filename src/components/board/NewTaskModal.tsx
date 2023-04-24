import type {Task} from "@prisma/client";

import React, {useState} from "react";

import {api} from "~/utils/api";

import {Button} from "../ui/Button";

interface Props {
  setCreateTaskModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewTaskModal: React.FC<Props> = ({setCreateTaskModalIsOpen}) => {
  const [formValues, setFormValues] = useState<{
    title: Task["title"];
    content: Task["content"];
    state: Task["state"];
  }>({
    title: "",
    content: "",
    state: "TODO",
  });

  const ctx = api.useContext();

  const {mutate, isLoading} = api.tasks.create.useMutation({
    onSuccess: () => {
      setCreateTaskModalIsOpen(false);
      void ctx.tasks.getAll.invalidate();
    },
    onError: (e) => {
      console.error(e);
    },
  });

  const OPTIONS = [
    {value: "TODO", label: "Todo"},
    {value: "IN_PROGRESS", label: "In progress"},
    {value: "DONE", label: "Done"},
  ];

  const onCreate = () => {
    mutate({
      title: formValues.title,
      content: formValues.content,
      state: formValues.state,
      board: "clgu3x3ox000255ccjrso99xm",
    });
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
      <div className="flex h-full w-full flex-col gap-4 rounded-md bg-slate-900 p-4 shadow-xl sm:h-min sm:w-min sm:min-w-[400px]">
        <div className="flex items-center justify-between py-1">
          <h2 className="text-lg font-bold text-orange-500">Create new task</h2>
          <Button
            className="flex h-5 w-5 items-center justify-center rounded-md bg-orange-500 text-white"
            disabled={isLoading}
            onClick={() => setCreateTaskModalIsOpen(false)}
          >
            X
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-white" htmlFor="title">
            Title
          </label>
          <input
            className="rounded-md bg-zinc-800 px-3 py-2 text-white outline-none"
            id="title"
            placeholder="Enter some title..."
            type="text"
            value={formValues.title}
            onChange={(e) => setFormValues({...formValues, title: e.target.value})}
          />
          <label className="text-sm font-semibold text-white" htmlFor="state">
            State
          </label>
          <select
            className="rounded-md bg-zinc-800 px-3 py-2 text-white outline-none"
            id="state"
            value={formValues.state}
            onChange={(e) => setFormValues({...formValues, state: e.target.value as Task["state"]})}
          >
            {OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <label className="text-sm font-semibold text-white" htmlFor="content">
            Content
          </label>
          <textarea
            className="rounded-md bg-zinc-800 px-3 py-2 text-white outline-none"
            id="content"
            placeholder="Enter some content..."
            rows={3}
            value={formValues.content}
            onChange={(e) => setFormValues({...formValues, content: e.target.value})}
          />
          <div className="flex justify-end gap-4">
            <Button disabled={isLoading} onClick={() => setCreateTaskModalIsOpen(false)}>
              Cancel
            </Button>
            <Button isLoading={isLoading} onClick={() => onCreate()}>
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
