import express from "express";
import { Post } from "../models/noSql/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

export default router;