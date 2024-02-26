import MainNavigation from './MainNavigation';
import styled from "@emotion/styled";

function Layout(props) {
  return (
    <LayoutWrapper>
      <MainNavigation />
      <main className='main'>{props.children}</main>
    </LayoutWrapper>
  );
}

export default Layout;

const LayoutWrapper = styled.div`
  .main {
    margin: auto;
    width: 80%;
  }
`