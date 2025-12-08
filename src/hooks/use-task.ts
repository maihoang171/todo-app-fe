import { useState } from "react";
import { createTask } from "../services/task";

export const useCreateTask = () => {
  const [name, setName] = useState("");

  const handleCreateTask = async () => {
    return createTask({
      name: name,
    });
  };

  return {
    name,
    setName,
    handleCreateTask,
  };
};
