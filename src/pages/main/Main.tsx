import Grid from '@mui/material/Grid/Grid';
import React from 'react';

export const Main = () => {



    return (
        <>
            <Grid container style={{padding: '20px'}}>
                <AddItemForm addItem={addTodolistCallback}/>
            </Grid>
            <Grid container spacing={3} style={{flexWrap: 'nowrap', overflowX: 'scroll'}}>
                {
                    todolists.map(tl => {
                        let allTodolistTasks = tasks[tl.id]

                        return <Grid item key={tl.id}>
                            <div style={{width: '300px'}}>
                                <Todolist
                                    todolist={tl}
                                    tasks={allTodolistTasks}
                                    demo={demo}
                                />
                            </div>
                        </Grid>
                    })
                }
            </Grid>
        </>
    );
};

