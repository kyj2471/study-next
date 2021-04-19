import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { connect } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
