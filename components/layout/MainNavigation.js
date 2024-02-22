import Link from "next/link";
import styled from "@emotion/styled";

export default function MainNavigation() {

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
          <li>
            <Link href='/'>My Page</Link>
          </li>
        </ul>
      </Nav>
    </header>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: baseline;
  }
`
