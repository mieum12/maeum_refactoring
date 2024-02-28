import {useRef, useState} from "react";
import styled from "@emotion/styled";
import CreateUser from "@/components/auth/CreateUser";

export default function AuthForm() {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(e) {
    e.preventDefault();

    // ref가 있으니 데이터를 가져올 수 있다
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log('이메일',enteredEmail,'비번',enteredPassword)

    // 0. 클라이언트 사이드 유효성 검사 여기에 추가해도 됨

    // 1. 로그인 모드일때 폼 제출 = 로그인 시킨다
    if (isLogin) {

    } else {
      // 2. 회원가입 모드일 때 = 회원가입 로직
      try {
        const result = await CreateUser(enteredEmail, enteredPassword)
        console.log('사용자 생성 완료!',result)
      } catch (e) {
        console.log(e)
      }
    }

  }

  return (
    <FormWrapper>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <Form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div>
          <button className='btn'>{isLogin ? 'Login' : 'Create Account'}</button>
        </div>
        <div>
          <button
            className='switch-btn'
            type='button'
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </Form>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  margin: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  max-width: 500px;
`

const Form = styled.form`
  padding: 10px;
  margin: 20px;
  
  input, textarea {
    margin: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 80%;
  }
  
  .btn {
    
    margin-top: 30px;
    margin-bottom: 10px;
    text-align: left;
  }

  
  .switch-btn {
    border: none
  }
  .switch-btn:hover {
    border: none;
    background-color: dimgray;
    color: white;
  }
`