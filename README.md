This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Next.js

### 공부하다 알게된 장점?

spa 환경에서 간단히 ssr 구현해서 멀티페이지 어플리케이션 만큼 검색엔진 최적화 대응하고 퍼포먼스까지 향상시켜줌 이게 넥스트의 장점임

## next.js 모든 페이지는 사전 렌더됨(pre-rendering)

- pre-render로 더 좋은 퍼포먼스 가능
- 검색엔진 최적화 (SEO)

렌더에 크게 두개있음

- 정적 생
- 서버사이드 렌더링

차이점? => html 언제 생성하는가

[정적생성]

- 프로젝트가 빌드되는 시점 html 파일 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로 넥스트 js 정적 생성 권고
- getStaticProps / getStaticPaths

(언제 쓰냐?)

- 마케팅 페이지
- 블로그 게시물
- 상품 목록
- 도움말 문서

[서버사이드렌더]

- 항상 최신상태 유지함
- getServerSideProps

(언제쓰냐?)

- 관리자 페이지
- 분석 차트

[ㅁㄴㅇㄹ]

- 9.3부터 getInitialProps가 3가지로 나뉨
  `getStaticProps` => 빌드타임에 data fetch 딱한번만 실행됨 빌드된 이후 변경 불가능
  `getStaticPaths` => data에 기반해서 사전렌더(pre-render)할 동적 라우팅을 적어줌(겟스태틱 프롭스와 함께 사용)
  `getServerSideProps` => 각 요청마다 데이터 페치함 스태틱이 아니라 요청마다 데이터를 서버로부터 가져옴

위 두개 차이는 빌드이후 데이터 변경 가능성 이다
이차이를 ssg(static generation) vs ssr(server-side-렌더) 로 생각하면된다.
ssg => staticprops,path ssr => serversideprops
이 세가지는 페이지 컴퍼넌트에서만 사용가능함

[getStaticProps]

- 페이지 렌더링 하는데 필요한 데이터는 사용자 요청전 빌드시 사용가능
- 페이지는 사전렌더링(seo용) 이어야하며 매우 빨라야함

[getStaticPaths]

- 동적 경로를 사용하는 페이지를 렌더링 하는 경우 필요함
- 어제 밤에 이걸로 하나 만들어봤는데 스태틱 프롭스랑 다른점으로는 이미 서버에서 api처리 다하고 받아와서 자바스크립트 없이 이미 html에 관련 정보가 다 들어온다.
- 스태틱 프롭스로 상세 페이지를 보면 데이터 들어오는 잠깐동안 깜빡거린다 근데 패스로 처리하면 그냥 로딩없이 바로 화면에 다 구현되어있다.
- fallback처리를 해줘야하는데 fallback이 false면 지정안된거는 모른다고 처리해서 404페이지가 뜸
- fallback이 true일때는 getStaticPaths가 staticProps로 바뀌어 돌아감
  ???궁금한점??? => 느낌을 알겠는데 이거를 어떤데 써야하나?
  답변:

[getServerSideProps]

- 그냥 쉽게 데이터 요청들어오면 바뀌어야하는페이지 즉, admin,analystic페이지 같은거에선 쓸모있을듯...?
- 서버가 모든 요청 결과 다 계산해서 주는거라 결과를 cdn에 캐시못해서 느림(잘알고 써야함...)

[헬로마켓을 넥스트로 만든다면?]

- index.js에서 상품에대한 api받아오고
- 그걸 Itemlist에 전해줘서 뿌려주고 동적라우팅으로 [id].js로 링크타주고
- [id].js에서는 각 아이디별로 되있는 api를 받아와서 상세페이지로 넘겨준다
- 그걸 아이템 컴퍼넌트에서 받아서 화면 구현한다

[review받은후Fix할것]

- boolean값을 state값에 둘때 협업때 가독성을 위해서 이름 바꾸기
- 이번에 수정되는 기능을 editTodo=false라고 주고 했었다.
- isEditTodo or canEditTodo로 바꿔서 하는게 좋다

[앞으로공부할때?]

- 깃헙 트렌딩 => 오픈소스 자바스크립트 star많은 것 위주로 보자
- 위에거 하면서 내가 사용하는 언어를 위주로 먼저 보면서 좋은 코드보자 ㅎ

[이해가부족한부분+고칠점?]

- issg...
- 지금보니까 고작 투두 하나만드는데 컴퍼넌트 구조도 그렇고 처음에 페이지에대한 이해도 부족이있어서 너무 막생각했다...
- 코드적인 부분 말고 전체 structure이해하고 목적에 맞게 사용하자
