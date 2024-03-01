import PostList from "@/components/posts/PostList";
import {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import {connectToPostCollection} from "@/lib/db";
import {useSession} from "next-auth/react";

export default function PostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Post Page</title>
        <meta
          name='description'
          content='post page!'
        />
      </Head>
      <p>post page</p>

        <Link href='/posts/new'>
          <button>Let's make new post!</button>
        </Link>

      <PostList posts={props.posts}/>
    </Fragment>
  )
}

// 데이터가 로딩될때까지 기다렸다가 이 컴포넌트 함수를 위한 프로퍼티를 반환
export async function getStaticProps() {
  const { client, postsCollection } = await connectToPostCollection();
  const posts = await postsCollection.find().sort({_id: -1}).toArray()
  await client.close()

  // 항상 객체를 반환하는 것이 중요하다
  return {
    // props는 이 페이지 컴포넌트에 대한 props이다
    props: {
      posts: posts.map(post => ({
        title: post.title,
        summary: post.summary,
        image: post.image,
        description: post.description,
        id: post._id.toString(),
        user: post.user
      }))
    },
    revalidate: 1
  }
}