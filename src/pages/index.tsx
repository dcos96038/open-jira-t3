import {useClerk, useUser} from "@clerk/nextjs";
import {type NextPage} from "next";
import Head from "next/head";

import {Button} from "~/components/ui/Button";
import {api} from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({text: "from tRPC"});

  const {openSignIn, signOut, loaded} = useClerk();

  const {user} = useUser();

  return (
    <>
      <Head>
        <title>Open Jira T3</title>
        <meta content="Open Jira APP" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="text-4xl font-bold text-white">Open Jira T3</h1>
        {!user && <p className="mt-4 text-2xl text-white">Login to start using the app!</p>}
        <div className="mt-8">
          {!user ? (
            <Button isLoading={!loaded} onClick={openSignIn}>
              Login
            </Button>
          ) : (
            <Button isLoading={!loaded} onClick={signOut}>
              Logout
            </Button>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
