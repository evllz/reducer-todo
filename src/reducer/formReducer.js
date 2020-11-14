export const ADD_TODO = 'ADD_TODO';
export const CLEAR_TASKS = 'CLEAR_TASKS';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const initialState = {
	tasks: [],
};

export const formReducer = (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};
		case CLEAR_TASKS:
			return {
				...state,
				tasks: state.tasks.filter((task) => !task.completed),
			};
		case TOGGLE_TASK:
			return {
				...state,
				tasks: state.tasks.map((task) => {
					if (task.id == action.payload) {
						return {
							...task,
							completed: !task.completed,
						};
					}
				}),
			};
		default:
			return state;
	}
};
