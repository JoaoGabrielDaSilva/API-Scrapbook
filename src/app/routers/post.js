import { Router } from 'express';
import PostsController from '../controllers/PostsController';

const routes = new Router();

routes.get('/posts', PostsController.index);
routes.get('/posts/:uid', PostsController.show);
routes.post('/posts', PostsController.store);
routes.put('/posts/:uid', PostsController.update);
routes.delete('/posts/:uid', PostsController.delete);

export default routes;
