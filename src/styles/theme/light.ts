import { DefaultTheme } from "styled-components/dist/types";
import { themeCommons } from "./commons";

export const lightTheme: DefaultTheme = {
  mode: "light",
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
      gray_100: "#FFFFFF",
      gray_200: "#E1E1E6",
      gray_300: "#C4C4CC",
      gray_400: "#A4A4AC",
      gray_500: "#8D8D99",
      gray_600: "#7C7C8A",
      grey_700: "#323238",
      grey_800: "#202024",
      contrast: "#121214",
    },
  },
  commons: themeCommons,
};
