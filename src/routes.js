import React from 'react';
import { Router, Route, browserHistory, historyLocation } from 'react-router';

import Home from './containers/home';
import About from './containers/about';

export default () => {

	return (
		<Router history={browserHistory}>
			<Route path="/" component={Home} />
			<Route path="/sobre" component={About} />
		</Router>
	);
};