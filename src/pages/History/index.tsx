import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";

import { TasksContext } from "../../contexts/TasksContext";

import { HistoryContainer, HistoryListContainer, Status } from "./styled";

export function History() {
  const { tasks } = useContext(TasksContext);

  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryListContainer>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.minutes} minutes</td>
                <td>
                  {task.startDate.toLocaleDateString()} &#x2022;{" "}
                  {formatDistanceToNow(task.startDate, {
                    addSuffix: true,
                  })}
                </td>
                <td>
                  {task.finishedDate && <Status color="green">Finished</Status>}
                  {task.pausedDate && <Status color="red">Paused</Status>}
                  {!task.pausedDate && !task.finishedDate && (
                    <Status color="yellow">In progress</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryListContainer>
    </HistoryContainer>
  );
}
