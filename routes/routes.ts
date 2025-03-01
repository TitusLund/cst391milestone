import { Router } from 'express';
import * as productsController from '../controllers/productsController';
import * as authController from '../controllers/authController';

const router = Router();

router.route("/").get(productsController.allProducts);
router.route("/products/search/:productId").get(productsController.getProductById);
router.route("/products/filter").get(productsController.getProductsWithFilters);
router.route("/products/createProduct").post(productsController.createProduct);
router.route("/products/update/:productId").put(productsController.updateProduct);
router.route("/products/delete/:productId").delete(productsController.deleteProduct);

router.route("/user/create").post();
router.route("/user/modify").put();
router.route("/user/delete").delete();
router.route("/login").post(authController.loginUser);
router.route("/logout").post(authController.logoutUser);
router.route("/user/:userId").get();

router.route("/cart").get();
router.route("/cart/add/:productId");
router.route("/cart/remove/:productId");
router.route("/checkout").post();

export default router;