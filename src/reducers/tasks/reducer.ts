import { produce } from "immer";

import { ActionTypes } from "./actions";

export interface Task {
  id: string;
  title: string;
  minutes: number;
  startDate: Date;
  pausedDate?: Date;
  finishedDate?: Date;
}

interface TasksState {
  tasks: Task[];
  activeTaskId: Task["id"] | null;
}

export function tasksReducer(currentState: TasksState, action) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_TASK:
      // return {
      //   ...currentState,
      //   tasks: [...currentState.tasks, action.payload.newTask],
      //   activeTaskId: action.payload.newTask.id,
      // };

      return produce(currentState, draft => {
        draft.tasks.push(action.payload.newTask);
        draft.activeTaskId = action.payload.newTask.id;
      });
    case ActionTypes.PAUSE_ACTIVE_TASK:
      // return {
      //   ...currentState,
      //   tasks: currentState.tasks.map(task => {
      //     if (task.id === currentState.activeTaskId) {
      //       return {
      //         ...task,
      //         pausedDate: new Date(),
      //       };
      //     } else {
      //       return task;
      //     }
      //   }),
      //   activeTaskId: null,
      // };

      return produce(currentState, draft => {
        const currentTaskIndex = draft.tasks.findIndex(
          task => task.id === currentState.activeTaskId
        );

        if (currentTaskIndex >= 0) {
          draft.tasks[currentTaskIndex].pausedDate = new Date();
        }

        draft.activeTaskId = null;
      });
    case ActionTypes.FINISH_ACTIVE_TASK:
      // return {
      //   ...currentState,
      //   tasks: currentState.tasks.map(task => {
      //     if (task.id === currentState.activeTaskId) {
      //       return {
      //         ...task,
      //         finishedDate: new Date(),
      //       };
      //     } else {
      //       return task;
      //     }
      //   }),
      //   activeTaskId: null,
      // };

      return produce(currentState, draft => {
        const currentTaskIndex = draft.tasks.findIndex(
          task => task.id === currentState.activeTaskId
        );

        if (currentTaskIndex >= 0) {
          draft.tasks[currentTaskIndex].finishedDate = new Date();
        }

        draft.activeTaskId = null;
      });
    default:
      return currentState;
  }
}
