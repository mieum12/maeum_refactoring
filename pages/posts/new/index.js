import {Fragment} from "react";
import NewPostForm from "@/components/posts/NewPostForm";

export default function NewPostPage() {
  return (
    <Fragment>
      <title>Add new Post!</title>
      <meta
        name='description'
        content='adding...'
      />
      <p>add new post!</p>
      <NewPostForm />
    </Fragment>
  )
}