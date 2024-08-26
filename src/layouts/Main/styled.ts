import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: ${props => props.theme.commons.spacing.xl};

  background: ${props => props.theme.colors.base.element};
  border-radius: ${props => props.theme.commons.radius.md};

  display: flex;
  flex-direction: column;
`;
