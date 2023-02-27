import React, { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";

const App = () => {
  const [tasksItems, setTasksItems] = useState([]);

  const createTask = (taskName) => {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      cleanTasks();
    }
  };
  const cleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done));
  };

  return (
    <div>
      <div className="container">
        <TaskCreator createNewTask={createTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <div>
          <button onClick={handleDelete}>Limpiar tareas hechas</button>
        </div>
        <TaskTable
          tasks={tasksItems}
          toggleTask={toggleTask}
          showCompleted={true}
        />
      </div>
    </div>
  );
};

export default App;
