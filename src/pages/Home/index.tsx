import { useState } from "react";

import { Play } from "@phosphor-icons/react";

import {
  ClockContainer,
  Separator,
  FormContainer,
  HomeContainer,
  StartCoundownButton,
  TaskInput,
  MinutesInput,
} from "./styled";

export function Home() {
  const [task, setTask] = useState("");

  return (
    <HomeContainer>
      <FormContainer action="" method="post">
        <div>
          <label htmlFor="task">I'll work on</label>
          <TaskInput
            id="task"
            type="text"
            list="task-suggestions"
            placeholder="Give a title to your task or project"
            value={task}
            onChange={e => setTask(e.target.value)}
          />

          <datalist id="task-suggestions">
            <option value="Task 1" />
          </datalist>

          <label htmlFor="minutes">for</label>
          <MinutesInput
            id="minutes"
            type="number"
            placeholder="00"
            min={5}
            max={60}
            step={5}
          />

          <span>minutes.</span>
        </div>

        <ClockContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </ClockContainer>

        <StartCoundownButton type="submit" disabled={!task}>
          <Play size={24} />
          Start
        </StartCoundownButton>
      </FormContainer>
    </HomeContainer>
  );
}
