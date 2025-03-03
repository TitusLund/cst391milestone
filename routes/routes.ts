import { Router } from 'express';
import * as productsController from '../controllers/productsController';
import * as userController from '../controllers/userController';
import * as authController from '../controllers/authController';
import * as cartController from '../controllers/cartController';

const router = Router();

router.route("/").get(productsController.allProducts);
router.route("/products/search/:productId").get(productsController.getProductById);
router.route("/products/filter").get(productsController.getProductsWithFilters);
router.route("/products/createProduct").post(productsController.createProduct);
router.route("/products/update/:productId").put(productsController.updateProduct);
router.route("/products/delete/:productId").delete(productsController.deleteProduct);

router.route("/user/create").post(userController.createUser);
router.route("/user/update/:userId").put(userController.modifyUser);
router.route("/user/delete/:userId").delete(userController.deleteUser);
router.route("/login").post(authController.loginUser);
router.route("/logout").post(authController.logoutUser);
router.route("/user/search/:username").get(userController.getUserByUsername);

router.route("/cart").get(cartController.getCart);
router.route("/cart/add/:productId").post(cartController.addToCart);
router.route("/cart/remove/:productId").delete(cartController.removeFromCart);
router.route("/checkout").post(cartController.checkout);

export default router;