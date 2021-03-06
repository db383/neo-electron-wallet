import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import CreateWallet from './components/CreateWallet';
import Send from './components/Send';
import Dashboard from './containers/Dashboard';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Login} />
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/create" component={CreateWallet} />
		<Route path="/send" component={Send} />
	</Route>
);
