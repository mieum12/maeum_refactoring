import Head from "next/head";
import HomePage from "@/components/Home";
import {Fragment} from "react";
export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>MAEUM</title>
        <meta name="description" content="MAEUM refactoring project" />
      </Head>
      <HomePage />
    </Fragment>
  );
}
