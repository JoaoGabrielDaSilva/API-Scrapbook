import { Router } from 'express';
import ClientController from '../controllers/ClientController';

const routes = new Router();

routes.post('/clients', ClientController.store);

export default routes;
