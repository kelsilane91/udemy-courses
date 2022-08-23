import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";
import { Task } from "./types/Task";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { sendRequest: fetchTasks, error, isLoading } = useHttp();

  useEffect(() => {
    const transformTasks = (tasks: Task) => {
      const loadedTasks = [];
      for (const taskKey in tasks) {
        loadedTasks.push({ id: taskKey, text: (tasks as any)[taskKey].text });
      }
    };

    fetchTasks(
      {
        url: "https://udemy-react-7090f-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, []);

  const taskAddHandler = (task: Task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={() => fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
