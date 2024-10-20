// express conf
import express from "express";

const app = express();

// middleware
app.use(express.json()); // parse json

export default app;
