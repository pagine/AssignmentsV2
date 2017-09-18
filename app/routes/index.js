import initClientRoutes from './clientRoute';

export default function initRoutes(app) {
	app.use('/clients', initClientRoutes());
}
