# 마음처방전 AI 프로젝트 💉

개인 리팩토링(프론트엔드)를 위한 새로운 레포

## 프로젝트 소개

사용자의 텍스트를 AI로 분석해 글에 담긴 감정을 파악하고 알맞은 컨텐츠 처방전을 제공.
사용자들끼리 게시판을 통해 여러 컨텐츠를 공유하며 소통할 수 있는 서비스.

기존 레퍼지토리 주소 :
https://github.com/mieum12/AIproject-ma-eum-front

## 리팩토링 한/할 부분 !! (계속 수정 중 ... 🏃🏻‍♀️💨)

- app router, page router의 이상한 혼용 -> page router 1가지로 선택해 라우터 구현
  - 더 최신 기능인 app router와 기존의 page router 모두 학습 후, 아직 많은 회사나 프로젝트에서는 page router를 쓰는 경우가 많기 때문에 선택
  - 앱 라우터 학습 프로젝트: https://github.com/mieum12/next-app-router-project
  - 페이지 라우터 학습 프로젝트: https://github.com/mieum12/next-page-router-project
- 2가지 게시판을 하나로 통일
- next-auth의 사용으로 인증 시스템 구현
- 🔺 AI 부분의 생략... 
  - 모든 기능이 구현되면 한번 도전해보기
