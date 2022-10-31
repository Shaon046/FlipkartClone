import express from "express";
import { userSignup, userlogin } from "../controller/user-controller.js";
import { getProduct ,getProducById} from "../controller/product.controller.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userlogin);

router.get('/products',getProduct);
router.get('/product/:id',getProducById);

export default router;
