import { useEffect } from "react"
import { getAllTask } from "../services/task"
import { useTaskStore } from "../stores/useTaskStore"
import TaskDetail from "./task-detail"
import { toast } from "sonner"

export default function TaskList(){
    const {tasks, setTasks, isLoading, setIsLoading} = useTaskStore()
    
    const handleFetchTasks = async () => {
        setIsLoading(true)
        try{
            const res = await getAllTask()
        setTasks(res.data)

        } catch(error){
            toast.error("failed to fetch tasks: " + error,{
                position: "bottom-left"
            })
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        handleFetchTasks()
    },[])

    return (
        <>
            <h2 className="text-2xl font-semibold mt-5 text-center">Task List</h2>
            {isLoading ? "loading...." : tasks.map((task) => (
                <TaskDetail key={task.iD} {...task}/>
            ))}
        </>
    )
}