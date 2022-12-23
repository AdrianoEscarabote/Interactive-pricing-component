import React, { Fragment } from 'react';
import Main from './components/Main';
import GlobalStyle from "./StyledComponents/globalStyle";

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  )
}