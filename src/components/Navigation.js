import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navigation extends Component{
	render(){
		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-danger sticky-top'>
				<a className='navbar-brand text-white' href='#'>Contact Manager</a>

				<button
					 className='navbar-toggler'
					 type='button'
					 data-toggle='collapse'
					 data-target='#navigator'
					 aria-controls='navs'
					 aria-expanded='false'
				 >
					<span className='navbar-toggler-icon'></span>
				</button> 

				<div className='collapse navbar-collapse' id='navigator'>
					<div className='navbar-nav ml-auto'>
						<Link
							className='nav-item nav-link text-center text-white'
							to='/'
						>
							<i className='fas fa-home'></i> Home
						</Link>
						<Link
							className='nav-item nav-link text-center text-white'
							to='/contact/add'
						>
							<i className='fas fa-plus'></i> Add
						</Link>	
						<Link
							className='nav-item nav-link text-center text-white'
							to='/about'
						>
							<i className='fas fa-question'></i> About
						</Link>	
					</div>
				</div>

			</nav>
		);
	}
}

export default Navigation;
