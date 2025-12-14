import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";

export default function CreateTask() {
  const [name, setName] = useState("")

  const {addTask} = useTaskStore()

  const handleCreateTask = async () => {
      if(!name.trim()) return

      const success = await addTask(name)
      if(success){
        setName("")
      }
  };
  return (
    <>
        <div className="mt-10 flex flex-row justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Add your new task"
            className="input input-s"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer"
            onClick={handleCreateTask}
          >
            Add Task
          </button>
        </div>
    </>

  );
}
