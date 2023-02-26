import React, { useState } from "react";

const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setnewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setnewTaskName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa una nueva tarea"
          value={newTaskName}
          onChange={(e) => setnewTaskName(e.target.value)}
        />
        <button>Guardar tarea</button>
      </form>
    </div>
  );
};

export default TaskCreator;
