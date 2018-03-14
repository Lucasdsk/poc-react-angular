import React, { Component } from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { injectGlobal } from "styled-components";
import { Page } from "./pages";
import AppReducer from "./reducers";
import IntlContainer from "./components/IntlContainer"

injectGlobal`
  a, abbr, acronym, address, applet, b, big, blockquote, body, caption, cite, code, dd, del, dfn, div,
  dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, object, ol, p,
  pre, q, s, samp, small, span, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, u, ul, var {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: 0 0;
    list-style: none;
    border-collapse: collapse;
    border-spacing: 0;
    text-decoration: none
  }

  html,
  body {
    font-family: sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #f5f6fa;
  }

  html {
    -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
        box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
      -moz-box-sizing: inherit;
        box-sizing: inherit;
  }
`;

const store = createStore(
  AppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IntlContainer>
          <Router basename="/">
            <Page />
          </Router>
        </IntlContainer>
      </Provider>
    );
  }
}

export default App;
