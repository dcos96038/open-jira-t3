import {useClerk, useUser} from "@clerk/nextjs";
import {type NextPage} from "next";
import Head from "next/head";

import {Button} from "~/components/ui/Button";
import {Layout} from "~/components/ui/Layout";
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
      <Layout>
        <h1 className="text-4xl font-bold text-white">Open Jira T3</h1>
        {!user && <p className="mt-4 text-2xl text-white">Login to start using the app!</p>}
        <div className="mt-8">
          {!user ? (
            <Button isLoading={!loaded} variant="solid" onClick={openSignIn}>
              Login
            </Button>
          ) : (
            <Button isLoading={!loaded} variant="outline" onClick={signOut}>
              Logout
            </Button>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
