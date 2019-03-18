import React, { Component } from 'react';
import { Consumer } from './Context';
import uuidv4 from 'uuid/v4';
import FormGroup from './FormGroup';

class Constructor extends Component{
	state = {
		name: '',
		email: '',
		phone: ''
	};

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

    onFormSubmit = (dispatch, contact, event) => {
		event.preventDefault();

		console.log(contact);
	
		if(this.check()){
			const post = {
				method: 'POST',
				body: JSON.stringify(contact),
				headers: {'Content-Type': 'application/json'}
			};

			fetch('https://jsonplaceholder.typicode.com/users', post )
			.then( response => response.json())
			.then( response => {
				const action = { type: 'CREATE_CONTACT', payload: response };
				
				dispatch(action);
			
				this.clear();
				this.props.history.push('/');	
			})
			.catch( error => console.error(error) );
			
		}
	};

	check = () => {
		let good = true;

		let name = document.getElementById('name');		
		let email = document.getElementById('email');		
		let phone = document.getElementById('phone');

		let fields = [name, email, phone];
		
		fields.forEach( field => {
			if (field.value.length === 0){
				field.classList.add('is-invalid');
				good = false;
			}
			else{
				field.classList.remove('is-invalid');
			}
		});

		return good;
	};

	clear = () => {
		this.setState({
			name: '',
			email: '',
			phone: ''
		});
	};

	render(){
		const {name, email, phone} = this.state;
		
		return (
			<Consumer>
				{
					value => {
						const { dispatch } = value;

						return (
							<div className='card mt-3 mb-3'>
								<span className='card-header'> New Contact </span>
								<form
									className='card-body'
									onSubmit={ this.onFormSubmit.bind(this, dispatch, this.state) }
								>
									<FormGroup
										 id='name'
										 label='Name'
										 value={name}
										 name='name'
										 placeholder='Enter name...'
										 onChange={this.onChange}
										 error='Name is required'
								 	 />

									<FormGroup
										id='email'
										label='Email'
										type='email'
										value={email}
										name='email'
										placeholder='Enter email...'
										onChange={this.onChange}
										error='Email is required'
									/>	
									
									<FormGroup
										id='phone'
										label='Phone'
										type='tel'
										pattern='\d{8}'
										value={phone}
										name='phone'
										placeholder='Enter phone...'
										onChange={this.onChange}
										error='Phone is required'
									/>

									<input
										className='btn btn-light btn-block'
										type='submit' 
										value='Submit'
									 />
								</form>
							</div>
						);
					}
				}	
			</Consumer>
		);
	}
}

export default Constructor;
