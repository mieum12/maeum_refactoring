import PostList from "@/components/posts/PostList";
import {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import {connectToPostCollection} from "@/lib/db";

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
      <p>다른 사람들에게 나만의 처방전을 공유해주세요!</p>
      <p>책, 영화, 드라마, 음악 등 나의 감정에 오롯이 집중할 수 있는 컨텐츠를 추천해주세요!</p>
      <p>( ex. 우울한 기분을 이겨내고 싶을 때 추천하는 노래 )</p>

        <Link href='/posts/new'>
          <button>New Post!</button>
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