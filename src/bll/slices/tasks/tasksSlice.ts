import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: TasksStateType = {}

export const slice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

    }
});

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}
