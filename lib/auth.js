// 인증과 관련된 유틸리티 메서드를 정의

// import { hash, compare } from 'bcryptjs'
const bcrypt = require('bcryptjs');

export async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, 12)
  console.log('hashedPassword',hashedPassword)
  return hashedPassword
}

// 해쉬 된 비번과 사용자 입력 비번이 맞는지 비교 -> 불리언 반환
export async function verifyPassword(password, hashedPassword) {
  const isValid = await bcrypt.compare(password, hashedPassword)
  console.log('isValid',isValid)
  return isValid
}