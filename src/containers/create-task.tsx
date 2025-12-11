import { useCreateTask } from "../hooks/use-task";
import type { ITask } from "../services/task";

export default function CreateTask({onTaskCreated} : {onTaskCreated: (t:ITask) => void}) {
  const { name, setName, handleCreateTask } = useCreateTask();

  const createTask = async () => {
      const task = await handleCreateTask();
      
      if(task){
        onTaskCreated(task)
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
            disabled={isCreating}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer"
            onClick={createTask}
          >
           {isCreating ? "Adding..." : "Add Task"}
          </button>
        </div>
    </>

  );
}
