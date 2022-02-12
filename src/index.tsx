import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

// 테마(다크모드) 설정. 속성이 같아야 한다.
const darkTheme = { textColor: "whiteSmoke", backgroundColor: "#111" };
const lightTheme = { textColor: "#111", backgroundColor: "#whitesmoke" };

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      {/* 테마 속성을 넘겨주는 부분 */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
