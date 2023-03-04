import React from "react";

const TaskRow = ({ task, toggleTask, clearTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        <p className="text-break px-3">{task.name} </p>
        <div className="d-flex flex-row">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task)}
          />
          <button
            className="btn btn-danger btn-delete my-auto ms-3 font fw-bold"
            onClick={() => clearTask(task)}
          >
            x
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskRow;
