// import React, { useState } from 'react';
// import Header from '../src/component/Header';

// function MyApp({ Component, pageProps }) {
//   const [myModal, setMyModal] = useState(false);

//   return (
//     <div>
//       <Header myModal={myModal} setMyModal={setMyModal} />
//       <Component {...pageProps} />
//     </div>
//   );
// }

// export default MyApp;

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
