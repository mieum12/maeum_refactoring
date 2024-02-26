import {Fragment} from "react";
import PostDetail from "@/components/posts/PostDetail";
import Head from "next/head";
import {connectToPostCollection} from "@/lib/db";
import {ObjectId} from "mongodb";

export default function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.postData.title}</title>
        <meta
          name='description'
          content={props.postData.description}
        />
      </Head>
      <PostDetail
        image={props.postData.image}
        title={props.postData.title}
        summary={props.postData.summary}
        description={props.postData.description}
      />
    </Fragment>
  )
}

export async function getStaticPaths() {

  const { client, postsCollection } = await connectToPostCollection();

  const posts = await postsCollection.find({}, {_id: 1}).toArray()

  await client.close()

  return {
    fallback: 'blocking',
    paths: posts.map(post => ({
      params: { postId: post._id.toString()}
    }))
  }
}
// 하나의 포스트를 fetching
export async function getStaticProps(context){
  const postId = context.params.postId

  const { client, postsCollection } = await connectToPostCollection();

  const selectedPost = await postsCollection.findOne({ '_id': new ObjectId(postId) })

  await client.close()

  return {
    props: {
      postData: {
        id: selectedPost._id.toString(),
        title: selectedPost.title,
        summary: selectedPost.summary,
        image: selectedPost.image,
        description: selectedPost.description
      }
    }
  }
}