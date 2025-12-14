import { axiosClient } from "./axios";

export interface ITask {
    iD: number
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    title: string;
    isComplete: boolean;
}

export const createTask = async (task: Pick<ITask, "title">) => {
    const response = await axiosClient.post('/task', task);
    return response;
}

export const getAllTask = async () => {
    const response = await axiosClient.get<ITask[]>("/task");
    return response;
}

export const deleteTask = async (id: number) => {
    const response = await axiosClient.delete(`/task/${id}`)
    return response
}