import {useEffect, useState} from "react";
import styled from "@emotion/styled";

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
            <div>
              By {comment.user}
            </div>
          </div>
        ))}
    </CommentWrapper>
  )
}

const CommentWrapper = styled.div`
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

  .list p {
    margin: 0;
    text-align: left;
  }

  .list div {
    text-align: right;
    font-style: italic;
  }
`