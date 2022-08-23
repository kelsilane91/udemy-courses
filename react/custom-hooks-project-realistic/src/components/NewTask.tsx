import useHttp from "../hooks/use-http";
import { Task } from "../types/Task";

import Section from "./Section";
import TaskForm from "./TaskForm";

type Props = {
  onAddTask: (createdTask: Task) => void;
};
const NewTask = ({ onAddTask }: Props) => {
  const { sendRequest: sendTaskRequest, error, isLoading } = useHttp();

  const enterTaskHandler = async (taskText: string) => {
    const createTask = (data: any) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      onAddTask(createdTask);
    };
    sendTaskRequest(
      {
        url: "https://udemy-react-7090f-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "application/json",
        },
      },
      createTask
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {/* {error && <p>{error}</p>} */}
    </Section>
  );
};

export default NewTask;
