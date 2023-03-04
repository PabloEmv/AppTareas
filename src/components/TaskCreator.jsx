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
      <form onSubmit={handleSubmit} className="input-group mb-3">
        <input
          className="form-control formInput"
          type="text"
          placeholder="Ingresa una nueva tarea"
          value={newTaskName}
          onChange={(e) => setnewTaskName(e.target.value)}
        />
        <button className="btn btn-outline-primary">Guardar</button>
      </form>
    </div>
  );
};

export default TaskCreator;
