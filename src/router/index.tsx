import { createBrowserRouter } from 'react-router-dom';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import Main from '../components/Main/Main'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/form',
		element: <Form />,
	},
	{
		path: '/list',
		element: <List />,
	},
]);
