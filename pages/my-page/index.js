import Head from "next/head";
import {Fragment} from "react";
import MyProfile from "@/components/my-page/MyProfile";
import {getSession} from "next-auth/react";

export default function MyPage() {
  return (
    <Fragment>
      <Head>
        <title>My Page</title>
        <meta
          name='description'
          content='my profile page!'
        />
      </Head>
      <p>my page</p>

      <MyProfile/>
    </Fragment>
  )
}

// getStaticProps는 빌드때 렌더링되어서 요청을 전부 반영하지 않음
// 사용자 인증 여부에 대한 요청은 매 요청이 중요하기 때문에 getServerSideProps를 사용함
// getServerSideProps는 요청에 엑세스하는 context객체가 생김
export async function getServerSideProps(context) {
  // getSession에 들어오는 요청에 대한 req키를 설정한 객체를 전달
  // 그러면 getSession이 자동으로 해당 요청을 살피고
  // 필요한 데이터, 바로 세션 토큰 쿠키를 추출한다
  // 쿠키가 유효한지, 사용자가 인증되었는지 시작하기 전에 쿠키가 있는지 확인
  // 인증되지 않았으면 session이 null이 된다
  const session = await getSession({req: context.req})

  if (!session) {
    // getServerSideProps 여기서 반환한 객체는
    // 일반적으로 컴포넌트에 프로퍼티(props)를 설정하는 객체이다
    return {
      // 객체로 리다이렉션을 설정
      redirect: {
        destination: '/auth',
        permanent: false // 임시로 적용되는 리다이렉션
      }
    }
  }

  // 세션이 있고 로그인 되었을 경우
  // props를 설정한 객체를 반환하기!
  return {
    props: { session },
  }

}