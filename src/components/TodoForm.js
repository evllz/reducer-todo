import React, { useState, useReducer } from 'react';
import { TextField, Button, FormControl, FormGroup } from '@material-ui/core';
import 'fontsource-roboto';

const TodoForm = (props) => {
	const [task, setTask] = useState('');

	const handleChange = (event) => {
		setTask(event.target.value);
	};

	return (
		<FormControl style={{ width: '100%' }}>
			<FormGroup>
				<TextField
					fullWidth
					style={{ margin: '5px' }}
					label="What's next?"
					variant='outlined'
					name='task'
					onChange={handleChange}
					value={task}
				/>
			</FormGroup>
			<Button
				variant='contained'
				color='primary'
				style={{ width: '25%', marginLeft: '37.5%' }}
				onClick={() => {
					props.dispatch({
						type: props.ADD_TODO,
						payload: {
							name: task,
							completed: false,
							id: Date.now(),
						},
					});
				}}
			>
				Add
			</Button>
		</FormControl>
	);
};

export default TodoForm;
