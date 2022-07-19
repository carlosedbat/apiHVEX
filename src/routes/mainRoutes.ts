import {Request, Response, Router} from 'express';
import * as Loged from '../controllers/loged.controller';
import * as UnLoged from '../controllers/unloged.controller';
import {Auth} from '../middlewares/Auth'
const router = Router();

router.post('/register',UnLoged.register)

router.post('/login',UnLoged.login)

router.get('/products',Auth.private,Loged.getProducts)

router.get('/products/:category',Auth.private, Loged.productByCategory)

router.get('/products/:category/:filter',Auth.private,Loged.productByCategory)

router.get('/product/:id',Auth.private, Loged.produtoById)

router.get('/categories',Auth.private, Loged.categories)

router.get('/categories/all',Auth.private, Loged.allCategories)

router.post('/neworder',Auth.private,Loged.newOrder)

router.post('/orders',Auth.private, Loged.Pedido)

export default router;