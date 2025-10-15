import { Router } from "express";
import { createProduct, getAllProducts, getProduct, getProductByCategory } from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/create").post(
    upload.single("image"),
    createProduct
);
router.route("/:id").get(
    getProduct
);
router.route("/").get(
    getAllProducts
);
router.route("/category/:category").get(
    getProductByCategory
)

export default router;