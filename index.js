/**
 *
 * Create function that enable to break down code in smaller chunks,
 * each of which performs a particular task
 * This function avoid having to type doucment.getElementBy over and over again
 *
 */

const selectElement = (selector) => {
	const elemnet = document.querySelector(selector);
	if (elemnet) {
		return elemnet;
	}
	throw new Error(
		`Double check your ${selector} selector and make sure it\`s typed correctly.`
	);
};

const sideMenu = selectElement('aside');
const menuBtn = selectElement('#menu-btn');
const closeBtn = selectElement('#close-btn');
const themeToggler = selectElement('.theme-toggler');

//show sidebar
menuBtn.addEventListener('click', () => {
	sideMenu.style.display = 'block';
});

//close sidebar
closeBtn.addEventListener('click', () => {
	sideMenu.style.display = 'none';
});

//change theme color
themeToggler.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme-variables');

	selectElement('.theme-toggler span:nth-child(1)').classList.toggle('active');
	selectElement('.theme-toggler span:nth-child(2)').classList.toggle('active');
});

//fill Order in table
Orders.forEach((order) => {
	const tr = document.createElement('tr');
	const trContent = ` <tr>
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class=${
															order.shipping === 'Declined'
																? 'danger'
																: order.shipping === 'Pending'
																? 'warning'
																: 'primary'
														}
                            >
                            ${order.shipping}</td>
                            <td class="primary">Details</td>
                        </tr>`;
	tr.innerHTML = trContent;
	selectElement('table tbody').appendChild(tr);
});

//aside select style
$(document).ready(function () {
	$('.sidebar a').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
});

//Past Updates
Updates.forEach((update) => {
	const div = document.createElement('div');
	div.className = 'update';
	const divContent = `
		<div class="profile-photo">
			<img src=${update.img}>
		</div>
		<div class="message">
			<p><b>${update.fullName}</b> recive order of ${update.order}</p>
			<small class="text-muted">2 minutes ago</small>
		</div>`;
	div.innerHTML = divContent;
	selectElement('.recent-updates .updates').appendChild(div);
});
