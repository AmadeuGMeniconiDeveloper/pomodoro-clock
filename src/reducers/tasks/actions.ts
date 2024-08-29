import { Task } from "./reducer";

export enum ActionTypes {
  ADD_NEW_TASK = "ADD_NEW_TASK",
  PAUSE_ACTIVE_TASK = "PAUSE_ACTIVE_TASK",
  FINISH_ACTIVE_TASK = "FINISH_ACTIVE_TASK",
}

export function addNewTaskAction(newTask: Task) {
  return { type: ActionTypes.ADD_NEW_TASK, payload: { newTask } };
}

export function pauseActiveTaskAction(activeTaskId: Task["id"]) {
  return { type: ActionTypes.PAUSE_ACTIVE_TASK, payload: { activeTaskId } };
}

export function finishActiveTaskAction(activeTaskId: Task["id"]) {
  return { type: ActionTypes.FINISH_ACTIVE_TASK, payload: { activeTaskId } };
}
