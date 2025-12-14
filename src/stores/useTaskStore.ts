import { create } from 'zustand'
import { createTask, deleteTask, getAllTask, type ITask } from '../services/task';
import { toast } from 'sonner';

interface TaskState {
    tasks: ITask[],
    isLoading: boolean,
    fetchTasks: () => Promise<void>,
    addTask: (name: string) => Promise<boolean>,
    deleteTask: (id: number) => Promise<void>
}

export const useTaskStore = create<TaskState>((set) => ({
    tasks: [],
    isLoading: false,

    fetchTasks: async() => {
        set({isLoading: true})
        try{
            const res = await getAllTask()
            set({tasks: res.data})
        } catch(error){
            toast.error("failed to fetch data: "+ error, {
                position: "bottom-left"
            })
        } finally{
            set({isLoading: false})
        }
    },

    addTask: async(name: string) => {
        try{
            const res = await createTask({name})
            const newTask = res.data.task
            set((state) => ({
                tasks: [...state.tasks, newTask]
            }))

            toast.success("new task created successfully", {
                position: "bottom-left"
            })
            
            return true
        } catch(error){
            toast.error("failed to add new task: " + error, {
                position: "bottom-left"
            })

            return false
        }
    },

    deleteTask: async(id: number) => {
        try{
            await deleteTask(id)

            set((state) => ({
                tasks: state.tasks.filter(t => t.iD  != id)
            }))

            toast.success("task deleted successfully",{
                position: "bottom-left"
            })
        } catch(error){
            toast.error("failed to delete task: "+error, {
                position: "bottom-left"
            })
        }
    }

}))