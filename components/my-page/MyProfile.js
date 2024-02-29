
export default function MyProfile() {
  // 클라이언트 사이드에서 페이지 가드의 두가지 방법: useSession & getSession
  // 서버 사이드에서 페이지가드: getServerSideProps를 이용해 페이지 데이터를 미리 가져와
  //   요청을 보낸 사용자의 인증 여부를 확인 해 페이지 가드를 해준다

  // 1. useSession : loading이 계속 true인 버그 발생, 로딩인지 미인증인지 구분 x
  // const [session, status] = useSession()

  // 2. getSession
  //   const [isLoading, setIsLoading] = useState(true)
  //   useEffect(()=> {
  //     // useEffect는 async로 만들 수 없기 때문에 await 대신 .then()을 사용
  //     getSession().then(session => {
  //       if (!session) {
  //         window.location.href = '/auth'
  //       } else {
  //         setIsLoading(false)
  //       }
  //     })
  //   })
  // if (isLoading) {
  //   return <h1>Loading ... 🏃🏻‍♀️</h1>
  // }

  return (
    <div>
      <h1>My Profile Page</h1>
    </div>
  )
}