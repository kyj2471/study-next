import React, { useState } from "react";
import Header from "../src/component/Header";

function MyApp({ Component, pageProps }) {
  const [myModal, setMyModal] = useState(false);

  return (
    <div>
      <Header myModal={myModal} setMyModal={setMyModal} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

/**
 * 페이지 전환시 레이아웃을 유지할 수 있습니다.
페이지 전환시 상태값을 유지할 수 있습니다.
componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있습니다.
추가적인 데이터를 페이지로 주입시켜주는게 가능합니다.
글로벌 CSS 를 이곳에 선언합니다.
 * 
 */
