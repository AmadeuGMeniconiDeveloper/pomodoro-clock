import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: ${props => props.theme.commons.spacing.md};

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${props => props.theme.colors.base.text};

      &:hover {
        border-top: 3px solid transparent;
        border-bottom: 3px solid ${props => props.theme.colors.primary.base};
      }

      &.active {
        color: ${props => props.theme.colors.primary.base};
      }
    }
  }
`;
