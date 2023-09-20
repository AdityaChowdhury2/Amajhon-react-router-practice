import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

const myCreatedRouter = createBrowserRouter([
	{
		path: '/',
		element: <div>This is my First route home</div>,
	},
	{
		path: '/products',
		element: <div>This is my Second route product Route</div>,
	},
	{
		path: '/about',
		element: <div>About routed hitted</div>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={myCreatedRouter} />
	</React.StrictMode>
);
