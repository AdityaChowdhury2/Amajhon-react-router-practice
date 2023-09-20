import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<section>
			<div className="shadow-lg py-5">This is a fixed Item</div>
			<Outlet />
		</section>
	);
};

export default MainLayout;
