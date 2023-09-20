import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';

import myCreatedRoute from './Routes/Routes';

// const myCreatedRouter = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <div>This is my First route home</div>,
// 	},
// 	{
// 		path: '/products',
// 		element: <div>This is my Second route product Route</div>,
// 	},
// 	{
// 		path: '/about',
// 		element: <div>About routed hitted</div>,
// 	},
// ]);
// const myCreatedRouter = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <MainLayout />,
// 		children: [
// 			{
// 				path: '/',
// 				element: <Home />,
// 			},
// 			{
// 				path: '/products',
// 				element: <Products />,
// 			},
// 		],
// 	},
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={myCreatedRoute} />
	</React.StrictMode>
);
