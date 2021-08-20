import React from "react";
import ReactDOM from "react-dom";
import Providers from "components/Providers";
import GlobalStyle from "styles/GlobalStyles";

import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Routes />
      <GlobalStyle />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
