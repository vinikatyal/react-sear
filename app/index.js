import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' 
import { Router, hashHistory } from 'react-router'

import routes from './routes'
import store from './store'

const app = document.getElementById('root')


ReactDOM.render(
	<Provider store={store}>
    <Router history={hashHistory}  routes={routes} />             
	</Provider>
  , app
)
