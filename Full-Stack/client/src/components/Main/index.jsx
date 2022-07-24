import './index.css';

const Main = () => {
	return (
		<main>
			<h1>Dashboard</h1>
			<div className='date'>
				<input type='date' />
			</div>
			<div className='insights'>
				<div className='sales'>
					<span className='material-icons-sharp'>analytics</span>
					<div className='middle'>
						<div className='left'>
							<h3>Total Sales</h3>
							<h1>$25,04</h1>
						</div>
						<div className='progress'>
							<svg>
								<circle cx='38' cy='38' r='36'></circle>
							</svg>
							<div className='number'>
								<p>81%</p>
							</div>
						</div>
					</div>
					<small className='text-muted'>Last 24 Hours</small>
				</div>
				<div className='expenses'>
					<span className='material-icons-sharp'>bar_chart</span>
					<div className='middle'>
						<div className='left'>
							<h3>Total Expenses</h3>
							<h1>$14,54</h1>
						</div>
						<div className='progress'>
							<svg>
								<circle cx='38' cy='38' r='36'></circle>
							</svg>
							<div className='number'>
								<p>61%</p>
							</div>
						</div>
					</div>
					<small className='text-muted'>Last 24 Hours</small>
				</div>
				<div className='income'>
					<span className='material-icons-sharp'>stacked_line_chart</span>
					<div className='middle'>
						<div className='left'>
							<h3>Total Income</h3>
							<h1>$10,774</h1>
						</div>
						<div className='progress'>
							<svg>
								<circle cx='38' cy='38' r='36'></circle>
							</svg>
							<div className='number'>
								<p>44%</p>
							</div>
						</div>
					</div>
					<small className='text-muted'>Last 24 Hours</small>
				</div>
			</div>
			<div className='recent-orders'>
				<h2>Recent Orders</h2>
				<table>
					<thead>
						<tr>
							<th>Product Name</th>
							<th>Product Number</th>
							<th>Payments</th>
							<th>Status</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Foldable Mini Drone</td>
							<td>4234234</td>
							<td>Due</td>
							<td className='warning'>Pending</td>
							<td className='primary'>Details</td>
						</tr>
					</tbody>
				</table>
				<a href='#'>Show All</a>
			</div>
		</main>
	);
};

export default Main;
