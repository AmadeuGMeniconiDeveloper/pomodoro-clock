import { ComponentProps } from "react";
import { MinutesInput, StepperInputContainer } from "./styled";
import { Minus, Plus } from "@phosphor-icons/react";

export function StepperInput({ ...inputProps }: ComponentProps<"input">) {
  // return <MinutesInput {...inputProps} type="number" />;
  return (
    <StepperInputContainer>
      <button>
        <Minus />
      </button>
      <MinutesInput {...inputProps} type="number" />
      <button>
        <Plus />
      </button>
    </StepperInputContainer>
  );
}
