import { DefaultTheme } from "styled-components/dist/types";
import { themeCommons } from "./commons";

export const darkTheme: DefaultTheme = {
  mode: "dark",
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
      background: "#121214",
      element: "#202024",
      divider: "#323238",
      placeholder: "#7C7C8A",
      label: "#8D8D99",
      text: "#C4C4CC",
      title: "#E1E1E6",
      contrast: "#FFFFFF",
    },
  },
  commons: themeCommons,
};
