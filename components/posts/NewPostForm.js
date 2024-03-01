import { useRef, useState} from "react";
import styled from "@emotion/styled";
import {useSession} from "next-auth/react";

export default function NewPostForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const summaryInputRef = useRef();
  const descriptionInputRef = useRef();

  const [isInvalid, setIsInvalid] = useState(false);
  const { data: session, status} = useSession()

  if (!session) {
    window.location.href = '/posts'
    alert('로그인이 필요한 서비스입니다!') // 두번뜨는 오류..
  }

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredSummary = summaryInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    // 유효성 검사
    if (
      !session ||
      !enteredTitle ||
      enteredTitle.trim() === '' ||
      !enteredImage ||
      enteredImage.trim() === '' ||
      !enteredSummary ||
      enteredSummary.trim() === '' ||
      !enteredDescription ||
      enteredDescription.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    const postData = {
      title: enteredTitle,
      image: enteredImage,
      summary: enteredSummary,
      description: enteredDescription,
      user: session.user
    };

    props.onAddPost(postData);
  }
  return (
    <FormWrapper>
      <Form onSubmit={submitHandler}>
        <div>
          <label htmlFor='title'>Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor='image'>Image URL</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div>
          <label htmlFor='summary'>Summary</label>
          <input type='text' required id='summary' ref={summaryInputRef} />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        {isInvalid && <p>Please enter a valid form!</p>}

        <div className='btn'>
          <button>Add Post</button>
        </div>
      </Form>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  max-width: 600px;
`

const Form = styled.form`
  padding: 20px;
  margin: 20px;

  input, textarea {
    margin: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 5px;
    width: 95%;
  }
  
  .btn {
    margin-top: 30px;
    margin-bottom: 10px;
    text-align: right;
  }
`