import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectMongo } from "./config/mongo.js";
import { connectSQL } from "./config/sql.js";

import usersRouter from "./routes/users.js";
import postsRouter from "./routes/posts.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Подключение к двум БД
connectMongo();
connectSQL();

// Роутеры
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);

export default app;