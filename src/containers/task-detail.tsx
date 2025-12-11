import { useDeleteTask } from "../hooks/use-task";

interface taskDetailProps{
    iD: number,
    name: string,
    onTaskDeleted: (iD: number) => void
}

export default function TaskDetail({iD ,name, onTaskDeleted}: taskDetailProps){
    const {handleDeleteTask} = useDeleteTask()

    const onDeleteClick = async () => {
        const deletedTask = await handleDeleteTask(iD)

        if(deletedTask){
            onTaskDeleted(iD)
        }
    }

    return (
        <>
            <div className="flex items-center gap-3 w-full px-50 m-1.5">
                <input type="checkbox"/>
                <div className="grow">{name}</div>
                <button className="bg-red-500 rounded-sm text-white px-2 py-1 hover:bg-red-600 hover:cursor-pointer" onClick={onDeleteClick}>Delete</button>
            </div>
        </>
    )
}