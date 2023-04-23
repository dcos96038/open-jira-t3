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
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      {user && <Navbar signOut={signOut} username={user.username} />}
      {children}
    </main>
  );
};
