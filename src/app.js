// express conf
import express from "express";

// routes
import ordersRoutes from "./routes/orders.routes.js";

const app = express();

// middleware
app.use(express.json()); // parse json

// routes
app.use(ordersRoutes);

export default app;
