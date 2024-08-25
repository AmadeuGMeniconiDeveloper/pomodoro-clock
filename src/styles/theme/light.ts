import { DefaultTheme } from "styled-components/dist/types";
import { themeCommons } from "./commons";

export const lightTheme: DefaultTheme = {
  mode: "light",
  colors: {
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
      background: "#FFFFFF",
      element: "#E1E1E6",
      divider: "#C4C4CC",
      placeholder: "#8D8D99",
      label: "#7C7C8A",
      text: "#323238",
      title: "#202024",
      contrast: "#121214",
    },
  },
  commons: themeCommons,
};
