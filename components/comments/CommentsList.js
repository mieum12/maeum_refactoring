import {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Image from "next/image";

export default function CommentsList(props) {
  const { postId } = props;
  const [comments, setComments] = useState([])

  useEffect(() => {
      fetch('/api/comments/' + postId)
        .then(response => response.json())
        .then(data => {
          // 응답 데이터에서 만든 comments 키를 가져온다
          // 가져온 댓글로 상태를 살정해준다
          setComments(data.comments)
        })
  }, [postId]);

  return (
    <CommentWrapper>
      <div>COMMENTS</div>
        {comments.map( comment => (
          <div className='list' key={comment._id}>
            <p>{comment.text}</p>
            <p className='comment-author'>
              <Image
                src={comment.user.image}
                alt={comment.user.name}
                width={30}
                height={30}
                className='authorImg'
              />
              <div>By {comment.user.name}</div>
            </p>
          </div>
        ))}
    </CommentWrapper>
  )
}

const CommentWrapper = styled.div`
  opacity : 0.5;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70%;
  max-width: 600px;

  .list {
    text-align: left;
    border-bottom: 1px solid #ccc;
    width: auto;
  }
  
  .comment-author {
    display: flex;
    justify-content: right;
    align-items: center;
  }
  
  .authorImg {
    border-radius: 50%;
    margin: 5px;
  }

  .list p {
    margin: 0;
    text-align: left;
  }

  .list div {
    text-align: right;
    font-style: italic;
  }
`