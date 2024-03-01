import { useRef, useState } from 'react';
import styled from "@emotion/styled";
import {useSession} from "next-auth/react";

export default function NewCommentForm(props) {
  const { postId } = props;
  const {data:session, status} = useSession()

  const [isInvalid, setIsInvalid] = useState(false);

  const commentInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredComment = commentInputRef.current.value;

    if (
      !session ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    addCommentHandler({
      user: session.user,
      text: enteredComment,
    });
  }

  function addCommentHandler(commentData) {
    // send data to API
    try {
      fetch('/api/comments/' + postId, {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: {
          'Content-Type': 'application/json'
        },
      })
        // 응답을 기다리고, 파싱하고
        .then(response => response.json())
        // 데이터를 가져올 수 있다
        .then(data => console.log(data))
    } catch (e) {
      console.error(e)
    }

    // 새로고침해주기
    location.reload();


  }

  return (
    <Form onSubmit={sendCommentHandler}>
      <div>
        <label htmlFor='comment'>Your comment</label>
        <textarea id='comment' rows='5' ref={commentInputRef}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid comment! or Log in!</p>}
      <button className='btn'>Submit</button>
    </Form>
  );
}

const Form = styled.form`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  margin: 50px auto;
  gap: 1rem;
  width: 70%;
  padding: 30px;
  max-width: 500px;

  input, textarea {
    margin: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 90%;
  }

  .btn {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`