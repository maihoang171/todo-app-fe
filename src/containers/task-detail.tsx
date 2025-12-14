import type { ITask } from "../services/task";
import { useTaskStore } from "../stores/useTaskStore";

export default function TaskDetail(task: ITask){
    const {deleteTask} = useTaskStore()

    return (
        <>
            <div className="flex items-center gap-3 w-full px-50 m-1.5">
                <input type="checkbox"/>
                <div className="grow">{task.title}</div>
                <button className="bg-red-500 rounded-sm text-white px-2 py-1 hover:bg-red-600 hover:cursor-pointer" onClick={() => deleteTask(task.iD)}>Delete</button>
            </div>
        </>
    )
}