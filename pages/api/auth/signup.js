// 자체적인 회원가입 API 생성
// 새로운 사용자를 생성하는 역할을 하는 함수
// 데이터베이스에 연결해 들어오는 사용자 데이터를 저장해야 한다

import {connectDatabase} from "@/lib/db";
import {hashPassword} from "@/lib/auth";

export default async function handler(req, res) {
  // 0. POST 일때만 진행
  if (req.method !== 'POST') {
    return
  }

  // 1. 이메일, 비번 가져오기
  // 유효한 데이터가 있을때만 작업하기 위해 들어오는 데이터 먼저 구성하기
  // 폼이 제출되었을 때 전송되는 요청에 이메일, 비번이 포함되어있다
  // 회원가입 시 이메일, 비번을 API 라우트로 전송되도록 하는 것
  const data = req.body
  const { email, password } = data

  // 2. 데이터가 유효한지 확인하기
  // 검증 되면 데이터베이스(컬렉션)에 저장할 대상이 된다
  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res
      .status(422)
      .json({
        message:
          'Invalid input - 이메일의 형식을 지켜주세요. 비밀번호는 7자리 이상이어야 합니다.'
      })
    return // 유효하지 않은 데이터는 끝내버리기
  }

  // 3. 검증된 데이터 저장하기
  const client = await connectDatabase()
  const db = client.db()


  // 비번은 저장할 때 암호화하기
  const hashedPassword = await hashPassword(password)

  // users라는 컬렉션 생성하기 (사용자 추가)
  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword
  })

  console.log('✅result', result)
  res.status(201).json({message:'Create user!'})
  client.close()
}