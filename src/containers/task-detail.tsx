import { toast } from "sonner";
import { deleteTask, updateTask, type ITask } from "../services/task";
import { useTaskStore } from "../stores/useTaskStore";

export default function TaskDetail(task: ITask){
    const {tasks, setTasks} = useTaskStore()

    const handleDeleteTask = async () => {
        try{
            await deleteTask(task.iD)

            setTasks(tasks.filter(t => t.iD != task.iD))

            toast.success("task deleted successfully", {
                position: "bottom-left"
            })
        } catch(error){
            toast.error("failed to delete task: " + error,{
                position: "bottom-left"
            })
        }
    }

    const handleUpdateTask = async () => {
        try{
            const newIsComplete = !task.isComplete
            const res = await updateTask(task.iD, {...task, isComplete: newIsComplete})

            setTasks(tasks.map(t => t.iD === task.iD ? {...t, ...res.data.updateTask} : t))
            
        } catch(error){
            toast.error("failed to update task: " + error,{
                position: 'bottom-left'
            })
        }
    }
    return (
        <>
            <div className="flex items-center gap-3 w-full px-50 m-1.5">
                <input type="checkbox" checked={task.isComplete} onChange={handleUpdateTask}/>
                <div className={`grow ${task.isComplete ? "line-through text-gray-500" : ""}`}>{task.title}</div>
                <button className="bg-red-500 rounded-sm text-white px-2 py-1 hover:bg-red-600 hover:cursor-pointer" onClick={handleDeleteTask}>Delete</button>
            </div>
        </>
    )
}