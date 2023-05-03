import { Router } from "express";
const router = Router();
import { getProducts , createProduct , deleteProduct , getProductById , updateProduct } from "../controller/controller.js"

router.get("/products" , getProducts);
router.get("/getProductById/:id" , getProductById);
router.post("/products" , createProduct);
router.delete("/deleteProduct/:id" , deleteProduct)
router.put("/updateProducts/:id" , updateProduct)

export default router;