import {useClerk, useUser} from "@clerk/nextjs";
import {type NextPage} from "next";
import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect} from "react";

import {Button} from "~/components/ui/Button";

const Home: NextPage = () => {
  const {openSignIn, loaded} = useClerk();

  const {user} = useUser();

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/boards");
    }
  }, [user, router]);

  return (
    <>
      <Head>
        <title>Open Jira T3</title>
        <meta content="Open Jira APP" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Open Jira T3</h1>
        <p className="mt-4 text-2xl text-white">Login to start using the app!</p>
        <div className="mt-8">
          <Button isLoading={!loaded} variant="solid" onClick={openSignIn}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
