import { useTaskStore } from "../stores/useTaskStore"
import TaskDetail from "./task-detail"


export default function TaskList(){
    const {tasks} = useTaskStore()
    
    return (
        <>
            <h2 className="text-2xl font-semibold mt-5 text-center">Task List</h2>
            {tasks.map((task, index) => (
                <TaskDetail key={index} {...task}/>
            ))}
        </>
    )
}