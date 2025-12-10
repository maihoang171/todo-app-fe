import type { ITask } from "../services/task";

export default function TaskDetail({name}: ITask){
    //console.log("Rendering Task:", name);
    return (
        <>
            <div className="flex items-center gap-3 w-full px-50 m-1.5">
                <input type="checkbox"/>
                <div className="grow">{name}</div>
                <button className="bg-red-500 rounded-sm text-white px-2 py-1 hover:bg-red-600 hover:cursor-pointer">Delete</button>
            </div>
        </>
    )
}