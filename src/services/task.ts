import { axiosClient } from "./axios";

export interface ITask {
    iD: number
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    title: string;
    isComplete: boolean;
}

export interface IPaginationResponse {
    tasks: ITask[],
    totalRecords: number,
    totalPages: number
}
export const createTask = async (task: Pick<ITask, "title">) => {
    const response = await axiosClient.post('/task', task);
    return response;
}

export const getAllTask = async (page: number) => {
    const response = await axiosClient.get<IPaginationResponse>(`/task?page=${page}`);
    return response;
}

export const deleteTask = async (id: number) => {
    const response = await axiosClient.delete(`/task/${id}`)
    return response
}

export const updateTask = async (id: number, updateTask: ITask) => {
    const response = await axiosClient.patch(`/task/${id}`, updateTask)
    return response
}