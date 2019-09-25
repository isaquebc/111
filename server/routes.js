import PageController from '../src/controllers/pageController';

const routes = (app) => {

	app.get('/', new PageController().index);
	app.get('/sobre', new PageController().about);

};

export default routes;