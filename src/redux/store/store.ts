import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { initState } from '../initState';
import { rootReducer } from '../reducers/root.reducer';

export const store = createStore(
	rootReducer,
	initState(),
	composeWithDevTools()
);

export type RootState = ReturnType<typeof store.getState>;
export type initState = typeof store.dispatch;
