import Link from "next/link";
import styled from "@emotion/styled";
import {signOut, useSession} from "next-auth/react";

export default function MainNavigation() {

  // session의 활성 상태를 나타내는 세션 객체
  // 세션 객체에는 토큰으로 변환된 사용자 데이터가 있음
  // loading: 로그인된 상태인지 아닌지 next가 확인하는 요소
  const {data: session, status} = useSession()
  console.log('🥶session: ',session)
  console.log('status: ',status)

  function logoutHandler() {
    // useSession을 사용하기 때문에 session에 변화가 있을 때마다
    // 컴포넌트가 자동으로 업데이트 되어서
    // await을 쓸 필요없다
    signOut() // 쿠키와 세션 정보를 삭제
  }

  return (
    <header>
      <Nav>
        <Link href='/'>MAEUM</Link>
        <ul>
          <li>
            <Link href='/ai'>AI Analysis</Link>
          </li>
          <li>
            <Link href='/posts'>All Posts</Link>
          </li>
          {!session && status !== "loading" && (
            <li>
              <Link href='/auth'>Log In</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href='/auth'>My Page</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Log Out</button>
            </li>
          )}
        </ul>
      </Nav>
    </header>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;

  ul {
    display: flex;
    align-items: baseline;
  }
  a {
    margin: 10px;
  }

  a:hover,
  a:active {
    color: white;
  }
  
`
