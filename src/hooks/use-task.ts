import { useEffect, useState } from "react";
import { createTask, deleteTask, getAllTask, type ITask } from "../services/task";
import { toast } from "sonner";

export const useCreateTask = () => {
  const [name, setName] = useState("");

  const handleCreateTask = async () => {
    try {
      const res = await createTask({name: name})
      toast.success("Task created successfully", {
        position: "bottom-left"
      })
   
      return res.data.task
    } catch(error){
      toast.error("Failed to create new task: " + error, {
        position: "bottom-left"
      })
      return null
    }
  };

  return {
    name,
    setName,
    handleCreateTask,
  };
};

export const useGetTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  
  useEffect(() => {
    const handleGetTasks = async () => {
      try{
        const response = await getAllTask()
        setTasks(response.data)
      } catch(error){
        toast.error("Failed to get tasks: " + error, {
          position: "bottom-left"
        })
      }
    }
    
    handleGetTasks()
  }, [])

  return {
    tasks, setTasks
  }
}

export const useDeleteTask = () => {
  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTask(id)

      toast.success("Task deleted successfully", {
        position: "bottom-left"
      })

      return true
    } catch(error){
      toast.error("Failed to delete task: " + error, {
        position: "bottom-left"
      })

      return false
    }
  }
  return {
    handleDeleteTask
  }
}