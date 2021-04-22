import { combineReducers, createStore } from 'redux';
import { reducer } from './reducers/reducers';

const rootReducer = combineReducers({
reducer
});

const store = createStore(rootReducer);
console.log(store.getState());

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

---

# Redux

### store

- 기본적으로 상태에관한건 여기서 집중관리됨.
- 커다란 JSON의 결정체라고 생각하자
  {
  value:0,
  }
  이런식으로 저장된다. 그런데 규모가 크다면
  {
  //세션과 관련된 것들
  sessoin:{
  loggedIn: true,
  user:{
  id:"123123",
  screenName: "hellomarket",
  },
  },

  //타임라인 관련된 것들
  timeLine:{
  type:"home",
  statuses:[
  {id:1, screenName:"hellomarket", text:"hello"},
  {id:2, screenName:"hellomarket2", text:"hello2"},
  ],
  },

  //알림과 관련
  notification:[],
  }

이런식으로 카테고리별로 나눠서 하게된다.

### Action / Action Creator

- store 및 store에 존재하는 state는 신성한거다 React component같은 하등종족이 낄 곳이 아니다.

- 그럼 이거 어떻게 쓰냐? 그래서 Action이라는 의식을 거쳐야함. 이벤트 드리븐이라 생각

[Action]

- 어떠한 포맷을 가지고 있는 녀석일까?
  {
  type: "액션의 종류를 한번에 식별할 수 있는 문자열 혹은 심볼",
  payload: "액션의 실행에 필요한 데이터",
  }
- 느낌이 온다? 타입이야 타입일것이니 넘어가고 payload...? 액션의 실행에 필요한 데이터?
  이걸 번역기에 넣으면 뜻이 유효탑재량이다. 느낌알겠으니 계속가보자

{
type:"@@myapp/ADD_VALUE",
payload:2,

}

- 위의 JSON 객체가 뭘 의미할까? 카운터 값을 2배 늘릴때 대충 저런식일거란 느낌이 온다.
- @@myapp이란 Prefix가 오는 건 다른 사람이 쓴 코드와의 충돌을 피하기 위함이다.
- 그런데 이런 배열을 수작업으로 하는것도 말안됨
- @@myapp/ADD_VALUE Action명 문자열로 쓰는것도 싫다.
- 당연하겠지만 이런걸 편하게 쓰기위해 함수와 상수를 준비하자.
- !!!외부 파일이 참고 할 수도 있으니 제대로 export 해야한다.

[Reducer]

- 이녀석은 Store의 문지기 라고 생각하자.
- 무슨일 하는 녀석일까?
- 이전 상태가 Action을 거치면서 나온 새로운 State를 만드는 조작이라 생각하자.

Old state
===> REDUCER ===> New State
Action

```js
import {ADD_VALUE} from "./actions";

export default (state = {value:0}, action) => {
  switch (action.type){
    case ADD_VALUE:
      return {...state, value: state.value + action.payload}
  };
  default:
    return:state;
}
```

- 초기상태는 Reducer의 Default 인수에서 정의됨.
- 상태가 변할 때 전해진 `state`는 그 자체의 값으로 대체되는 것이 아님 새로운 것이 합성되는 것처럼 쓰여짐.
- 그냥 처음에 디폴트값으로 정의되고 액션 통해서 변하는데 그건 기존 상태값이 바뀌는게 아니고 새로운게 나온다 생각하자.

{
value:2,
}

- 바뀌면 store에서 바로 반영되서 위에 처럼 나온다.
- 자 근데 위에서 한 내용은 기본 중요하지만 저렇겐 못쓴다. 예로 트위터라는 곳에서 리듀서를 사용한다면 redux에서 제공하는 combineReducers함수를 이용하여 아래와 같이 사용한다.

```js
import { combineReducers } from 'redux';

const sessionReducer =
  ((state = { loggedIn: false, user: null }),
  (payload) => {
    //something
  });

const timelineReducer =
  ((state = { type: 'home', statuses: [] }),
  (payload) => {
    //something
  });

const notificationReducer = (state = [], payload) => {
  //something
};

export default combineReducers({
  session: sessionReducer,
  timeline: timelineReducer,
  notification: notificationReducer
});
```

- 그냥 각자 스테이트값 각자다른 데이터로 처리하고 한번에 익스포트 해주는건가...?
- Reducer 분할에 쓰이는 키가 고대로 state 분할에도 쓰임
- Reducer정의 자체가 다른 파일로 나누는 거다.

[connect]

- react component자체는 redux 흐름 타는게 불가능임.
- 흐름탈라면 React Redux에서 제공하는 connect함수를 이용해야함.
- 함수판,클래스판 두개다 다르게 되있음.

```js
>>>>>>>> Functional
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addValue } from './actions';
​
const Counter = ({ value, dispatchAddValue }) => (
    <div>
        Value: {value}
        <a href="#" onClick={e => dispatchAddValue(1)}>+1</a>
        <a href="#" onClick={e => dispatchAddValue(2)}>+2</a>
    </div>
);
​
export default connect(
    state => ({ value: state.value }),
    dispatch => ({ dispatchAddValue: amount => dispatch(addValue(amount)) })
)(Counter)
>>>>>>>>> Class Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addValue } from './actions';
​
class Counter extends Component {
    render() {
        const { value, dispatchAddValue } = this.props;
        return (
            <div>
                Value: {value}
                <a href="#" onClick={e => dispatchAddValue(1)}>+1</a>
                <a href="#" onClick={e => dispatchAddValue(2)}>+2</a>
            </div>
        );
    }
}
​
export default connect(
    state => ({ value: state.value }),
    dispatch => ({ dispatchAddValue: amount => dispatch(addValue(amount)) })
)(Counter)
```

- Component가 Store로 뭔가 받는다? 그걸 props를 통해 받는다.
- Props는 immutabale하다. 즉, 상태가 변경도면 component가 다시 만들어진다.
- 여기까지 염두해 두고 connect를 실행하고 있는 주변코드를 보자.

---

### 아래 4번까지 이해하고 각 함수 보러가자...ㅎ

1. store가 가진 state를 어떻게 props에 엮을지 정한다. 이런거 하는 함수를 mapStateProps 라고 부른다.
2. Reducer에 action을 알리는 함수 dispatch를 어떻게 엮어낼지 정하자.
3. 위에 두가지가 적용된 props를 받을 component를 정한다.
4. store와 reducer를 연결 시킬 수 있도록 만들어진 component가 반환값이다.

---

[mapStateToProps]

- 인수로 전달된 state는 전체를 의미한다는 것을 주의하자.

```js
{
  value: 2;
}
```

위의 카운트 예가

```js
<Counter value={2} />
```

가 됬으면 좋겠는데? 라고 생각해서 `state => ({value:state.value})`라고 하였다.
기본적으로 필요한 것만 선별해서 props로 엮는다를 원칙으로 생각하자.

[mapDispatchToProps]

- Action creator에서 action을 만든다고 해도 그것으론 아무일 일어나지 않음
- Reducer를 향해 통지를 할 수 있게 만들기 위해서 만들기 위해 만든 action을 dispatch라는 함수에 넘겨야한다.
- 이렇게되면 모든 reducer가 실행된다. 그래서 reducer에 switch문을 사용해서 분기 짜른게 이 이유때문이다.
- 또 component쪽에 하나하나 수동으로 dispatch하는 처리를 하지 않아도 되도록 여기서 action의 생성부터 dispatch 실행까지 한번에 이뤄질 수 있도록 함수를 정의해서 props에 넘겨주자.

---

# Velopert

## Redux

위의 것으로 리덕스에 대략적인 맥을 잡았다.
제대로 이해하고 쓰자.

### 리덕스는 세가지 규칙이 있다.

1. 하나의 application 안에 하나의 스토어가 있다.

- 하나 어플안에는 하나의 스토어만 만들어서 사용한다.
- 사실 비추임. 여러개 스토어 만들고 싶다면 해도됨
- 특정 업데이트 너무 자주 일어나거나 애플리케이션 특정 부분 완전히 분리 하고 싶다면 스토어 여러개 만들어도 됨 하지만 단점으로 개발 도구 활용은 못하게됨.

2. 상태는 읽기 전용이다.

- 기존의 상태를 건드리지 않음. 새로운 상태를 생성하여 업데이트 해줌. 나중에 개발자 도구를 활용해서 뒤로 돌릴수도 앞으로 돌릴수도 있음.
- 리덕스에서 불변성을 유지해야 하는 이유는 내부적으로 데이터가 변경되는걸 감지하기 위해 shallow equality검사를 하기 때문임. 이를 통해서 객체 변화 감지 할 때 객체의 안쪽 까지 깊숙한 비교를 하는게 아니라 겉 한번 사악~ 핥는 비교를 하여 좋은 성능을 유지 할 수 있다.
- immutable.js 사용할건데 모르면 찾아보셈

3. 변화를 일으키는 함수, `Reducer`는 순수한 함수여야함.

- 리듀서는 함수의 이전 상태, 액션 객체를 파라미터로받음
- 이전상태 안건드리고 변화를 일으킨 새로운 객체를 만들어 반환.
- 똑같은 파라미터로 호출된 리듀서 함수는 언제나 같은 결과값 반환 해야함.

위의 세가지를 지켜야한다. 동일한 인풋이라면 동일한 아웃풋이 필요한 법 근데 일부 로직중 실행할 때 마다 다른 값을 주는경우가 있다. 내가 그렇게 했다. id값에 Date.now()같은 걸 사용하였다 아니면 네트워크에서 뭔갈 요청하던가. 이런 작업은 순수하지 않으니 리듀서 밖에서 처리해야한다.
근데 진정 이런걸 하고싶냐? 그러면 리덕스 미들웨어 쓰면된다.

- 리덕스와 연동된 컴퍼넌트 => 컨테이너 컴퍼넌트
  단순 뷰만위한 컴퍼넌트 => 프리젠테이셔널 컴퍼넌트

- 액션과 리듀서를 기능별 분류해서 하나의 파일에 작성하는데 이를 module이라한다.

- configure.js는 리덕스 스토어를 생성하는 함수를 모듈화 하여 내보낸다.

- 이렇게 따로 모듈화 하는건 애플리케이션에 하나의 스토어만 있지만 예외 케이스가 있기때문. 우린 서버사이드 렌더링을 하니까 서버쪽에서도 각 요청이 처리 될 때마다 스토어를 생성해 줘야함.

- actionCreator.js에서 스토어를 불러오고 또 각 모듈들에서 선언했던 액션 생성함수들을 불러와 store의 dispatch와 미리 바인딩 작업을 해줌

---

[피드백/수정할것]
useDispatch => connect ///////////ok ==>connect내부파보자.
action, reducer 따로 ////////////ok
push() 수정 => concat or object.assign //////////////ok
reducer for문 돌아서 지저분한거 싹다 수정 수정... /////////////////ok
내가쓴 액션 못씀..깔끔하게 createAction써서 바꾸기//////////////ok

[react-redux]

- 리덕스는 스토어 호출할떄 길어짐 this.props.....길어짐...
  그걸 provider 컴퍼넌트 감싸주고 한방에 커넥트써서.........................

[피드백이후공부해야하는것]
선언식 vs 표현식.../////ok
바벨로 e.preventDefault~//////fail...
http://guswnsxodlf.github.io/optimize-react-component-using-reselect =>reSelect ////ok
리덕스-사가//////...

[우아한테크세미나]
자바지기 아저씨 연설듣고...
인덴트 2이상 X, 하나의 함수는 하나의 일만하게...등등
좋은 코드는 저렇게 되있다 이런것 보다도 주변에 필요없는 행동 과감히 잘라내고 시간 확보하기.
나만의 코드 스타일을 위한 목표를 정하고 그렇게 하기로했으면 그렇게 하기
하루종일 코드 생각하기...
주변 환경 영향을 받지 않고 각자 할 공부 하고 꾸준한 연습만이 개발자로 살아남는것
여자친구없고 결혼하지 않은 개발자는 축복받은거다 그만큼 아무도 날 못건드리거든...(...나...)
확인...

---

[함수선언식vs함수표현식]
함수 선언식은 호이스팅의 영향을 받는데 함수 표현식은 호이스팅 영향을 받지 않는다.
그래서 함수 선언식을 사용하면 자바스크립트 특징인 호이스팅에 따라 브라우저가 자바스크립트를 해석할때 위로 끌려올라감.
호이스팅 잘 모른다? 그냥 함수와 변수를 코드 상단에 쓰면 호이스팅에 의한 스코프 꼬임문제는 방지할 수 있다.

[함수표현식]
근데 뭔차일까...
함수표현식의 장점은 뭘까?

1. 클로져로 사용.
2. 콜백으로 사용.(다른 함수의 인자로 넘길 수 있음)
   콜백함수는 알다시피 다른 함수의 인자로 전달된 함수를 의미한다.
   클로저...개념이 조금 어려운데.
   자바스크립트에서 클로저는 부모가 반환한 후에도 부모 범위에서 변수에 대한 참조를 유지하는 모든 함수이다...

결론은??? => 함수 표현식이 선언식에 비해 가지는 장점이 많다. 그런데 결국 이러한 차이점을 알고 일관된 코딩 컨벤션으로 코드를 작성하는게 중요!.
AirBnb JS style사용하는 우리회사도 함수 선언식 보다는 함수 표현식을 지향한다고 알고있다...? 아닌가?

[createAction]
얘를 쓰면 3가지를 파라미터로 가져옴.

1. 액션이름
2. payloadCreator
3. metaCreator

[connect]
커넥트 함수는 컨테이너 컴포넌트를 만드는 또다른 방법임.
사실 useSelector / useDispatch가 편하기 때문임.
훅스에서만 가능한거임 클래스형에서는 못씀...ㅠ.ㅠ

커넥트는 HOC임...HOC는 higher-order-component임.
이거는 리액트 컴퍼넌트 개발하는 하나의 패턴으로 컴포넌트 로직을 재활용 할 때 유용한 패턴임.
특정 함수 또는 값을 프롭으로 받아와서 사용하고 싶을때 사용함.
훅전에는 HOC패턴 많이 씀 근데 훅이후는 잘 안씀. 훅으로 대체 가능하기 때문임.
HOC의 용도는 => 컴퍼넌트 특정 함수로 감싸서 특정 값 또는 함수를 프롭으로 받아와서 사용 할 수 있게 해주는 패턴 이라는 것만 알아두자.

커넥트 함수는 리덕스 스토어 안에 있는 state를 프롭으로 넣어줄수도 있고 액션 디스패치하는 함수를 프롭으로 넣어줄 수도 있음

[connect-VS-useDispatch,useSelector]
사실 커넥트의 장점...잘 모르겠다...HOC...? 이거 다 훅스에있는 유즈 디스패치나 유즈 셀렉터가 해준다.
connect가 하는 일을 useSelector가 state를 가져다 쓸 수 있게 해주고 useDispatch를 사용해서 프롭스에 action dispatch를 사용할 필요없이 액션 객체를 dispatch할수 있다...
커넥트를 사용해 불필요한 렌더링관련한 장점역시도 훅스를 사용해도 다 할 수 있다...
하지만 지금 당장은 후자보다는 connect를 사용하는게 맞다고 생각한다.
이유는 아직까지 수많은 리액트 관련 코드들은 클래스형으로 쓰여져 있는 경우가 많다.
커넥트는 둘다 사용가능하지만 후자는 클래스형에서는 사용을 하지 못한다.
결론은 지금당장은 커넥트를 쓰지만 개인적으로 프로젝트할 때는 유즈 디스패치랑 유즈 셀렉터를 사용하자...언젠간 쟤들로 다 바뀔것 같다는 느낌이 든다. ㅎ

[mapStateToProps]
이거 그냥 리덕스 스토어 state조회해서 어떤걸 프롭을 넣어줄지 정의하는 거임.

[mapDispatchProps]
이거는 컴퍼넌트에 프롭스로 넣어줄 액션을 디스패치 하는 함수들에 관련된 함수임.

[bindActionCreators]
값이 액션 생산자인 객체를 받아서 같은 키를 가지지만 각각의 생산자들을 디스패치로 감싸서 바로 호출가능하게 객체로바꿈
보통 스토어 인스턴스에서 바로 디스패치를 호출하면됨 리액트-리덕스가 디스패치함수를 제공해주니 그냥 쓰면됨
bindActionCreators를 사용하는곳은 리덕스를 상관하지 않는 컴퍼넌트로 액션 생산자를 넘기는데 디스패치나 리덕스 스토어는 넘기기 싫을때 씀
인자로는 actionCreators, dispatch사용함

[Reselect...React/redux최적화]
리액트랑 리덕스 같이 쓰면 관심사를 분리할 수 있는 좋은 조합이다.
React에서 가장 오래걸리는 작업은 렌더링 싸이클이다.
컴퍼넌트 state,props가 변경되기 시작하면 렌더링 싸이클이 발생한다.

reselect는 첫번쨰 파라미터 배열안에 있는 함수들이 반환하는 값이 이전과 같으면 마지막 파라미터로 준 함수를 실행하지 않는다.
개발 할때 이런 최적화를 하면 어플리케이션이 복잡해도 쓸만한 성능 보장됨.

---

[가볍게-REDUX-SAGA]
React X Redux만으로는 아직 불편합니다.

- Reducer안에 부작용이 생길 처리를 하면 안된다.
  라는 원칙이 있다.
- 같은 입력에 대해 확률적으로 다른 결과가 나오는 처리
- 지연 처리
- HTTP 리퀘스트 처리

이런거 기본적으로 리듀서에서 못씀...그럼 어따씀?

- Component안
- ActionCreator안
- mapDispatchToProps안 에다가 써야함...
  지금까지 connect된 component로 부터 action이 dispatch되면 그 Reducer를 향한다 고만 한정지어 사용해옴.
  새로운 방법을 원한다 ??? SAGA쓰자.

Redux - SAGA는 제너레이터 함수라 비동기 처리를 간단히 다룰 수 있다.

1. yield take(ACTION_TYPE)으로 지정한 action의 발생을 감지한다.
2. 가져온 액션을 구워먹던 삶아 먹던 맘대로 하면됨
3. yield put(action)의 결과를 다른 action으로 내보낼 수 있다...

일단 기본적으로 이런게 가능함.
내보낸 액션은 리듀서를 향하게도 할 수 있고 자기 자신을 사가에 다시 올 수도 있고.

---

[REDUX-SAGA]
redux-thunk다음으로 많이 사용됨.
사가는 성크가 해결 못한 다양한 작업을 처리 가능하다.

1. 비동기 작업시 기존 요청을 취소 처리할 수 있다.
2. 특정 액션이 발생했을 때 이에 따라 다른 액션이 디스패치되게끔 하거나, 자바스크립트 코드를 실행 할 수 있다.
3. 웹소캣을 사용하는 경우 Channel이라는 기능을 사용하여 더욱 효율적으로 코드를 관리 할 수 있다.
4. API 요청이 실패 할 때 재요청 할 수 있는 작업을 할 수 있다.

[Generator]
generator는 함수를 작성할 때 함수를 특정 구간에 멈춰놓을 수도 있고, 원할 때 다시 돌아가게 할 수도 있다.
또한 그 결과값을 여러번 반환 할 수도 있다.

---

[HOC]

login체크
디버깅 체크

==> https://velog.io/@hwang-eunji/React-%EA%B3%A0%EC%B0%A8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-HOC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
