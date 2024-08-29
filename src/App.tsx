import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Router } from "./Router";

import { TasksProvider } from "./contexts/TasksContext";

import { GlobalStyles } from "./styles/global.styled";
import { darkTheme } from "./styles/theme/dark";
// import { lightTheme } from "./styles/theme/light";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <TasksProvider>
          <Router />
        </TasksProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}
