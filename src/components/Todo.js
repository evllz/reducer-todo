import React from 'react';
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';
import { TOGGLE_TASK } from '../reducer/formReducer';

export default function Todo(props) {
	return (
		<Typography
			onClick={() => {
				props.dispatch({ type: TOGGLE_TASK, payload: props.task.id });
			}}
		>
			{props.task.name}
		</Typography>
	);
}
