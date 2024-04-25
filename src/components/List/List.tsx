import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { TypeEnum } from '../../shared/types/types';

const List = () => {
	const todos = useSelector((store: RootState) => store.todos);

	const dispatch = useDispatch();

	useEffect(() => {
		// const storageData = localStorage.getItem('todos');

		// if (storageData) {
		// 	const todos = JSON.parse(storageData);
		// 	dispatch({ type: TypeEnum.fillTodos, payload: todos });
		// } else {
		fetch('http://31.129.49.56:8080/todos')
			.then(res => res.json())
			.then(data => {
				dispatch({ type: TypeEnum.fillTodos, payload: data });
				localStorage.setItem('todos', JSON.stringify(data));
			});
		// }
	}, []);

	return (
		<div>
			{todos?.map((todo, index) => (
				<div key={todo.uuid}>
					{index + 1}
					<div>{todo.title}</div>
				</div>
			))}
		</div>
	);
};

export default List;
