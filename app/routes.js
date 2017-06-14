import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import Product from "./containers/product/ProductContainer"

export default (
	<Route path="/">
        <IndexRoute component={Product}/>
		<Route path="products" component={Product} />
	</Route>
)
			