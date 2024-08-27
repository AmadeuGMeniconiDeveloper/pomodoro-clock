import { DefaultTheme } from "styled-components/dist/types";
import { themeCommons } from "./commons";

export const darkTheme: DefaultTheme = {
  mode: "dark",
  colors: {
    tints: {
      yellow: "#e3d64b",
      green: "#00B37E",
      red: "#f56772",
    },
    primary: {
      base: "#00875F",
      light: "#00B37E",
      dark: "#015F43",
    },
    secondary: {
      base: "#F03847",
      light: "#f56772",
      dark: "#c93844",
    },
    base: {
      gray_100: "#121214",
      gray_200: "#202024",
      gray_300: "#29292E",
      gray_400: "#323238",
      gray_500: "#7C7C8A",
      gray_600: "#8D8D99",
      grey_700: "#C4C4CC",
      grey_800: "#E1E1E6",
      contrast: "#FFFFFF",
    },
  },
  commons: themeCommons,
};
