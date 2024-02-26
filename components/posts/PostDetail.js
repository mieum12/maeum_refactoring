import Image from "next/image";
import styled from "@emotion/styled";

export default function PostDetail(props) {
  return (
    <PostWrapper>
      <h1>{props.title}</h1>
      <Image
        src={props.image}
        alt={props.title}
        width={300}
        height={300}
      />
      <summary>{props.summary}</summary>
      <p>{props.description}</p>
    </PostWrapper>

  )
}

const PostWrapper =styled.section`
  margin-top: 50px;
`