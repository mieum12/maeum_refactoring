import Image from "next/image";
import styled from "@emotion/styled";

export default function PostDetail(props) {

  return (
    <PostWrapper>
      <h1>{props.title}</h1>
      {/*<summary>{props.summary}</summary>*/}
      <div className='name'>
        <Image
          src={props.user.image}
          alt={props.user.name}
          width={30}
          height={30}
          className='authorImg'
        />
        <p>By. {props.user.name}</p>
      </div>
      <Image
        src={props.image}
        alt={props.title}
        width={300}
        height={300}
        className='img'
      />
      <p
        dangerouslySetInnerHTML={{
        __html: props.description.replace(/\n/g, '<br/>')
      }}/>
    </PostWrapper>

  )
}

const PostWrapper =styled.section`
  margin-top: 50px;
  
  .name {
    //opacity: 0.5;
    gap: 10px;
    font-style: italic;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .authorImg {
    border-radius: 50%
  }
  
  .img {
    margin: 10px;
  }
`