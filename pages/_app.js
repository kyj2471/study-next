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
