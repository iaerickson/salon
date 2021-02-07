import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<Link className='navbar-brand' to='/'>
				Salon Ultra
			</Link>
			<div>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Link
							to='/gallery'
							className={
								window.location.pathname === "/gallery"
									? "nav-link active"
									: "nav-link"
							}
						>
							Gallery
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='/schedule'
							className={
								window.location.pathname === "/schedule"
									? "nav-link active"
									: "nav-link"
							}
						>
							Schedule an Appointment
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='/store'
							className={
								window.location.pathname === "/store"
									? "nav-link active"
									: "nav-link"
							}
						>
							Store
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='/login'
							className={
								window.location.pathname === "/login"
									? "nav-link active"
									: "nav-link"
							}
						>
							Login
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
