import styled from "styled-components";

export const HomeContainer = styled.main`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.commons.spacing.xxl};

  color: ${props => props.theme.colors.base.text};
  font-size: ${props => props.theme.commons.font.size.lg};
  font-weight: ${props => props.theme.commons.font.weight.bold};

  & > div {
    width: 100%;

    display: flex;
    align-items: center;
  }
`;

const BaseInput = styled.input`
  height: 2.5rem;

  margin-inline: ${props => props.theme.commons.spacing.md};
  padding: 0 0.5rem;
  border: none;
  border-bottom: 2px solid ${props => props.theme.colors.base.placeholder};

  background: transparent;

  font-weight: ${props => props.theme.commons.font.weight.bold};
  font-size: ${props => props.theme.commons.font.size.lg};
  line-height: 100%;

  &::placeholder {
    color: ${props => props.theme.colors.base.placeholder};
  }

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme.colors.primary.base};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesInput = styled(BaseInput)`
  width: 4rem;
`;

export const ClockContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.commons.spacing.md};

  margin-top: 0.5rem;

  & > span {
    padding: 1rem;
    border-radius: ${props => props.theme.commons.radius.md};
    background-color: ${props => props.theme.colors.base.divider};

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

export const StartCoundownButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${props => props.theme.commons.spacing.sm};

  border: none;
  padding: 1rem;
  border-radius: ${props => props.theme.commons.radius.sm};

  background-color: ${props => props.theme.colors.primary.base};

  color: ${props => props.theme.colors.base.contrast};
  font-weight: ${props => props.theme.commons.font.weight.bold};

  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primary.light};
  }

  &:active {
    background-color: ${props => props.theme.colors.primary.dark};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.primary.base};
    opacity: 0.5;

    cursor: not-allowed;
  }
`;
