import { useContext, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

import { TasksContext } from "../../../../contexts/TasksContext";

import { CountdownContainer, Separator } from "./styled";

export function Countdown() {
  const {
    activeTask,
    activeTaskId,
    secondsPassed,
    defineSecondsPassed,
    finishActiveTask,
  } = useContext(TasksContext);

  const totalSeconds = activeTask ? activeTask.minutes * 60 : 0;
  const currentSeconds = activeTask ? totalSeconds - secondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const countdownMinutes = String(minutesAmount).padStart(2, "0");
  const countdownSeconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    let interval: number;

    if (activeTask) {
      interval = setInterval(() => {
        const secondsPassed = differenceInSeconds(
          new Date(),
          activeTask.startDate
        );

        if (secondsPassed >= totalSeconds) {
          finishActiveTask();
          defineSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          defineSecondsPassed(secondsPassed);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [
    activeTask,
    totalSeconds,
    activeTaskId,
    defineSecondsPassed,
    finishActiveTask,
  ]);

  useEffect(() => {
    if (activeTask) {
      document.title = `${countdownMinutes}:${countdownSeconds}`;
    }
  }, [countdownMinutes, countdownSeconds, activeTask]);

  return (
    <CountdownContainer>
      <span>{countdownMinutes[0]}</span>
      <span>{countdownMinutes[1]}</span>
      <Separator>:</Separator>
      <span>{countdownSeconds[0]}</span>
      <span>{countdownSeconds[1]}</span>
    </CountdownContainer>
  );
}
