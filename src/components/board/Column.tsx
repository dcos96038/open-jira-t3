import React from "react";

import {RouterOutputs} from "~/utils/api";

import {Card} from "./Card";

type Task = RouterOutputs["tasks"]["getAll"][number];

interface Props {
  state: string;
  tasks: Task[];
}

export const Column: React.FC<Props> = ({state, tasks}) => {
  return (
    <div className="flex h-full flex-col gap-3 pb-4">
      <h2 className="text-lg font-bold text-orange-500">{state}</h2>
      <div className="flex w-80 shrink-0 grow flex-col gap-3 rounded-md border border-orange-500 bg-gradient-to-b from-zinc-800 to-black px-4 pb-4 shadow-xl">
        <div className="flex items-center justify-between overflow-y-auto pt-3">
          <h3 className="text-lg font-semibold text-white">Create new task</h3>
          <button className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent font-bold text-white">
            <AddIcon />
          </button>
        </div>
        {tasks && tasks.map((t) => <Card {...t} key={t.id} />)}
      </div>
    </div>
  );
};

const AddIcon = () => {
  return (
    <svg
      className="fill-orange-500 hover:fill-orange-300"
      viewBox="0 0 519 519"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M259.5 0C116.4 0 0 116.4 0 259.5S116.4 519 259.5 519 519 402.6 519 259.5 402.6 0 259.5 0zm0 468.8c-115.4 0-209.3-93.9-209.3-209.3S144.1 50.2 259.5 50.2s209.3 93.9 209.3 209.3-93.9 209.3-209.3 209.3z" />
      <path d="M351.6 234.4h-67v-67c0-13.9-11.2-25.1-25.1-25.1s-25.1 11.2-25.1 25.1v67h-67c-13.9 0-25.1 11.2-25.1 25.1s11.2 25.1 25.1 25.1h67v67c0 13.9 11.2 25.1 25.1 25.1s25.1-11.2 25.1-25.1v-67h67c13.9 0 25.1-11.2 25.1-25.1s-11.2-25.1-25.1-25.1z" />
    </svg>
  );
};
