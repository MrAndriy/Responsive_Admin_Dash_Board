import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './aside.css';
import logo from '../../images/logo.png';

const Aside = () => {
	const [state, setState] = useState('');
	return (
		<aside>
			<div className='top'>
				<div className='logo'>
					<img src={logo} alt='logo' />
					<h2 className='danger'>Stickerz Shop</h2>
				</div>
				<div className='close' id='close-btn'>
					<span className='material-icons-sharp'>close</span>
				</div>
			</div>
			<div className='sidebar'>
				<NavLink to={'/'}>
					<span className='material-icons-sharp'>grid_view</span>
					<h3>Dashboard</h3>
				</NavLink>
				<NavLink to={'/Customers'}>
					<span className='material-icons-sharp'>person_outline</span>
					<h3>Customers</h3>
				</NavLink>
				<NavLink to={'/Orders'}>
					<span className='material-icons-sharp'>receipt_long </span>
					<h3>Orders</h3>
				</NavLink>
				<NavLink to={'/Analytics'}>
					<span className='material-icons-sharp'>insights</span>
					<h3>Analytics</h3>
				</NavLink>
				<NavLink to={'/Messages'}>
					<span className='material-icons-sharp'>mail_outline </span>
					<h3>Messages</h3>
					<span className='message-count'>26</span>
				</NavLink>
				<NavLink to={'/Products'}>
					<span className='material-icons-sharp'>inventory</span>
					<h3>Products</h3>
				</NavLink>
				<NavLink to={'/Reports'}>
					<span className='material-icons-sharp'>report</span>
					<h3>Reports</h3>
				</NavLink>
				<NavLink to={'/Settings'}>
					<span className='material-icons-sharp'>settings</span>
					<h3>Settings</h3>
				</NavLink>
				<NavLink to={'/Add-product'}>
					<span className='material-icons-sharp'>add</span>
					<h3>Add Product</h3>
				</NavLink>
				<NavLink to={'/Logout'}>
					<span className='material-icons-sharp'>logout</span>
					<h3>Logout</h3>
				</NavLink>
			</div>
		</aside>
	);
};

export default Aside;
