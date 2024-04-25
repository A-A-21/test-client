import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import './index.css';
import { store } from './redux/store/store.ts';
import { router } from './router/index.tsx';
// import { store } from './toolkit/store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		{/* <CitiesContextProvider> */}
		<RouterProvider router={router} />
		{/* </CitiesContextProvider> */}
	</Provider>
);
