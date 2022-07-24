import './index.css';
import profilePhoto from '../../images/profile-1.jpg';
import prof2 from '../../images/profile-2.jpg';

const Right = () => {
	return (
		<div className='right'>
			<div className='top'>
				<button id='menu-btn'>
					<span className='material-icons-sharp'>menu</span>
				</button>
				<div className='theme-toggler'>
					<span className='material-icons-sharp active'>wb_sunny</span>
					<span className='material-icons-sharp'>dark_mode</span>
				</div>
				<div className='profile'>
					<div className='info'>
						<p>
							Hey, <b>Andriy</b>
						</p>
						<small className='text-muted'>Admin</small>
					</div>
					<div className='profile-photo'>
						<img src={profilePhoto} alt='profile photo' />
					</div>
				</div>
			</div>

			<div className='recent-updates'>
				<h2>Recent Updates</h2>
				<div className='updates'>
					<div className='update'>
						<div className='profile-photo'>
							<img src={prof2} alt='profile photo' />
						</div>
						<div className='message'>
							<p>
								<b>Mike Tyson</b> recive his order of DJI drone
							</p>
							<small className='text-muted'>2 minutes ago</small>
						</div>
					</div>
				</div>
			</div>

			<div className='sales-analytics'>
				<h2>Sales Analytics</h2>
				<div className='item online'>
					<div className='icon'>
						<span className='material-icons-sharp'>shopping_cart</span>
					</div>
					<div className='right'>
						<div className='info'>
							<h3>ONLINE ORDERS</h3>
							<small className='text-muted'>Last 24 Hours</small>
						</div>
						<h5 className='success'>+39%</h5>
						<h3>3849</h3>
					</div>
				</div>

				<div className='item offline'>
					<div className='icon'>
						<span className='material-icons-sharp'>shopping_bag</span>
					</div>
					<div className='right'>
						<div className='info'>
							<h3>OFFLINE ORDERS</h3>
							<small className='text-muted'>Last 24 Hours</small>
						</div>
						<h5 className='danger'>-17%</h5>
						<h3>1100</h3>
					</div>
				</div>

				<div className='item customers'>
					<div className='icon'>
						<span className='material-icons-sharp'>person</span>
					</div>
					<div className='right'>
						<div className='info'>
							<h3>NEW CUSTOMERS</h3>
							<small className='text-muted'>Last 24 Hours</small>
						</div>
						<h5 className='success'>+25%</h5>
						<h3>849</h3>
					</div>
				</div>

				<div className='item add-product'>
					<div>
						<span className='material-icons-sharp'>add</span>
						<h3>Add Product</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Right;
