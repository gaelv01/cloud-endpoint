import { Router } from "express";
import { getOrders } from "../controllers/orders.controller.js";

const router = Router();

router.get("/orders", getOrders);

export default router;
