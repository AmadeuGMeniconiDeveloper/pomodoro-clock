import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary.base};
  }

  body {
    background-color: ${props => props.theme.colors.base.background};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: ${props => props.theme.commons.font.family.default};
    font-weight: ${props => props.theme.commons.font.weight.regular};
    font-size: ${props => props.theme.commons.font.size.md};
    line-height: ${props => props.theme.commons.font.lineHeight.default};
    color: ${props => props.theme.colors.base.text};
  }
`;
