import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { TasksContext } from "../../contexts/TasksContext";

import { NewTaskFormFields } from "./components/NewTaskFormFields";
import { Countdown } from "./components/Countdown";

import {
  HomeContainer,
  PauseCountdownButton,
  StartCountdownButton,
} from "./styled";

import { Pause, Play } from "@phosphor-icons/react";

const newTaskFormValidationSchema = zod.object({
  title: zod.string().min(1, "Title is required"),
  minutes: zod
    .number()
    .min(1, "The task must be at least 5 minutes")
    .max(60, "The task must be at most 60 minutes"),
});

type NewTaskFormData = zod.infer<typeof newTaskFormValidationSchema>;

export function Home() {
  const { activeTask, pauseActiveTask, createNewTask } =
    useContext(TasksContext);

  const newTaskForm = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: {
      title: undefined,
      minutes: undefined,
    },
  });

  const { handleSubmit, watch, reset } = newTaskForm;

  function handleCreateNewTask(data: NewTaskFormData) {
    createNewTask(data);
    reset();
  }

  const titleField = watch("title");
  const minutesField = watch("minutes");

  const isSubmitDisabled = !titleField || !minutesField;

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewTask)}>
        <FormProvider {...newTaskForm}>
          <NewTaskFormFields />
        </FormProvider>
        <Countdown />

        {activeTask ? (
          <PauseCountdownButton type="button" onClick={pauseActiveTask}>
            <Pause size={24} />
            Pause
          </PauseCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
