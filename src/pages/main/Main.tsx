import Grid from '@mui/material/Grid/Grid';
import React, {useCallback} from 'react';
import { useSelector } from 'react-redux';
import {AddItemForm, AddItemFormSubmitHelperType} from '../../components/addItemForm/AddItemForm';
import {AppRootStateType} from "../../bll/store";
import { TodolistType } from '../../bll/slices/todolists/todolistsSlice';
import {Todolist} from "./todolist/Todolist";
import {TasksStateType} from "../../bll/slices/tasks/tasksSlice";

export const Main = () => {

    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists);
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks);

    const addTodolistCallback = useCallback(async (title: string, helper: AddItemFormSubmitHelperType) => {
        // let thunk = todolistsActions.addTodolistTC(title)
        // const resultAction = await dispatch(thunk)
        //
        // if (todolistsActions.addTodolistTC.rejected.match(resultAction)) {
        //     if (resultAction.payload?.errors?.length) {
        //         const errorMessage = resultAction.payload?.errors[0]
        //         helper.setError(errorMessage)
        //     } else {
        //         helper.setError('Some error occured')
        //     }
        // } else {
        //     helper.setTitle('')
        // }
    }, [])


    return (
        <>
            <Grid container style={{padding: '20px'}}>
                <AddItemForm addItem={addTodolistCallback}/>
            </Grid>
            <Grid container spacing={3} style={{flexWrap: 'nowrap'}}>
                {
                    todolists.map(tl => {
                        let allTodolistTasks = tasks[tl.id]
                        return <Grid item key={tl.id}>
                            <div style={{width: '300px'}}>
                                <Todolist
                                    todolist={tl}
                                    tasks={allTodolistTasks}
                                />
                            </div>
                        </Grid>
                    })
                }
            </Grid>
        </>
    );
};

