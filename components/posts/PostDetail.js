import Image from "next/image";
import styled from "@emotion/styled";

export default function PostDetail(props) {

  return (
    <PostWrapper>
      <h1>{props.title}</h1>
      <div> By. {props.user.name}</div>
      <Image
        src={props.image}
        alt={props.title}
        width={300}
        height={300}
      />

      <summary>{props.summary}</summary>
      <p
        dangerouslySetInnerHTML={{
        __html: props.description.replace(/\n/g, '<br/>')
      }}/>
    </PostWrapper>

  )
}

const PostWrapper =styled.section`
  margin-top: 50px;
`