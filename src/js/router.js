import { Router, Route, hashHistory,useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import ReactDOM from 'react-dom';
import React from 'react';

import HomePage from './app.js'
import Incidents from './components/incidents.js'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const routes = [{
    path: '/',
    component: HomePage
},{path: '/incident',
    component: Incidents}];

ReactDOM.render(<Router history={appHistory}>{routes}</Router>, document.getElementById('app'));