import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.commons.spacing.md};

  margin-top: 0.5rem;

  & > span {
    padding: 1rem;
    border-radius: ${props => props.theme.commons.radius.md};
    background-color: ${props => props.theme.colors.base.gray_400};

    font-family: ${props => props.theme.commons.font.family.mono};
    font-size: ${props => props.theme.commons.font.size.huge};
    font-weight: ${props => props.theme.commons.font.weight.bold};
    line-height: 100%;
  }
`;

export const Separator = styled.div`
  width: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.primary.base};
  font-family: ${props => props.theme.commons.font.family.mono};
  font-size: ${props => props.theme.commons.font.size.huge};
  font-weight: ${props => props.theme.commons.font.weight.bold};
`;
