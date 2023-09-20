import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Product from '../Pages/Product/Product';

const myCreatedRoute = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/products',
				element: <Products />,
				loader: () => fetch('https://dummyjson.com/products'),
			},
			{
				path: '/product/:id',
				element: <Product />,
			},
			{
				path: '/dashboard',
				element: <div>Dashboard</div>,
			},
		],
	},
]);
export default myCreatedRoute;
