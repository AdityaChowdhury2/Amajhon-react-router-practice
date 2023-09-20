import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const MainLayout = () => {
	return (
		<>
			<section className="flex justify-between px-10 shadow-md py-7 max-w-screen-xl mx-auto">
				<div>
					<h1>Amajhon</h1>
				</div>
				<nav>
					<ul className="flex gap-5">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/products">Products</a>
						</li>
						<li>
							<a href="/dashboard">Dashboard</a>
						</li>
					</ul>
				</nav>
			</section>
			<div className="min-h-screen max-w-screen-xl mx-auto">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default MainLayout;
