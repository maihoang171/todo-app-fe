import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";

export default function CreateTask() {
  const [title, setTitle] = useState("")

  const {addTask} = useTaskStore()

  const handleCreateTask = async () => {
      if(!title.trim()) return

      const success = await addTask(title)
      if(success){
        setTitle("")
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
