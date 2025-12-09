import { useState } from "react";
import { createTask } from "../services/task";

export const useCreateTask = () => {
  const [name, setName] = useState("");
  const [isCreating, setIsCreating] = useState(false)
  
  const handleCreateTask = async () => {
    setIsCreating(true)
    try{
      await createTask({
      name: name,
    })
    } finally{
      setIsCreating(false)
    }
  };

  return {
    name,
    setName,
    handleCreateTask,
    isCreating
  };
};
