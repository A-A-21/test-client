import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TodoType, TypeEnum } from '../../shared/types/types';

const Form = () => {
	const [inputValue, setInputValue] = useState<string>('');

	const dispatch = useDispatch();

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();

		const newTodo: TodoType = {
			uuid: `${Math.ceil(Math.random() * 1000)}-my-super-uuid`,
			title: inputValue,
		};
		const res = await fetch('http://31.129.49.56:8080/todo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newTodo),
		});
		if (res.ok) {
			dispatch({ type: TypeEnum.addTodo, payload: newTodo });
		} else {
			alert('ERROR IN BACK');
		}
		setInputValue('');
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					value={inputValue}
					placeholder='new todo'
					onChange={e => setInputValue(e.target.value)}
				/>
				<button type='submit'>SAVE</button>
			</form>
		</div>
	);
};

export default Form;
