import {Fragment} from "react";
import Head from "next/head";

export default function AiPage() {
  return (
    <Fragment>
      <Head>
        <title>ai analysis</title>
        <meta
          name='description'
          content='analysis your text!'
        />
      </Head>
      <p>ai page! analysis your text!</p>
    {/*  여기에 ai 컴포넌트 오는 곳*/}
    </Fragment>
  )
}