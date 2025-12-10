import TaskDetail from "./task-detail"
import type { ITask } from "../services/task"

export default function TaskList({tasks}:{tasks: ITask[]}){
    return (
        <>
            <h2 className="text-2xl font-semibold mt-5 text-center">Task List</h2>
            {tasks.map(task => (
                <TaskDetail key={task.id} {...task} />
            ))}
        </>
    )
}