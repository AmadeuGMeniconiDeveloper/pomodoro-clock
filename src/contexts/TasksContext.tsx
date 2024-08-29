import { createContext, useReducer, useState } from "react";

import { Task, tasksReducer } from "../reducers/tasks/reducer";
import {
  addNewTaskAction,
  finishActiveTaskAction,
  pauseActiveTaskAction,
} from "../reducers/tasks/actions";

interface createTaskData {
  title: string;
  minutes: number;
}

interface TasksContextType {
  tasks: Task[];
  activeTask: Task | undefined;
  activeTaskId: Task["id"] | null;
  secondsPassed: number;
  defineSecondsPassed: (seconds: number) => void;
  createNewTask: (data: createTaskData) => void;
  pauseActiveTask: () => void;
  finishActiveTask: () => void;
}

export const TasksContext = createContext<TasksContextType>(
  {} as TasksContextType
);

interface TasksProviderProps {
  children: React.ReactNode;
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [secondsPassed, setSecondsPassed] = useState(0);

  const [tasksState, dispatch] = useReducer(tasksReducer, {
    tasks: [],
    activeTaskId: null,
  });
  const { tasks, activeTaskId } = tasksState;
  const activeTask = tasks.find(task => task.id === activeTaskId);

  function defineSecondsPassed(amount: number) {
    setSecondsPassed(amount);
  }

  function createNewTask(data: createTaskData) {
    const taskId = String(new Date().getTime());
    const newTask: Task = {
      id: taskId,
      title: data.title,
      minutes: data.minutes,
      startDate: new Date(),
    };

    dispatch(addNewTaskAction(newTask));
    setSecondsPassed(0);
  }

  function pauseActiveTask() {
    dispatch(pauseActiveTaskAction(activeTaskId!));
  }

  function finishActiveTask() {
    dispatch(finishActiveTaskAction(activeTaskId!));
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        activeTask,
        activeTaskId,
        secondsPassed,
        finishActiveTask,
        defineSecondsPassed,
        createNewTask,
        pauseActiveTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
