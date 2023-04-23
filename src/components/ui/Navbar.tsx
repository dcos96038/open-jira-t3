import React from "react";

import {Button} from "./Button";

interface Props {
  username: string | null;
  signOut: () => void;
}

export const Navbar: React.FC<Props> = ({username, signOut}) => {
  return (
    <div className="flex items-center border-b border-orange-600 bg-zinc-900 px-4 py-2">
      <h6 className="font-bold text-white">Open Jira</h6>
      <p className="ml-auto mr-3 font-semibold text-white">{username}</p>
      <Button onClick={signOut}>Logout</Button>
    </div>
  );
};
