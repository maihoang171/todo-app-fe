import { toast } from "sonner";
import { useCreateTask } from "../hooks/use-task";
import axios from "axios";

export default function CreateTask() {
  const { name, setName, handleCreateTask } = useCreateTask();

  const createTask = async () => {
    try {
      await handleCreateTask();

      toast.success("Task created successfully", {
        position: "bottom-left",
      });

      setName("");
    } catch (error) {
      let errMessage = "Failed to create new task";
      if (axios.isAxiosError(error)) {
        errMessage = error.response?.data?.error || error.message;
      }
      toast.error(errMessage, {
        position: "bottom-left",
      });
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
            onClick={createTask}
          >
            Add Task
          </button>
        </div>
    </>

  );
}
