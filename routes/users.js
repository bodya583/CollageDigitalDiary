import express from "express";
import { User } from "../models/sql/user.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

export default router;