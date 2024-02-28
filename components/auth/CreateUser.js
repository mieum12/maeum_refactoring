export default async function CreateUser(email, password) {
  // 요청 전송 후
  // 응답을 대기하고 처리한다
  console.log('요청 시작💙')
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({email,password}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('요청 끝 💙')
  console.log('======> 응답: ',response)

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }
  console.log('data:', data)
  return data
}