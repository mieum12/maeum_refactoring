import { useRef, useState } from 'react';
import styled from "@emotion/styled";

export default function NewCommentForm(props) {
  const { postId } = props;

  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    addCommentHandler({
      email: enteredEmail,
      name: enteredName,
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
        <label htmlFor='email'>Your email</label>
        <input type='email' id='email' ref={emailInputRef} />
      </div>
      <div>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor='comment'>Your comment</label>
        <textarea id='comment' rows='5' ref={commentInputRef}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button className='btn'>Submit</button>
    </Form>
  );
}

const Form = styled.form`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70%;
  padding: 30px;
  
  div {
    flex-direction: column;
  }

  input, textarea {
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 90%;
  }
  
  .btn {
    flex-direction: column;
    width: 100px;
    margin-bottom: 10px;
    //text-align: right;
  }
`