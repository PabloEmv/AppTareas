import React, { useState, useEffect } from "react";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";

const App = () => {
  const [tasksItems, setTasksItems] = useState([]);

  const createTask = (taskName) => {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  };

  // función para cargar datos al cargar la aplicación
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


  // borrarr tareas ya realizadas
  const handleDelete = () => {
    if (window.confirm("Estas seguro?")) {
      cleanTasks();
    }
  };

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done));
  };
  
  // borrar tarea independiente
  const clearTask = (task) => {
    setTasksItems(tasksItems.filter((t) => t.name !== task.name));
  };


  return (
    <div>
      <div className="container border-primary rounded-4 py-3 shadow bg-white contentCard">
        <div className="border rounded-4 p-4 shadow-lg todoCard">
          <TaskCreator createNewTask={createTask} />
          <div className="border rounded h-100 todoTable">
            <TaskTable
              tasks={tasksItems}
              toggleTask={toggleTask}
              title="Tareas por hacer"
              clearTask={clearTask}
            />
          </div>
        </div>
        <div>
          <div className="my-4 text-center">
            <button onClick={handleDelete} className="btn btn-secondary mx-auto">
              Limpiar tareas hechas
            </button>
          </div>
          <div className="border rounded-4 p-4 shadow-lg">
            <div className="border rounded">
              <TaskTable
                tasks={tasksItems}
                toggleTask={toggleTask}
                showCompleted={true}
                title="Tareas hechas"
                clearTask={clearTask}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
