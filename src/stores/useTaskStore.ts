import { create } from 'zustand'
import { type ITask } from '../services/task';

interface TaskState {
    tasks: ITask[],
    setTasks: (data : ITask[]) => void,
    isLoading: boolean,
    setIsLoading: (data: boolean) => void
}

export const useTaskStore = create<TaskState>((set) => ({
    tasks: [],
    isLoading: false,

    setTasks: (data) => set({ tasks: data }),
    
    setIsLoading: (data) => set({isLoading: data})
}))