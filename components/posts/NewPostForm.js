import {useRef} from "react";
import styled from "@emotion/styled";

export default function NewPostForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const summaryInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredSummary = summaryInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const postData = {
      title: enteredTitle,
      image: enteredImage,
      summary: enteredSummary,
      description: enteredDescription,
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
        <div className='btn'>
          <button>Add Post</button>
        </div>
      </Form>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  margin: 10px;
`

const Form = styled.form`
  padding: 10px;
  margin: 20px;

  label {
    display: block;
    font-weight: bold;
    margin: 10px;
  }

  input, textarea {
    display: block;
    font: inherit;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 100%;
  }

  .btn {
    margin-top: 10px;
    text-align: right;
  }

  .btn button {
    font: inherit;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    border: 1px solid white;
    border-radius: 4px;
    font-weight: bold;
  }

  .btn button:hover,
  .btn button:active {
    background-color: #939292;
  }
`