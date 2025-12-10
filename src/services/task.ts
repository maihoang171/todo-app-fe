import { axiosClient } from "./axios";

export interface ITask {
    id: number
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    name: string;
    isComplete: boolean;
}

export const createTask = async (task: Pick<ITask, "name">) => {
    const response = await axiosClient.post('/task', task);
    return response;
}

export const getAllTask = async () => {
    const response = await axiosClient.get<ITask[]>("/task");
    return response;
}