import Head from "next/head";
import {Fragment} from "react";
import AuthForm from "@/components/auth/AuthForm";
import {getSession} from "next-auth/react";

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

export async function getServerSideProps(context) {
  const session = await getSession({req: context.req})

  if (session) {
    console.log('세션 있음! 로그인 진행 불가능!')
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  console.log('세션 없음! 로그인 진행 가능!')
  return {
    props: {
      session,
    },
  }
}