import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { createTask } from "../services/task";
import { toast } from "sonner";

export default function CreateTask() {
  const [title, setTitle] = useState("")

  const {tasks, setTasks} = useTaskStore()

  const handleCreateTask = async () => {
      try{
        if(!title.trim()) return
        const res = await createTask({ title })
        setTasks([...tasks, res.data.task])
        setTitle("")

        toast.success("task created successfully", {
          position: "bottom-left"
        })
      } catch(error){
        toast.error("failed to create task: " + error, {
          position: "bottom-left"
        })
      }
  };
  return (
    <>
        <div className="mt-10 flex flex-row justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Add your new task"
            className="input input-s"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if(e.key == "Enter"){
                handleCreateTask()
              }
            }}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer"
            onClick={handleCreateTask}
          >
           Add
          </button>
        </div>
    </>

  );
}
