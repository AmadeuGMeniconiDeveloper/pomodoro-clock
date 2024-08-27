import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { differenceInSeconds } from "date-fns";

import { Pause, Play } from "@phosphor-icons/react";

import {
  ClockContainer,
  Separator,
  FormContainer,
  HomeContainer,
  TaskInput,
  MinutesInput,
  PauseCountdownButton,
  StartCountdownButton,
} from "./styled";

const newTaskFormValidationSchema = zod.object({
  title: zod.string().min(1, "Title is required"),
  minutes: zod
    .number()
    .min(1, "The task must be at least 5 minutes")
    .max(60, "The task must be at most 60 minutes"),
});

type NewTaskFormData = zod.infer<typeof newTaskFormValidationSchema>;

interface Task {
  id: string;
  title: string;
  minutes: number;
  startDate: Date;
  pausedDate?: Date;
  finishedDate?: Date;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTaskId, setActiveTasks] = useState<Task["id"] | null>(null);
  const [timePassedInSeconds, setTimePassedInSeconds] = useState(0);

  const { register, handleSubmit, watch, reset } = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: {
      title: undefined,
      minutes: undefined,
    },
  });

  const activeTask = tasks.find(task => task.id === activeTaskId);

  const totalSeconds = activeTask ? activeTask.minutes * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeTask) {
      interval = setInterval(() => {
        const secondsPassed = differenceInSeconds(
          new Date(),
          activeTask.startDate
        );

        if (secondsPassed >= totalSeconds) {
          setTasks(previousTasks =>
            previousTasks.map(task => {
              if (task.id === activeTaskId) {
                return {
                  ...task,
                  finishedDate: new Date(),
                };
              } else {
                return task;
              }
            })
          );

          setTimePassedInSeconds(totalSeconds);
          clearInterval(interval);
        } else {
          setTimePassedInSeconds(secondsPassed);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [activeTask, totalSeconds, tasks, activeTaskId]);

  function handleCreateNewTask(data: NewTaskFormData) {
    const taskId = String(new Date().getTime());
    const newTask: Task = {
      id: taskId,
      title: data.title,
      minutes: data.minutes,
      startDate: new Date(),
    };

    setTimePassedInSeconds(0);
    setTasks(previousTasks => [...previousTasks, newTask]);
    setActiveTasks(taskId);

    reset();
  }

  function handlePauseTask() {
    setTasks(previousTasks =>
      previousTasks.map(task => {
        if (task.id === activeTaskId) {
          return {
            ...task,
            pausedDate: new Date(),
          };
        } else {
          return task;
        }
      })
    );

    setActiveTasks(null);
  }

  const currentSeconds = activeTask ? totalSeconds - timePassedInSeconds : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const timerMinutes = String(minutesAmount).padStart(2, "0");
  const timerSeconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeTask) {
      document.title = `${timerMinutes}:${timerSeconds}`;
    }
  }, [timerMinutes, timerSeconds, activeTask]);

  const titleField = watch("title");
  const minutesField = watch("minutes");

  const isSubmitDisabled = !titleField || !minutesField;

  return (
    <HomeContainer>
      <FormContainer action="" onSubmit={handleSubmit(handleCreateNewTask)}>
        <div>
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
            min={1}
            max={60}
            disabled={!!activeTask}
            {...register("minutes", { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </div>

        <ClockContainer>
          <span>{timerMinutes[0]}</span>
          <span>{timerMinutes[1]}</span>
          <Separator>:</Separator>
          <span>{timerSeconds[0]}</span>
          <span>{timerSeconds[1]}</span>
        </ClockContainer>

        {activeTask ? (
          <PauseCountdownButton type="button" onClick={handlePauseTask}>
            <Pause size={24} />
            Pause
          </PauseCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Start
          </StartCountdownButton>
        )}
      </FormContainer>
    </HomeContainer>
  );
}
