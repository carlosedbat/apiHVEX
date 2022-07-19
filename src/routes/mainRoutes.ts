import {Router} from 'express';
import * as User from '../controllers/user.controller';
import * as Product from '../controllers/product.controller';
import * as Category from '../controllers/category.controller';
import * as Order from '../controllers/order.controller';
import {Auth} from '../middlewares/Auth';

const router = Router();

router.post('/register',User.register)

router.post('/login',User.login)

router.get('/products',Auth.private,Product.getProducts)

router.get('/products/:category',Auth.private, Product.productByCategory)

router.get('/products/:category/:filter',Auth.private,Product.productByCategory)

router.get('/product/:id',Auth.private, Product.produtoById)

router.get('/categories',Auth.private, Category.categories)

router.get('/categories/all',Auth.private, Category.allCategories)

router.post('/neworder',Auth.private,Order.newOrder)

router.post('/orders',Auth.private, Order.Pedido)

export default router;