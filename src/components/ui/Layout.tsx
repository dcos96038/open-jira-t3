import React from "react";
import {useClerk, useUser} from "@clerk/nextjs";

import {Navbar} from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({children}) => {
  const {user} = useUser();

  const {signOut} = useClerk();

  return (
    <main className="flex h-screen min-h-screen w-full flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      {user && <Navbar signOut={signOut} username={user.username} />}
      <div className="flex h-full w-full items-center justify-center overflow-x-auto sm:mx-auto sm:max-w-7xl">
        {children}
      </div>
    </main>
  );
};
