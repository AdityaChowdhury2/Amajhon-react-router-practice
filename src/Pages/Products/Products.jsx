// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
	const { products } = useLoaderData();
	// const [products, setProducts] = useState();
	// useEffect(() => {
	// 	fetch('https://dummyjson.com/products')
	// 		.then(res => res.json())
	// 		.then(data => setProducts(data.products));
	// }, []);
	console.log(products);

	return (
		<div className="grid grid-cols-3 gap-3">
			{products?.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Products;
