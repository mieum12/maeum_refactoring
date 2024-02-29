import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {connectDatabase} from "@/lib/db";
import {verifyPassword} from "@/lib/auth";
import NaverProvider from "next-auth/providers/naver"
import KakaoProvider from "next-auth/providers/kakao"

/**
 * [] :  동적 catch-all API 라우트로, api/auth로 시작되는 모든 라우트를 잡아냄
 * 이제 인증을 통해 사용자를 로그인시키고, 로그인 권한을 준다
 * 로그인된 사용자의 토큰을 얻고, 사용자 로그인을 확인할 수 있다
 * 사용자가 권한을 가지는지에 대한 여부를 확인
 *
 */
export const authOptions = {
  session: {
    jwt: true, //jwt를 사용한다는 뜻
    // 아래것으로 바뀌었다함
    // strategy: "jwt",
  },
  // 1. 크레덴셜 기반의 인증
  providers: [
    CredentialsProvider({
      id : 'userInfo',
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@email.com" },
        password: {  label: "Password", type: "password" }
      },
      // authorize 콜백은 credentials 값을 통해 해당 사용자가 로그인이 가능한지 여부를 판단하여
      // 로그인을 제어할 수 있는 함수
      async authorize(credentials) {
        const client = await connectDatabase()

        // 1. 사용자가 있는지 확인해야한다.
        // 먼저 db접근하기
        const userCollection = client.db().collection('users')
        // 이메일 확인: credentials에서 email 프로퍼티를 찾기
        // 클라이언트 코드에서 요청을 보낼 때 그 크레덴셜을 설정하는 것은 우리
        // 유저 찾기!
        const user = await userCollection.findOne({email: credentials.email})

        if(!user) {
          client.close()
          throw new Error('회원이 아님! No user found!')
        }

        // user가 제출한 비번, 데이터베이스에 저장되어있는 비번끼리 맞는지 비교
        const isValid = await verifyPassword(credentials.password, user.password)
        // 비번이 다를 때
        if (!isValid) {
          client.close()
          throw new Error('비번이 다름! Could not log you in!')
        }

        // authorize 함수 안에서 객체를 반환하며 NextAuth 인증이 성공했다고 알리기
        // 이 객체는 JSON web token 으로 부호화된다
        // 나중에 getSesssion으로 가져와 진다
        // user 객체 전체를 전달할 수는 없다, 비번 포함 주의
        client.close()
        return {
          email: user.email
        }
      }
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_SECRET,
    }),

  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
}

export default NextAuth(authOptions)