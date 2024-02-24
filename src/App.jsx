import React from 'react';
import {
	RouterProvider,
	createBrowserRouter,
	Navigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './styles/main.scss';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Login from './pages/Login';
import { authAction } from './redux/api/authApi';

const App = () => {
	const userdata = useSelector(state => state.auth.userdata);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(authAction());
	}, []);
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: 'login',
					element: userdata ? <Navigate to={'/'} /> : <Login />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
