import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Container, Box, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import {
	initialState,
	formReducer,
	CLEAR_TASKS,
	ADD_TODO,
	TOGGLE_TASK,
} from './reducer/formReducer';
const App = () => {
	const [state, dispatch] = useReducer(formReducer, initialState);

	return (
		<Container>
			<Typography variant='h2' align='center'>
				Let's get everything done!
			</Typography>
			<Box style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
				<TodoForm dispatch={dispatch} ADD_TODO={ADD_TODO} />
			</Box>
			<Box>
				<TodoList
					tasks={state.tasks}
					dispatch={dispatch}
					CLEAR_TASKS={CLEAR_TASKS}
					TOGGLE_TASK={TOGGLE_TASK}
				/>
			</Box>
		</Container>
	);
};

export default App;

//personal branch
