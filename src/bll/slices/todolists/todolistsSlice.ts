import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'todolists',
    initialState: [] as TodoListsType[],
    reducers: {
        changeTodolistFilter(state, action: PayloadAction<{ id: string, filter: FilterValuesType }>) {
            const index = state.findIndex(tl => tl.id === action.payload.id)
            state[index].filter = action.payload.filter
        },
        changeTodolistEntityStatus(state, action: PayloadAction<{ id: string, status: RequestStatusType }>) {
            const index = state.findIndex(tl => tl.id === action.payload.id)
            state[index].entityStatus = action.payload.status
        }
    }
});

export const {changeTodolistFilter, changeTodolistEntityStatus} = slice.actions

export type TodoListsType = {
    id: string
    title: string
    addedDate: string
    order: number
    filter: FilterValuesType
    entityStatus: RequestStatusType
};

export type FilterValuesType = 'all' | 'active' | 'completed';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';