import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from '../containers/home';
import About from '../containers/about';
import Reducers from '../reducers/index';

export default class PageController {

	index(request, response) {
		const store = createStore(Reducers);
		
		const html = ReactDOMServer.renderToString(<Provider store={store}><Home /></Provider>);
		const data = {
			html,
			seo: {
				title: '111',
				description: ''
			}
		};

		response.render('index', { data });
	
	}

	about(request, response) {
		const store = createStore(Reducers);

		const html = ReactDOMServer.renderToString(<Provider store={store}><About /></Provider>);
		const data = {
			seo: {
				title: 'Sobre |111',
				description: ''
			}
		};

		response.render('index', { data });

	}

}