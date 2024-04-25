import { TodoAction, TypeEnum } from '../../shared/types/types';
import { initState } from '../initState';

export const todosReducer = (state = initState().todos, action: TodoAction) => {
	const { type, payload } = action;

	switch (type) {
		case TypeEnum.addTodo:
			return [...state, payload];
		case TypeEnum.fillTodos:
			return payload;
		default:
			return state;
	}
};
