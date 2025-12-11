import TaskDetail from "./task-detail"
import type { ITask } from "../services/task"

interface taskListProp {
    tasks: ITask[],
    onTaskDeleted: (id: number) => void
}
export default function TaskList({tasks, onTaskDeleted}: taskListProp){
    return (
        <>
            <h2 className="text-2xl font-semibold mt-5 text-center">Task List</h2>
            {tasks.map(task => (
                <TaskDetail key={task.iD} {...task} onTaskDeleted={onTaskDeleted}/>
            ))}
        </>
    )
}