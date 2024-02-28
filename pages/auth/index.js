import Head from "next/head";
import {Fragment} from "react";
import AuthForm from "@/components/auth/AuthForm";

export default function AuthPage() {
  return (
    <Fragment>
      <Head>
        <title>Auth Page</title>
        <meta
          name='description'
          content='auth page!'
        />
      </Head>
      <p>auth page</p>
      <AuthForm />
    </Fragment>
  )
}