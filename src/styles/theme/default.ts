import { themeCommons } from "./commons";

type lightMode = "light";
type darkMode = "dark";

export const defaultTheme = {
  mode: "" as lightMode | darkMode,
  colors: {
    tints: {
      yellow: "" as string,
      green: "" as string,
      red: "" as string,
    },
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
      gray_100: "" as string,
      gray_200: "" as string,
      gray_300: "" as string,
      gray_400: "" as string,
      gray_500: "" as string,
      gray_600: "" as string,
      grey_700: "" as string,
      grey_800: "" as string,
      contrast: "" as string,
    },
  },
  commons: themeCommons,
};
