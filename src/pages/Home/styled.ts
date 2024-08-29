import styled from "styled-components";

export const HomeContainer = styled.main`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => props.theme.commons.spacing.xl};
  }
`;

const BaseCountdownButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${props => props.theme.commons.spacing.sm};

  border: none;
  padding: 1rem;
  border-radius: ${props => props.theme.commons.radius.sm};

  color: ${props => props.theme.colors.base.contrast};
  font-weight: ${props => props.theme.commons.font.weight.bold};

  cursor: pointer;

  &:disabled {
    filter: brightness(0.5);

    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme.colors.primary.base};

  &:not(:disabled):hover {
    background-color: ${props => props.theme.colors.primary.light};
  }

  &:not(:disabled):active {
    background-color: ${props => props.theme.colors.primary.dark};
  }
`;

export const PauseCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme.colors.secondary.base};

  &:not(:disabled):hover {
    background-color: ${props => props.theme.colors.secondary.light};
  }

  &:not(:disabled):active {
    background-color: ${props => props.theme.colors.secondary.dark};
  }
`;
