import React from "react";
import ReactDOM from "react-dom";

import Providers from "components/Providers";
import Routes from "./Routes";

import GlobalStyle from "styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Routes />
      <GlobalStyle />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
