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
  return (
    <HomeContainer>
      <FormContainer action="" method="post">
        <div>
          <label htmlFor="task">I'll work on</label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Give a title to your task or project"
            list="task-suggestions"
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

        <StartCoundownButton type="submit">
          <Play size={24} />
          Start
        </StartCoundownButton>
      </FormContainer>
    </HomeContainer>
  );
}
