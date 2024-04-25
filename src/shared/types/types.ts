export enum TypeEnum {
	addTodo = 'ADD_TODO',
	removeTodo = 'REMOVE_TODO',
	fillTodos = 'FILL_TODOS',
}

export type TodoType = {
	uuid: string;
	title: string;
};

export type TodoAction = {
	type: TypeEnum;
	payload: string | TodoType;
};
