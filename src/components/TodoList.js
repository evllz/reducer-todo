import React, { useReducer } from 'react';
import Todo from './Todo';
import { Box, Button, Card, CardContent } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import 'fontsource-roboto';

export default function TodoList(props) {
	return (
		<Box>
			{props.tasks.map((task) => {
				return (
					<Card
						style={{
							margin: '5px',
						}}
						key={task.id}
					>
						<CardContent>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									flexDirection: 'row',
								}}
							>
								<Todo
									task={task}
									dispatch={props.dispatch}
									TOGGLE_TASK={props.TOGGLE_TASK}
								/>
								{task.completed ? <CheckCircleIcon /> : null}
							</div>
						</CardContent>
					</Card>
				);
			})}
			<Button
				variant='contained'
				color='primary'
				style={{ width: '25%', marginLeft: '37.5%', marginTop: '5px' }}
				onClick={() => {
					props.dispatch({
						type: props.CLEAR_TASKS,
					});
				}}
			>
				Clear completed tasks
			</Button>
		</Box>
	);
}
