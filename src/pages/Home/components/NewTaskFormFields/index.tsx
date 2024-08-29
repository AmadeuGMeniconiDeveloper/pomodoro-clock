import { useContext } from "react";
import { useFormContext } from "react-hook-form";

import { TasksContext } from "../../../../contexts/TasksContext";

import { FormFieldsContainer, MinutesInput, TaskInput } from "./styled";

export function NewTaskFormFields() {
  const { activeTask } = useContext(TasksContext);
  const { register } = useFormContext();

  return (
    <FormFieldsContainer>
      <label htmlFor="title">I'll work on</label>
      <TaskInput
        id="title"
        type="text"
        list="title-suggestions"
        placeholder="Give a title to your task or project"
        disabled={!!activeTask}
        {...register("title")}
      />
      <datalist id="title-suggestions">
        <option value="Task 1" />
      </datalist>

      <label htmlFor="minutes">for</label>

      <MinutesInput
        id="minutes"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeTask}
        {...register("minutes", { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormFieldsContainer>
  );
}
