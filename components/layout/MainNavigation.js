import Link from "next/link";

function MainNavigation() {

  return (
    <header>
      <Link href='/'>MAEUM</Link>
      <nav>
        <ul>
          <li>
            <Link href='/ai'>AI analysis</Link>
          </li>
          <li>
            <Link href='/posts'>All Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
