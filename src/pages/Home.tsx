import CreateTask from "../containers/create-task"
import TaskList from "../containers/task-list"
import { useGetTasks } from "../hooks/use-task"
import type { ITask } from "../services/task"

function Home(){
    const {tasks, setTasks} = useGetTasks()
    const handleAddNewTask = (newTask: ITask)=>{
        setTasks([...tasks, newTask])
    }
    return (<>
        <div>
            <div className="h-full  min-w-3xl">
                <h1 className="text-2xl font-bold text-center">My todo app</h1>
                <CreateTask onTaskCreated={handleAddNewTask}/>
                <TaskList tasks={tasks}/>
            </div>
        </div>
    </>)
}
export default Home