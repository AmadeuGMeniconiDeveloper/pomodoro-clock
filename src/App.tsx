import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { Button } from "./components/Button";
import { GlobalStyles } from "./styles/global.styled";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Button variant="primary">Hello</Button>
      <Button variant="primary" disabled>
        Hello
      </Button>
      <Button variant="secondary">Hello</Button>
      <Button variant="secondary" disabled>
        Hello
      </Button>
    </ThemeProvider>
  );
}
