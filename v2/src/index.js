import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory} from 'react-router'
import App from './modules/App'
import Dashboard from './modules/Dashboard'
import NoMatch from './modules/NoMatch'

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
    	<Route path='dashboard' component={Dashboard}/>
    	<Route path='*' component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'))