import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider } from './components/Context';

import Navigation from './components/Navigation';
import ContactList from './components/ContactList';

import P404 from './components/404';
import About from './components/About';
import Constructor from './components/Constructor';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './main.css';

class App extends Component {
  render() {
    return (
	<Provider>
		<Router>
			<div className='app'>
				<Navigation />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={ContactList}/>
						<Route exact path='/contact/add' component={Constructor}/>
						<Route exact path='/about' component={About}/>
						<Route component={P404}/>
					</Switch>
				</div>
			</div>
		</Router>
	</Provider>
    );
  }
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);
