import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({
  title,
  tasks,
  toggleTask,
  showCompleted = false,
  clearTask,
}) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)

      .map((task) => (
        <TaskRow
          task={task}
          key={task.name}
          toggleTask={toggleTask}
          clearTask={clearTask}
        />
      ));
  };

  return (
    <table className="table table-striped overflow-auto">
      <thead>
        <tr>
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};

export default TaskTable;
