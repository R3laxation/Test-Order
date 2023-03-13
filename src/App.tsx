import React from 'react';
import {Main} from './pages/main/Main';
import {AppBar, Container, IconButton, Menu, Toolbar, Typography} from "@mui/material";
import {Route} from "react-router-dom";


function App() {
    return (
        <div className="App">
            {/*<ErrorSnackbar/>*/}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Todolist
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Main/>
            </Container>
        </div>
    );
}

export default App;
