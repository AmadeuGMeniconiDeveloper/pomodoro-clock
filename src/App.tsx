import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global.styled";
import { darkTheme } from "./styles/theme/dark";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
// import { lightTheme } from "./styles/theme/light";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}
