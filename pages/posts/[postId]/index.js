import {Fragment} from "react";
import PostDetail from "@/components/posts/PostDetail";
import Head from "next/head";

export default function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta
          name='description'
          content={props.description}
        />
      </Head>
      <p>post detail page</p>
      <PostDetail
        image={props.image}
        title={props.title}
        summary={props.summary}
        description={props.description}
      />
    </Fragment>
  )
}