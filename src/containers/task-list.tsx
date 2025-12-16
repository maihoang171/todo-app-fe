import { useEffect, useState, useCallback } from "react"
import { getAllTask } from "../services/task"
import { useTaskStore } from "../stores/useTaskStore"
import TaskDetail from "./task-detail"
import { toast } from "sonner"
import Pagination from "./pagination"

export default function TaskList(){
    const {tasks, setTasks, isLoading, setIsLoading} = useTaskStore()
    
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const handleFetchTasks = useCallback(async () => {
        setIsLoading(true)
        try{
            const res = await getAllTask(page)
            setTotalPages(res.data.totalPages)
            setTasks(res.data.tasks)
        } catch(error){
            toast.error("failed to fetch tasks: " + error,{
                position: "bottom-left"
            })
        } finally{
            setIsLoading(false)
        }
    },[page, setIsLoading, setTasks, setTotalPages])

    useEffect(() => {
        handleFetchTasks()
    },[handleFetchTasks])

    return (
        <>
            <h2 className="text-2xl font-semibold mt-5 text-center">Task List</h2>
            {isLoading ? <p className="text-center">loading....</p> : tasks.map((task) => (
                <TaskDetail key={task.iD} {...task}/>
            ))}
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={(newPage: number) => setPage(newPage)}/>
        </>
    )
}