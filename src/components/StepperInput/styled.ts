import styled from "styled-components";

export const StepperInputContainer = styled.div``;

export const MinutesInput = styled.input`
  height: 2.5rem;
  width: 4rem;

  margin-inline: ${props => props.theme.commons.spacing.md};
  padding: 0 0.5rem;
  border: none;
  border-bottom: 2px solid ${props => props.theme.colors.base.gray_500};

  background: transparent;

  font-weight: ${props => props.theme.commons.font.weight.bold};
  font-size: ${props => props.theme.commons.font.size.lg};
  line-height: 100%;

  // Remove arrows from input type number
  /* &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } */

  &::placeholder {
    color: ${props => props.theme.colors.base.gray_500};
  }

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme.colors.primary.base};
  }
`;
