import React from "react";
import * as ReactDOMclient from "react-dom/client";
import App from "./App";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyles from "./global-styles";
import { BrowserRouter } from "react-router-dom";
// import store from "./store/reducerConfig";
// import { Provider } from "react-redux";

const root = ReactDOMclient.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </BrowserRouter>
  </>
);
