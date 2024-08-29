import styled from "styled-components";

export const FormFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  color: ${props => props.theme.colors.base.grey_700};
  font-size: ${props => props.theme.commons.font.size.lg};
  font-weight: ${props => props.theme.commons.font.weight.bold};
`;

const BaseInput = styled.input`
  height: 2.5rem;

  margin-inline: ${props => props.theme.commons.spacing.md};
  padding: 0 0.5rem;
  border: none;
  border-bottom: 2px solid ${props => props.theme.colors.base.gray_500};

  background: transparent;

  font-weight: ${props => props.theme.commons.font.weight.bold};
  font-size: ${props => props.theme.commons.font.size.lg};
  line-height: 100%;

  &::placeholder {
    color: ${props => props.theme.colors.base.gray_500};
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

  // Remove arrows from input type number
  /* &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } */
`;
