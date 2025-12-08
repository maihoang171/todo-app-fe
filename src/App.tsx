import "./App.css";
import { useCreateTask } from "./hooks/use-task";
import {toast} from "sonner"
import axios from "axios";

function App() {
  const {name, setName, handleCreateTask} = useCreateTask();

  const createTask = async () => {
    try{
      await handleCreateTask();
      
      toast.success("Task created successfully", {
        position: "bottom-left" 
      })

      setName("")
    } catch (error) {
      let errMessage = "Failed to create new task";
      if (axios.isAxiosError(error)){
        errMessage = error.response?.data?.error || error.message
      }
      toast.error(errMessage, {
        position: "bottom-left"
      })
    }
  }
  return (
    <>
      <div className="App h-screen p-4">
        <h1 className="text-gray-500 text-center mt-4 font-bold text-2xl">
          Welcome to the Todo App!
        </h1>
        <div className="mt-10 flex flex-row justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Add your new task"
            className="input input-s"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer" onClick={createTask}>
            Add Task
          </button>
        </div>
        <h2 className="mt-10 text-center text-xl font-semibold text-gray-500">Your Tasks</h2>

        <div className="mt-4 flex flex-row justify-center items-center gap-2">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer w-sm">All</button>
        <button className="mt-4 ml-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 hover:cursor-pointer w-sm">Pending</button>
        <button className="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 hover:cursor-pointer w-sm">Completed</button>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <ul className="w-full">
            {/* Example Task Item */}
            <li className="flex items-center bg-gray-100 p-2 mb-2 rounded">
              <input type="checkbox" className="mr-2"/>
              <p>Sample Task 1</p>
              <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 hover:cursor-pointer ml-auto">
                  Delete
              </button>
            </li>
            {/* More tasks can be added here */}
          </ul>
        </div>
      
      </div>
    </>
  );
}

export default App;
