import PostList from "@/components/posts/PostList";
import {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";

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
      <PostList posts={props.posts}/>
      <Link href='/posts/new'>new post</Link>
    </Fragment>
  )
}