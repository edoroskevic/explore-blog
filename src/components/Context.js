import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component{
	state = {
		contacts: [],

		dispatch: action => {
			this.setState(state => reducer(state, action));
		}
	};

	componentWillMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => this.setState({contacts: data}));
	}	

    render(){
		Provider = Context.Provider;

		return (
			<Provider value={ this.state }>
				{ this.props.children }
			</Provider>
		);
	}
}


const reducer = (state, action) => {
	switch(action.type){
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter( contact => contact.id !== action.payload) 
			};
		case 'CREATE_CONTACT':
			return {
				...state,
				contacts: [
					action.payload,
					...state.contacts
				]
			};
		default:
			return state;
	}
};


export const Consumer = Context.Consumer;

