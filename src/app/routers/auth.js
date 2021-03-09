import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const routes = new Router();

routes.post('/login', AuthController.login);

export default routes;
