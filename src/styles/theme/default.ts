import { themeCommons } from "./commons";

type lightMode = "light";
type darkMode = "dark";

export const defaultTheme = {
  mode: "" as lightMode | darkMode,
  colors: {
    primary: {
      base: "" as string,
      light: "" as string,
      dark: "" as string,
    },
    secondary: {
      base: "" as string,
      light: "" as string,
      dark: "" as string,
    },
    base: {
      background: "" as string,
      element: "" as string,
      divider: "" as string,
      placeholder: "" as string,
      label: "" as string,
      text: "" as string,
      title: "" as string,
      contrast: "" as string,
    },
  },
  commons: themeCommons,
};
